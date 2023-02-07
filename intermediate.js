// document.getElementsByClassName("santa")[0].addEventListener("click", function() {
//     this.remove();
// })
// document.getElementsByClassName("santa")[1].addEventListener("click", function() {
//     this.remove();
// })
// document.getElementsByClassName("santa")[2].addEventListener("click", function() {
//     this.remove();
// })
// document.getElementsByClassName("santa")[3].addEventListener("click", function() {
//     this.remove();
// })

let santas = document.getElementsByClassName("santa");

for (let i = 0; i < santas.length; i++) {
    santas[i].addEventListener("click", function() {
        this.style.transition = "all 1s";
        this.style.opacity = "0";
        setTimeout(() => { this.remove() }, 1000)
    })
}