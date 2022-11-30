import { modalProduct, catalogList } from './elements.js';
import { createCardProduct } from './createCardProduct.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';

const product = {
  title: 'chicken Burger',
  price: 540,
  weight: 565,
  calories: 1200,
  description: 'Super duper omega burger in the world and + chickeeeen!',
  image: 'img/burger5.jpg',
  ingredients: [
    'Булочка',
    'Сыр',
    'Салатиновые листочки',
    'Курочка']
};

//открытие модалки через делегирование. клик на весь список и в нём уже отслеживаю где именно был клик.
catalogList.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target.closest('.product__detail') || target.closest('.product__image')) {
    openModal(product);
  }
});

modalProduct.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target.closest('.modal__close') || target === modalProduct) {
    modalProduct.classList.remove('modal_open');
  }
});

const init = () => {
  renderListProduct();
  navigationListController();
};

init();