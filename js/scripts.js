$(function(){
  $("#formOne").submit(function(event){
    var userInput = ["person1", "person2", "animal", "exclamation", "verb","noun"];
    for(i = 0; i <= userInput.length; i ++) {
      var input = $("input#" + userInput[i]).val();
      $("." + userInput[i]).append(input);
    }

    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput = $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    //
    //
    //
    //
    // $(".person1").append(person1Input);
    // $(".person2").append(person2Input);
    // $(".animal").append(animalInput);
    // $(".exclamation").append(exclamationInput);
    // $(".verb").append(verbInput);
    // $(".noun").append(nounInput);
    //
    $("#story").show();

    event.preventDefault();
  });





});
