# 张达玮的个人网站

参考 [IconMoon](https://iconmoon.com/) 的视觉和内容组织：白底三段式介绍、轻量固定导航、各有配色的大幅项目卡片、思考分享与双栏个人资料。内容保留张达玮的身份与概念探索，配图为原创 AI 生成素材。原生 HTML、CSS、JavaScript，无需安装依赖。

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
- `dist/script.js`：概念项目详情与交互。
- `dist/style.css`：色彩、排版、响应式布局。
- `dist/assets/flow-icon.png`、`dist/assets/knowledge-icon.png`：内置 imagegen 生成的透明项目配图。旧版素材保留但不加载。
- `dist/fonts/`：当前使用开源 Fira Sans，字体与 OFL 许可证本地托管；旧版字体保留但不加载。
- `docs/asset-prompts.md`：配图的生成方式与完整提示词。
- `docs/design-reference.md`：参考站观察与本次适配说明。

作品区当前是明确标注的概念展示，不代表真实项目履历。发布个人作品前，请替换相应卡片和详情。

此前 Sites 私人预览的托管身份保存在 `.openai/hosting.json`，与 GitHub Pages 的公开网站独立。
