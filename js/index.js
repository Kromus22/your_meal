import { modalProduct, catalogList } from './elements.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';
import { cartInit } from './cart.js';


//открытие модалки через делегирование. клик на весь список и в нём уже отслеживаю где именно был клик.
catalogList.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target.closest('.product__detail') || target.closest('.product__image')) {
    const id = target.closest('.product').dataset.idProduct;
    openModal(id);
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
  navigationListController(renderListProduct);
  cartInit();
};

init();