addEventListener('load',function(){
  var ocean = document.getElementById("ocean"),
  waveWidth = 10,
  waveCount = Math.floor(window.innerWidth / waveWidth),
  docFrag = document.createDocumentFragment();

for (var i = 0; i < waveCount; i++) {
  var wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = i / 100 + "s";
}
ocean.appendChild(docFrag);

var word = "Hungry? We've Got the Shawarma to Satisfy!".split("");

var text = document.getElementById("text");
var timer = setInterval(function () {
  text.innerHTML = "";
  let textIndex  = 0;
  var textTimer = setInterval(function () {
    if (textIndex  < 22) {
      text.innerHTML += word[textIndex ];
    } else {
      let createdSpan = document.createElement("span");
      createdSpan.style.color = "#77202c";
      createdSpan.innerHTML = word[textIndex ];
      text.appendChild(createdSpan);
    }
    textIndex ++;
    if (textIndex  == word.length) {
      textIndex  = 0;
      clearInterval(textTimer);
    }
  }, 300);
}, 14000);

var headerImage = document.getElementById("headerImage");
var images = [
  "IMages/Chicken-Shawarma-Rice.png",
  "IMages/chicken-shawarma-2.png",
  "IMages/Shawarma.png",
];
let imgIndex = 0; 

var imageTimer = setInterval(function () {
  headerImage.src = images[imgIndex];
  imgIndex++;
  if (imgIndex == images.length) {
    imgIndex = 0;
  }
}, 4000);

})