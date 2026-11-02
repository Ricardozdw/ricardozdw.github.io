# 张达玮的个人网站

简约极客风格，原生 HTML、CSS、JavaScript，无需安装依赖。

**访问网站：[ricardozdw-dotcom.github.io](https://ricardozdw-dotcom.github.io/)**

源码仓库：[ricardozdw-dotcom/ricardozdw-dotcom.github.io](https://github.com/ricardozdw-dotcom/ricardozdw-dotcom.github.io)。GitHub Pages 网站和该仓库均公开可见。

## 发布更新

修改网站文件后，提交并推送到 `main`：

```sh
git add dist
git commit -m "Update personal website"
git push origin main
```

GitHub Actions 会自动发布 `dist/`。可在仓库的 Actions 页面查看部署状态，也可手动运行 `Deploy personal website to GitHub Pages` 工作流。

仓库 Settings → Pages 的发布来源应为 **GitHub Actions**。

## 本地预览

在本目录运行 `python3 -m http.server 4173 --directory dist`，访问 `http://localhost:4173`。也可以直接打开 `dist/index.html` 浏览；复制链接需要 HTTPS 或 localhost。

## 更新内容

- `dist/profile.js`：姓名、职业、简介、关于我、邮箱。填入邮箱后自动显示邮件联系按钮。
- `dist/index.html`：项目卡片与页面结构。
- `dist/script.js`：概念项目详情与交互。
- `dist/style.css`：色彩、排版、响应式布局。

作品区当前是明确标注的概念展示，不代表真实项目履历。发布个人作品前，请替换相应卡片和详情。

此前 Sites 私人预览的托管身份保存在 `.openai/hosting.json`，与 GitHub Pages 的公开网站独立。
