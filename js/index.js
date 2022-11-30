const modalProduct = document.querySelector('.modal_product');
const catalogList = document.querySelector('.catalog__list');
const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescr = document.querySelector('.modal-product__description');
const modalProductIngredients = document.querySelector('.ingredients__list');
const modalProductCalories = document.querySelector('.ingredients__calories');
const modalProductPrice = document.querySelector('.modal-product__price-count');

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

const openModal = (product) => {
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

const createCardProduct = (product) => {
  const li = document.createElement('li');
  li.classList.add('catlog__item');

  li.innerHTML = `
    <article class="product">
      <img class="product__image" src="${product.image}" alt="${product.title}">
      <p class="product__price">${product.price}<span class="currency">₽</span></p>
      <h3 class="product__title">
        <button class="product__detail">${product.title}</button>
      </h3>
      <p class="product__weight">${product.weight}г</p>
      <button class="product__add">Добавить</button>
    </article>
  `

  return li;
};

catalogList.textContent = '';

const card = createCardProduct(product);
catalogList.append(card);


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