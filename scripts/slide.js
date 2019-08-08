$(document).ready(function() {

    var top = $('#top')
    var bottom = $('#bottom')
    var overlayGif = $('#gif-container')

    //replace setTimeout function with $(window).on('load', function(){})
    //setTimeout is only for demo purposes
    setTimeout(function(){
        overlayGif.fadeOut(100)
        top.addClass('moveTop')
        bottom.addClass('moveBottom')
    },3000)

})