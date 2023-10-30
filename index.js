 // Replace [VideoID] with the actual video ID.
 document.getElementById("name").textContent = "Zee"; // Change "Zee" to the actual name.

 // Gradually scale the GIF to 100% width over 4 seconds
 var birthdayGif = document.getElementById("birthday-gif");
 birthdayGif.style.width = "100%";

 // Delay GIF disappearance and video display
 setTimeout(function () {
     var greeting = document.getElementById("greeting");
     var video = document.getElementById("video");

     birthdayGif.style.display = "none"; // Hide the GIF
     greeting.style.display = "block"; // Show the greeting
     video.style.display = "block"; // Show the video

     // Delay video playback by 3 seconds
     setTimeout(function () {
         var videoFrame = document.querySelector("#video video");
         videoFrame.src += "?autoplay=1";
     },3000); // 3000 milliseconds = 3 seconds
 },4555); // 4000 milliseconds = 4 seconds