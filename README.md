# 问径 SeekMyPath

一个免费的大学生测评：先看清你更接近科研还是实践的做事节奏，再在具体的学科方向和公司岗位里，找到和你最合拍的那几个。

**在线使用：[seekmypath.cn](https://seekmypath.cn)**

---

这个仓库**不是测评程序的源码**，只是它的分享页 —— 一个可以发给同学、贴进群里、
放到简历或作品集里的介绍页，中英文可切换。测评本身在
[seekmypath.cn](https://seekmypath.cn) 运行，不需要注册，答案只保存在你自己的浏览器里。

## 页面结构

```
index.html          单页，所有文案都带 data-i18n 标记
assets/style.css    纸/墨/朱砂 的配色与排版，跟随系统深色模式
assets/i18n.js      中英文案表 + 语言切换（存 localStorage）
assets/shot-*.jpg   产品截图
assets/favicon.svg
```

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 改文案 / 加语言

1. 所有文案在 `assets/i18n.js` 顶部的 `DICT` 里，按 `zh` / `en` 分表，键名与
   `index.html` 里的 `data-i18n="…"` 一一对应。
2. 加一门语言：在 `DICT` 和 `META` 里各加一张表（如 `ja`），再在
   `index.html` 的 `.lang` 里加一个 `<button data-lang="ja">日本語</button>`。
   不需要改别的地方，按钮的 `aria-pressed` 是脚本自动维护的。
3. 首页 `<title>` 和 `<meta name="description">` 会在切换时由 `META` 覆盖；
   初始 HTML 里的那份是给爬虫和分享卡片看的。

## 部署

GitHub Pages（main 分支根目录）。推上去之后在仓库 Settings → Pages 里选
`Deploy from a branch → main → / (root)`，或直接：

```bash
gh api -X POST repos/{owner}/{repo}/pages -f source[branch]=main -f source[path]=/
```

---

## English

A free assessment for students deciding between research and industry: 49 everyday
questions about how you work, then 16 disciplines, 164 research areas and 20 job tracks.

**Try it: [seekmypath.cn](https://seekmypath.cn)**

This repository is **not** the assessment app — it is a small share page for it, in
Chinese and English. The app itself runs on seekmypath.cn, needs no account, and keeps
every answer in the visitor's own browser (`localStorage`); nothing is uploaded.

All copy lives in `assets/i18n.js` (`DICT`, keyed by the `data-i18n` attributes in
`index.html`). To add a language, add one table to `DICT` and `META`, plus one button
in the `.lang` switcher — nothing else needs to change.

Preview locally with `python3 -m http.server 8000`.

---

本页内容（文案与截图）仅用于介绍 seekmypath.cn，未经许可请勿另作他用。
The copy and screenshots here are for describing seekmypath.cn only.
