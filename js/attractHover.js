$.attractHover = function (t, a) {
  var h = $.extend(
    {
      proximity: 30,
      magnetism: 3,
      attractClass: "attract-hover",
      attractEasingClass: "attract-hover-easing",
      attractAttractedClass: "attract-hover-attracted",
    },
    a
  );
  $(t).each(function (t) {
    var i, o, n;
    $(this).wrap(
      '<div class="' +
        h.attractClass +
        '"><div class="' +
        h.attractEasingClass +
        '"></div></div>'
    );
    var l = $(this).closest("." + h.attractClass);
    $(document).mousemove(function (t) {
      var a, s, r;
      (i = t.pageX),
        (o = t.pageY),
        (a = l),
        (s = i),
        (r = o),
        (n =
          Math.floor(
            Math.sqrt(
              Math.pow(s - (a.offset().left + a.width() / 2), 2) +
                Math.pow(r - (a.offset().top + a.height() / 2), 2)
            )
          ) - Math.round(a.width() / 2));
      var e = i - (l.offset().left + l.width() / 2),
        c = o - (l.offset().top + l.height() / 2);
      n < h.proximity
        ? l
            .addClass(h.attractAttractedClass)
            .children("." + h.attractEasingClass)
            .css(
              "transform",
              "translate(" + e / h.magnetism + "px, " + c / h.magnetism + "px)"
            )
        : l
            .removeClass(h.attractAttractedClass)
            .children("." + h.attractEasingClass)
            .css("transform", "translate(0)");
    });
  });
};
