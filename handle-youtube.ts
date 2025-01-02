import { remote } from "webdriverio";

(async () => {
  const options = {
    // ==== appium v2 からは path が必要なくなりました ====
    // path: "/wd/hub",

    port: 4723,
    capabilities: {
      platformName: "Android",

      // ==== 接続中のデバイスが 1 つだけの場合はデバイス名なしでも動きます。 ====
      // "appium:deviceName": "emulator-5554",

      "appium:automationName": "UiAutomator2",
    },
  };

  try {
    const driver = await remote(options);

    console.log("YouTubeを起動しています...");
    await driver.startActivity(
      "com.google.android.youtube",
      ".HomeActivity",
      "com.google.android.youtube", // appWaitPackage
      ".HomeActivity,com.google.android.apps.youtube.app.watchwhile.InternalMainActivity" // appWaitActivity
    );

    console.log("Shortsボタンを探しています...");
    // Shorts ボタンを探す
    const shortsButton = await driver.$(
      '//android.widget.Button[@content-desc="Shorts"]'
    );

    if (shortsButton) {
      console.log("Shortsボタンをクリックします...");
      await shortsButton.click();
      console.log("Shortsボタンをクリックしました。");
    } else {
      console.error("Shortsボタンが見つかりませんでした。");
    }

    console.log("検索ボタンを探します...");
    const searchButton = driver.$("~Search");
    await searchButton.click();

    const searchField = driver.$("android.widget.EditText");
    await searchField.setValue("cute cats");

    console.log("検索を実行します...");
    await driver.pressKeyCode(66); // Enterキーを送信

    const element = driver.$('//android.view.ViewGroup[contains(@content-desc, " - play Short")]');
    await element.click();

    await driver.deleteSession();
    console.log("セッションを終了しました。");
  } catch (error) {
    console.error("エラー:", error);
  }
})();
