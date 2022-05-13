// =======Burger menu PETS====================
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



const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.burger-menu');
const originMenuClone = document.querySelector('.list').cloneNode(1);
const body = document.body;
const headerWrapper = document.querySelector('.pets-header .wrapper');
const logo = document.querySelector('.logo');
const notOnlySection = document.querySelector('.not-only');
const listLink = [...originMenuClone.children];
const shadowBlock = document.querySelector('.shadow');
const petsHeader = document.querySelector('.pets-header');

let pets = [...PETS_ARR]
	let ARRAY_PAG = [[], [], [], [], [], []];
	if (window.matchMedia("(max-width: 1279px)").matches) {
		ARRAY_PAG = [[], [], [], [], [], [], [], []];
	}
	if (window.matchMedia("(max-width: 767px)").matches) {
		ARRAY_PAG = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
	}
	let activePag = [[], [], [], [], [], []];
	
	if (window.matchMedia("(max-width: 1279px)").matches) {
		activePag = [[], [], [], [], [], [], [], []];
	}
	if (window.matchMedia("(max-width: 767px)").matches) {
		activePag =  [[],[],[],[],[],[],[],[],
									[],[],[],[],[],[],[],[]];
	}

burger.addEventListener('click', openMenuBurger);
logo.addEventListener('click', closeMenuBurger);
originMenuClone.addEventListener('click', closeMenuBurger);
listLink.forEach(el => {
	el.addEventListener('click', closeMenuBurger)
});
shadowBlock.addEventListener('click', closeMenuBurger);



function openMenuBurger() {
  burger.classList.toggle('active');
	menuBurger.classList.toggle('open');
	headerWrapper.classList.toggle('header-active');
	logo.classList.toggle('logo-active');
	body.classList.toggle('noscroll');
	shadowBlock.classList.toggle('shadowing-on');
	petsHeader.classList.toggle('header-shadow');
	fillMenuBurger();
}

function fillMenuBurger() {
  menuBurger.append(originMenuClone);
}


function closeMenuBurger(event) {
	burger.classList.remove('active');
	menuBurger.classList.remove('open');
	headerWrapper.classList.remove('header-active');
	logo.classList.remove('logo-active');
	body.classList.remove('noscroll');
	shadowBlock.classList.remove('shadowing-on');
	petsHeader.classList.remove('header-shadow');
	}

// ============POPUP PETS==============================================

let PAG_CAROUSEL = document.querySelector('.cards__carousel')
// let popupLinks = PAG_CAROUSEL.children;
let popupLinks = document.querySelectorAll('.pets-card');

[...popupLinks].forEach(el => el.addEventListener('click', popupOpen));
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

document.querySelector('.popup__body').addEventListener('click', (event) => {
	if (!event.target.closest('.popup__content-inner') ) {
		popupClose();
		console.log(event.currentTarget)
		console.log(event.target)
	}
})

// document.querySelector('.popup__body').addEventListener('mouseup', (event) => {
// 	if (!event.target.closest('.popup__content-inner') ) {
// 		popupCloseBtn.classList.add('popup__content-close :hover');
// 		// popupCloseBtn.style = ' background-color: $color-ligth'
// 		// popupCloseBtn.style = ' box-shadow: none'
// 		console.log(event.currentTarget)
// 		console.log(event.target)
// 	}
// })

const popupCloseBtn = document.querySelector('.popup__content-close');
popupCloseBtn.addEventListener('click', popupClose);




function popupOpen (event) {
  popup.classList.add('openPopup');
  popupContent.classList.add('openContent');
	body.classList.add('noscroll');
	// console.log(event.currentTarget)
	// console.log(event.target)
	fillPopup(event);

}

function popupClose () {
  popup.classList.remove('openPopup');
  popupContent.classList.remove('openContent');
	body.classList.remove('noscroll');
}
let arr = [...popupLinks];
let arrCheck = [[],[],[],[],[],[]];



function fillPopup (event) {

		
		for (let i = 0; i < pagesNumber; i++) {
			for ( let j = 0; j < animalsOnPage; j++) {

		

			if (event.currentTarget.children[1].children[0].textContent === ARRAY_PAG[i][j].name) {
				document.querySelector('.animal__name').textContent = ARRAY_PAG[i][j].name
				document.querySelector('.animal__image').src = ARRAY_PAG[i][j].img
				document.querySelector('.animal__type').textContent = `${ARRAY_PAG[i][j].type} - ${ARRAY_PAG[i][j].breed}`
				document.querySelector('.animal__description').textContent = ARRAY_PAG[i][j].description
				document.querySelector('.type-age').textContent = `Age: ${ARRAY_PAG[i][j].age}`
				document.querySelector('.type-inocul').textContent = `Inoculations: ${ARRAY_PAG[i][j].inoculations}`
				document.querySelector('.type-disease').textContent = `Diseases: ${ARRAY_PAG[i][j].diseases}`
				document.querySelector('.type-parasite').textContent = `Parasites: ${ARRAY_PAG[i][j].parasites}`
				}
			}
		}

	}


		








	//===========PAGINATION PETS=======================

	// const PAG_CAROUSEL = document.querySelector('.cards__carousel')

	const PAG_BTN_LEFT_END = document.querySelector('.pag-left-end')
	const PAG_BTN_LEFT = document.querySelector('.pag-left')
	const PAG_BTN_CENTER = document.querySelector('.pag-center')
	const PAG_BTN_RIGHT = document.querySelector('.pag-right')
	const PAG_BTN_RIGHT_END = document.querySelector('.pag-right-end')
	const page = document.querySelector('main__pets-cards');
	
	let currentClassLeft = 'current-left1';
	let currentPageNumber = 1;
	let pagesNumber = 6;
	if (window.matchMedia("(max-width: 1279px)").matches) {
		pagesNumber = 8;
	}
	if (window.matchMedia("(max-width: 767px)").matches) {
		pagesNumber = 16;
	}
	let animalsOnPage = 8;
	if (window.matchMedia("(max-width: 1279px)").matches) {
		animalsOnPage = 6;
	}
	if (window.matchMedia("(max-width: 767px)").matches) {
		animalsOnPage = 3;
	}


	PAG_BTN_CENTER.textContent = currentPageNumber;

	function randomPagination () {
		PAG_CAROUSEL = document.querySelector('.cards__carousel');
		for (let j = 0; j < pagesNumber; j++) {
			pets = [...PETS_ARR];
			let blockCards = document.createElement('div');
			blockCards.classList.add('main__pets-cards');
			PAG_CAROUSEL.append(blockCards);
			for (let i = 0; i < animalsOnPage; i++) {
				ARRAY_PAG[j].push(pets.splice([Math.floor(Math.random() * pets.length)],1)[0])
			}
		}


	}
	window.onload = randomPagination();

	function cardsPagCreate () {

		for (let i = 0; i < pagesNumber; i++) {
			let arr = [...ARRAY_PAG[i]];
			for (let j = 0; j < animalsOnPage; j++) {
				let animalRandom =arr.splice([Math.floor(Math.random() * arr.length)],1)[0];
				activePag[i].push(animalRandom);
				const card = document.createElement('div');
				card.classList.add('pets-card');
				const image = document.createElement('img');
				image.classList.add('pets-card__image')
				const content = document.createElement('div');
				content.classList.add('pets-card__content');
				const name = document.createElement('h4');
				name.classList.add('pets-card__title')
				const btn = document.createElement('button');
				btn.classList.add('pets-card__button');
				image.src = animalRandom.img;
				name.innerHTML =  animalRandom.name;
				btn.innerHTML = "Learn more";
				content.append(name, btn);
				card.append(image, content);
				PAG_CAROUSEL.children[i].append(card);
			}
		}
	
		popupLinks = document.querySelectorAll('.pets-card');
		[...popupLinks].forEach(el => el.addEventListener('click', popupOpen));	
	}

	window.onload = cardsPagCreate();


	function positionLeft () {
		for (let i = 1; i <= pagesNumber; i++) {
			if (currentPageNumber === i) {
				PAG_CAROUSEL.classList.add(`current-left${i}`);
				currentClassLeft = `current-left${i}`;

				if (window.matchMedia("(max-width: 1279px)").matches) {
					PAG_CAROUSEL.classList.add(`current768-left${i}`);
					currentClassLeft = `current768-left${i}`;
				}
				if (window.matchMedia("(max-width: 767px)").matches) {
					PAG_CAROUSEL.classList.add(`current320-left${i}`);
					currentClassLeft = `current320-left${i}`;
				}
			}
		}
	}


	function disabledAdd () {

		if (currentPageNumber === 1) {
			PAG_BTN_LEFT.setAttribute('disabled', 'disabled')
			PAG_BTN_LEFT_END.setAttribute('disabled', 'disabled')
			PAG_BTN_RIGHT_END.removeAttribute('disabled', 'disabled')
			PAG_BTN_RIGHT.removeAttribute('disabled', 'disabled')

		} else if (currentPageNumber === pagesNumber) {
			PAG_BTN_RIGHT.setAttribute('disabled', 'disabled')
			PAG_BTN_RIGHT_END.setAttribute('disabled', 'disabled')
			PAG_BTN_LEFT_END.removeAttribute('disabled', 'disabled')
			PAG_BTN_LEFT.removeAttribute('disabled', 'disabled')
		} else {
			PAG_BTN_RIGHT.removeAttribute('disabled', 'disabled')
			PAG_BTN_RIGHT_END.removeAttribute('disabled', 'disabled')
			PAG_BTN_LEFT.removeAttribute('disabled', 'disabled')
			PAG_BTN_LEFT_END.removeAttribute('disabled', 'disabled')
		}
		
	}


	const moveRight = () => {
		PAG_CAROUSEL.classList.remove(`${currentClassLeft}`);
		currentPageNumber += 1 ;
		positionLeft();
		disabledAdd();
		// PAG_CAROUSEL.classList.remove(`${currentClassLeft}`);
		// PAG_CAROUSEL.classList.add("transition-right");
		// PAG_BTN_LEFT.removeEventListener("click", moveLeft);
		// PAG_BTN_LEFT_END.removeEventListener("click", moveLeft);
		// PAG_BTN_RIGHT.removeEventListener("click", moveRight);
		// PAG_BTN_RIGHT_END.removeEventListener("click", moveRight);


	};
	const moveRightEnd = () => {
		PAG_CAROUSEL.classList.remove(`${currentClassLeft}`);
		currentPageNumber = pagesNumber ;
		positionLeft();
		disabledAdd();
		// PAG_CAROUSEL.classList.remove(`${currentClassLeft}`);
		// PAG_CAROUSEL.classList.add("transition-right");
		// PAG_BTN_LEFT.removeEventListener("click", moveLeft);
		// PAG_BTN_LEFT_END.removeEventListener("click", moveLeft);
		// PAG_BTN_RIGHT.removeEventListener("click", moveRight);
		// PAG_BTN_RIGHT_END.removeEventListener("click", moveRight);


	};




	const moveLeft = () => {
		PAG_CAROUSEL.classList.remove(`${currentClassLeft}`);
		currentPageNumber-=1
		positionLeft();
		disabledAdd();

		// PAG_CAROUSEL.classList.add("transition-left");
		// PAG_BTN_LEFT.removeEventListener("click", moveLeft);
		// PAG_BTN_LEFT_END.removeEventListener("click", moveLeft);
		// PAG_BTN_RIGHT.removeEventListener("click", moveRight);
		// PAG_BTN_RIGHT_END.removeEventListener("click", moveRight);


	};
	const moveLeftEnd = () => {
		PAG_CAROUSEL.classList.remove(`${currentClassLeft}`);
		currentPageNumber = 1
		positionLeft();
		disabledAdd();

		// PAG_CAROUSEL.classList.add("transition-left");
		// PAG_BTN_LEFT.removeEventListener("click", moveLeft);
		// PAG_BTN_LEFT_END.removeEventListener("click", moveLeft);
		// PAG_BTN_RIGHT.removeEventListener("click", moveRight);
		// PAG_BTN_RIGHT_END.removeEventListener("click", moveRight);


	};










	
	PAG_BTN_LEFT.addEventListener("click", moveLeft);
	PAG_BTN_LEFT_END.addEventListener("click", moveLeftEnd);
	PAG_BTN_RIGHT.addEventListener("click", moveRight);
	PAG_BTN_RIGHT_END.addEventListener("click", moveRightEnd);

	PAG_BTN_LEFT.addEventListener("click", () => {
		// currentPageNumber=-1;
		PAG_BTN_CENTER.textContent = `${currentPageNumber}`;
	});
	PAG_BTN_LEFT_END.addEventListener("click", () => {
		currentPageNumber = 1
		PAG_BTN_CENTER.textContent = `${currentPageNumber}`;
	});
	PAG_BTN_RIGHT.addEventListener("click", () => {
		// currentPageNumber=+1
		PAG_BTN_CENTER.textContent = `${currentPageNumber}`;
	});
	PAG_BTN_RIGHT_END.addEventListener("click", () => {
		currentPageNumber = pagesNumber
		PAG_BTN_CENTER.textContent = `${currentPageNumber}`;
	});

	// PAG_BTN_LEFT.addEventListener("click", () => {
	// 	popupLinks = document.querySelectorAll('.pets-card__item');
	// });
	// PAG_BTN_LEFT_END.addEventListener("click", () => {
	// 	popupLinks = document.querySelectorAll('.pets-card__item');
	// });
	// PAG_BTN_RIGHT.addEventListener("click", () => {
	// 	popupLinks = document.querySelectorAll('.pets-card__item');
	// });
	// PAG_BTN_RIGHT_END.addEventListener("click", () => {
	// 	popupLinks = document.querySelectorAll('.pets-card__item');
	// });
	

	// PAG_CAROUSEL.addEventListener("animationend", (animationEvent) => {
	// 	// let changedItem;
	// 	if (animationEvent.animationName === "move-left") {
	// 		PAG_CAROUSEL.classList.remove("transition-left");
	// 		// changedItem = CARDS_RIGHT;
	// 		// CARDS_LEFT.innerHTML = CARDS_ACTIVE.innerHTML;
	// 		// CARDS_ACTIVE.innerHTML = CARDS_RIGHT.innerHTML;
	// 		// arrayWithouActive = arrayOfActive.concat(petsRightRemains);
	// 		// arrayOfLeft = [...arrayOfActive];
	// 		// arrayOfActive = [...arrayOfRight];
	// 		// arrayOfRight = [];
	// 		// arrayWithouActiveRight = [...arrayWithouActive];
	// 		// petsLeftRemains = [...petsRightRemains];
	// 		// changedItem.innerHTML = "";
	// 		// for (let i = 0; i < 3; i++) {
	// 		// 	const card = createCardRight();
	// 		// 	changedItem.appendChild(card);
	// 		// }
	// 		} else {
	// 			PAG_CAROUSEL.classList.remove("transition-right");
	// 			// changedItem = CARDS_LEFT;
	// 			// CARDS_RIGHT.innerHTML = CARDS_ACTIVE.innerHTML;
	// 			// CARDS_ACTIVE.innerHTML = CARDS_LEFT.innerHTML;
	// 			// arrayWithouActive = arrayOfActive.concat(petsLeftRemains);
	// 			// arrayOfRight = [...arrayOfActive];
	// 			// arrayOfActive = [...arrayOfLeft];
	// 			// arrayOfLeft = [];
	// 			// arrayWithouActiveLeft = [...arrayWithouActive];
	// 			// petsRightRemains = [...petsLeftRemains];
	// 			// changedItem.innerHTML = "";
	// 			// for (let i = 0; i < 3; i++) {
	// 			// 	const card = createCardLeft();
	// 			// 	changedItem.appendChild(card);
	// 			// }
	// 		}
	
	// 		// [...CARDS_ACTIVE.children].forEach(el => addEventListener('click', popupOpen));
	// 		// popupLinks = CARDS_ACTIVE.children;
	// 		// [...popupLinks].forEach(el => el.addEventListener('click', popupOpen));
	// 	PAG_BTN_LEFT.addEventListener("click", moveLeft);
	// 	PAG_BTN_RIGHT.addEventListener("click", moveRight);
	// 	PAG_BTN_LEFT_END.addEventListener("click", moveLeftEnd);
	// 	PAG_BTN_RIGHT_END.addEventListener("click", moveRightEnd);
		
	// })
	
	



