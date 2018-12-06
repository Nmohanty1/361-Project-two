document.addEventListener('DOMContentLoaded' , function() {
  console.log("Bear Down");
});

var buttonN =document.querySelector('#next');
var buttonB =document.querySelector('#prev');

var f1 = 1;

buttonN.addEventListener('click', function(){
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

buttonB.addEventListener('click', function(){
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
