$(function(){
    var letters=$("#jump").text().split("");
    var spans='<span>'+letters.join('</span><span>')+'</span>';
    $("#jump").html(spans);

    var currentSpan=$("#jump span:first");

    setInterval(function(){
        if(currentSpan.length===0){
            currentSpan=$("#jump span:first");
        }

        currentSpan.addClass("up").on('transitionend',function(){
            $(this).removeClass("up");
        });

        currentSpan=currentSpan.next();

    }, 50);
});
