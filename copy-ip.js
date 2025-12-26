document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('server-ip');

  copyBtn.addEventListener('click', () => {
    const ip = copyBtn.childNodes[0].textContent
      .replace('IP:', '')
      .trim();

    navigator.clipboard.writeText(ip)
      .catch(err => console.error('Ошибка копирования:', err));
  });
});