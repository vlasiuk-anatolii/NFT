// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"api/products.json":[function(require,module,exports) {
module.exports = [{
  "type": "silver",
  "id": 20,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTY3NjQwNDMwNV5BMl5BanBnXkFtZTcwNjE3ODgyMQ@@._V1_SX300.jpg",
  "name": "Motorola XOOM™ with Wi-Fi",
  "price": 780,
  "buy": false
}, {
  "type": "gold",
  "id": 1,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
  "name": "MOTOROLA XOOM™",
  "price": 910,
  "buy": false
}, {
  "type": "silver",
  "id": 2,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
  "name": "MOTOROLA ATRIX™ 4G",
  "price": 430,
  "buy": false
}, {
  "type": "gold",
  "id": 3,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
  "name": "Dell Streak 7",
  "price": 150,
  "buy": false
}, {
  "type": "gold",
  "id": 4,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
  "name": "Samsung Gem™",
  "price": 560,
  "buy": false
}, {
  "type": "silver",
  "id": 5,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BNGNlMjQ1OWYtZDhiYS00M2I1LThjYTAtODIwNDEzODBmODhhXkEyXkFqcGdeQXVyNTM1MDU3Mw@@._V1_SX300.jpg",
  "name": "Dell Venue",
  "price": 300,
  "buy": false
}, {
  "type": "silver",
  "id": 6,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjlkYWZjYmUtOTQ0MS00OWQzLWIwYjUtNzZhMzE1OWNiYWRmXkEyXkFqcGdeQXVyNjQzMjI0NDY@._V1_SX300.jpg",
  "name": "Nexus S",
  "price": 480,
  "buy": false
}, {
  "type": "silver",
  "id": 7,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  "name": "LG Axis",
  "price": 590,
  "buy": false
}, {
  "type": "gold",
  "id": 8,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTc0NjI0NTI5MF5BMl5BanBnXkFtZTcwNDA0OTU5Mw@@._V1_SX300.jpg",
  "name": "Samsung Galaxy Tab™",
  "price": 190,
  "buy": false
}, {
  "type": "silver",
  "id": 9,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BZmRjNDI5NTgtOTIwMC00MzJhLWI4ZTYtMmU0ZTE3ZmRkZDNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "name": "Samsung Showcase™ a Galaxy S™ phone",
  "price": 350,
  "buy": false
}, {
  "type": "silver",
  "id": 10,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTU5MTExMDkyMV5BMl5BanBnXkFtZTcwNjA3NzgyMQ@@._V1_SX300.jpg",
  "name": "DROID™ 2 Global by Motorola",
  "price": 350,
  "buy": false
}, {
  "type": "silver",
  "id": 11,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  "name": "DROID™ Pro by Motorola",
  "price": 740,
  "buy": false
}, {
  "type": "silver",
  "id": 12,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BZDhlZmRlNmMtYmMyYy00Zjg0LWI0ZmQtYzNiNWM5YTU4YTI3XkEyXkFqcGdeQXVyNjQ0NjY3MDY@._V1_SX300.jpg",
  "name": "MOTOROLA BRAVO™ with MOTOBLUR™",
  "price": 250,
  "buy": false
}, {
  "type": "platinum",
  "id": 13,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg",
  "name": "Motorola DEFY™ with MOTOBLUR™",
  "price": 920,
  "buy": false
}, {
  "type": "silver",
  "id": 14,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BOTM5Njc5ZTYtYzk1OS00ZmIxLTlkOTAtZmE3MjBiNjQ4MWQyXkEyXkFqcGdeQXVyNjIyNDgwMzM@._V1_SX300.jpg",
  "name": "T-Mobile myTouch 4G",
  "price": 390,
  "buy": false
}, {
  "type": "silver",
  "id": 15,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BOGY5ZmM0MmMtZmEzOS00YjA0LTk5OGYtNjYwYTdlMjFkMGY2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  "name": "Samsung Mesmerize™ a Galaxy S™ phone",
  "price": 960,
  "buy": false
}, {
  "type": "silver",
  "id": 16,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BZjUwYjc1MzQtYTRkYi00YmI2LThiMWMtMmU1NDllNWQ4ZjM5XkEyXkFqcGdeQXVyMDQwNzMzMQ@@._V1_SX300.jpg",
  "name": "SANYO ZIO",
  "price": 750,
  "buy": false
}, {
  "type": "platinum",
  "id": 17,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTc0NDM4ODU2Nl5BMl5BanBnXkFtZTcwNzQ0NTg4Ng@@._V1_SX300.jpg",
  "name": "Samsung Transform™",
  "price": 30,
  "buy": false
}, {
  "type": "silver",
  "id": 18,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg",
  "name": "T-Mobile G2",
  "price": 640,
  "buy": false
}, {
  "type": "silver",
  "id": 19,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMzliYjM0NzgtNWM2Mi00YTVkLWE4NzUtNGYxY2IyMjY5OTgzXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_SX300.jpg",
  "name": "Motorola CHARM™ with MOTOBLUR™",
  "price": 400,
  "buy": false
}];
},{}],"scripts/main.js":[function(require,module,exports) {
"use strict";

var _products = _interopRequireDefault(require("../api/products.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.document.location.hash = '#';
var currentState = {
  currentId: 0,
  currentBuy: false,
  currentProducts: _toConsumableArray(_products.default),
  currentName: ''
};

function accord(array, classActiveName) {
  for (var i = 0; i < array.length; i += 1) {
    array[i].addEventListener('click', function accordion() {
      this.classList.toggle("".concat(classActiveName));
      var kind = this.classList[0].match(/silver|gold|platinum/);
      var panel = document.getElementById(kind[0]);
      var section = document.getElementsByClassName("".concat(kind[0], "__box"));

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        section[0].style.boxShadow = 'inset 1px 0px 30px 0.5px rgba(255,255,255,0.24)';
      } else {
        panel.style.maxHeight = "".concat(panel.scrollHeight, "px");

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

var acc = document.getElementsByClassName('accordion');
var accMobil = document.getElementsByClassName('accordion_mobil');
accord(acc, 'active');
accord(accMobil, 'active_arrow');
var cardsContainerSilver = document.querySelector('.silver__cards_box');
var cardsContainerGold = document.querySelector('.gold__cards_box');
var cardsContainerPlatinum = document.querySelector('.platinum__cards_box');

function createCard(id, price, state) {
  var cardContainer = document.createElement('div');
  cardContainer.setAttribute('data', "".concat(state));
  cardContainer.setAttribute('id', "".concat(id * 10));
  var cardImageBox = document.createElement('div');
  cardImageBox.setAttribute('id', "".concat(id));
  var cardPrise = document.createElement('div');
  cardPrise.textContent = price;
  var cardButton = document.createElement('div');
  var cardLink = document.createElement('a');
  cardLink.textContent = 'Buy NFT';
  cardLink.setAttribute('href', '#popup-form');
  cardButton.appendChild(cardLink);

  if (state) {
    cardContainer.style.filter = 'grayscale(100%)';
    cardLink.style.color = 'black';
    cardLink.textContent = 'SOLD';
    cardLink.style.cursor = 'not-allowed';
    cardLink.setAttribute('href', "#".concat(id));
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
  var counter = document.getElementById("".concat(kind, "-counter"));
  counter.textContent = "Available for purchase: ".concat(amount, " NFT");
}

function getProducts(kind) {
  var getProductsKind = currentState.currentProducts.filter(function (item) {
    return item.type === "".concat(kind) && !item.buy;
  });
  return getProductsKind;
}

var productsSilver = getProducts('silver');
var productsGold = getProducts('gold');
var productsPlatinum = getProducts('platinum');
counterNFTs(productsSilver.length, 'silver');
counterNFTs(productsGold.length, 'gold');
counterNFTs(productsPlatinum.length, 'platinum');

function fillCards(arrayProducts, container) {
  var _loop = function _loop(i) {
    var cardCreated = createCard("".concat(arrayProducts[i].id), "".concat(arrayProducts[i].price, "\u20A3"), arrayProducts[i].buy);
    cardCreated.addEventListener('click', function () {
      var conntainer = document.getElementById("".concat(arrayProducts[i].id * 10));
      var currentData = conntainer.getAttribute('data');
      var currentId = conntainer.getAttribute('id');
      currentState.currentBuy = currentData;
      currentState.currentId = currentId;
    });
    container.append(cardCreated);
    document.getElementById("".concat(arrayProducts[i].id)).style.backgroundImage = "url(".concat(arrayProducts[i].imageUrl, ")");
  };

  for (var i = 0; i < arrayProducts.length; i += 1) {
    _loop(i);
  }
}

fillCards(productsSilver, cardsContainerSilver);
fillCards(productsGold, cardsContainerGold);
fillCards(productsPlatinum, cardsContainerPlatinum);
var form = document.getElementById('form');
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  function clear(className) {
    var errors = form.querySelectorAll(className);

    for (var i = 0; i < errors.length; i += 1) {
      errors[i].remove();
    }
  }

  clear('.error_phone');
  clear('.error_name');
  var isFirstName = /^([a-z]+)$/.test(firstName.value);
  var isLastName = /^([a-z]+)$/.test(lastName.value);
  var isPhone = /^\+?\d{13}$/.test(phone.value);

  if (!isFirstName || !isLastName) {
    var error = document.createElement('span');
    var field = document.getElementById('email');
    error.classList.add('error_name');
    error.style.color = 'red';
    error.textContent = 'Use only letters(fields: First Name, Last Name)';
    form.insertBefore(error, field);
  }

  if (!isPhone) {
    var _error = document.createElement('span');

    var _field = document.getElementById('logo-images');

    _error.classList.add('error_phone');

    _error.style.color = 'red';
    _error.textContent = 'Use format "+48 328 4870 09 27"';
    form.insertBefore(_error, _field);
  }

  if (isFirstName && isLastName && isPhone) {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    var soldCard = currentState.currentProducts.find(function (item) {
      return item.id === currentState.currentId / 10;
    });

    if (!soldCard.buy) {
      soldCard.buy = true;
      getProducts(soldCard.type);
      counterNFTs(getProducts(soldCard.type).length, soldCard.type);
    }

    var containerSoldCard = document.getElementById("".concat(soldCard.id * 10));
    var boxButton = containerSoldCard.getElementsByClassName('card__button');
    var link = containerSoldCard.getElementsByClassName('card__link');
    containerSoldCard.style.filter = 'grayscale(100%)';
    link[0].style.color = 'black';
    link[0].textContent = 'SOLD';
    link[0].style.cursor = 'not-allowed';
    link[0].setAttribute('href', "#".concat(currentState.currentId));
    boxButton[0].style.backgroundColor = 'white';
    currentState.currentName = soldCard.name;
    var currentName = document.getElementsByTagName('strong');
    currentName[0].textContent = currentState.currentName;
    window.document.location.hash = '#popup-thank';
  }
});
var togglerboxSilver = document.getElementsByClassName('silver__togglerbox');
var togglerSilver = document.getElementById('toggler-silver');
var togglerTextSilver = document.getElementById('toggler-silver-text');
var togglerboxGold = document.getElementsByClassName('gold__togglerbox');
var togglerGold = document.getElementById('toggler-gold');
var togglerTextGold = document.getElementById('toggler-gold-text');
var togglerboxPlatinum = document.getElementsByClassName('platinum__togglerbox');
var togglerPlatinum = document.getElementById('toggler-platinum');
var togglerTextPlatinum = document.getElementById('toggler-platinum-text');

function showOrHideSoldCards(box, switcher, switcherText, container, kind) {
  box[0].addEventListener('click', function () {
    var text = switcherText;
    var cards = container.querySelectorAll('.card');

    for (var i = 0; i < cards.length; i += 1) {
      cards[i].remove();
    }

    if (switcher.checked) {
      text.textContent = 'Hide sold posters';
      var withoutSoldCards = currentState.currentProducts.filter(function (item) {
        return !item.buy && item.type === kind;
      });
      fillCards(withoutSoldCards, container);
      counterNFTs(withoutSoldCards.length, kind);
    } else {
      var allCards = currentState.currentProducts.filter(function (item) {
        return item.type === kind;
      });
      text.textContent = 'Show sold posters';
      fillCards(allCards, container);
    }
  });
}

showOrHideSoldCards(togglerboxSilver, togglerSilver, togglerTextSilver, cardsContainerSilver, 'silver');
showOrHideSoldCards(togglerboxGold, togglerGold, togglerTextGold, cardsContainerGold, 'gold');
showOrHideSoldCards(togglerboxPlatinum, togglerPlatinum, togglerTextPlatinum, cardsContainerPlatinum, 'platinum');
var buttonOk = document.getElementsByClassName('popup_thank__link');
buttonOk[0].addEventListener('click', function () {
  buttonOk[0].setAttribute('href', "#".concat(currentState.currentId));
});
},{"../api/products.json":"api/products.json"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54550" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","scripts/main.js"], null)
//# sourceMappingURL=/main.d8ebb8d6.js.map