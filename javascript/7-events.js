let btn1 = document.querySelector('button');

btn1.onclick = (e) => {
    console.log('btn1 is clicked');
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
}

let p = document.querySelector('p');

p.onmouseover = (e) => {
    console.log('mouse is over the p element');
    console.log(e.target);
}

// event listerners

let btn2 = document.createElement('button');
btn2.innerHTML = "handler btn";

document.querySelector('div').after(btn2);

btn2.addEventListener("click", (e) => {
    console.log('btn2 is clicked');
    console.log(e.type);
});

const handler2 = (e) => {
    console.log('btn2 is clicked handler copy');
    console.log(e.type);
};

btn2.addEventListener("click", handler2);

// thou the func is same the memory allocated is different. so to remove any handler, the func should be same thus should be saved as a var

btn2.removeEventListener("click", handler2);

//  create a toggle btn that changes the screen mode to dark n light themes.

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click", ()=> {
    console.log('mode is changed');
    if (currMode =="light") {
        currMode="dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        currMode="light";
        body.style.backgroundColor = "white";
        body.style.color = "black"
    }
    console.log(currMode);
})

