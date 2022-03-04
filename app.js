//---------------- VARIABLES

const clickBtn = document.querySelector('.btnToClick');
const inputText = document.querySelector('.click');
const inputFocus = document.querySelector('.focus');
const inputInput = document.querySelector('.value');

//---------------- EVENT LISTENERS
clickBtn.addEventListener('click', function () {
  console.log(inputText.value);
});
inputFocus.addEventListener('focus', function () {
  console.log(inputFocus.value);
});

inputInput.addEventListener('input', function () {
  console.log(inputInput.value);
});
