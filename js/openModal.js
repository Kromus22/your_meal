import {
  modalProductIngredients,
  modalProductTitle,
  modalProductImage,
  modalProductDescr,
  modalProductCalories,
  modalProductPrice,
  modalProduct
} from './elements.js'

export const openModal = (product) => {
  modalProductTitle.textContent = product.title;
  modalProductImage.src = product.image;
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

  modalProduct.classList.add('modal_open');
};