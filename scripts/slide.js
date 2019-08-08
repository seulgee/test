$(document).ready(function() {

    var top = $('#top')
    var bottom = $('#bottom')
    var overlayGif = $('#gif-container')

    setTimeout(function(){
        overlayGif.fadeOut(100)
        top.animate({
            height: 0
        })
        bottom.animate({
            height: 0
        })
    },3000)

})