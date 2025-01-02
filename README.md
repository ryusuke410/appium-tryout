# appium tryout

## セットアップ

コマンドプロンプトで、この README のあるフォルダに移動します。

続いて、以下のコマンドを実行してください。

```sh
npm install --frozen-lockfile
```

appium のバージョンが取得できれば成功です。

```sh
npm exec -- appium --version
```

=> 2.13.1 が表示されます

## adb コマンド

Android を操作する場合、adb コマンドが必要になります。

また adb コマンドの位置を appium に教えてあげる必要があり、 `ANDROID_HOME` という環境変数を設定する必要があります。
今回はスクリプトの中で設定しておりますので、事前の設定は不要です。

## デバイス接続

adb コマンドで、接続されているデバイスが 1 つだけであることを確認してください。

```sh
adb devices
```

=> 操作したい 1 つだけ表示される状態にしてください。
（どうしても 1 つにできない場合は、 `handle-youtube.ts` の中のデバイス名を編集する必要があります。）

## サーバーの起動

まずは 1 つ目のコマンドプロンプトを開き、以下のコマンドでサーバーを起動してください。

```sh
npm run run-server
```

## Youtube の操作

2 つ目のコマンドプロンプトを開き、以下のコマンドを実行すると、デバイスが自動操作されます。

```sh
npm run handle-youtube
```

## 実際の操作コードを書いていく際の便利ツール

Appium Inspector で、どの要素を操作すべきか調べることができます。

https://inspector.appiumpro.com/
