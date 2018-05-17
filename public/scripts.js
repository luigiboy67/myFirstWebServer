alert('Conjunction Junction. What\'s your function?');

function init() {
    const input = document.getElementById("info");
    const button = document.getElementById("button");
    
    button.addEventListener("click", function() {
       console.log(input.value);
    });
}

window.onload = init;