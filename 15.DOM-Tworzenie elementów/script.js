//Zadanie 1
const element = document.createElement("div");
element.innerHTML = "To jest nowy element"

document.body.appendChild(element);

//Zadanie 2
const fruits = ["banan", "jablko", "truskawka", "granat", "arbuz", "czeresnia"]
const ul = document.createElement("ul")

fruits.forEach( item => {
    const li = document.createElement("li")
    li.innerHTML = item;
    ul.appendChild(li)

})

document.appendChild(ul);
