import { clearCart } from "./cart.js";
import { ORDER_URL } from "./const.js";
import { modalDeliveryContainer, modalDeliveryForm } from "./elements.js"

export const orderController = (getCart) => {
  const checkDelivery = () => {
    if (modalDeliveryForm.format.value === 'pickup') {
      modalDeliveryForm['address-info'].classList.add('modal-delivery__fieldset-input_hide');
    }

    if (modalDeliveryForm.format.value === 'delivery') {
      modalDeliveryForm['address-info'].classList.remove('modal-delivery__fieldset-input_hide');
    }
  }
  modalDeliveryForm.addEventListener('change', checkDelivery);

  modalDeliveryForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(modalDeliveryForm);
    const data = Object.fromEntries(formData);
    data.order = getCart();

    fetch(ORDER_URL, {
      method: 'post',
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then(response => {
        clearCart();
        modalDeliveryContainer.innerHTML = `
          <h2>Спасибо за Ваш заказ!</h2>
          <h3>Ваш номер заказа ${response.id}</h3>
          <h3>В ближайшее время с Вами свяжется наш менеджер ${response.manager}</h3>
          <p>Ваш заказ:</p>
        `;

        const ul = document.createElement('ul');
        data.order.forEach(item => {
          ul.insertAdjacentHTML('beforeend', `<li>${item.id}</li>`);
        });

        modalDeliveryContainer.insertAdjacentElement('beforeend', ul);

        modalDeliveryForm.reset();
        checkDelivery();
      });
  });
}