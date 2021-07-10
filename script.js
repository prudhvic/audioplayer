window.addEventListener("load", () => {
    let songs = document.querySelectorAll("audio")
    let tabs = document.querySelectorAll(".tabs div")
    
    
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            songs[index].currentTime = 0;
            
            songs.forEach((song, index) => {
                song.pause()
            })
            songs[index].play();
            createBubble(index)

        })
    });

    

});
const createBubble = (index) => {
    let visual = document.querySelector(".visual")
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    //Create bubbles
    const bubble = document.createElement("div");
    bubble.classList.add("bubble")
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease 5`;
    visual.appendChild(bubble);
    bubble.addEventListener("animationend", () => {
        visual.removeChild(bubble)
    })
    
};

