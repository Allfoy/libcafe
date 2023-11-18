  let ascendingOrder = true;

  function sortList() {
    const mainList = document.getElementById("sbooklist");
    const items = mainList.children;

    const sortedItems = Array.from(items).sort((a, b) => {
      const textA = a.firstChild.textContent.trim();
      const textB = b.firstChild.textContent.trim();

      if (ascendingOrder) {
        return textA.localeCompare(textB);
      } else {
        return textB.localeCompare(textA);
      }
    });

    sortedItems.forEach(item => mainList.appendChild(item));
    ascendingOrder = !ascendingOrder;

    const sortButton = document.getElementById("sortButton");
    sortButton.textContent = ascendingOrder ? "Sort A-Z" : "Sort Z-A";
