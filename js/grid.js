async function GenerateGridElements(){
    const requestURL = '../json/gridElements.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const gridInfo = await response.json();
    const gridItem = gridInfo.items;

    let prefix = '';
    let favicon = '../favicon/favicon.ico';
    let id = 'gridItem';
    for (i = 0; i <= gridInfo.items.length-1;i++){
        switch (gridItem[i].type) {
            case "link":
                prefix = 'https://';
                favicon = gridItem[i].icon;
            break;
            case "file":
                prefix = '../';
                favicon = '../favicon/favicon.ico';
            break;
            case "script":
                prefix = '';
                favicon = '../favicon/favicon-16x16.png';
            break;
            case "JS":
                id = gridItem[i].id;
                favicon = '../img/Javascript_Logo.png';
            break;
            default:
            break;
        }
        document.getElementById("grid").innerHTML += `<a href="${prefix}${gridItem[i].url}" id="${id}" style="background-image:url('${favicon}');background-size: contain;">${gridItem[i].name}</a>`;
    }
}

function initiate(){
    GenerateGridElements();
}


initiate();