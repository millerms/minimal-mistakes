// Minimal UI helpers: modal open/close
document.addEventListener('click', (e) => {
  const openBtn = e.target.closest('[data-modal-target]');
  if (openBtn) {
    const id = openBtn.getAttribute('data-modal-target');
    const dlg = document.getElementById(id);
    if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
    e.preventDefault();
    return;
  }
  const closeBtn = e.target.closest('[data-modal-close]');
  if (closeBtn) {
    const dlg = closeBtn.closest('dialog');
    if (dlg) dlg.close();
    e.preventDefault();
  }
});

