/*Flecha ir arriba*/
$(document).ready(function()
{
    $('.ir-arriba').click(function()
    {
        $('body, html').animate(
            {
                scrollTop: '0px'
            }, 400);
    });
    
    $(window).scroll(function()
      {
        if( $(this).scrollTop() > 0 )
        {
            $('.ir-arriba').slideDown(300);
        }
    
        else
        {
            $('.ir-arriba').slideUp(300);    
        }
      });
});


/*boton mostrar/ocultar*/
$(document).ready(function()
{   
    $("#mostrar").click(function()
    {
        $("p#oculto").show(200);
        $("a#mostrar").hide();
        $("a#ocultar").show();
    });
    
    $("#ocultar").click(function()
    {
        $("p#oculto").hide(200);
        $("a#mostrar").show();
        $("a#ocultar").hide();
    });

$(document).ready(function()
{   
    $("#mostrar2").click(function()
    {
        $("p#oculto2").show(200);
        $("a#mostrar2").hide();
        $("a#ocultar2").show();
    });
    
    $("#ocultar2").click(function()
    {
        $("p#oculto2").hide(200);
        $("a#mostrar2").show();
        $("a#ocultar2").hide();
    });

$(document).ready(function()
{   
    $("#mostrar3").click(function()
    {
        $("p#oculto3").show(200);
        $("a#mostrar3").hide();
        $("a#ocultar3").show();
    });
    
    $("#ocultar3").click(function()
    {
        $("p#oculto3").hide(200);
        $("a#mostrar3").show();
        $("a#ocultar3").hide();
    });
    
$(document).ready(function()
{   
    $("#mostrar4").click(function()
    {
        $("p#oculto4").show(200);
        $("a#mostrar4").hide();
        $("a#ocultar4").show();
    });
    
    $("#ocultar4").click(function()
    {
        $("p#oculto4").hide(200);
        $("a#mostrar4").show();
        $("a#ocultar4").hide();
    });
});
});
});
});


/*barra fixed*/
$(document).ready(function()
{
    var altura = $('.barra').offset().top;
    
    $(window).on('scroll', function()
    {
        if($(window).scrollTop() > altura)
        {
            $('.barra').addClass('barra-fixed');
        }
        else
        {
            $('.barra').removeClass('barra-fixed');
        }
    });
});


$(document).ready(main);

var contador = 1;

function main()
{
    $('.menu_bar').click(function()
    {
        if(contador == 1)
        {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        }
        else
        {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
    
    //mostrar y ocultar submenu
    $('.submenu').click(function()
    {
        $(this).children('.children').slideToggle(200);
    });
}