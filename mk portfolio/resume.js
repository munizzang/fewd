$(function() {
  $(window).scroll (function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop !=0)
      $('.image').stop().animate({'opacity':'0.2'},400);
      else {
      $('.image').stop().animate({'opacity':'1'},400);
});
