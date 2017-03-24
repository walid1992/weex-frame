package com.siyuan.weex.weex.constants;

/**
 * @Author : walid
 * @Data : 2017-02-20  15:44
 * @Describe : 常量配置
 */

public class Constants {

    public static final String INDEX_URL = IpConfig.INDEX_URL;

    public static final String BUNDLE_URL = "http://h5.m.taobao.com?_wx_tpl=http://g.tbcdn.cn/weex/weex-tc/0.1.2/build/TC__Home.js";
    public static final String WEEX_SAMPLES_KEY = "?weex-samples";
    public static final String WEEX_TPL_KEY = "_wx_tpl";

    //hot refresh
    public static final int HOT_REFRESH_CONNECT = 0x111;
    public static final int HOT_REFRESH_DISCONNECT = HOT_REFRESH_CONNECT + 1;
    public static final int HOT_REFRESH_REFRESH = HOT_REFRESH_DISCONNECT + 1;
    public static final int HOT_REFRESH_CONNECT_ERROR = HOT_REFRESH_REFRESH + 1;
}
