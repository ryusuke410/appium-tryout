import $ from "dax-sh";
import * as path from "path";
import * as os from "os";

const getStandardAndroidHome = () => {
  const platform = os.platform();

  if (platform === "win32") {
    // Windowsの場合
    const localAppData = process.env.LOCALAPPDATA;
    if (!localAppData) {
      throw new Error("LOCALAPPDATA environment variable is not defined.");
    }
    return path.join(localAppData, "Android", "Sdk");
  } else if (platform === "darwin") {
    // macOSの場合
    return path.join(os.homedir(), "Library", "Android", "sdk");
  } else {
    throw new Error(
      "Unsupported platform. This function supports only Windows and macOS."
    );
  }
};

const setupAndroidHome = () => {
  process.env.ANDROID_HOME = getStandardAndroidHome();
};

const run = async () => {
  setupAndroidHome();

  await $`appium server -ka 800 --allow-cors`
    .stdin("inherit")
    .stdout("inherit")
    .stderr("inherit");
};

run();
