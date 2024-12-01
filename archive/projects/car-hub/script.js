let sources = [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg"
]
let images = document.getElementsByClassName("img")
let currentIndex = 0
generateImages()

function next(){
    currentIndex++
    if(currentIndex >= sources.length){
        currentIndex = 0;
    }
    generateImages()
}
function last(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = sources.length - 1;
    }
    generateImages()
}
function generateImages(){
    let i = currentIndex
    let counter = 0
    while(counter < 5){
        if(i >= sources.length){
            i = 0
        }
        document.images[counter].src = sources[i];

        counter++
        i++
    }
}