$(".full").hide();

$(".cap").click(function(){
    $(".caption").text("Impressive how photos can be edited to this extent nowadays, huh.");
});

$(".border").click(function(){
    $(".photoC").css("border","10px outset black");
});


//photo

$(".photo").click(function(){
	$(".photoC").attr("src","https://www.planetware.com/wpimages/2020/01/china-in-pictures-beautiful-places-to-photograph-zhujiajiao-water-town.jpg");
    $(".caption").text("A Picture of ZhuJiaJiao Water Town in Shanghai");
    $("h1").css("background-color","#aecfae");
    $("body").css("background-color","#fff1de");
    $("button").css("background-color","#dff0df");
});

//reset

$(".reset").click(function(){
    location.reload();
});


// like  function

$(".empty").click(function(){
    $(".full").show();
    $(".empty").hide();
    $(".comment").css("background-color","#f7f7f7");
});

$(".full").click(function(){
    $(".full").hide();
    $(".empty").show();
    $(".comment").text("Like?");
    $(".comment").css("background-color","transparent");
});
