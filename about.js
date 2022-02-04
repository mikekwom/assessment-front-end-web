console.log("hello world");

let img = document.querySelector("#ducky");


function handleSubmit(evt) {
	evt.preventDefault();

	alert("Form submitted successfully!")
}

const compliment = (event) => {
	event.preventDefault();

	alert("Wow nice ur gr8")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

img.addEventListener("mouseover", compliment);