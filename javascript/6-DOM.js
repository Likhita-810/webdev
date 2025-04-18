// having different files increases readability, modularity (the file can be used anywhere else), browser catch

// window object - represents an open window in a browser, it is browsers object (global obj) not js's and is automatically created by browser.

// DOM - Document Object Model
// to print html doc we use console.dir but not console.log
// document is a model of html

// accessing html in js

// console.dir(window.document);
console.dir(document);
console.dir(document.body);
console.log(document.body); //dir gives the entire doc obj and log gives the data present in the doc specified (head/body)
console.log(document.head);
console.dir(document.body.childNodes[1]);
console.log(document.body.childNodes[1]);
document.body.style.background = 'green';

// any styles based on user input can be changed dynamically without making any changes/manipulation to the html or css an be done in js thru dom

// DOM Manipulation

// accessing elements - selecting via id (document.getElementById("id")), className (document.getElementsByClassName("className")), tags (document.getElementsByTagName('tagName)), query selector (to get first ele) (document.querySelector("#id/.className/tagName")), to get all elements query selector all (document.querySelectorAll("#id/.className/tagName"));

// ex
// create a h2 heading element with text - hello json, append 'from likhita' to this text using js

let h2 = document.querySelector('h2');
console.dir(h2);
console.dir(h2.innerText);
console.dir(h2.innerHTML);
h2.innerText = h2.innerText + ' from likhita';

// create 3 divs with cmn class names - box, access them & add some unique text to each of them
let divs = document.querySelectorAll(".box");
console.log(divs);
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

// divs[0].innerText = 'new new value of first div';
// divs[1].innerText = 'new new value of second div';
// divs[2].innerText = 'new new value of third div';

let i = 1;
for (let div of divs) {
    div.innerText = `new unique value ${i}`;
    i++
}

let p = document.querySelector("p");
console.log(p);
console.log(p.innerHTML);

let value = p.getAttribute('id');
console.log(value);

let clsVal = p.getAttribute('class');
console.log(clsVal);

p.setAttribute('class', 'para'); // changes the old value with new value

h2.style.fontSize = "30px";

// creating an element
let btn = document.createElement('button');
btn.innerHTML = "click me";
console.log(btn);

//p.append(btn); // adds btn at the end of p ele
// p.prepend(btn); // adds btn at the start of the p element
// p.before(btn); // adds btn before the element
p.after(btn);

// h2.remove(); //removes the h2 element

btn.style.backgroundColor ="red";
btn.style.color = "white";

// adding class name
p.classList.add('attr-para');
console.log(p.classList);

p.classList.remove('attr-para');
console.log(p.classList);