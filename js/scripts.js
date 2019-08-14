//var dob = $("#born").val();
$(document).ready(function(){
  $("form#appointments").submit(function(event){
    event.preventDefault()
    var result = $("#born").val();
    console.log(result);
    $("#text1").text(result);
    $(".hide").toggle();
  })

})
