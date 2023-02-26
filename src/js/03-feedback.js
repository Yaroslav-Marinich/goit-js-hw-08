import throttle from 'lodash.throttle';

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

const form = document.querySelector('.feedback-form');
const emailForm = document.querySelector('.feedback-form input');
const textForm = document.querySelector('.feedback-form textarea');

form.addEventListener(
  'input',
  throttle(() => {
    const saveForm = {
      email: emailForm.value,
      text: textForm.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(saveForm));
  }),
  500
);

window.onload = event => {
  try {
    let loadForm = JSON.parse(localStorage.getItem('feedback-form-state'));
    emailForm.value = loadForm.email;
    textForm.value = loadForm.text;
  } catch (err) {
    loadForm = [];
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({ email: emailForm.value, message: textForm.value });
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
});
