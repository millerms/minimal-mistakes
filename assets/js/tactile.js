document.addEventListener('click', (e)=>{
  const t = e.target.closest('.btn,.button,.zen-button,.btn-modern');
  if(!t) return;
  const r = document.createElement('span');
  const rect = t.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  r.style.width = r.style.height = size + 'px';
  r.style.left = (e.clientX - rect.left - size/2) + 'px';
  r.style.top  = (e.clientY - rect.top  - size/2) + 'px';
  r.className = 'ripple';
  t.appendChild(r);
  setTimeout(()=> r.remove(), 450);
});
