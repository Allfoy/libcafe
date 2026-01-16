    if (document.readyState !== 'loading') {
        console.debug("doc was ready!");
        initiateMyJS();
    } else {
        document.addEventListener("DOMContentLoaded", function() {
            console.debug("doc is ready!");
            initiateMyJS()
        })
    }


    function initiateMyJS() {
        //refresh da album
        refreshAlbum();

        // adding media
        const formAdd = document.getElementById("Add");
        document.getElementById("submitAdd").addEventListener("click", async function (event) {
            console.info("HEYYYY")
            event.preventDefault();
            if (!formAdd.reportValidity()) {
                console.info("Not a valid ADD form");
                return;
            }
            fetch("https://webtech.labs.vu.nl/api26/3caf73ca", {
                method:"POST",
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    name:document.getElementById("nameAdd").value,
                    year:document.getElementById("yearAdd").value,
                    genre:document.getElementById("genreAdd").value,
                    poster:document.getElementById("posterAdd").value,
                    description:document.getElementById("descriptionAdd").value
                })
            }).then(response => {
                console.debug("status ADD is " + response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(infoResponse => {
                refreshAlbum();
            })
            .catch(error => console.error("Fetch ADD error:", error));
        });

        // update a media
        const formUp = document.getElementById("Up");
        document.getElementById("submitUp").addEventListener("click", async function (event) {
            event.preventDefault();
            // code to find the selected radio cause it's silly for some reason
            // could technically use the ... operator (convert nodeList to array?) and .some() to make it shorter but there's no need for that
            const radioOptions = document.querySelectorAll(".radioGroup input")
            let selectedRadio = null;
            for (const radioOption of radioOptions){
                if (radioOption.checked) {
                    selectedRadio = radioOption.value;
                    break;
                }
            }
            // validate em
            if (!formUp.reportValidity() || !(selectedRadio) || !(document.getElementById("content").value)) {
                console.info("Not a valid UPDATE form");
                if (!(document.getElementById("content").value)) {
                    // try and send the invalid event here
                }
                return;
            }

            // here we fetch the whole thing first (could replace with refreshalbum if you make it return??)
            let JSONResp = await fetch("https://webtech.labs.vu.nl/api26/3caf73ca/")
                .then(response => {
                    console.debug("status PREUPDATE is " + response.status);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .catch(error => console.error("Fetch PREUPDATE error:", error));
            // select the figure
            JSONResp = JSONResp[document.getElementById("figNum").value-1];
            // then JSON replace the selectedRadio's one with the content's value
            JSONResp[selectedRadio] = document.getElementById("content").value;  
            // mow give it
            fetch(`https://webtech.labs.vu.nl/api26/3caf73ca/item/${JSONResp.id}`, {
                method:"PUT",
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(JSONResp)
            }).then(response => {
                console.debug("status UPDATE is " + response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                refreshAlbum();
            })
            .catch(error => console.error("Fetch UPDATE error:", error));
        })

        // resetting media
        document.getElementById("reset").addEventListener("click", async function () {
            fetch("https://webtech.labs.vu.nl/api26/3caf73ca/reset/")
            .then(response => {
                console.debug("status RESET is " + response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            }).then(infoResponse => {
                refreshAlbum();
            })
            .catch(error => console.error("Fetch RESET error:", error));
        })
        // adjust input content type based on selectedradio
    document.querySelector(".radioGroup").addEventListener("input", function(event){
        switch (event.target.value) {
            case "poster":
                document.getElementById("content").setAttribute("type","url");
            break;
            case "year":
                document.getElementById("content").setAttribute("type","number");
            break;
            default:
                document.getElementById("content").setAttribute("type","text");
            break;
        }
    });

        MicroModal.init();

        document.querySelector(".modal__container").addEventListener("click", function(event){
            event.preventDefault();
        })
    }




    async function refreshAlbum(){
        fetch("https://webtech.labs.vu.nl/api26/3caf73ca/")
        .then(response => {
            console.debug("status REFRESH is " + response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        }).then(infoResponse => {
            const JSONResp = JSON.parse(infoResponse); 

            let years = [];

            for (let i = 0; i < JSONResp.length; i++) {
                const item = JSONResp[i];
                if (!years.includes(item.year)) { 
                    years.push(item.year);  
                }
            }

            years.sort(function(a, b) {
                return a - b;
            });

            updateYearFilters(years);

            // console.log(years);

            
            document.getElementById("figNum").setAttribute("max",JSONResp.length)
            const tbody = document.getElementsByTagName("tbody")[0]; 
            let rows = ``;
            document.getElementById("inpageLink").innerHTML = "";
            document.getElementById("imageLink").innerHTML = "";
            for (let i = 0; i < JSONResp.length;i++){
                const item = JSONResp[i];
                // for nav
                const navLink = document.createElement("li")
                navLink.innerHTML = `<a href="#media${item.id}">${item.name}</a>`;
                document.getElementById("inpageLink").appendChild(navLink);
                const navImLink = document.createElement("li")
                navImLink.innerHTML = `<a href="${item.poster}">${item.name}</a>`;
                document.getElementById("imageLink").appendChild(navImLink);
                // for table
                rows += `<tr id="media${item.id}">
                            <td>
                                <figure>
                                    <img src="${item.poster}" alt="${item.name}'s promotional poster">
                                    <figcaption>
                                        Fig. ${i+1}
                                    </figcaption>
                                </figure>
                            </td>
                            <td>
                                <p><strong>${item.name}</strong></p>
                            </td>
                            <td>
                                <pre>${item.year}</pre>
                            </td>
                            <td>
                                <dl>
                                    <dt><em>${item.genre}</em></dt>
                                </dl>   
                            </td>
                            <td>
                                <p>${item.description}</p>
                            </td>
                        </tr>`;
            }
            tbody.innerHTML = rows;
        })
        .catch(error => console.error("Fetch REFRESH error:", error));
    }

    function updateYearFilters(years) {
        const filterDiv = document.getElementById("year-filters");
        filterDiv.innerHTML = "";

        const allButton = document.createElement("button");
            allButton.textContent = "All";
            allButton.className = "year-filter-btn";
            allButton.addEventListener("click", (event) => {
                event.target.parentNode.childNodes.forEach(function(item){item.style.backgroundColor = "#fff"})
                event.target.style.backgroundColor = "#999";
                document.querySelectorAll("tbody tr").forEach(row => {
                    row.style.display = "";
                    for(item of document.getElementById("inpageLink").children){
                            if(item.firstChild.hash.includes(row.id)){
                                item.firstChild.style.display = "";
                            }
                        }
                });
            });
        filterDiv.appendChild(allButton);
        
        years.forEach(year => {
            const button = document.createElement("button");
            button.textContent = year;
            button.className = "year-filter-btn";
            button.dataset.year = year;
            
            button.addEventListener("click", (event) => {
                const rows = document.querySelectorAll("tbody tr");
                event.target.parentNode.childNodes.forEach(function(item){item.style.backgroundColor = "#e9e9ed"})
                event.target.style.backgroundColor = "#999";
                rows.forEach(row => {
                    const yearCell = row.querySelector("td:nth-child(3) pre");
                    if (yearCell && yearCell.textContent.trim() === year.toString()) {
                        row.style.display = "";
                        for(item of document.getElementById("inpageLink").children){
                            if(item.firstChild.hash.includes(row.id)){
                                item.firstChild.style.display = "";
                            }
                        }
                    } else {
                        row.style.display = "none";
                        // hide navlinks in non-visible rows
                        for(item of document.getElementById("inpageLink").children){
                            if(item.firstChild.hash.includes(row.id)){
                                item.firstChild.style.display = "none";
                            }
                        }
                    }
                });
            });
            
            filterDiv.appendChild(button);
        });
    }

