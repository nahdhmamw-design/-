// بسيط تفاعلات JS
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  const greeting = document.getElementById('greeting');
  document.getElementById('sayHi').addEventListener('click', () => {
    greeting.textContent = 'مرحباً — سعيد برؤيتك هنا! 👋';
    // مثال على تخزين في localStorage
    localStorage.setItem('lastVisit', new Date().toISOString());
  });

  // تبديل الثيم
  const themeBtn = document.getElementById('themeBtn');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? '' : 'dark';
    if (next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', next);
  });

  // نموذج الاتصال (للصفحة الثابتة سنحفظ محلياً ونعرض رسالة)
  const contactForm = document.getElementById('contactForm');
  const status = document.getElementById('status');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim(),
      time: new Date().toISOString()
    };
    // حفظ مؤقت محلي (بدلاً من إرسال لخادم)
    const stored = JSON.parse(localStorage.getItem('contacts') || '[]');
    stored.push(data);
    localStorage.setItem('contacts', JSON.stringify(stored));
    status.textContent = 'تم حفظ الرسالة محلياً. (يمكن ربطها بخادم لاحقاً)';
    contactForm.reset();
  });
});
