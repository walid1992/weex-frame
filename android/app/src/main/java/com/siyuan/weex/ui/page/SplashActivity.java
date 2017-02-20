package com.siyuan.weex.ui.page;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.siyuan.weex.R;

/**
 * @Author : walid
 * @Data : 2017-02-20  15:44
 * @Describe : 启动页
 */

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_splash);
        findViewById(R.id.tv_jump).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(SplashActivity.this, WxIndexActivity.class);
                startActivity(intent);
            }
        });
    }
}
