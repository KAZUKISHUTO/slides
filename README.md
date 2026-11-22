# 授業スライド

ブラウザで動く HTML スライド（1920×1080）をまとめて公開しているリポジトリです。

- 一覧ページ: <https://kazukishuto.github.io/slides/>
- 各資料: `https://kazukishuto.github.io/slides/<フォルダ名>/`
- 特定のスライドを開く: URL の末尾に `#50` のようにスライド番号を付ける
- ローカルで見る: このフォルダで `python3 -m http.server` を実行して <http://localhost:8000/> を開く

## 構成

```text
.
├── index.html        一覧ページ（各資料へのリンク）
├── .nojekyll         GitHub Pages で _ds/ を配信するために必要（消さない）
├── react02/          React 02 カレンダーアプリ
│   ├── index.html    スライド本体
│   ├── deck-stage.js
│   ├── support.js
│   ├── assets/       スライドで使う画像
│   └── _ds/          デザインシステム（色・フォント・アイコン）
└── ts01/ など         今後追加する資料（同じ構成）
```

資料ごとにフォルダを分け、必要なファイルをすべてその中に入れています。
書き出したツールのバージョンが資料ごとに違っても、互いに影響しません。

## 資料を追加する手順

1. スライドツールから zip で書き出す
2. このフォルダの直下に、資料用のフォルダを作る（例: `ts01/`）
   - フォルダ名は半角英数字とハイフンだけにする（URL になるため）
3. zip の中身をそのフォルダに展開する
4. `〇〇.dc.html` を `index.html` に名前変更する
5. `index.html` の `<meta name="viewport" …>` の下に `<title>資料名</title>` を追加する
6. 一覧ページ（直下の `index.html`）に、資料へのリンクを1つ追加する
7. 反映する

   ```sh
   git add -A
   git commit -m "Add ts01 slides"
   git push
   ```

   1〜2分で GitHub Pages に反映されます。

`uploads/`（元素材）と `.thumbnail` は `.gitignore` で除外しているので、展開したまま置いておいて構いません。

## 編集するときの注意

スライドの `index.html` をフォーマッター（Prettier など）で整形しないでください。
コード例の行は `white-space: pre` で表示しているため、整形で入る改行やインデントがそのまま画面に出てレイアウトが崩れます。
このフォルダを VS Code で開いている場合は、`.vscode/settings.json` で HTML の保存時自動整形をオフにしています（この設定ファイルは Git には含めていません）。
