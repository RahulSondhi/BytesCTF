$(function() {
  setPage();
  $(document).foundation();
});

function setPage() {
  console.log("bytesCTF Startup!");
  console.log("Loading Page:");
  setSVGs();
  console.log("Setting Hashes:");
  setHash();
  $(window).bind('hashchange', function(e) {
    setHash();
  });
}

function setHash() {
  var hash = window.location.href.split("#")[1];
  $("#quickMenu>ul>li.active").removeClass("active");
  if (hash != "" && hash != null) {
    $("#" + hash + "Menu").addClass("active");

    switch (hash) {
      case "home":
        $('html,body').animate({
          scrollTop: $("#splash").offset().top - 50
        }, 1000);
        $("#splashMenu").addClass("active");
        break;
      case "intro":
        $('html,body').animate({
          scrollTop: $("#intro").offset().top - 50
        }, 1000);
        $("#introMenu").addClass("active");
        break;
      case "spons":
        $('html,body').animate({
          scrollTop: $("#sponsors").offset().top - 50
        }, 1000);
        $("#sponsorsMenu").addClass("active");
        break;
      case "sched":
        $('html,body').animate({
          scrollTop: $("#schedule").offset().top - 50
        }, 1000);
        $("#scheduleMenu").addClass("active");
        break;
      case "qa":
        $('html,body').animate({
          scrollTop: $("#qa").offset().top - 50
        }, 1000);
        $("#qaMenu").addClass("active");
        break;
      case "con":
        $('html,body').animate({
          scrollTop: $("#contact").offset().top - 50
        }, 1000);
        $("#contactMenu").addClass("active");
        break;
      default:
        $('html,body').animate({
          scrollTop: $("#splash").offset().top - 50
        }, 1000);
        $("#splashMenu").addClass("active");
        break;
    }

  }
}

function setSVGs(){
  // $('#bottom').append('<object type="image/svg+xml" data="media/landscape2.svg" id="helpmysoul" class="terrain"></object
  $('.cloud').append('<object type="image/svg+xml" data="media/cloud.svg"></object>');
  $('.background').append('<object type="image/svg+xml" data="media/flag.svg"></object>');
}
