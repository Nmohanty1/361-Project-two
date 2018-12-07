if(document.querySelector('#slides')) {


// Slideshow


var f1 = 1;
var next =document.querySelector('#next');
var prev =document.querySelector('#prev');
next.addEventListener('click', function(){
    f1++;
      if (f1 >= 5) {
        f1 = 1;
        };
  console.log(f1);
  if (f1 === 1){
    document.getElementById('family4').style.display = "none";

    document.getElementById('family1').style.display = "flex";
  };
  if(f1===2){
    document.getElementById('family1').style.display = "none";

    document.getElementById('family2').style.display = "flex";
  };
  if(f1===3){
    document.getElementById('family2').style.display = "none";

    document.getElementById('family3').style.display = "flex";
  };
  if(f1===4){
    document.getElementById('family3').style.display = "none";

    document.getElementById('family4').style.display = "flex";
  };
});

prev.addEventListener('click', function(){
f1--;
if (f1 <= 0) {
  f1 = 4;
};
console.log(f1);
if (f1 === 1){
  document.getElementById('family2').style.display = "none";

  document.getElementById('family1').style.display = "block";
};
if(f1===2){
  document.getElementById('family3').style.display = "none";

  document.getElementById('family2').style.display = "block";
};
if(f1===3){
  document.getElementById('family4').style.display = "none";

  document.getElementById('family3').style.display = "block";
};
if(f1===4){
  document.getElementById('family1').style.display = "none";
  
  document.getElementById('family4').style.display = "block";
};
});
}
//open link in new window Gorgon gorgoncity
var gorgoncity = document.querySelector("#gorgoncity")

gorgoncity.addEventListener('click',function(){
window.open("http://edmchicago.com/2018/05/11/gorgon-city-kamille-ghosted-go-deep/", '_blank');
});
