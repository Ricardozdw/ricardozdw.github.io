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

const articleList = document.querySelector('#posts-list');
const articleEmpty = articleList.querySelector('.post-empty');
const articleTemplate = document.querySelector('#post-template');
const writingMore = document.querySelector('.writing-more');
let showAllArticles = false;
function articleURL(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value, window.location.href);
    return /^https?:$/.test(url.protocol) ? url.href : null;
  } catch { return null; }
}
function renderArticles() {
  const articles = (Array.isArray(window.ARTICLES) ? window.ARTICLES : [])
    .filter(item => item && typeof item.title === 'string' && item.title.trim() && articleURL(item.url));
  const nodes = articles.slice(0, showAllArticles ? articles.length : 3).map(item => {
    const node = articleTemplate.content.firstElementChild.cloneNode(true);
    const url = articleURL(item.url);
    node.querySelectorAll('a').forEach(link => { link.href = url; });
    node.querySelector('.post-title a').textContent = item.title;
    const coverLink = node.querySelector('.post-cover-link');
    coverLink.setAttribute('aria-label', `阅读：${item.title}`);
    if (articleURL(item.cover)) {
      const image = document.createElement('img');
      image.className = 'post-cover'; image.src = articleURL(item.cover); image.alt = '';
      image.loading = 'lazy'; image.decoding = 'async'; image.width = 640; image.height = 360;
      image.addEventListener('error', () => image.remove(), { once: true });
      coverLink.append(image);
    }
    const meta = node.querySelector('.post-meta');
    const addMeta = (el, text) => {
      if (meta.childNodes.length) meta.append(document.createTextNode(' · '));
      el.textContent = text; meta.append(el);
    };
    if (typeof item.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
      const time = document.createElement('time'); time.dateTime = item.date; addMeta(time, item.date);
    }
    if (item.category) {
      const category = document.createElement('span'); category.className = 'post-cat'; addMeta(category, item.category);
    }
    if (Number.isFinite(item.readMinutes) && item.readMinutes > 0) addMeta(document.createElement('span'), `约 ${Math.ceil(item.readMinutes)} 分钟`);
    meta.hidden = !meta.childNodes.length;
    const excerpt = node.querySelector('.post-excerpt');
    excerpt.textContent = item.excerpt || ''; excerpt.hidden = !item.excerpt;
    return node;
  });
  articleList.replaceChildren(...(nodes.length ? nodes : [articleEmpty]));
  writingMore.hidden = articles.length <= 3;
  writingMore.setAttribute('aria-expanded', String(showAllArticles));
  writingMore.textContent = showAllArticles ? '收起 ↑' : '全部文章 →';
}
writingMore.addEventListener('click', () => {
  showAllArticles = !showAllArticles;
  renderArticles();
  if (!showAllArticles) document.querySelector('#notes').scrollIntoView({ block: 'start' });
});
renderArticles();
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
