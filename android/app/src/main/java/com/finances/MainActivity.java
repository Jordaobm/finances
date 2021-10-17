package com.finances;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Adicione esse import
import android.os.Bundle; // Adicione esse import
import com.rnfs.RNFSPackage;

public class MainActivity extends ReactActivity {

  // Adicione esse método
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "finances";
  }
}
