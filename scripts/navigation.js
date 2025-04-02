const hambutton = document.querySelector('#navigation-mobile');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hambutton.classList.toggle('open');
});