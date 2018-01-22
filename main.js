const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img'); // returns node list => array
const opacity = 0.6;
// Սկզբնական նկարի թափանցիկությունը դարձնում ենք հետագայում նշվող նկարների թափանցիկությանը հավասար
imgs[0].style.opacity = opacity;

//Destructuring
// const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
	// Վերկանգնում ենք ամեն նշվելուց հետո նախորդ նկարի սկզբնական «ոչ-թափանցիկությունը»
	// Երբ թափանցիկությունը զրոյացնող ցիկլը գրում ենք ներքևում, նախորդ՝ նշվող նկարը թափանիկ դարձնելու կոդը չի գործում
	imgs.forEach(img => (img.style.opacity = 1));

	current.src = e.target.src; // նշվող նկարի (e.target) աղբյուրը (src)

	// Նշվող նկարին ավելացնում ենք css-ի .fade-in կլասը
	current.classList.add('fade-in');
	// Սա գործում է ընդամենը մեկ անգամ՝ առաջին նշման ժամանակ
	
	// Ավելացված .fade-in class-ը հանում ենք կես վայրկյան հետո
	setTimeout(() => current.classList.remove('fade-in'), 500);

	// Փոխում ենք արդեն նշված նկարի թափանցիկությունը opcaity փոփոխականի արժեքով
	e.target.style.opacity = opacity;
	// Այս դեպքում նշված նախորդ բալոր նկարները մնում են թափանցիկ նույն արժեքով
	
}