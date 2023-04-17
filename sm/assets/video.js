var video = document.getElementById("myVideo");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 5000);
});