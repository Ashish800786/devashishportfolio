
  function menu_active(element)
  {
    $('.submenu').attr("class", "submenu");
    $(element).attr("class", "submenu active");
  }
  
  function skills_toggle(element)
  {
    $('.about-skills').toggle();
    $('#skills_show').toggle();
    $('#skills_hide').toggle();
  }


  $(document).ready(function(){
    $(this).scrollTop(0);
    $('#skills_hide').hide();
    $('.about-skills').hide();
});