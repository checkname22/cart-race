'use strict';

const getBurger = document.getElementsByClassName('burger-box')[0];
const getOpenBurger = document.getElementsByClassName('open-burger-box')[0];
const getBurgerMenu = document.getElementsByClassName('burger-menu')[0];

const openBurgerMenu = () => {
  getBurgerMenu.style.display = 'flex';
}
getBurger.addEventListener('click', openBurgerMenu);

const closeBurgerMenu = () => {
  getBurgerMenu.style.display = 'none';
}
getOpenBurger.addEventListener('click', closeBurgerMenu);