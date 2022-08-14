var count = Number( localStorage.getItem('saveObjects'));
let saveCount = document.getElementById("saveEl");
console.log(count);
document.getElementById("valueFriends").innerText = count;

function increament() {
    count = count + 1;
    console.log(count);
    document.getElementById("valueFriends").innerText = count;


}

function clean() {
    increament();

    count = 0;
    console.log(count);
    document.getElementById("valueFriends").innerText = count;
}

function save() {

    countString = " " + count + " - ";
    saveCount.textContent += countString;
    console.log(count);
    localStorage.setItem('saveObjects',count);




}






