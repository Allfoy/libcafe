async function GenerateGridElements(){
    const requestURL = '../json/gridElements.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const gridInfo = await response.json();
    const gridItem = gridInfo.items;

    for (i = 0; i <= gridInfo.items.length-1;i++){
        switch (gridItem[i].type) {
            case "link":
                prefix = 'https://';
                favicon = gridItem[i].icon;
            break;
            case "file":
                prefix = '../';
                favicon = '../../favicon/favicon.ico';
            break;
            case "script":
                prefix = '';
                favicon = '../../favicon/favicon-16x16.png';
            break;
            default:
                prefix = '';
                favicon = '../../favicon/favicon.ico';
            break;
        }
        document.getElementById("grid").innerHTML += `<a href="${prefix}${gridItem[i].url}" style="background-image:url('${favicon}');background-size: cover;">${gridItem[i].name}</a>`;
    }
}

function initiate(){
    GenerateGridElements();
}


initiate();