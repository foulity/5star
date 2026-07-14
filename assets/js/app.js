const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#quoteForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const toEmail = 'yohanneszeresenay35@gmail.com';
    const data = new FormData(form);
    const subject = encodeURIComponent('5 Star Construction Quote Request');
    const body = encodeURIComponent([...data.entries()].map(([key, value]) => `${key}: ${value}`).join('\n'));
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  });
}
