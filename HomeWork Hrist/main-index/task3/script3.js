const gallery = document.getElementById("gallery");
const fullViewContainer = document.getElementById("fullViewContainer");
const fullViewCloseBut = document.getElementById("fullViewCloseBut");
const fullViewImage = document.getElementById("fullViewImage");

const images = [
    "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474140TuE/meme-anh-da-den-roi-nuoc-mat-hai-huoc_091502757.jpg",
    "https://content.imageresizer.com/images/memes/Stunned-black-guy-meme-7.jpg",
    "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474140TuE/meme-anh-da-den-roi-nuoc-mat-hai-huoc_091502757.jpg",
    "https://content.imageresizer.com/images/memes/Stunned-black-guy-meme-7.jpg",
    "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474140TuE/meme-anh-da-den-roi-nuoc-mat-hai-huoc_091502757.jpg",
    "https://content.imageresizer.com/images/memes/Stunned-black-guy-meme-7.jpg",
    "https://content.imageresizer.com/images/memes/Stunned-black-guy-meme-7.jpg"
];
images.forEach(createImage);
function createImage(imgSrc) {
    const imageElement = document.createElement("img");
    imageElement.src = imgSrc;
    imageElement.className = "gallery__image";

    imageElement.addEventListener('click', function() {
        fullViewImage.src = imgSrc;
        fullViewContainer.style.display = 'flex';
    });

    gallery.appendChild(imageElement);
}

fullViewCloseBut.addEventListener('click', function() {
    fullViewContainer.style.display = 'none';
});

fullViewContainer.addEventListener('click', function(e) {
    if (e.target === fullViewContainer) {
        fullViewContainer.style.display = 'none';
    }
});