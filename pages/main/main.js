// =======Burger menu MAIN====================

const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.burger-menu');
const originMenuClone = document.querySelector('.list').cloneNode(1);
const body = document.body;
const headerWrapper = document.querySelector('.header .wrapper');
const logo = document.querySelector('.logo');
const listLink = [...originMenuClone.children];
const shadowBlock = document.querySelector('.shadow');

burger.addEventListener('click', openMenuBurger);
listLink.forEach((el) => el.addEventListener('click', closeMenuBurger));
shadowBlock.addEventListener('click', closeMenuBurger);
// menuBurger.addEventListener('click', closeMenuBurger);

function openMenuBurger() {
  burger.classList.toggle('active');
	menuBurger.classList.toggle('open');
	headerWrapper.classList.toggle('header-active');
	logo.classList.toggle('logo-active');
	body.classList.toggle('noscroll');
	shadowBlock.classList.toggle('shadowing-on');
	fillMenuBurger();
}

function fillMenuBurger() {
  menuBurger.append(originMenuClone);
}

function closeMenuBurger() {
	burger.classList.remove('active');
	menuBurger.classList.remove('open');
	headerWrapper.classList.remove('header-active');
	logo.classList.remove('logo-active');
	body.classList.remove('noscroll');
	shadowBlock.classList.remove('shadowing-on');
}



// ===========CAROUSEL MAIN=======================================

const PETS_ARR = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];
const BTN_LEFT = document.querySelector('.pets__inner-slider-btn');
const BTN_LEFT_MOB = document.querySelector('.slider-btn');
const BTN_RIGHT = document.querySelector('.pets__inner-slider-btn-reverse');
const BTN_RIGHT_MOB = document.querySelector('.slider-btn-reverse');
const CAROUSEL = document.querySelector('#carousel');
const CARDS_ACTIVE = document.querySelector("#cards-active");
const CARDS_LEFT = document.querySelector("#cards-left");
const CARDS_RIGHT = document.querySelector("#cards-right");

let popupLinks = CARDS_ACTIVE.children;

let pets = [...PETS_ARR];
let arrayOfActive = [];
let arrayOfLeft = [];
let arrayOfRight = [];
let arrayWithouActive = [];
let arrayWithouActiveLeft = [];
let arrayWithouActiveRight = [];
let petsLeftRemains = [];
let petsRightRemains = [];



const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_LEFT_MOB.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_RIGHT_MOB.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_LEFT_MOB.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_RIGHT_MOB.removeEventListener("click", moveRight);
};


BTN_LEFT.addEventListener("click", moveLeft);
BTN_LEFT_MOB.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);
BTN_RIGHT_MOB.addEventListener("click", moveRight);

BTN_LEFT.addEventListener("click", () => {
	popupLinks = document.querySelectorAll('.pets-card__item');
});
BTN_LEFT_MOB.addEventListener("click", () => {
	popupLinks = document.querySelectorAll('.pets-card__item');
});
BTN_RIGHT.addEventListener("click", () => {
	popupLinks = document.querySelectorAll('.pets-card__item');
});
BTN_RIGHT_MOB.addEventListener("click", () => {
	popupLinks = document.querySelectorAll('.pets-card__item');
});


function createActiveCard() {
	const card = document.createElement('div')
  card.classList.add('pets-card__item');
  const image = document.createElement('img');
  image.classList.add('pets-card__item-image')
  const content = document.createElement('div.');
  content.classList.add('pets-card__item-content');
  const name = document.createElement('h4');
  name.classList.add('pets-card__item-content-title')
  const btn = document.createElement('button');
  btn.classList.add('pets-card__item-content-button');
  let animalRandom = pets.splice([Math.floor(Math.random() * pets.length)],1)[0];
	arrayOfActive.push(animalRandom);
	arrayWithouActive = [...pets];
  image.src = animalRandom.img;
  name.innerHTML =  animalRandom.name;
  btn.innerHTML = "Learn more";
  content.appendChild(name);
  content.appendChild(btn);
  card.appendChild(image);
  card.appendChild(content);
  return card;
}

function createCardLeft () {
  const card = document.createElement('div')
  card.classList.add('pets-card__item');
  const image = document.createElement('img');
  image.classList.add('pets-card__item-image')
  const content = document.createElement('div.');
  content.classList.add('pets-card__item-content');
  const name = document.createElement('h4');
  name.classList.add('pets-card__item-content-title')
  const btn = document.createElement('button');
  btn.classList.add('pets-card__item-content-button');
  let animalRandom = arrayWithouActiveLeft.splice([Math.floor(Math.random() * arrayWithouActiveLeft.length)],1)[0];
	arrayOfLeft.push(animalRandom);
	petsLeftRemains = [...arrayWithouActiveLeft];
  image.src = animalRandom.img;
  name.innerHTML =  animalRandom.name;
  btn.innerHTML = "Learn more";
  content.appendChild(name);
  content.appendChild(btn);
  card.appendChild(image);
  card.appendChild(content);
  return card;
}

function createCardRight () {
  const card = document.createElement('div')
  card.classList.add('pets-card__item');
  const image = document.createElement('img');
  image.classList.add('pets-card__item-image')
  const content = document.createElement('div.');
  content.classList.add('pets-card__item-content');
  const name = document.createElement('h4');
  name.classList.add('pets-card__item-content-title')
  const btn = document.createElement('button');
  btn.classList.add('pets-card__item-content-button');
	let animalRandom = arrayWithouActiveRight.splice([Math.floor(Math.random() * arrayWithouActiveRight.length)],1)[0];
	arrayOfRight.push(animalRandom);
	petsRightRemains = [...arrayWithouActiveRight];
  image.src = animalRandom.img;
  name.innerHTML =  animalRandom.name;
  btn.innerHTML = "Learn more";
  content.appendChild(name);
  content.appendChild(btn);
  card.appendChild(image);
  card.appendChild(content);
  return card;
}


CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = CARDS_RIGHT;
		CARDS_LEFT.innerHTML = CARDS_ACTIVE.innerHTML;
    CARDS_ACTIVE.innerHTML = CARDS_RIGHT.innerHTML;
		arrayWithouActive = arrayOfActive.concat(petsRightRemains);
		arrayOfLeft = [...arrayOfActive];
		arrayOfActive = [...arrayOfRight];
		arrayOfRight = [];
		arrayWithouActiveRight = [...arrayWithouActive];
		petsLeftRemains = [...petsRightRemains];
		changedItem.innerHTML = "";
		for (let i = 0; i < 3; i++) {
			const card = createCardRight();
    	changedItem.appendChild(card);
		}
  	} else {
			CAROUSEL.classList.remove("transition-right");
			changedItem = CARDS_LEFT;
			CARDS_RIGHT.innerHTML = CARDS_ACTIVE.innerHTML;
			CARDS_ACTIVE.innerHTML = CARDS_LEFT.innerHTML;
			arrayWithouActive = arrayOfActive.concat(petsLeftRemains);
			arrayOfRight = [...arrayOfActive];
			arrayOfActive = [...arrayOfLeft];
			arrayOfLeft = [];
			arrayWithouActiveLeft = [...arrayWithouActive];
			petsRightRemains = [...petsLeftRemains];
			changedItem.innerHTML = "";
			for (let i = 0; i < 3; i++) {
				const card = createCardLeft();
				changedItem.appendChild(card);
			}
  	}
 

		// [...CARDS_ACTIVE.children].forEach(el => addEventListener('click', popupOpen));
		popupLinks = CARDS_ACTIVE.children;
		[...popupLinks].forEach(el => el.addEventListener('click', popupOpen));
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
  BTN_LEFT_MOB.addEventListener("click", moveLeft);
  BTN_RIGHT_MOB.addEventListener("click", moveRight);
  
})


function cardsStartCreate () {

	
	//  ACTIVE============

  for (let i = 0; i < 3; i++) {
    const card = createActiveCard();
    CARDS_ACTIVE.appendChild(card);
  }

	arrayWithouActiveLeft = [...arrayWithouActive];
	arrayWithouActiveRight = [...arrayWithouActive];

// LEFT============

	for (let i = 0; i < 3; i++) {
		const card = createCardLeft();
		CARDS_LEFT.appendChild(card);
	}  

	// RIGHT============

  for (let i = 0; i < 3; i++) {
    const card = createCardRight();
    CARDS_RIGHT.appendChild(card);

  }

}


window.onload = cardsStartCreate();



// ============POPUP MAIN==============================================


[...popupLinks].forEach(el => el.addEventListener('click', popupOpen));
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupCloseBtn = document.querySelector('.popup__content-close');
const popupBody = document.querySelector('.popup__body');



popupBody.onmouseover = (e) => {
  if (e.target === e.currentTarget) {
    popupCloseBtn.classList.add('hovered');
  }
 
}

popupBody.onmouseout = (e) => {
  if (e.target === e.currentTarget) {
    popupCloseBtn.classList.remove('hovered');

  }
  
}


popupBody.addEventListener('click', (event) => {
	if (!event.target.closest('.popup__content-inner') ) {
		popupClose();
		console.log(event.currentTarget)
		console.log(event.target)
	}
})






popupCloseBtn.addEventListener('click', popupClose);



function popupOpen (event) {
  popup.classList.add('openPopup');
  popupContent.classList.add('openContent');
	body.classList.add('noscroll');
	fillPopup(event);
  popupBody.onmouseout = (e) => {
    if (e.target === e.currentTarget) {
      popupCloseBtn.classList.remove('hovered');
  
    }
    
  }
  
  
  popupBody.addEventListener('click', (event) => {
    if (!event.target.closest('.popup__content-inner') ) {
      popupClose();
      console.log(event.currentTarget)
      console.log(event.target)
    }
  })
  
}

function popupClose () {
  popup.classList.remove('openPopup');
  popupContent.classList.remove('openContent');
	body.classList.remove('noscroll');
}

function fillPopup (event) {
	for (let i = 0; i < CARDS_ACTIVE.children.length; i++) {
		if (event.currentTarget === CARDS_ACTIVE.children[i]) {
			document.querySelector('.animal__name').textContent = arrayOfActive[i].name
			document.querySelector('.animal__image').src = arrayOfActive[i].img
			document.querySelector('.animal__type').textContent = `${arrayOfActive[i].type} - ${arrayOfActive[0].breed}`
			document.querySelector('.animal__description').textContent = arrayOfActive[i].description
			document.querySelector('.type-age').textContent = `Age: ${arrayOfActive[i].age}`
			document.querySelector('.type-inocul').textContent = `Inoculations: ${arrayOfActive[i].inoculations}`
			document.querySelector('.type-disease').textContent = `Diseases: ${arrayOfActive[i].diseases}`
			document.querySelector('.type-parasite').textContent = `Parasites: ${arrayOfActive[i].parasites}`
		}
	}

}


