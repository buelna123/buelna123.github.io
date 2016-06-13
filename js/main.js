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

$(document).ready(function()
{   
    $("#mostrar").click(function()
    {
        $("p#oculto").show(300);
        $("a#mostrar").hide(300);
        $("a#ocultar").show(300);
    });
    
    $("#ocultar").click(function()
    {
        $("p#oculto").hide(300);
        $("a#mostrar").show(300);
        $("a#ocultar").hide(300);
    });
});

$(document).ready(function()
{   
    $("#mostrar2").click(function()
    {
        $("p#oculto2").show(300);
        $("a#mostrar2").hide(300);
        $("a#ocultar2").show(300);
    });
    
    $("#ocultar2").click(function()
    {
        $("p#oculto2").hide(300);
        $("a#mostrar2").show(300);
        $("a#ocultar2").hide(300);
    });

$(document).ready(function()
{   
    $("#mostrar3").click(function()
    {
        $("p#oculto3").show(300);
        $("a#mostrar3").hide(300);
        $("a#ocultar3").show(300);
    });
    
    $("#ocultar3").click(function()
    {
        $("p#oculto3").hide(300);
        $("a#mostrar3").show(300);
        $("a#ocultar3").hide(300);
    });
    
$(document).ready(function()
{   
    $("#mostrar4").click(function()
    {
        $("p#oculto4").show(300);
        $("a#mostrar4").hide(300);
        $("a#ocultar4").show(300);
    });
    
    $("#ocultar4").click(function()
    {
        $("p#oculto4").hide(300);
        $("a#mostrar4").show(300);
        $("a#ocultar4").hide(300);
    });
});
});
});
