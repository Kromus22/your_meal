import { API_URL, PREFIX_PRODUCT } from './const.js';
import { getData } from './getData.js';
import {
  modalProductIngredients,
  modalProductTitle,
  modalProductImage,
  modalProductDescr,
  modalProductCalories,
  modalProductPrice,
  modalProduct,
  modalProductBtn
} from './elements.js'

export const openModal = async (id) => {
  const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`);

  modalProductTitle.textContent = product.title;
  modalProductImage.src = `${API_URL}/${product.image}`;
  modalProductDescr.textContent = product.description;
  modalProductCalories.textContent = `${product.weight}г, ккал  ${product.calories}`;
  modalProductPrice.textContent = product.price;

  modalProductIngredients.textContent = '';

  const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement('li');
    li.classList.add('ingredients__item');
    li.textContent = item;
    return li;
  });

  modalProductIngredients.append(...ingredientsListItems);

  modalProductBtn.dataset.idProduct = product.id

  modalProduct.classList.add('modal_open');
};