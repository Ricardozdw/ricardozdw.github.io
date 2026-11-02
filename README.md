# 张达玮的个人网站

参考 [IconMoon](https://iconmoon.com/) 的视觉和内容组织：白底三段式介绍、轻量固定导航、各有配色的大幅项目卡片、文章列表与双栏个人资料。作品区展示张达玮的真实 GitHub 项目，采用项目页面截图和仓库版式预览。原生 HTML、CSS、JavaScript，无需安装依赖。

**访问网站：[ricardozdw.github.io](https://ricardozdw.github.io/)**

源码仓库：[Ricardozdw/ricardozdw.github.io](https://github.com/Ricardozdw/ricardozdw.github.io)。GitHub Pages 网站和该仓库均公开可见。

## 发布更新

修改网站文件后，提交并推送到 `main`：

```sh
git add dist
git commit -m "Update personal website"
git push origin main
```

GitHub Actions 会自动发布 `dist/`。可在仓库的 Actions 页面查看部署状态，也可手动运行 `Deploy personal website to GitHub Pages` 工作流。

部署时会自动为 CSS、JavaScript 和 favicon 添加提交版本号，避免浏览器复用旧版本资源。

仓库 Settings → Pages 的发布来源应为 **GitHub Actions**。

## 本地预览

在本目录运行 `python3 -m http.server 4173 --directory dist`，访问 `http://localhost:4173`。也可以直接打开 `dist/index.html` 浏览；复制链接需要 HTTPS 或 localhost。

## 更新内容

- `dist/profile.js`：姓名、职业、简介、关于我、邮箱。填入邮箱后自动显示邮件联系按钮。
- `dist/index.html`：三段式介绍、大幅项目卡片、分享与个人资料。
- `dist/assets/hero-pixel-typing.gif`：用户提供的透明像素人物动画，显示在首页介绍区；同名静态 PNG 用于“减少动态效果”偏好。
- `dist/articles.js`：真实文章列表数据，目前留空，等待逐篇添加。
- `dist/script.js`：文章列表渲染、展开全部文章、导航与复制链接交互。
- `dist/style.css`：色彩、排版、响应式布局。
- `dist/assets/projects/`：当前三项 GitHub 项目的真实截图和版式预览。旧版 AI 配图保留但不加载。
- `dist/fonts/`：当前使用开源 Fira Sans，字体与 OFL 许可证本地托管；旧版字体保留但不加载。
- `docs/asset-prompts.md`：配图的生成方式与完整提示词。
- `docs/design-reference.md`：参考站观察与本次适配说明。
- `docs/project-sources.md`：项目说明、实际使用范围及预览图片来源。

作品按顺序为 [知汇台](https://github.com/Ricardozdw/zhihuitai)、[小红书成稿工坊](https://github.com/Ricardozdw/xiaohongshu-content-studio)、[AI 产品拆解 Skill](https://github.com/Ricardozdw/ai-product-teardown)。知汇台在线页面为 Mock 前端演示；成稿工坊为安装型 Skill，网页提供介绍与预览；拆解 Skill 附公开 HTML 示例报告。

此前 Sites 私人预览的托管身份保存在 `.openai/hosting.json`，与 GitHub Pages 的公开网站独立。

## 添加文章

在 `dist/articles.js` 的 `window.ARTICLES` 数组中按展示顺序加入文章，`title`（标题）、`url`（原文链接）必填。可选字段为 `date`（YYYY-MM-DD）、`category`（分类 / 来源）、`readMinutes`（阅读分钟数）、`excerpt`（摘要）、`cover`（封面图片路径或 URL）。缺少的元信息自动隐藏，未提供封面时使用中性占位图形，不估算日期或阅读时长。

首页默认展示前三篇，超过三篇时显示“全部文章”按钮；尚无文章时显示待更新状态。列表结构参考 [何庆丰的个人网站](https://macistone71-jpg.github.io/dujiaoshou1/)，没有复制其文章、图片或个人信息。
