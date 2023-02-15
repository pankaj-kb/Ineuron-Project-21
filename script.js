// Task 1 adding overflow

let asideElement = document.querySelector('aside.col-lg-4.new');
// console.log(asideElement)

let fragment = document.createDocumentFragment();

let newHR = document.createElement("hr");
newHR.classList.add("hr-line");
fragment.appendChild(newHR);

asideElement.appendChild(fragment);

let newH2 = document.createElement("h2");
newH2.textContent = "This is my custom Heading";
newH2.classList.add("new-head");
fragment.appendChild(newH2);

let newP = document.createElement("p");
newP.textContent = "The custom Heading is added by me using DOM Manipulation with JS."
newP.classList.add("new-p");
fragment.appendChild(newP);

asideElement.appendChild(fragment);
// let asideHeight = asideElement.offsetHeight;

// asideHeight = "1000px";

// console.log(asideElement)

asideElement.style.height = '500px';
console.log(asideElement.style.height);
// console.log(asideElement.offsetHeight);

asideElement.style.overflow = 'auto';

// Task 2 change background

let bodyTag = document.querySelector("body")

bodyTag.style.backgroundImage = "none";
bodyTag.style.backgroundColor = "#ffffff"
console.log(bodyTag.style.backgroundColor);


