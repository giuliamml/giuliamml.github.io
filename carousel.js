const carousel = document.querySelector(".carousel")
const carouselLeftButton = carousel.querySelector("button:nth-of-type(1)")
const carouselRightButton = carousel.querySelector("button:nth-of-type(2)")
const productImage = carousel.querySelector("img")

const secondCarousel = document.querySelector(".second_carousel")
const secondProductImage = secondCarousel.querySelector("img")


const imagesArray = ['./images/img_1.jpg', './images/img_2.jpg', './images/img_3.jpg']
productImage.src = imagesArray[0]
secondProductImage.src = imagesArray[0]

let imageIndex = 0;

carouselRightButton.onclick = () => {
    imageIndex++
    if (imageIndex > imagesArray.length - 1) {
        imageIndex = 0
        
    }
    console.log("NEXT IMAGE", imageIndex)
    productImage.src = imagesArray[imageIndex]
    secondProductImage.src = imagesArray[imageIndex]
}

carouselLeftButton.onclick = () => {
    imageIndex--
    if (imageIndex < 0) {
        imageIndex = imagesArray.length - 1
    }
    console.log("PREV IMAGE", imageIndex)
    productImage.src = imagesArray[imageIndex]
    secondProductImage.src = imagesArray[imageIndex]
}

