package com.siyuan.weex.ui.page;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.PixelFormat;
import android.graphics.Rect;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.annotation.NonNull;
import android.support.v7.app.AlertDialog;
import android.text.TextUtils;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.siyuan.weex.R;
import com.siyuan.weex.weex.WXAnalyzerDelegate;
import com.siyuan.weex.weex.constants.Constants;
import com.siyuan.weex.weex.https.HotRefreshManager;
import com.siyuan.weex.weex.https.WXHttpManager;
import com.siyuan.weex.weex.https.WXHttpTask;
import com.siyuan.weex.weex.https.WXRequestListener;
import com.taobao.weex.RenderContainer;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.appfram.navigator.IActivityNavBarSetter;
import com.taobao.weex.common.IWXDebugProxy;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.ui.component.NestedContainer;
import com.taobao.weex.utils.WXFileUtils;
import com.taobao.weex.utils.WXLogUtils;

import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;

/**
 * @Author : walid
 * @Data : 2017-02-20  15:27
 * @Describe : Weex 界面
 */

public class WxPageActivity extends WXBaseActivity implements Handler.Callback, WXSDKInstance.NestedInstanceInterceptor {

    private static final String TAG = "WXPageActivity";
    public static final String WXPAGE = "wxpage";
    public static Activity wxPageActivityInstance;
    private ViewGroup mContainer;
    private ProgressBar mProgressBar;
    private WXSDKInstance mInstance;
    private Handler mWXHandler;
    private BroadcastReceiver mReceiver;
    private Uri mUri;
    private HashMap<String, Object> mConfigMap = new HashMap<>();

    @Override
    public void onCreateNestInstance(WXSDKInstance instance, NestedContainer container) {
        Log.d(TAG, "Nested Instance created.");
    }

    private WXAnalyzerDelegate mWxAnalyzerDelegate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_wxpage);
        Log.i(TAG, "onCreate" );
        setCurrentWxPageActivity(this);
        WXSDKEngine.setActivityNavBarSetter(new NavigatorAdapter());
        getWindow().setFormat(PixelFormat.TRANSLUCENT);
        mUri = getIntent().getData();
        Bundle bundle = getIntent().getExtras();
        if (mUri == null && bundle == null) {
            mUri = Uri.parse(Constants.BUNDLE_URL + Constants.WEEX_SAMPLES_KEY);
        }
        if (bundle != null) {
            String bundleUrl = bundle.getString("bundleUrl");
            Log.i(TAG, "bundleUrl==" + bundleUrl);
            if (bundleUrl != null) {
                mConfigMap.put("bundleUrl", bundleUrl + Constants.WEEX_SAMPLES_KEY);
                mUri = Uri.parse(bundleUrl + Constants.WEEX_SAMPLES_KEY);
            }
        } else {
            mConfigMap.put("bundleUrl", mUri.toString() + Constants.WEEX_SAMPLES_KEY);
        }

        if (mUri == null) {
            Toast.makeText(this, "the uri is empty!", Toast.LENGTH_SHORT).show();
            finish();
            return;
        }

        initUIAndData();

        if (WXPAGE.equals(mUri.getScheme())) {
            mUri = mUri.buildUpon().scheme("http").build();
            loadWXfromService(mUri.toString());
            startHotRefresh();
        } else if (TextUtils.equals("http", mUri.getScheme()) || TextUtils.equals("https", mUri.getScheme())) {
            // if url has key "_wx_tpl" then get weex bundle js
            String weexTpl = mUri.getQueryParameter(Constants.WEEX_TPL_KEY);
            String url = TextUtils.isEmpty(weexTpl) ? mUri.toString() : weexTpl;
            loadWXfromService(url);
            startHotRefresh();
        } else {
            loadWXfromLocal(false);
        }
        mInstance.onActivityCreate();
        registerBroadcastReceiver();
        mWxAnalyzerDelegate = new WXAnalyzerDelegate(this);
        mWxAnalyzerDelegate.onCreate();
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (mWxAnalyzerDelegate != null) {
            mWxAnalyzerDelegate.onStart();
        }
    }

    private void initUIAndData() {
        mContainer = (ViewGroup) findViewById(R.id.container);
        mProgressBar = (ProgressBar) findViewById(R.id.progress);
        mWXHandler = new Handler(this);
        HotRefreshManager.getInstance().setHandler(mWXHandler);
        addOnListener();
    }

    private void loadWXfromLocal(boolean reload) {
        if (reload && mInstance != null) {
            mInstance.destroy();
            mInstance = null;
        }
        if (mInstance == null) {
            RenderContainer renderContainer = new RenderContainer(this);
            mInstance = new WXSDKInstance(this);
            mInstance.setRenderContainer(renderContainer);
            mInstance.registerRenderListener(this);
            mInstance.setNestedInstanceInterceptor(this);
            mInstance.setTrackComponent(true);
        }
        mContainer.post(() -> {
            Activity ctx = WxPageActivity.this;
            Rect outRect = new Rect();
            ctx.getWindow().getDecorView().getWindowVisibleDisplayFrame(outRect);
            mConfigMap.put("bundleUrl", mUri.toString());
            String path = mUri.getScheme().equals("file") ? assembleFilePath(mUri) : mUri.toString();
            mInstance.render(TAG, WXFileUtils.loadAsset(path, WxPageActivity.this), mConfigMap, null, WXRenderStrategy.APPEND_ASYNC);
        });
    }

    private String assembleFilePath(Uri uri) {
        if (uri != null && uri.getPath() != null) {
            return uri.getPath().replaceFirst("/", "");
        }
        return "";
    }

    private void loadWXfromService(final String url) {
        mProgressBar.setVisibility(View.VISIBLE);

        if (mInstance != null) {
            mInstance.destroy();
        }

        RenderContainer renderContainer = new RenderContainer(this);
        mContainer.addView(renderContainer);

        mInstance = new WXSDKInstance(this);
        mInstance.setRenderContainer(renderContainer);
        mInstance.registerRenderListener(this);
        mInstance.setNestedInstanceInterceptor(this);
        mInstance.setBundleUrl(url);
        mInstance.setTrackComponent(true);
        WXLogUtils.e("url", url);
        WXHttpTask httpTask = new WXHttpTask();
        httpTask.url = url;
        httpTask.requestListener = new WXRequestListener() {
            @Override
            public void onSuccess(WXHttpTask task) {
                WXLogUtils.d("[http:onSuccess] url:" + url);
                try {
                    mConfigMap.put("bundleUrl", url);
                    WXLogUtils.e("response", String.valueOf(task.response.data));
                    mInstance.render(TAG, new String(task.response.data, "utf-8"), mConfigMap, null, WXRenderStrategy.APPEND_ASYNC);
                    mInstance.renderByUrl(TAG, new String(task.response.data, "utf-8"), mConfigMap, null, WXRenderStrategy.APPEND_ASYNC);
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void onError(WXHttpTask task) {
                Log.i(TAG, "[http:onError]");
                mProgressBar.setVisibility(View.GONE);
                Toast.makeText(getApplicationContext(), "network error!", Toast.LENGTH_SHORT).show();
            }
        };
        WXHttpManager.getInstance().sendRequest(httpTask);
    }

    private void startHotRefresh() {
        try {
            String host = new URL(mUri.toString()).getHost();
            String wsUrl = "ws://" + host + ":8082";
            mWXHandler.obtainMessage(Constants.HOT_REFRESH_CONNECT, 0, 0, wsUrl).sendToTarget();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    private void addOnListener() {

    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        return (mWxAnalyzerDelegate != null && mWxAnalyzerDelegate.onKeyUp(keyCode, event)) || super.onKeyUp(keyCode, event);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mInstance != null) {
            mInstance.onActivityResume();
        }
        if (mWxAnalyzerDelegate != null) {
            mWxAnalyzerDelegate.onResume();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mInstance != null) {
            mInstance.onActivityDestroy();
        }
        mContainer = null;
        mWXHandler.obtainMessage(Constants.HOT_REFRESH_DISCONNECT).sendToTarget();
        unregisterBroadcastReceiver();
        if (wxPageActivityInstance == this) {
            wxPageActivityInstance = null;
        }
        if (mWxAnalyzerDelegate != null) {
            mWxAnalyzerDelegate.onDestroy();
        }
    }

    public static Activity getCurrentWxPageActivity() {
        return wxPageActivityInstance;
    }

    public static void setCurrentWxPageActivity(Activity activity) {
        wxPageActivityInstance = activity;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (mInstance != null) {
            mInstance.onRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (mInstance != null) {
            mInstance.onActivityResult(requestCode, resultCode, data);
        }
    }

    @Override
    public boolean handleMessage(Message msg) {
        switch (msg.what) {
            case Constants.HOT_REFRESH_CONNECT:
                HotRefreshManager.getInstance().connect(msg.obj.toString());
                break;
            case Constants.HOT_REFRESH_DISCONNECT:
                HotRefreshManager.getInstance().disConnect();
                break;
            case Constants.HOT_REFRESH_REFRESH:
                loadWXfromService(mUri.toString());
                break;
            case Constants.HOT_REFRESH_CONNECT_ERROR:
                Toast.makeText(this, "hot refresh connect error!", Toast.LENGTH_SHORT).show();
                break;
            default:
                break;
        }
        return false;
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        WXLogUtils.d("onViewCreated");
        View wrappedView = null;
        if (mWxAnalyzerDelegate != null) {
            wrappedView = mWxAnalyzerDelegate.onWeexViewCreated(instance, view);
        }
        if (wrappedView != null) {
            view = wrappedView;
        }

        if (view.getParent() == null) {
            mContainer.addView(view);
        }
        mContainer.requestLayout();
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        if (mWxAnalyzerDelegate != null) {
            mWxAnalyzerDelegate.onWeexRenderSuccess(instance);
        }
        mProgressBar.setVisibility(View.INVISIBLE);
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
        mProgressBar.setVisibility(View.GONE);
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        if (mWxAnalyzerDelegate != null) {
            mWxAnalyzerDelegate.onException(instance, errCode, msg);
        }
        mProgressBar.setVisibility(View.GONE);
        if (!TextUtils.isEmpty(errCode) && errCode.contains("|")) {
            String[] errCodeList = errCode.split("\\|");
            String code = errCodeList[1];
            String codeType = errCode.substring(0, errCode.indexOf("|"));
            if (TextUtils.equals("1", codeType)) {
                String errMsg = "codeType:" + codeType + "\n" + " errCode:" + code + "\n" + " ErrorInfo:" + msg;
                degradeAlert(errMsg);
            } else {
                Toast.makeText(getApplicationContext(), "errCode:" + errCode + " Render ERROR:" + msg, Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void degradeAlert(String errMsg) {
        new AlertDialog.Builder(this)
                .setTitle("Downgrade success")
                .setMessage(errMsg)
                .setPositiveButton("OK", null)
                .show();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mInstance != null) {
            mInstance.onActivityPause();
        }
        if (mWxAnalyzerDelegate != null) {
            mWxAnalyzerDelegate.onPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mInstance != null) {
            mInstance.onActivityStop();
        }
        if (mWxAnalyzerDelegate != null) {
            mWxAnalyzerDelegate.onStop();
        }
    }

    private void registerBroadcastReceiver() {
        mReceiver = new RefreshBroadcastReceiver();
        IntentFilter filter = new IntentFilter();
        filter.addAction(IWXDebugProxy.ACTION_DEBUG_INSTANCE_REFRESH);
        registerReceiver(mReceiver, filter);
    }

    private void unregisterBroadcastReceiver() {
        if (mReceiver != null) {
            unregisterReceiver(mReceiver);
        }
        mReceiver = null;
    }

    private static class NavigatorAdapter implements IActivityNavBarSetter {

        @Override
        public boolean push(String param) {
            return false;
        }

        @Override
        public boolean pop(String param) {
            return false;
        }

        @Override
        public boolean setNavBarRightItem(String param) {
            return false;
        }

        @Override
        public boolean clearNavBarRightItem(String param) {
            return false;
        }

        @Override
        public boolean setNavBarLeftItem(String param) {
            return false;
        }

        @Override
        public boolean clearNavBarLeftItem(String param) {
            return false;
        }

        @Override
        public boolean setNavBarMoreItem(String param) {
            return false;
        }

        @Override
        public boolean clearNavBarMoreItem(String param) {
            return false;
        }

        @Override
        public boolean setNavBarTitle(String param) {
            return false;
        }
    }

    public class RefreshBroadcastReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (IWXDebugProxy.ACTION_DEBUG_INSTANCE_REFRESH.equals(intent.getAction())) {
                Log.v(TAG, "connect to debug server success");
                if (mUri != null) {
                    if (TextUtils.equals(mUri.getScheme(), "http") || TextUtils.equals(mUri.getScheme(), "https")) {
                        loadWXfromService(mUri.toString());
                    } else {
                        loadWXfromLocal(true);
                    }
                }
            }
        }
    }
}
