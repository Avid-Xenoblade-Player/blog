var images = [
    {
        src: "monkey.jpeg",
        alt: "good monkey image",
        file: "post1.txt",
    },

    {
        src: "monkey.jpeg",
        alt: "better monkey image",
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