function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function change_bg() {
  var bg1 = ["https://i.stack.imgur.com/yEQ6k.jpg","https://previews.123rf.com/images/frankrohde/frankrohde1105/frankrohde110500208/9443736-Abstract-grunge-background-pattern-for-your-text-Stock-Photo-texture.jpg","https://static.pexels.com/photos/547114/pexels-photo-547114.jpeg"];
  var string = bg1[getRandomArbitrary(bg1.length-1, bg1.length)];
  var w1 = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var h1 = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
alert(w1);
  document.body.style.background = "url('" + string + "') no-repeat ";
  document.body.style.backgroundSize = "100%";
}
