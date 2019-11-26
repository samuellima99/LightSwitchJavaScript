let btn = document.getElementById('btn');
let luz = document.getElementById('luz');

function TurnOn() {
  btn.style.left = '110px';
  luz.src = "img/luz02.png";

}
function TurnOff() {
  btn.style.left = '0px';
  luz.src = "img/luz01.png";
}