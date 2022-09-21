const loginForm = document.querySelector('.login-form');

function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const elements = form.elements;

  const data = {
    email: elements.email.value.trim().toLowerCase(),
    password: elements.password.value,
  };

  for (const [key, value] of Object.entries(data)) {
    if (value !== '') continue;

    elements[key].focus();
    alert('Все поля должны быть заполнены!');

    return;
  }

  console.log(data);
  form.reset();
}

loginForm.addEventListener('submit', onSubmit);
