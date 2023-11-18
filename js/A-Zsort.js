let isSchool = true;
let ascendingOrder = true;

function toggleContent() {
  const bookList = document.getElementById("bookList");
  const foodList = document.getElementById("foodList");
  const toggleSwitch = document.getElementById("toggleSwitch");
  const slider = document.getElementById("slider");
  const handleImage = document.getElementById("handleImage");

  isSchool = !isSchool;

  if (isSchool) {
    bookList.style.display = "block";
    foodList.style.display = "none";
    toggleSwitch.textContent = "Toggle: School";
    slider.style.left = "0";
    handleImage.src = "/img/porteumlogo.jpg";
  } else {
    bookList.style.display = "none";
    foodList.style.display = "block";
    toggleSwitch.textContent = "Toggle: Schooln't";
    slider.style.left = "50%";
    handleImage.src = "/img/fruit.png";
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
