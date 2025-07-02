// Сохраняем пользователя в localStorage
document.addEventListener('DOMContentLoaded', () => {
  const regForm = document.getElementById('registerForm');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('Регистрация успешна!');
      window.location.href = 'login.html';
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === username && user.password === password) {
        alert('Вход выполнен!');
        window.location.href = 'shop.html';
      } else {
        alert('Неверные данные');
      }
    });
  }
});
