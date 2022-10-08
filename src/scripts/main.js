import products from '../api/products.json';

window.document.location.hash = '#';
const currentState = {
  currentId: 0,
  currentBuy: false,
  currentProducts: [...products],
  currentName: '',
};

function accord(array, classActiveName) {
  for (let i = 0; i < array.length; i += 1) {
    array[i].addEventListener('click', function accordion() {
      this.classList.toggle(`${classActiveName}`);

      const kind = this.classList[0].match(/silver|gold|platinum/);
      const panel = document.getElementById(kind[0]);
      const section = document.getElementsByClassName(`${kind[0]}__box`);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;

        section[0].style.boxShadow = 'inset 1px 0px 30px 0.5px rgba(255,255,255,0.24)';
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        switch (kind[0]) {
          case 'silver':
            section[0].style.boxShadow = '1px 3px 49px 13px rgba(255,244,242,0.61)';
            break;
          case 'gold':
            section[0].style.boxShadow = '1px 3px 49px 13px rgba(255,234,23,0.61)';
            break;
          case 'platinum':
            section[0].style.boxShadow = '1px 3px 49px 13px rgba(255,211,209,0.61)';
            break;
          default:
            break;
        }
      }
    });
  }
}
const acc = document.getElementsByClassName('accordion');
const accMobil = document.getElementsByClassName('accordion_mobil');

accord(acc, 'active');
accord(accMobil, 'active_arrow');

const cardsContainerSilver = document.querySelector('.silver__cards_box');
const cardsContainerGold = document.querySelector('.gold__cards_box');
const cardsContainerPlatinum = document.querySelector('.platinum__cards_box');

function createCard(id, price, state) {
  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('data', `${state}`);
  cardContainer.setAttribute('id', `${id * 10}`);
  const cardImageBox = document.createElement('div');
  cardImageBox.setAttribute('id', `${id}`);
  const cardPrise = document.createElement('div');
  cardPrise.textContent = price;
  const cardButton = document.createElement('div');
  const cardLink = document.createElement('a');
  cardLink.textContent = 'Buy NFT';
  cardLink.setAttribute('href', '#popup-form');
  cardButton.appendChild(cardLink);

  if (state) {
    cardContainer.style.filter = 'grayscale(100%)';
    cardLink.style.color = 'black';
    cardLink.textContent = 'SOLD';
    cardLink.style.cursor = 'not-allowed';
    cardLink.setAttribute('href', `#${id}`);
    cardButton.style.backgroundColor = 'white';
  }

  cardContainer.classList.add('card');
  cardImageBox.classList.add('card__imagebox');
  cardButton.classList.add('card__button');
  cardLink.classList.add('card__link');
  cardPrise.classList.add('card__price');

  cardContainer.appendChild(cardImageBox);
  cardContainer.appendChild(cardPrise);
  cardContainer.appendChild(cardButton);
  return cardContainer;
}

function counterNFTs(amount, kind) {
  const counter = document.getElementById(`${kind}-counter`);
  counter.textContent = `Available for purchase: ${amount} NFT`;
}

function getProducts(kind) {
  const getProductsKind = currentState.currentProducts.filter((item) => item.type === `${kind}` && !item.buy);
  return getProductsKind;
}

const productsSilver = getProducts('silver');
const productsGold = getProducts('gold');
const productsPlatinum = getProducts('platinum');

counterNFTs(productsSilver.length, 'silver');
counterNFTs(productsGold.length, 'gold');
counterNFTs(productsPlatinum.length, 'platinum');

function fillCards(arrayProducts, container) {
  for (let i = 0; i < arrayProducts.length; i += 1) {
    const cardCreated = createCard(`${arrayProducts[i].id}`, `${arrayProducts[i].price}₣`, arrayProducts[i].buy);
    cardCreated.addEventListener('click', () => {
      const conntainer = document.getElementById(`${arrayProducts[i].id * 10}`);
      const currentData = conntainer.getAttribute('data');
      const currentId = conntainer.getAttribute('id');
      currentState.currentBuy = currentData;
      currentState.currentId = currentId;
    });
    container.append(cardCreated);
    document.getElementById(`${arrayProducts[i].id}`).style.backgroundImage = `url(${arrayProducts[i].imageUrl})`;
  }
}

fillCards(productsSilver, cardsContainerSilver);
fillCards(productsGold, cardsContainerGold);
fillCards(productsPlatinum, cardsContainerPlatinum);

const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  function clear(className) {
    const errors = form.querySelectorAll(className);

    for (let i = 0; i < errors.length; i += 1) {
      errors[i].remove();
    }
  }

  clear('.error_phone');
  clear('.error_name');
  const isFirstName = (/^([a-z]+)$/).test(firstName.value); 
  const isLastName =(/^([a-z]+)$/).test(lastName.value);
  const isPhone = (/^\+?\d{13}$/).test(phone.value);

  if (!(isFirstName) || !(isLastName)) {
    const error = document.createElement('span');
    const field = document.getElementById('email');
    error.classList.add('error_name');
    error.style.color = 'red';
    error.textContent = 'Use only letters(fields: First Name, Last Name)';
    form.insertBefore(error, field);
  }

  if (!(isPhone)) {
    const error = document.createElement('span');
    const field = document.getElementById('logo-images');
    error.classList.add('error_phone');
    error.style.color = 'red';
    error.textContent = 'Use format "+48 328 4870 09 27"';
    form.insertBefore(error, field);
  }

  if (isFirstName && isLastName && isPhone) {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';

    const soldCard = currentState.currentProducts
      .find((item) => item.id === currentState.currentId / 10);
    if (!soldCard.buy) {
      soldCard.buy = true;
      getProducts(soldCard.type);
      counterNFTs(getProducts(soldCard.type).length, soldCard.type);
    }

    const containerSoldCard = document.getElementById(`${soldCard.id * 10}`);
    const boxButton = containerSoldCard.getElementsByClassName('card__button');
    const link = containerSoldCard.getElementsByClassName('card__link');
    containerSoldCard.style.filter = 'grayscale(100%)';
    link[0].style.color = 'black';
    link[0].textContent = 'SOLD';
    link[0].style.cursor = 'not-allowed';
    link[0].setAttribute('href', `#${currentState.currentId}`);
    boxButton[0].style.backgroundColor = 'white';
    currentState.currentName = soldCard.name;
    const currentName = document.getElementsByTagName('strong');
    currentName[0].textContent = currentState.currentName;
    window.document.location.hash = '#popup-thank';
  }
});

const togglerboxSilver = document.getElementsByClassName('silver__togglerbox');
const togglerSilver = document.getElementById('toggler-silver');
const togglerTextSilver = document.getElementById('toggler-silver-text');
const togglerboxGold = document.getElementsByClassName('gold__togglerbox');
const togglerGold = document.getElementById('toggler-gold');
const togglerTextGold = document.getElementById('toggler-gold-text');
const togglerboxPlatinum = document.getElementsByClassName('platinum__togglerbox');
const togglerPlatinum = document.getElementById('toggler-platinum');
const togglerTextPlatinum = document.getElementById('toggler-platinum-text');

function showOrHideSoldCards(box, switcher, switcherText, container, kind) {
  box[0].addEventListener('click', () => {
    const text = switcherText;
    const cards = container.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i += 1) {
      cards[i].remove();
    }

    if (switcher.checked) {
      text.textContent = 'Hide sold posters';

      const withoutSoldCards = currentState.currentProducts
        .filter((item) => !item.buy && item.type === kind);
      fillCards(withoutSoldCards, container);
      counterNFTs(withoutSoldCards.length, kind);
    } else {
      const allCards = currentState.currentProducts.filter((item) => item.type === kind);
      text.textContent = 'Show sold posters';
      fillCards(allCards, container);
    }
  });
}

showOrHideSoldCards(togglerboxSilver, togglerSilver, togglerTextSilver, cardsContainerSilver, 'silver');
showOrHideSoldCards(togglerboxGold, togglerGold, togglerTextGold, cardsContainerGold, 'gold');
showOrHideSoldCards(togglerboxPlatinum, togglerPlatinum, togglerTextPlatinum, cardsContainerPlatinum, 'platinum');

const buttonOk = document.getElementsByClassName('popup_thank__link');
buttonOk[0].addEventListener('click', () => {
  buttonOk[0].setAttribute('href', `#${currentState.currentId}`);
});
