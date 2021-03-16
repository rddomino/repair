$(document).ready(function(){

    let button = $('#button');
    let modal = $('#modal');
    let close = $('#close');
    let offer__button = $('offer__button');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });

    /* offer__button.on('click', function(){
        $('body').scrollTop(0);
    }); */

})