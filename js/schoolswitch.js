/* let isSchool = true;
let ascendingOrder = true; */

function radio1() {
  const bookList = document.getElementById("bookList");
  const foodList = document.getElementById("foodList");
  /*const toggleButton = document.getElementById("toggleButton"); */
  if (document.getElementById("radio-2")) {
    bookList.style.display = "block";
    foodList.style.display = "none";
/*    console.log("Hello school!");
    toggleButton.textContent = "Toggle: School"; */
  }}

function radio2(){
  if(document.getElementById("radio-1")){
    bookList.style.display = "none";
    foodList.style.display = "block";
/*    console.log("bye school!");
    toggleButton.textContent = "Toggle: Schooln't"; */
  }
}
/*
function sortList() {
  const listToSort = isSchool ? document.getElementById("bookList") : document.getElementById("foodList");
  const items = listToSort.children;

  const sortedItems = Array.from(items).sort((a, b) => {
    const textA = a.firstChild.textContent.trim();
    const textB = b.firstChild.textContent.trim();

    if (ascendingOrder) {
      return textA.localeCompare(textB);
    } else {
      return textB.localeCompare(textA);
    }
  });

  sortedItems.forEach(item => listToSort.appendChild(item));
  ascendingOrder = !ascendingOrder;

  const sortButton = document.getElementById("sortButton");
  sortButton.textContent = ascendingOrder ? "Sort A-Z" : "Sort Z-A";
} */
