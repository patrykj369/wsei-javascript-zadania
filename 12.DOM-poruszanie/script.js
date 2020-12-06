//Zad 1
const buz = document.querySelector("#buz");
const baz = document.querySelector("#baz");
const foo = document.querySelector("#foo");

console.log(buz.parentElement);
console.log(baz.previousElementSibling);
console.log(foo.children);
console.log(foo.parentNode);
console.log(foo.firstElementChild);
console.log(foo.children[Math.floor(foo.children.length / 2)]);

// zad 2
const displayText = (element) => {
    element.addEventListener("click", () => {
      const elementWithText = element.querySelector("div div div div div:nth-child(2) div div"); 
      const textToDisplay = elementWithText.innerHTML
      console.log(textToDisplay);
    });
};
