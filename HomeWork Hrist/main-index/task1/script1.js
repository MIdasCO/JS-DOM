const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input').forEach(el => el.classList.remove('error'));

    let hasError = false;
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        const nameError = document.getElementById('nameError');
        nameError.textContent = 'Поле "Имя" не может быть пустым.';
        name.classList.add('error');
        hasError = true;
    }

    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'Введите корректный email.';
        email.classList.add('error');
        hasError = true;
    }

    const password = document.getElementById('password');
    if (password.value.length < 8) {
        const passwordError = document.getElementById('passwordError');
        passwordError.textContent = 'Пароль должен содержать минимум 8 символов.';
        password.classList.add('error');
        hasError = true;
    }

    if (!hasError) {
        alert('Форма успешно отправлена!');
        form.reset();
    }
});