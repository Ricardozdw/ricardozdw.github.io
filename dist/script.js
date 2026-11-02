const profile = window.PROFILE || {};
for (const [key, selector] of Object.entries({name:'[data-name]',role:'[data-role]',intro:'[data-intro]',about:'[data-about]'})) {
  if (profile[key]) document.querySelectorAll(selector).forEach(el => el.textContent = profile[key]);
}
if (profile.name && profile.role) document.title = `${profile.name} — ${profile.role}`;
if (profile.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
  const email = document.querySelector('.email-link');
  email.href = `mailto:${encodeURIComponent(profile.email)}`;
  email.hidden = false;
  document.querySelector('.contact-pending').hidden = true;
}
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.project').forEach(project => {
      project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    });
  });
});

const explorations = {
  workflow: {
    category:'01 / PRODUCT CONCEPT', title:'AI 工作流实验室',
    description:'一个探索性概念：让 AI 从回答问题，进一步走向协助完成任务。',
    details:[['想解决什么','重复性的资料整理和信息转换，常常占据本可用来思考的时间。这个概念关注如何把清晰、可重复的步骤，编排成可检查的 AI 工作流。'],['如何展开','从一个具体任务开始，拆解输入、处理步骤和交付标准。在关键节点保留人工确认，让执行过程可见、结果可修改。'],['如何验证','用同一组任务对比人工与工作流的完成过程，观察结果准确性、修改次数和实际节省的操作，再决定是否扩大场景。']]
  },
  conversation: {
    category:'02 / EXPERIENCE DESIGN', title:'对话之外的 AI 体验',
    description:'一个界面探索：当产品不再只有一个输入框，人机协作还能如何发生？',
    details:[['想解决什么','自由对话灵活，但用户有时不知道从何开始，也难以确认 AI 理解了什么。这个概念关注降低表达成本，建立明确预期。'],['如何展开','把自然语言和结构化操作结合：用建议帮助开始，用可编辑卡片呈现结果，用清晰的状态反馈解释当前进度。'],['如何验证','邀请用户完成同一个目标，观察首次操作、理解偏差和纠错路径，比较不同界面是否帮助用户更快形成可靠判断。']]
  },
  knowledge: {
    category:'03 / PERSONAL SYSTEM', title:'连接知识的个人系统',
    description:'一个知识管理概念：让收藏的信息，不只被保存，也能被重新发现和使用。',
    details:[['想解决什么','碎片信息容易越积越多，却不一定能在需要时被找到。这个概念关注从收集到理解、连接和输出的完整过程。'],['如何展开','保留原始来源，以问题组织笔记，让相关概念相互连接。AI 可以辅助整理与检索，关键结论仍回到来源核实。'],['如何验证','用真实的问题测试检索和复用，观察是否能找到来源、解释概念关系，并形成可用的思考产出。']]
  }
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const item = explorations[button.dataset.project];
  document.querySelector('#dialog-category').textContent = item.category;
  document.querySelector('#dialog-title').textContent = item.title;
  document.querySelector('#dialog-description').textContent = item.description;
  const details = document.querySelector('#dialog-details');
  details.replaceChildren();
  item.details.forEach(([title, text]) => {
    const h3 = document.createElement('h3'); h3.textContent = title;
    const p = document.createElement('p'); p.textContent = text;
    details.append(h3, p);
  });
  dialog.showModal();
  dialog.scrollTop = 0;
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});

let toastTimeout;
function notify(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message; toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}
document.querySelector('.copy-link').addEventListener('click', async () => {
  const url = new URL(window.location.href); url.hash = '';
  try {
    await navigator.clipboard.writeText(url.href);
    notify('链接已复制，期待下一次交流。');
  } catch {
    notify('暂时无法复制，请从浏览器地址栏复制链接。');
  }
});
