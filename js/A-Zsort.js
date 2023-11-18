let isSchool = true;
let ascendingOrder = true;

function toggleContent() {
  const bookList = document.getElementById("bookList");
  const foodList = document.getElementById("foodList");
  const toggleButton = document.getElementById("toggleButton");
  const slider = document.getElementById("slider");

  isSchool = !isSchool;

  if (isSchool) {
    bookList.style.display = "block";
    foodList.style.display = "none";
    toggleButton.textContent = "Toggle: School";
    slider.style.left = "0";
  } else {
    bookList.style.display = "none";
    foodList.style.display = "block";
    toggleButton.textContent = "Toggle: Schooln't";
    slider.style.left = "50%";
  }
}

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
}
