
//this is a javascript code that i spend time to wrote it but it doisent worck
let increaseBtn;
setTimeout(() => {
    increaseBtn = document.getElementById("increaseBtn");
console.log(increaseBtn);
}, 5000);
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

console.log(increaseBtn);
const conuntLabel = document.getElementById("conuntLabel");
let count = 0;
increaseBtn.onclick = function() {
    count++;
    conuntLabel.textContent = count;
}
decreaceBtn.onclick = function() {
    count--;
    conuntLabel.textContent = count;

}
resetBnt.onclick = function() {
    count = 0;
    conuntLabel.textContent = count;

}
    count++;

