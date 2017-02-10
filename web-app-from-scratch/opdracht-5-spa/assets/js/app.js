'use strict';

(function () {

  var app = {
    init : function() {
      routes.init();
      sections.toggle('#home');
    }
  };

  var routes = {
    init: function () {
      window.addEventListener("hashchange", function () {
        sections.toggle(location.hash);
      });
    }
  };

  var sections = {
    toggle: function (route) {
      var activeSection = document.querySelector(route);
      var viewSections = document.getElementsByClassName('view');

      for (var i = 0; i < viewSections.length; i++) {
        if (viewSections[i].id == activeSection.id) {
          viewSections[i].classList.remove('hide');
        } else {
          viewSections[i].classList.add('hide');
        }
      }
    }
  };

  app.init();

})();
