document.getElementById('backgroundVideo').addEventListener('mouseover', function(e) {
    e.stopPropagation();
  }, true);
  
  // Optional: Prevent right-click on the video to disable context menu
  document.getElementById('backgroundVideo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
  