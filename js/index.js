import { modalProduct, catalogList, countAmount } from './elements.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';
import { cartInit } from './cart.js';


//открытие модалки через делегирование. клик на весь список и в нём уже отслеживаю где именно был клик.
catalogList.addEventListener('click', ({ target }) => {
  if (target.closest('.product__detail') || target.closest('.product__image')) {
    const id = target.closest('.product').dataset.idProduct;
    openModal(id);
  }
});

let counter = 1;
modalProduct.addEventListener('click', ({ target }) => {
  if (target.closest('.modal__close') || target === modalProduct) {
    modalProduct.classList.remove('modal_open');
  }

  if (target.closest('.count__plus')) {
    countAmount.textContent = counter += 1;
  }

  if (target.closest('.count__minus')) {
    if (countAmount.textContent === '1') {
      countAmount.textContent = 1;
    } else {
      countAmount.textContent = counter -= 1;
    }
  }
});

const init = () => {
  renderListProduct();
  navigationListController(renderListProduct);
  cartInit();
};

init();