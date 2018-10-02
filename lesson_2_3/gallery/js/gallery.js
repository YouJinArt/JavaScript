let gallery = document.getElementById("gallery-box");
let container = document.querySelector(".container");
let url = "gallery.json";
let imageFullBox = document.getElementById("full-image")
let imageJson;
let revision = true;
let backWard = document.querySelector("#backward");
let forWard = document.querySelector("#forward");



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
    let srcImg = document.querySelector("#images-full");
    console.log(urlImg);
  srcImg.setAttribute("src", urlImg);
    


}

function newBigImg(event) {
    if (event.target.getAttribute("class") !== "images" && event.target.getAttribute("id") !== "images-full" && event.target.getAttribute("id") !== "backward" && event.target.getAttribute("id") !== "forward") {
        imageFullBox.style.display = "none";
    } else {
        imageFullBox.style.display = "block";
        if (revision) {
        let image = document.createElement("img");
        image.setAttribute("id", "images-full");
        imageFullBox.insertBefore(image, imageFullBox.children[0]);
        revision = false;
        
    }
}
    targentImg(event);
}


function targentImg(event) {
    let arreyImg = document.getElementsByTagName("img");
    for (let i = 0; i < arreyImg.length; i++) {
        if (event.target == arreyImg[i]) {
            fullImage(i);
        }
    }

}

let forWardImg = () => {
    let maxLengthImageJson = imageJson.length - 1;
    let targenBigImg = document.querySelector("#images-full");
    if (targenBigImg.getAttribute("src") !== imageJson[maxLengthImageJson].full) {
        for (let i = 0; i < imageJson.length; i++) {
            if (targenBigImg.getAttribute("src") == imageJson[i].full) {
                return targenBigImg.setAttribute("src", imageJson[i + 1].full);
            }
        }
    } else {
        return targenBigImg.setAttribute("src", imageJson[0].full);
    }
}

let backWardImg = () => {
    let maxLengthImageJson = imageJson.length - 1;
    let targenBigImg = document.querySelector("#images-full");
    if (targenBigImg.getAttribute("src") !== imageJson[0].full) {
        for (let i = 0; i < imageJson.length; i++) {
        if (targenBigImg.getAttribute("src") == imageJson[i].full) {
            return targenBigImg.setAttribute("src", imageJson[i - 1].full);
        }
    }
    } else {
        return targenBigImg.setAttribute("src", imageJson[maxLengthImageJson].full);
    }
}

forWard.addEventListener("click", forWardImg);
backWard.addEventListener("click", backWardImg);
container.addEventListener("click", newBigImg);
//gallery.addEventListener("click", targentImg);

