# innovation_support

イノベーションサポートのFEです。

イノサポのサービスには下記の URL からアクセスしてください

- [イノサポ - InnovationSupport](https://innovation-support-d391e.web.app)

<div align="center">
  <img src="./docs/app.png" height="500">
</div>

## 全体像

イノベーションサポートの全体像は下記の図の通りです。本リポジトリはそのうちの、赤枠の「フロントエンド」のソースコードです。

![アーキテクチャ](./docs/arch.png)

その他のソースコードはそれぞれ、下記のリポジトリを確認してください

- 青枠 - スマートコントラクト
  - [GitHub - teritamas/innovation-support-smartcontract](https://github.com/teritamas/innovation-support-smartcontract)
- 緑枠 - バックエンド
  - [GitHub - teritamas/innovation-support-backend](https://github.com/teritamas/innovation-support-backend)

## Quick Start

はじめに下記のコマンドを実行し、必要ライブラリのインストールを行います。

```sh:
npm install
```

その後開発用にサーバを起動します。

```
npm run serve
```

下記のURLに開発用サーバが立ち上がります。

- http://localhost:8080