
$(document).ready(function(){
  // $(function(){
  //   $('.bgc').css('height', 0);
  // }());

  $(function(){
    $('.item__foot-checkbox').on('click', function(){

    var $this = $(this),
        item = $this.closest('.courses__item'),
        h = item.innerHeight();




    // bgc.css('height', h);
    console.log(h);


    item.delay(1000).fadeOut();
    // bgc.css('height', 0);
    });
  }());

  // $(function(){
  //   var a = $('.courses__item').innerHeight();
  //
  //       console.log(a);
  // });

});
