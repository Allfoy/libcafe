async function GenerateGridElements(){
    const requestURL = '../json/gridElements.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const gridInfo = await response.json();
    const gridItem = gridInfo.items;

    for (i = 0; i <= gridInfo.items.length-1;i++){
        document.getElementById("grid").innerHTML += `<a href="${gridItem[i].url}" style="background-image:url('https://picsum.photos/id/${Math.floor(Math.random()*1085)}/900/402/');background-size: contain;">${gridItem[i].name}</a>`;
    }
}

function initiate(){
    GenerateGridElements();
}


initiate();