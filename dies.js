"use strict"

const func = function(){
                                                                                                                        
  let randomNumber1 = Math.trunc(Math.random()*6 +1);
  let randomNumber2 = Math.trunc(Math.random()*6 +1);
  console.log(randomNumber1)
  $("img").css("display","block")
      switch (randomNumber1) {
      case 1:
          $(".player1Img").css('background-image','url("./images/d1.jpg")')
  $(".player1Img").attr("src", 'url("./images/d1.jpg")/')
      break;
      case 2:
      $(".player1Img").css('background-image','url("./images/d2.jpg")')
      $(".player1Img").attr("src", 'url("./images/d2.jpg")')
      break;
      case 3:
      $(".player1Img").attr("src",' url("./images/d3.jpg")')
      $(".player1Img").css('background-image','url("./images/d3.jpg")')
          break;
      case 4:
      $(".player1Img").attr("src", 'url("./images/d4.jpg")')
      $(".player1Img").css('background-image','url("./images/d4.jpg")')
          break;
      case 5:
      $(".player1Img").attr("src", 'url("./images/d5.jpg")')
      $(".player1Img").css('background-image','url("./images/d5.jpg")')
      break;
      case 6:
      $(".player1Img").attr("src", 'url("./images/d6.jpg")')
      $(".player1Img").css('background-image','url("./images/d6.jpg")')
          break;
      default:
          break;
      }

      switch (randomNumber2) {
      case 1:
          $(".player2Img").css('background-image','url("./images/d1.jpg")')
  $(".player2Img").attr("src", 'url("./images/d1.jpg")')
      break;
      case 2:
      $(".player2Img").css('background-image','url("./images/d2.jpg")')
      $(".player2Img").attr("src", 'url("./images/d2.jpg")')
      break;
      case 3:
      $(".player2Img").attr("src",' url("./images/d3.jpg")')
      $(".player2Img").css('background-image','url("./images/d3.jpg")')
          break;
      case 4:
      $(".player2Img").attr("src", 'url("./images/d4.jpg")')
      $(".player2Img").css('background-image','url("./images/d4.jpg")')
          break;
      case 5:
      $(".player2Img").attr("src", 'url("./images/d5.jpg")')
      $(".player2Img").css('background-image','url("./images/d5.jpg")')
      break;
      case 6:
      $(".player2Img").attr("src", 'url("./images/d6.jpg")')
      $(".player2Img").css('background-image','url("./images/d6.jpg")')
          break;
      default:
          break;
      }

      $(".p").css("display","block")
      if(randomNumber1>randomNumber2){
          $(".p").text("Player 1 is Winner!!! 😍")
          $("#win1").text("Player 1 😊")
          $("#win2").text("Player 1 😥 ")
      }else if(randomNumber1<randomNumber2){
          $(".p").text("player 2 is winner 😍")
          $("#win2").text("Player 2 😊")
          $("#win1").text("Player 1 😥 ")
      }else{
        $(".p").text("No Win ☹")
        $("#win1").text("Player 2 😐")
        $("#win2").text("Player 2 😐")
      }

  }
$("button").on("click", func);


// const RandomNumber1 = Math.trunc(Math.random()*6 +1);
// const randomImage1 = "./images/d"+RandomNumber1+".jpg";
// const image1= $(".player1Img").attr("src",randomImage1);

// const RandomNumber2 = Math.trunc(Math.random()*6 +1);
// const randomImage2 = "./images/d"+RandomNumber2+".jpg";
// const image2= $(".player1Img").attr("src",randomImage2);