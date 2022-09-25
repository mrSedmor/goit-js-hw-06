const loginFormEl = document.querySelector('.login-form');

function submitHandler(event) {
  event.preventDefault();

  const formEl = event.target;
  const elements = formEl.elements;

  // Використовуємо FormData():
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  data.email = data.email.trim().toLowerCase();

  // або икористовуємо elements:

  // const data = {
  //   email: elements.email.value.trim().toLowerCase(),
  //   password: elements.password.value,
  // };

  for (const [key, value] of Object.entries(data)) {
    if (value !== '') continue;

    elements[key].focus();
    alert('Все поля должны быть заполнены!');

    return;
  }

  console.log(data);
  formEl.reset();
}

loginFormEl.addEventListener('submit', submitHandler);
