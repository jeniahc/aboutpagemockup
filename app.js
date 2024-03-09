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