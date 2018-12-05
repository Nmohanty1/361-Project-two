document.addEventListener('DOMContentLoaded' , function() {
  console.log("Bear Down");
});


$("next").click(function()){
$('#slides').append($("#slides img:first-of-type"));
});


$("prev").click(function()){

$("slides").prepend($("#slides img:last-of-type")
}
