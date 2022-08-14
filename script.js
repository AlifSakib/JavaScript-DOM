// *Get Element By Id

/* const headerElement = document.getElementById("header"); */

// Both Works Same But they are not same

/* console.log(headerElement.textContent); */ //!textContent give what exactly written in the code .

/* console.log(headerElement.innerText); */ // !innerText gives the final OutPut : means what we watch on the browser.

// !prototype chain er moddhe theke amra mainly ei metod gula access kori jemon getElementById, getElementByClassName etc ...

// *getElementByClassName

/* const itemUl = document.getElementById("items");
const items = itemUl.getElementsByClassName("item");

for (const item of items) {
  item.style.color = "red";
} */

// getElementByTagName

/* const tagNames = document.getElementsByTagName("li");
let countLi = 0;

for (const tagName of tagNames) {
  console.log(tagName);
}
 */

// *querySelector

/* const lastItem = document.querySelector(".item:last-child");

lastItem.style.color = "red"; */

//!We can also select tems with nth-child using queryselectior.

/* const secoundItem = document.querySelector(".item:nth-child(2)");

secoundItem.style.color = "red"; */

/* let endChild = document.querySelectorAll(".item:last-child");

console.log(endChild);

for (const child of endChild) {
  child.style.color = "red";
}
 */

// *Traversing DOM Hierarchy

/* const grandParent = document.querySelector(".todo-list");

//const parent = grandParent.children;

// const children = parent[1].children[0];

const children = grandParent.querySelectorAll(".item");

console.log(children); */

// *Reverse Way

/* const children = document.querySelector(".item");

const parent = children.parentElement;

console.log(parent);

const grandParent = children.closest(".todo-list");

console.log(grandParent); */

/* const childrenOne = document.querySelector(".item");
const childrenTwo = childrenOne.nextElementSibling;
console.log(childrenTwo); */

// *createElement

/* const newDiv = document.createElement("div");

newDiv.className = "Red";
newDiv.setAttribute("id", "green");
newDiv.setAttribute("title", "new title");

const container = document.querySelector(".todo-list"); */

/* const h2Element = document.querySelector("h2");

container.insertBefore(newDiv, h2Element);
 */

/* container.append("Hello World"); // Sudhu append e amra text dite parbo
container.appendChild(newDiv); // Append child e amra text dite parbo na */

//sudhu append undefined return kore , ar append child ja add korchi oita return kore.

// Sudhu Append er moddhe multiple jinish add kora jay
// Append Child e o dewa jay but o sudhu 1st ta accept kore baki ula ignore kore jay.
