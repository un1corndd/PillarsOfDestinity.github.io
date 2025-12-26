document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.href === window.location.href) {
      e.preventDefault();
    }
  });
});
