let data = [
    {
        name: "Jay",
        age: "19"
    },
    {
        name: "Carl",
        age: "24"
    },
    {
        name: "Brody",
        age: "23"
    },
    {
        name: "Denise",
        age: "21"
    },
    {
        name: "Hailey",
        age: "23"
    },
    {
        name: "Mary",
        age: "25"
    },
];

const info = document.querySelector("#info");

let details = data.map(function(item) {
    return "<div>" + item.name + " " + "is " + item.age + " years old" + "</div>";
});

info.innerHTML = details.join("\n");


const circle = document.querySelector("#circle");

circle.addEventListener("mouseenter", () => {
     //exclamation point says opposite; "if cicle does NOT contain hover"
    if(!circle.classList.contains("hover")) {
        circle.classList.add("hover");
    }
});

circle.addEventListener("mouseleave", () => {
    if(circle.classList.contains("hover")) {
        circle.classList.remove("hover");
    }
});