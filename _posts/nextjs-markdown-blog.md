---
title: "Next.js + Typescript + TailwindCSS による Markdownブログサイトの構築"
excerpt: ""
date: "2023/08/20"
author: "@shinryuzz__"
ogImage:
  url: ""
tags: [Next.js, Typescript, TailwindCSS]
---

# はじめに

本記事ではタイトルの通り、Next.js, Typescript, TailwindCS による Markdown ブログサイト構築までの流れを示します。

ホスティングはもちろん Vercel、カラーテーマとシンタックスハイライトは [Dracula](https://draculatheme.com/) をカスタマイズしたものになっています。

実際にデプロイしていたものは **[こちら](https://shinryuzz.com)**

本記事投稿時点で、実装した/していない機能それぞれこんな感じです ↓

実装していない機能も後日追加していく予定です。

## 実装した機能

- `getStaticProps`　 SSG による事前ビルド（静的 HTML, JSON の生成）
- `getStaticPaths`　を用いた Dynamic Routes
- Markdown ファイルの
-

## 実装していない機能 （後日追加予定）

- タグ一覧機能

- markdown への SNS 投稿などの埋め込み

本記事ではこの実装した機能に絞って解説します。

記事データは Next.js の SSG によって、静的な JSON として読み込んでおり、`blog/[slug]` ページは各記事に動的ルーティングを行っているといった形です。

<!-- ソースコードは **[こちら](https://github.com/shinryuzz/shinryuzz-website)** -->

# ブログ構築のために

このサイトは、Next.js, Typescript, TailwindCSS で構築しており、Markdown ファイル形式で記事を管理するようにしています。
ホスティングはもちろん Vercel です。

カラーテーマとシンタックスハイライトは Dracula をカスタマイズしたものになっています。

やっぱり SSG は訪問者が快適にサイト内を探索できるので、素晴らしい技術だと思います。

開発からデプロイまでの詳細なプロセスは、別の記事として投稿したいと思います。

Markdown なので、もちろんコードブロックの挿入なんかもできます。 ↓

```ruby
class ApplicationController < ActionController::Base
  before_action :find_current_user

  helper_method :has_session?

  def logged_in
  redirect_to new_session_path unless has_session?
  end

  def find_current_user
  @current_user = (User.find(session[:user_id]) if has_session?)
  end

  def has_session?
  session[:user_id].present?
  end
end
```

# Heading 1

## Heading 2

### Heading 3
