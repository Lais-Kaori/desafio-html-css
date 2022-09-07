let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".slider img")
    max = images.length;

function nextImage () {
    console.log("aaaaaaaaaaaaaaaaaaa")
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

nextImage()

function start() {
    setInterval(()=> {
        nextImage()
    }, time)
}

window.addEventListener("load", start)