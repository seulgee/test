$(document).ready(function() {
    
    var message = $('#message');
    var loader = $('#loader');
    var allComponents = $('#message, #loader')

    //loop the whole transition cycle if loading time takes longer
    //the first cycle has unique treatment because of initial fade in of message

    //cycle 1
    message
        .html('Welcome')
        //initial fade in of message
        .delay(200).animate({
            opacity: '1'
        },300)

    trackIn()
    load() 

    //setTimeout function for language change is in 1900 millisecond increments
    
    //cycle 2
    setTimeout(function(){
        message.html('Bienvenido')
    },1200)

    transition()

    //cycle 3
    setTimeout(function(){
        message.html('Bem Vindo')
    },3100)

    transition()

    //cycle 4
    setTimeout(function(){
        message
            .html('歡迎')
            //font size change here to keep the size consistent along roman and chinese characters
            .css({
                "font-size": "40pt"
            })
    },5000)

    transition()

    //cycle 5
    setTimeout(function(){
        message
            .html('Bienvenu')
            //font size changes back to normal
            .css({
                "font-size": "50pt"
            })
    },6900)

    transition()

    //cycle 6
    setTimeout(function(){
        message.html('Benvenuto')
    },8800)

    transition()

    //cycle 7
    setTimeout(function(){
        message.html('Willkommen')
    },10700)

    transition()

    //cycle 8
    setTimeout(function(){
        message
            .html('ようこそ')
            //font size change here to keep the size consistent along roman and japanese characters
            .css({
                "font-size": "40pt"
            })
    },12600)

    transition()

    //cycle 9
    setTimeout(function(){
        message
            .html('Hoşgeldiniz')
            //font size changes back to normal
            .css({
                "font-size": "50pt"
            })
    },14500)

    transition()

    //cycle 10
    setTimeout(function(){
        message.html('Witamy')
    },16400)

    transition()

    //transition cycle function
    function transition(){
        trackOut()
        trackIn()
        load()
    }

    //track in message to fade
    function trackIn(){
        message
            .animate({
                letterSpacing: '1.2pt'
            },300)
            .animate({
                letterSpacing: '-15pt',
                opacity: '0'
            },400);   
    }

    //track out message to show
    function trackOut(){
        message
            .delay(400)
            .animate({
                letterSpacing: '.5pt',
                opacity: '1'
            },750);
        loader.delay(50).animate({
            opacity: '0'
        })
    }

    //show ball loader
    function load(){
        loader.delay(1000).animate({
            opacity: '1'
        })
    }


    //fade out on app load

    // $(window).on('load', function() {
    //     allComponents.fadeOut(400, 'swing')
    // });

});