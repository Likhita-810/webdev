// fetch - provides an interface for fetching(sending/receiving) resources
const url = "https://catfact.ninja/fact";
// let promise = fetch(url);
// console.log(promise);

const getFact = async () => {
    console.log("getting data");
    let response = await fetch(url);
    console.log(response);
    console.log(response.status);
    // when any option is not MediaElementAudioSourceNode, it will by default take get request.
    let data = await response.json();
    console.log(data.fact);
    fact.innerHTML = data.fact;
}

// the data obtained is not in a readable form. so it has to be converted using AJAX (asynchronous js & XML), JSON (JS Obj Notation)

const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getFact);