const products = [
  {
    type: 'silver',
    id: 20,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTY3NjQwNDMwNV5BMl5BanBnXkFtZTcwNjE3ODgyMQ@@._V1_SX300.jpg',
    name: 'Motorola XOOM™ with Wi-Fi',
    price: 780,
    buy: false,
  },
  {
    type: 'gold',
    id: 1,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg',
    name: 'MOTOROLA XOOM™',
    price: 910,
    buy: false,
  },
  {
    type: 'silver',
    id: 2,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg',
    name: 'MOTOROLA ATRIX™ 4G',
    price: 430,
    buy: false,
  },
  {
    type: 'gold',
    id: 3,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg',
    name: 'Dell Streak 7',
    price: 150,
    buy: false,
  },
  {
    type: 'gold',
    id: 4,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg',
    name: 'Samsung Gem™',
    price: 560,
    buy: false,
  },
  {
    type: 'silver',
    id: 5,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGNlMjQ1OWYtZDhiYS00M2I1LThjYTAtODIwNDEzODBmODhhXkEyXkFqcGdeQXVyNTM1MDU3Mw@@._V1_SX300.jpg',
    name: 'Dell Venue',
    price: 300,
    buy: false,
  },
  {
    type: 'silver',
    id: 6,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjlkYWZjYmUtOTQ0MS00OWQzLWIwYjUtNzZhMzE1OWNiYWRmXkEyXkFqcGdeQXVyNjQzMjI0NDY@._V1_SX300.jpg',
    name: 'Nexus S',
    price: 480,
    buy: false,
  },
  {
    type: 'silver',
    id: 7,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    name: 'LG Axis',
    price: 590,
    buy: false,
  },
  {
    type: 'gold',
    id: 8,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc0NjI0NTI5MF5BMl5BanBnXkFtZTcwNDA0OTU5Mw@@._V1_SX300.jpg',
    name: 'Samsung Galaxy Tab™',
    price: 190,
    buy: false,
  },
  {
    type: 'silver',
    id: 9,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZmRjNDI5NTgtOTIwMC00MzJhLWI4ZTYtMmU0ZTE3ZmRkZDNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    name: 'Samsung Showcase™ a Galaxy S™ phone',
    price: 350,
    buy: false,
  },
  {
    type: 'silver',
    id: 10,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTU5MTExMDkyMV5BMl5BanBnXkFtZTcwNjA3NzgyMQ@@._V1_SX300.jpg',
    name: 'DROID™ 2 Global by Motorola',
    price: 350,
    buy: false,
  },
  {
    type: 'silver',
    id: 11,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
    name: 'DROID™ Pro by Motorola',
    price: 740,
    buy: false,
  },
  {
    type: 'silver',
    id: 12,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDhlZmRlNmMtYmMyYy00Zjg0LWI0ZmQtYzNiNWM5YTU4YTI3XkEyXkFqcGdeQXVyNjQ0NjY3MDY@._V1_SX300.jpg',
    name: 'MOTOROLA BRAVO™ with MOTOBLUR™',
    price: 250,
    buy: false,
  },
  {
    type: 'platinum',
    id: 13,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
    name: 'Motorola DEFY™ with MOTOBLUR™',
    price: 920,
    buy: false,
  },
  {
    type: 'silver',
    id: 14,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTM5Njc5ZTYtYzk1OS00ZmIxLTlkOTAtZmE3MjBiNjQ4MWQyXkEyXkFqcGdeQXVyNjIyNDgwMzM@._V1_SX300.jpg',
    name: 'T-Mobile myTouch 4G',
    price: 390,
    buy: false,
  },
  {
    type: 'silver',
    id: 15,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOGY5ZmM0MmMtZmEzOS00YjA0LTk5OGYtNjYwYTdlMjFkMGY2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    name: 'Samsung Mesmerize™ a Galaxy S™ phone',
    price: 960,
    buy: false,
  },
  {
    type: 'silver',
    id: 16,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjUwYjc1MzQtYTRkYi00YmI2LThiMWMtMmU1NDllNWQ4ZjM5XkEyXkFqcGdeQXVyMDQwNzMzMQ@@._V1_SX300.jpg',
    name: 'SANYO ZIO',
    price: 750,
    buy: false,
  },
  {
    type: 'platinum',
    id: 17,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc0NDM4ODU2Nl5BMl5BanBnXkFtZTcwNzQ0NTg4Ng@@._V1_SX300.jpg',
    name: 'Samsung Transform™',
    price: 30,
    buy: false,
  },
  {
    type: 'silver',
    id: 18,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg',
    name: 'T-Mobile G2',
    price: 640,
    buy: false,
  },
  {
    type: 'silver',
    id: 19,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzliYjM0NzgtNWM2Mi00YTVkLWE4NzUtNGYxY2IyMjY5OTgzXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_SX300.jpg',
    name: 'Motorola CHARM™ with MOTOBLUR™',
    price: 400,
    buy: false,
  },
];

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
  const errors = form.querySelectorAll('.error');

  for (let i = 0; i < errors.length; i += 1) {
    errors[i].remove();
  }

  if (!((/^([a-z]+)$/).test(firstName.value)) || !((/^([a-z]+)$/).test(lastName.value))) {
    const error = document.createElement('div');
    form.appendChild(error);
    error.classList.add('error');
    error.style.color = 'red';
    error.textContent = 'You should use only letters(fields: First Name, Last Name)';
  }

  if (!((/^\+?\d{2}\s\d{3}\s\d{4}\s\d{2}\s\d{2}$/).test(phone.value))) {
    const error = document.createElement('div');
    form.appendChild(error);
    error.classList.add('error');
    error.style.color = 'red';
    error.textContent = 'You should use pattern like this "+48 328 4870 09 27"';
  } else {
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
