$(document).ready(function() {
    var jpnav = $('.js--navicon');

    $('.js--features').waypoint(addsticky ,{offset:'60px'});
    function addsticky(direction) {
        if(direction == "down") {
            if(!$('nav').hasClass('open')){
            $('nav').addClass('sticky');}
            else{
             $('nav').removeClass('sticky');   
            }
        }
        else {
            $('nav').removeClass('sticky');
        }
        
    }
     
    $('.js--wp--7').waypoint(function(direction){
        $('.js--wp--7').addClass('animated fadeIn')},{offset:'70%'});
     
        $('.js--wp--3').waypoint(function(direction){
        $('.js--wp--3').addClass('animated tada')},{offset:'65%'});
    
        $('.js--wp--4').waypoint(function(direction){
        $('.js--wp--4').addClass('animated fadeInUp')},{offset:'65%'});
    
        $('.js--wp--5').waypoint(function(direction){
        $('.js--wp--5').addClass('animated fadeIn')},{offset:'50%'});
    
        $('.js--wp--6').waypoint(function(direction){
        $('.js--wp--6').addClass('animated pulse')},{offset:'40%'});
   /*---------------------------------------------------------------*/
    
    if($(window).width()<752){
//            alert("kj");
        jpnav.addClass('nav-icon');
       
    }
    else{
        jpnav.removeClass('nav-icon');
    }
   /*---------------------------------------------------------------*/
    
    
    $(window).resize(function(){
        if($(window).width()<752){
//          
            jpnav.addClass('nav-icon');
            
       
         $('.js--wp--1').waypoint(function(direction){
            $('.js--wp--1').removeClass('animated fadeInRight')},{offset:'65%'});
          
            $('.js--wp--2').waypoint(function(direction){
            $('.js--wp--2').removeClass('animated fadeIn')},{offset:'65%'});
        }
        else{
            $('.nav-icon').removeClass('execute');
            jpnav.removeClass('nav-icon');
            $('nav').removeClass('open');
             $('.js--features').waypoint(addsticky ,{offset:'60px'});
        }
        
    });
    /*----------------------------------------------------------*/
    $(document).on('click','.nav-icon',function(){
        $('nav').toggleClass('open'); 
        $('.nav-icon').toggleClass('execute'); 
        if($('nav').hasClass('open')){
            $('.js--wp--1').css('animation-duration','0.5s');
            $('.js--wp--1').waypoint(function(direction){
            $('.js--wp--1').addClass('animated fadeInRight')},{offset:'65%'});
            $('.js--wp--2').css('animation-duration','1s');
            $('.js--wp--2').waypoint(function(direction){
            $('.js--wp--2').addClass('animated fadeIn')},{offset:'65%'});
            $('nav').removeClass('sticky');
            
        }
        else{
                        
            $('.js--wp--1').waypoint(function(direction){
            $('.js--wp--1').removeClass('animated fadeInRight')},{offset:'65%'});
          
            $('.js--wp--2').waypoint(function(direction){
            $('.js--wp--2').removeClass('animated fadeIn')},{offset:'65%'});
             $('.js--features').waypoint(addsticky ,{offset:'60px'});
        }
    });
    
    /*-----------------------------------------------------------------*/
    $('.main-nav li a').click(function(){
            $('.js--wp--1').waypoint(function(direction){
            $('.js--wp--1').removeClass('animated fadeInRight')},{offset:'65%'});
          
            $('.js--wp--2').waypoint(function(direction){
            $('.js--wp--2').removeClass('animated fadeIn')},{offset:'65%'});
             $('.js--features').waypoint(addsticky ,{offset:'60px'});
        $('nav').removeClass('open');
        $('.nav-icon').removeClass('execute')
    });
    /*---------------------------------------------------------------*/
    var map = new GMaps({
        div: '.map',
        lat: 35.7040672,
        lng: 51.4158771,
        zoom: 15
    });
    map.addMarker({
        lat: 35.709781,
        lng: 51.406927,
        title: 'tehran',
        infoWindow: {
            content: '<p>our tehran HQ</p>'
        }
        });
    /*---------------------------------------------------*/
    
    
    
    
    
    
    /* navi scrol*/
 $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        },1000);
        return false;
      }
    }
  });
});
    
    
    
    
    
});