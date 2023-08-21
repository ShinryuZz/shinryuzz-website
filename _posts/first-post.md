---
title: "Next.js + Typescript + TailwindCSS で Markdownブログサイトを立ち上げた"
excerpt: ""
date: "2023/08/21"
author: "@shinryuzz__"
ogImage:
  url: ""
# tags: [はじめての投稿, Next.js, Typescript, TailwindCSS]
tags: [はじめての投稿, Next.js, Typescript, TailwindCSS]
---

# はじめに

前々から自作のブログサイトが欲しいなあと思い、お盆休みを活用して作成しました。

自前のブログサイトを持っていなくとも、世の中には[Qiita](https://qiita.com/)、 [Zenn](https://zenn.dev/)、[note](https://note.com/)、[はてなブログ](https://hatenablog.com/)などの様々なブログプラットフォームがあります。もちろんこれらのサイトも活用していきます。（これまでアウトプットはあまりしていませんでしたが。）

その時に考えるべきことは、これらのサイトをどう使い分けるか、ということになるのですが、これはこれから試行錯誤しながらゆっくり決めていこうと思います。
今考えている時点では、

- Qiita&Zenn: 技術系のアウトプットする（Zenn ベースで Qiita には Zenn へのリンクを貼るくらい？）
- note: エッセイなど作品として投稿する
- 本ブログサイト: エンジニアとして感じたことやこれまでの振り返りを述べる。

みたいな感じで行こうかなと思っています。変わるかもしれんけど。

どうぞよろしくお願いします。

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
