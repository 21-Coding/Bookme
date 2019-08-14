//var dob = $("#born").val();
$(document).ready(function(){
  $("form#appointments").submit(function(event){
    event.preventDefault()
    var result = $("#born").val();
    if (!result){
      $(".hide3").show();
    } else {
      $(".hide3").hide();
      $("#text1").text(result);
      $(".hide").show();
    }
  });
  $(".form-control").submit(function(event){
    var beverage = $("#beverage").val();

  })


  $("#stack").click(function(){
    $("#lightbulb").addClass("fa-lightbulb");
  })
 //$("#stack").click(function(){
 //
 //   $("#hide2").toggle();
//});
});
