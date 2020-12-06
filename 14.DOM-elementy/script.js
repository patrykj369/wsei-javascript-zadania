//Zadanie 1
const divs = document.getElementsByClassName("more-divs");

function getTags(elements) {
    const array = Array.from(elements);
    return array.map((item) => item.tagName);
}

console.log(getTags(divs));

//Zadanie 2
const shortList = document.querySelector(".short-list");

function displayDetails(item) {
//2.1    
    console.log(item.innerHTML);
//2.2    
    console.log(item.outerHTML);
//2.3    
    console.log(item.className);
//2.4    
    console.log(item.classList);
//2.5    
    console.log(item.dataset);
}

displayDetails(shortList);
