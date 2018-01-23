if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
  const video = document.getElementById("video-background"),
    pauseButton = document.querySelector("#start-pause-button");
  pauseButton.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }, false);
}
var window_focus;
$(window).focus(function () {
  window_focus = true;
});
