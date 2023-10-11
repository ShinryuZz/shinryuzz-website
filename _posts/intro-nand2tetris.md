---
title: "『コンピュータシステムの理論と実装』をやってみる 〜導入編〜"
date: "2023/10/11"
tags: [ComputerScience]
---

# はじめに
こんにちは、しんりゅう ([@shinryuzz](https://twitter.com/shinryuzz__)) です。

今回は コンピュータサイエンスを学ぶときにおすすめの本として度々登場する『コンピュータシステムの理論と実装』（通称、Nand2Tetris）を学ぶことにしたため、本書の概要と筆者のモチベーション、環境構築までを記事として残したいと思います。

リポジトリは [こちら](https://github.com/shinryuzz/nand2tetris)。



# 本の概要
[『コンピュータシステムの理論と実装』](https://www.oreilly.co.jp/books/9784873117126/) では、コンピュータの仕組みをボトムアップに学ぶことができます。

本書の裏表紙にあるこちらの文章がとてもわかりやすい。↓

> コンピュータを理解するための最善の方法はゼロからコンピュータを作ることです。コンピュータの構成要素は、ハードウェア、ソフトウェア、コンパイラ、OSに大別できます。本書では、これらコンピュータの構成要素をひとつずつ組み立てます。
>
> 具体的には、NANDという電子素子からスタートし、論理ゲート、加算器、CPUを設計します。
> そして、オペレーティングシステム、コンパイラ、バーチャルマシンなどを実装しコンピュータを完成させて、最後にその上でアプリケーション（テトリスなど）を動作させます。
>
>実行環境はJava（Mac、Windows、Linuxで動作）。


単純なNAND ゲートから アプリケーションまで。
ということで通称 Nand2Tetris と呼ばれています。


# モチベーション
まず、私の専攻はコンピュータサイエンスではありません。
過去に高専でコンピュータサイエンスの基礎を学びましたが、大学に編入してからは電子工学の方に専攻を変え、情報工学などの領域からは離れていました。
そこで改めて勉強をしなおしたいと考えたためです。

また、魔法のようなWeb技術の反動で低レイヤを知りたいと考えるようになったためです。
私はweb開発領域においてはフロントエンドに触れることが多いです。
最近だと Next.js や Vercel にどっぷりハマっており、これらはコンピュータの仕組みなどを知らずとも魔法のような技術によって 様々な技術的恩恵を享受できています。

だからこそ、あえて巨人の肩から降りて、自分で手探りしながらコンピュータやソフトウェアへの理解を深める時間があるのもありなんじゃないかなと思い、本書を購入した次第です。

# ソフトウェアのセットアップ
本書はただの書籍だけで閉じずに、テキストを進めるためのソフトウェア（nand2tetris software tools）が付属しています。
さらに、[公式Webサイト](https://www.nand2tetris.org/) ではそのソフトウェアのインストールからソフトウェアのデモ動画、各チャプターのテキストなどまですべて無料で閲覧することができます。
（以下、公式 Webサイトより）

> The Nand to Tetris Software Suite contains all the tools and files necessary for completing all the projects described in this site, and in the book The Elements of Computing Systems. Once you download the software suite to your PC, there is no need to download anything else throughout your Nand to Tetris learning experience.
>
> The software runs as is on Windows, Unix, and Mac OS.

これがとてもありがたい。

ということで Mac (Apple Silicon) における付属ソフトウェアのインストールから初回起動までの手順を残しておきます。
（基本的には [Setup Guilde for Apple MacOS](https://drive.google.com/open?id=1QDYIvriWBS_ARntfmZ5E856OEPpE4j1F)を参考にしているだけです。）

### 1. Java のインストール

ソフトウェアを動かすためには Java の実行環境が必要となります。
インストールされているかどうかを確認するには以下のコマンドを実行します。

```
java --version
```

インストールされていない場合は[こちら](https://www.oracle.com/java/technologies/downloads/)からインストールしてください。

### 2. ソフトウェアのダウンロード

[公式Web サイト](https://www.nand2tetris.org/software) からソフトウェア(.zip 形式) をダウンロードし、任意の場所に解凍します。

### 3. ソフトウェアの実行

.sh ファイルに権限を付与した上で、スクリプトを実行します。

```
chmod +x ./*.sh
./HardwareSimulator.sh
```

これで以下のようなGUIが立ち上がれば成功です。

![gui](/blog/nand2tetris/gui-1.png)


# さいごに
これでテキストを進める準備が整いました。
ここから進めないと意味がありません()

ということで楽しみながら進めたいと思います。
進捗があり次第、また別の記事に投稿したいと思います。

ここまで記事を読んでいただきありがとうございました。
