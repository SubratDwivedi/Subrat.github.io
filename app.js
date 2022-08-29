const img1 = document.getElementById('images1');
const img2 = document.getElementById('images2');
const img3 = document.getElementById('images3');
const img4 = document.getElementById('images4');
const img5 = document.getElementById('images5');



let toggle1 = true;
img1.addEventListener('click', function() {

  toggle1 = !toggle1;
  if (toggle1) {
    img1.src = 'Luffystand.jpeg';

  }
  else {
    img1.src = 'Luffyfight.jpeg';
  }

})


let toggle2 = true;
img2.addEventListener('click', function() {

  toggle2 = !toggle2;
  if (toggle2) {
    img2.src = 'Naruto.jpeg';
  }
  else {
    img2.src = 'Sasuke.jpeg';
  }

})

let toggle4 = true;
img4.addEventListener('click', function() {

  toggle4 = !toggle4;
  if (toggle4) {
    img4.src = 'Kakashi.jpeg';
  }
  else {
    img4.src = 'Shika.jpeg';
  }

})

let toggle5 = true;
img5.addEventListener('click', function() {

  toggle5 = !toggle5;
  if (toggle5) {
    img5.src = 'Soul.jpeg';
  }
  else {
    img5.src = 'Usop.jpeg';
  }

})

let toggle3 = true;
img3.addEventListener('click', function() {

  toggle3 = !toggle3;
  if (toggle3) {
    img3.src = 'Zoro.jpeg';
  }
  else {
    img3.src = 'Law.jpeg';
  }

})