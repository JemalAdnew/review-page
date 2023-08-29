const reviews = [
	{
		id: 1,
		name: "Steve Jobs",
		job: "Trade man",
		img: "../steve.jpg",
		text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle",
	},
	{
		id: 2,
		name: "Nelson Mandela",
		job: "Singer",
		img: "../mandela.jpg",
		text: "Real leaders must be ready to sacrifice all for the freedom of their people",
	},
	{
		id: 3,
		name: "Socratus",
		job: "Scientist",
		img: "../socratus.jpg",
		text: "The only true wisdom is in knowing you know nothing.",
	},
	{
		id: 4,
		name: "Jemal seid",
		job: "web developer",
		img: "../jems.png",
		text: "A man is who is a man when everybody absence",
	},
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
	showPerson();
});
function showPerson() {
	const item = reviews[currentItem];
	img.src = item.img;
	info.textContent = item.text;
	author.textContent = item.name;
	job.textContent = item.job;
}

nextBtn.addEventListener("click", function () {
	currentItem++;

	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson();
});

prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}

	showPerson();
});
randomBtn.addEventListener("click", function () {
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson();
	console.log(currentItem);
});
