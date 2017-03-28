package com.siyuan.weex.ui.page;

import android.content.Intent;
import android.os.Bundle;

import com.siyuan.weex.R;
import com.trello.rxlifecycle.android.ActivityEvent;
import com.trello.rxlifecycle.components.support.RxAppCompatActivity;

import java.util.concurrent.TimeUnit;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;

/**
 * @Author : walid
 * @Data : 2017-02-20  15:44
 * @Describe : 启动页
 */

public class SplashActivity extends RxAppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_splash);
        Observable
                .timer(2, TimeUnit.SECONDS)
                .observeOn(AndroidSchedulers.mainThread())
                .compose(bindUntilEvent(ActivityEvent.DESTROY))
                .subscribe(aLong -> {
                    Intent intent = new Intent(SplashActivity.this, WxIndexActivity.class);
                    startActivity(intent);
                    finish();
                });
    }
}
