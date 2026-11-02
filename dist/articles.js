// 按希望展示的顺序逐篇添加真实文章。数组为空时页面显示「文章待更新」。
// title、url 必填；date、category、readMinutes、excerpt、cover 均可省略。
// date 格式：YYYY-MM-DD；readMinutes 为阅读分钟数；cover 为封面图片路径或 URL。
// 示例字段（请填入真实内容后再加入数组）：
// { title: '文章标题', url: '文章链接', date: 'YYYY-MM-DD', category: '公众号',
//   readMinutes: 8, excerpt: '文章摘要', cover: './assets/articles/cover.jpg' }
window.ARTICLES = [
  { title: '别再靠“感觉”测 AI 了：像美团一样，给你的 Agent 建一套“错题本”', url: 'https://mp.weixin.qq.com/s/X_QrGJyYmMp7oTheN4Dj1g',
    date: '2026-10-29', category: '公众号', readMinutes: 8, cover: './assets/articles/agent-eval-casebook.jpg',
    excerpt: '借美团《Agent 评测白皮书》，讲清二元打勾清单、端到端与过程两套评测，以及黄金集、错题集如何为每次改版守住底线。' },
  { title: '从追赶到破局：Kimi 3T 开源权重，把闭源的高价神话拉下了神坛', url: 'https://mp.weixin.qq.com/s/ykyH_FWAUaRMKbOcN0EsIQ',
    date: '2026-10-25', category: '公众号', readMinutes: 6, cover: './assets/articles/kimi-open-weights.jpg',
    excerpt: '从终端实战测试与长程排错案例，看开源权重模型如何跨过“玩具”与“工具”的分界线，以及后训练工程带来的行业变化。' },
  { title: '为了让 AI 答对 85%，我们先教会了它怎么说“不知道”', url: 'https://mp.weixin.qq.com/s/5t8uoDT1xrs4VgoM1PvORQ',
    date: '2026-10-24', category: '公众号', readMinutes: 9, cover: './assets/articles/rag-says-i-dont-know.jpg',
    excerpt: '一次企业知识库问答翻车后的复盘：换模型、调切片都救不了，真正有效的是拆解问题、结构化文档，并让系统学会拒答。' },
  { title: '业务自己会 Vibe Coding 了，公司还要 AI PM 干嘛？', url: 'https://mp.weixin.qq.com/s/rBD6p4Be6duAFxIVi_Tyqw',
    date: '2026-10-30', category: '公众号', readMinutes: 8, cover: './assets/articles/vibe-coding-ai-pm.jpg',
    excerpt: '业务能自己搓出小工具，却搞不定安全合规、版本退化和算力成本。AI PM 的新位置，是成为系统的质检者与守门人。' },
  { title: '为什么所有的 AI 办公助手，最终都会沦为老板的监工？', url: 'https://mp.weixin.qq.com/s/YGOufpBK8kATFFI1NTwIdg',
    date: '2026-10-31', category: '公众号', readMinutes: 8, cover: './assets/articles/ai-office-assistant.jpg',
    excerpt: '从钉钉 ONE 的复盘出发，拆解 To B 协同产品“买单的人不用、用的人不买单”的结构性矛盾，以及 AI 秘书被异化的原因。' },
];
