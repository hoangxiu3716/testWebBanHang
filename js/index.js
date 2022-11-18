const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    x = window.pageYOffset
    if (x > 0) {
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }
})

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
// console.log(imgPosition)
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let imgNumber = imgPosition.length
let index = 0
imgPosition.forEach(function (image, index) {
    image.style.left = index * 100 + "%"
    dotItem[index].addEventListener("click", function () {
        slider(index)
    })
})
function imgSlide() {
    index++;
    if (index >= imgNumber) {
        index = 0
    }
    slider(index)

}
function slider(index) {
    imgContainer.style.left = "-" + index * 100 + "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide, 5000)
//----- Menu-SLIDEBAR-CATEGORY----------
const itemSliderBar = document.querySelectorAll(".category-left-li")
itemSliderBar.forEach(function (menu, index) {
    menu.addEventListener("click", function () {
        menu.classList.toggle("block")
    })
})
// ------------------ PRODUCT ------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem, X) {
    imgItem.addEventListener("click", function() {
        bigImg.src = imgItem.src
    })
})

const baoQuan = document.querySelector(".chuY")
const chiTiet = document.querySelector(".chiTiet")
if (baoQuan) {
    baoQuan.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-detail").style.display = "none";
        document.querySelector(".product-content-right-bottom-content-caution").style.display = "block";
    })
}
if (chiTiet) {
    chiTiet.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-detail").style.display = "block";
        document.querySelector(".product-content-right-bottom-content-caution").style.display = "none";
    })
}
const button = document.querySelector(".product-content-right-bottom-top")
if (button) {
    button.addEventListener("click", function() {
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeButton")
    })
}