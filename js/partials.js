function loadPartial(targetId, url) {
  const target = document.getElementById(targetId);
  if (!target) return Promise.resolve();
  return fetch(url)
    .then((res) => res.text())
    .then((html) => {
      target.innerHTML = html;
    });
}

function markActiveNavLink() {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll('#siteNav a[data-nav]').forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function setFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

Promise.all([
  loadPartial('site-header', 'partials/header.html'),
  loadPartial('site-footer', 'partials/footer.html'),
]).then(() => {
  markActiveNavLink();
  setFooterYear();
  document.dispatchEvent(new CustomEvent('partials:loaded'));
});
