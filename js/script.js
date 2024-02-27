let notifyButton = document.querySelector('.btn_notify');
let email = document.querySelector('.email');
let toast = document.querySelector('.toast');
let errorMessage = document.querySelector('.error');

notifyButton.addEventListener('click', function () {
  selectErroMessage(email.value);
  if (validateEmail(email.value)) {
    openToast();
    errorMessage.classList.remove('active');
    email.classList.remove('error');
    email.value = '';
  } else {
    errorMessage.classList.add('active');
    email.classList.add('error');
    email.placeholder = 'example@email/com';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function selectErroMessage(email) {
  errorMessage.textContent = email === '' ?
    'Whoops! It looks like you forgot to add your email' :
    'Please provide a valid email address';
}

function hideError() {
  errorMessage.classList.remove('active');
  email.classList.remove('error');
  email.placeholder = 'Your email address...';
}

function openToast() {
  toast.classList.add('open_toast');
    setInterval(() => {
      toast.classList.remove('open_toast');
    }, 5000);
}