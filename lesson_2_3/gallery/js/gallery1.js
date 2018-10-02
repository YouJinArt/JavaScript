let gallery = document.getElementById("gallery-box");
let container = document.querySelector(".container");
let url = "gallery.json";
let imageFullBox = document.getElementById("full-image")
let imageJson;
let revision = true;
let srcImg = document.querySelector("#images-full");


function ajaxIm(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.addEventListener("load", () => {
            resolve(xhr.response);
        });
        xhr.addEventListener("error", () => {
            reject();
        });
        xhr.send();
    });
}

ajaxIm(url).then((objImg) => {
        console.log("Ok");
        let image = JSON.parse(objImg);
        console.log(image);


        for (let i = 0; i < image.length; i++) {
            console.log(image[i].small);
            smallImage(image[i].small, i)
        }
        return imageJson = image;
    },
    () => {
        console.log("none")
    });

function smallImage(urlImg, id) {
    let imageSmall = document.createElement("img");
    imageSmall.setAttribute("id", "image-" + id)
    imageSmall.setAttribute("src", urlImg);
    imageSmall.setAttribute("class", "images");

    gallery.appendChild(imageSmall);

}

function fullImage(index) {
    console.log("You have clicked on the picture " + index);
    let urlImg = imageJson[index].full;
    
    console.log(urlImg);
    srcImg.setAttribute("src", urlImg);
    


}

function newBigImg(event) {
    console.log(event.target);
    //if (event.target.getAttribute("class") !== "images" && //event.target.getAttribute("id") !== "image-full") {
    //    imageFullBox.style.display = "none";
    //} else {
        
        console.log("It image");
        imageFullBox.style.display = "block";
        if (revision) {
        let image = document.createElement("img");
        image.setAttribute("id", "images-full");
        imageFullBox.appendChild(image);
        revision = false;
   // }
}
}


function targentImg(event) {
    let arreyImg = document.getElementsByTagName("img");
    for (let i = 0; i < arreyImg.length; i++) {
        if (event.target == arreyImg[i]) {
            fullImage(i);
        }
    }

}
container.addEventListener("click", newBigImg);
gallery.addEventListener("click", targentImg);

