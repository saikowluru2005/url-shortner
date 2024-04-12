let original_link = document.getElementById("original_link");
let short_link = document.getElementById("short_link");
let generate = document.getElementById("generate");
let copy = document.getElementById("copy");
generate.addEventListener("click", () => {
    let url = original_link.value;
    fetch('url')
        .then((resp) => resp.json())
        .then((value) => {
            console.log(value);

        })
})