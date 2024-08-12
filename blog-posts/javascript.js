var images = [
    {
        src: "bsodmaker.png",
        alt: "BLUE SCREEN OF DEATH !!",
        file: "post1.txt",
    },

    {
        src: "bsodmaker (1).png",
        alt: "BLUE SCREEN OF DEATH BRACKET ONE BRACKET !!",
        file: "post2.txt"
    }
];

function nextPage() {
    currentIndex = (currentIndex + 1) % images.length; 

    var img = document.getElementById("part1");
    img.src = images[currentIndex].src;
    img.alt = images[currentIndex].alt;
}

function prevPage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    var img = document.getElementById("part1");
    img.src = images[currentIndex].src;
    img.alt = images[currentIndex].alt;
}

function redirectFile() {
    var currentFile = images[currentIndex].file;
    window.location.href = currentFile; 
}