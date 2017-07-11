// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', '28f10c64a8b1b900a057b74cabaebaf474573436');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', '7543f778eede3b2723e3018977563e69738d7c1b');
});
