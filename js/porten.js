$(function(){
  $('.header__burger').click(function(event){
  $('.header__burger, .header_menu_list').toggleClass('active');
  $('body').toggleClass('lock');
  });
  $('.header_menu_list a').click(function(event){
    $('.header__burger, .header_menu_list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
