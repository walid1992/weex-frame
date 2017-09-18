package com.alibaba.weex.commons.util;

import android.content.Context;

/**
 * Author   : budao
 * Date     : 2017-09-18  13:16
 * Describe :
 */
public class AppConfig {
  private static final String TAG = "AppConfig";
  private static AppPreferences sPreferences = new AppPreferences();

  public static void init(Context context) {
    loadAppSetting(context);
  }

  public static String getLaunchUrl() {
    if (isLaunchLocally()) {
      return sPreferences.getString("local_url", "file://assets/index.js");
    }
    return sPreferences.getString("launch_url", "http://127.0.0.1:8080/dist/index.js");
  }

  public static Boolean isLaunchLocally() {
    return sPreferences.getBoolean("launch_locally", false);
  }

  private static void loadAppSetting(Context context) {
    AppConfigXmlParser parser = new AppConfigXmlParser();
    parser.parse(context);
    sPreferences = parser.getPreferences();
  }
}
