// إضافة التفاعل للسحب والإطلاق
const heart = document.querySelector('.heart');

let isDragging = false;
let startY = 0;

heart.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;
  if (deltaY > 0) {
    heart.style.transform = `translateY(${deltaY}px) rotate(-45deg)`;
  }
});

window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    heart.style.transform = '';
    // يمكن إضافة تشغيل الصوت أو إظهار الشجرة هنا
  }
});