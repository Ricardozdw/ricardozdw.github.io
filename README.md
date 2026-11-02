# 张达玮的个人网站

遵循用户提供的 DESIGN (1).md：黑白交替、酸性黄联系入口、Archivo Black 展示字、IBM Plex Mono 标签、黑色 Z 字母雕塑与双列产品概念界面。原生 HTML、CSS、JavaScript，无需安装依赖。

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
- `dist/index.html`：首屏、双列项目展示与页面结构。
- `dist/script.js`：概念项目详情与交互。
- `dist/style.css`：色彩、排版、响应式布局。
- `dist/assets/z-sculpture.png`：内置 imagegen 生成的透明黑色字母雕塑。旧版场景照片保留，但新版页面不加载。
- `dist/fonts/`：本地托管的开源字体及 OFL 许可证。
- `docs/asset-prompts.md`：配图的生成方式与完整提示词。

作品区当前是明确标注的概念展示，不代表真实项目履历。发布个人作品前，请替换相应卡片和详情。

此前 Sites 私人预览的托管身份保存在 `.openai/hosting.json`，与 GitHub Pages 的公开网站独立。
