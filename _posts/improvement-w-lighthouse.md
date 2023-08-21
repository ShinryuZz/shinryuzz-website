---
title: "Lighthouseを使って自作サイトのパフォーマン改善をした"
excerpt: ""
date: "2023/08/21"
author: "@shinryuzz__"
ogImage:
  url: ""
tags: [Next.js, Lighthouse]
---

この記事では、生まれてピチピチなこのサイトを、Lighthouse を活用することで読み込み速度や SEO 対策などのパフォーマンスがあがるまでを示します。

# Lighthouse とは

Light house とは、 Google が開発した Web サイトのパフォーマンスを定量化して教えてくれる Chrome 拡張機能の一つです。

> Lighthouse is an open-source, automated tool for improving the performance, quality, and correctness of your web apps.
> When auditing a page, Lighthouse runs a barrage of tests against the page, and then generates a report on how well the page did. From here you can use the failing tests as indicators on what you can do to improve your app.

[_Lighthouse Chrome ウェブストア_](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=jak)

これを使えば、誰でも気軽に任意のサイトのパフォーマンス計測を行うことができます。
Perfomance(≒ 速度)、Accessibility、Best Practice（≒ セキュリティ）、SEO についてそれぞれ 100 点満点評価でスコアを教えてくれます。

さらに素晴らしいことに、パフォーマンス計測と同時に非常に具体的な改善策を提示してくれます。例えば、「html 内の この `button` 要素が小さくてクリックしにくいから大きくした方がいいよ」とか「meta データの `<title>` 要素 がないよ」などといったことも教えてくれます。とても優しい。

# 改善前後の比較

ということでそれらに従った結果、70 点台の項目などがあったにも関わらず、小 1 時間の作業で各項目満点もしくはほぼ満点を取ることができるまでパフォーマンス改善を行うことができました。

**改善前 ↓**
![before](/blog/improvement-w-lighthouse/before.png)

速度（Perfomance）は元からかなり高かったです。やっぱり Next.js の SSG が素晴らしい。

Accessibility はボタンが小さいよとか、このラベルがないよとか html 要素について色々アドバイスをいただきました。

SEO は meta データがないから低かったようです。

**改善後 ↓**
![after](/blog/improvement-w-lighthouse/after.png)

Lighthouse の提示する改善方法一つ一つに従ったことで、スコアがほぼカンストしました。

いいですね！

# おわりに

自作のウェブサイトのパフォーマンスは使用する技術や運営者の技術に大きく依存します。そういったときにこのようなツールを使って気軽に誰でもパフォーマンス改善を行うことができるのは、非常にありがたいことです。

この作業が今後サイトする方の UX 向上、引いては訪問者の増加につながるといいな。

以上です。ありがとうございました。
