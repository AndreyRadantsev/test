
$(document).ready(function(){
  $(function(){
    $('.item__foot-checkbox').on('click', function(){

    var $this = $(this),
        item = $this.closest('.courses__item');

    item.delay(1000).fadeOut();
    });
  }());
});
