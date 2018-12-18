pics = document.getElementById("pics");
createPicsHolders();
createAapImages();

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createAapImages() {
        pictureHolders =document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        aapPlaatje = document.createElement("img");
        aapPlaatje.src = "img/aap" + (i+1) + ".jpg";
        aapPlaatje.id = (i+1);
        aapPlaatje.addEventListener("click", function( ) {
            maakFavoriet(this.id);
        });
        aapPlaatje.style.width = "300px";
        aapPlaatje.style.height = "300px";
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(aapPlaatje);
    } 
}

function maakFavoriet(id) {
    console.log("Maak mijn favouriet! Het gaat om aap: " +id);
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (let i = 0; i <nosofavoriet.length ; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }
    
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/ResizedHeart.png')";
}


