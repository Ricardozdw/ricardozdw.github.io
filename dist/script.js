const profile = window.PROFILE || {};
for (const [key, selector] of Object.entries({ name: '[data-name]', role: '[data-role]', intro: '[data-intro]', about: '[data-about]' })) {
  if (profile[key]) document.querySelectorAll(selector).forEach(el => el.textContent = profile[key]);
}
if (profile.name && profile.role) document.title = `${profile.name} — ${profile.role}`;
if (profile.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
  const email = document.querySelector('.email-link');
  email.href = `mailto:${encodeURIComponent(profile.email)}`;
  email.textContent = profile.email;
  document.querySelector('.email-row').hidden = false;
}
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const notes = {
  problem: {
    category: '思考片段 / 关于产品', title: '先找到值得解决的问题',
    description: '能力在变化，问题依然需要被认真理解。',
    details: [['从场景开始', '用户在什么时刻遇到障碍？现在用什么方式完成任务？解决这个问题，对他们有什么实际意义？这些答案应该先于功能列表。'], ['给假设设立标准', '把模糊的期待写成可观察的行为。先确定什么样的结果说明产品有用，再选择模型、交互与实现方式。']]
  },
  prototype: {
    category: '思考片段 / 关于验证', title: '把想法放进真实的场景',
    description: '原型的价值，是让不确定的事情变得可以讨论、可以验证。',
    details: [['让反馈具体', '一个能完成核心任务的简单原型，比抽象讨论更容易暴露理解偏差。观察用户如何开始、在哪停下，以及怎样修正错误。'], ['缩小验证范围', '每次只验证一个关键假设，让结果能够解释下一步该做什么。']]
  },
  experience: {
    category: '思考片段 / 关于体验', title: '让技术安静地发挥作用',
    description: '好的 AI 体验，需要让人理解、判断，也能随时接管。',
    details: [['建立清晰预期', '让用户知道系统正在做什么、需要什么，以及结果适用于什么范围。'], ['保留人的控制', '重要的内容可以核对，关键的行动可以确认，错误的结果可以修改。能力最终要服务于人的目标。']]
  }
};
const dialog = document.querySelector('#detail-dialog');
function openDetail(item) {
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
  const disclaimer = document.querySelector('#dialog-disclaimer');
  disclaimer.hidden = true;
  disclaimer.textContent = '';
  dialog.showModal();
  dialog.scrollTop = 0;
}
document.querySelectorAll('[data-note]').forEach(button => button.addEventListener('click', () => openDetail(notes[button.dataset.note])));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
let toastTimeout;
function notify(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}
document.querySelector('.copy-link').addEventListener('click', async () => {
  const url = new URL(window.location.href); url.hash = ''; url.search = '';
  try {
    await navigator.clipboard.writeText(url.href);
    notify('网站链接已复制。');
  } catch {
    notify('请从浏览器地址栏复制网站链接。');
  }
});

const siteHeader = document.querySelector('.site-header');
let headerFrame;
function updateHeader() {
  cancelAnimationFrame(headerFrame);
  headerFrame = requestAnimationFrame(() => siteHeader.classList.toggle('is-scrolled', window.scrollY > 36));
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
