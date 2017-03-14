/**
 * Created by HuaHua on 17/3/13.
 */
$(function(){


    var   n = new Date(),
        d = n.getTime(),
        N = function () {
            var e = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/bg1.png","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/logo.png","img/menu.png","img/technology.png","img/contact.png","img/lzx.png"],
                t = e.length,
                n = 0,
                r = function (e) {
                    var r = new Image,
                        D = new Date().getTime();

                    r.onload = function () {
                        ++n;
//                                    console.log(parseInt(n / t * 100) + "%");
                        if(parseInt(n / t * 100) == 100 || D-d > 10000){
//                                        console.log("加载完毕");
                            $(".loading").hide();
                            $('#fullpage').fullpage({
                                navigation: true,
                                slidesNavigation: true,
                                controlArrows: false,
                                css3:true,
                                loopBottom: true,
                                navigation: false,
                                afterLoad: function(anchorLink, index){
                                    if(index == 2){
                                        $("#fp-nav ul li a span").css("background-color","#999");

                                    }else{
                                        $("#fp-nav ul li a span").css("background-color","#fff")
                                    }
                                    if(index==1){
                                        $(".menu").css("background-color","")
                                    }else{
                                        $(".menu").css("background-color","rgba(0,0,0,0.6)")
                                    }
                                    if(index-1==0) {
                                        setTimeout(function () {
                                            $($("#fullpage > div")[index - 1]).addClass("animate");
                                        }, 500)
                                    }else{
                                            $($("#fullpage > div")[index - 1]).addClass("animate");
                                    }

                                },
                                afterSlideLoad:function(anchorLink,index,i,slideIndex){
                                    // console.log(i)
                                    if(i==0) {
                                        setTimeout(function () {
                                            $($("#section0 .slide")[i]).addClass("animate");
                                        }, 500)
                                    }else{
                                        $($("#section0 .slide")[i]).addClass("animate");
                                    }
                                },afterRender:function () {
                                    var w=$(window).width()
                                    if (w >=860) {
                                        $("#section2 .fp-slidesNav").css({"margin-left":"164px","bottom":"108px"})
                                    }else{

                                        $("#section2 .fp-slidesNav").css({"margin-left":"-28px","bottom":"17px"})
                                    }
                                }
                            })

                        }

                    },
                        r.src = e;
                };
            for (var i = 0; i < t; ++i) r(e[i]);
        }();

    $("#shoumenu").click(function(){
        $(".nav").show().attr("show",1);
        $(".menu").css("height","100%");
    })
    $("#nav").click(function(){
        $(".nav").hide().attr("show",0);
        $(".menu").css("height","");
    })
    $("#nav li a").click(function(e){
        e.stopPropagation()
    })
    $(".business .change li").click(function(){
        var  idx=$(this).index();
        $(this).find("a").addClass("on");
        $(this).siblings().find("a").removeClass();
        var slength=$(window).width() >=860 ? (idx*-700)+"px" : (idx*-100)+"%";
        $(".scrolldiv").animate({ "left": slength}, "linear");
        var fsNav=$("#section2 .fp-slidesNav");
        if(idx==0){
            fsNav.show();
        }else{
            fsNav.hide();
        }

    })
    window.onresize=function() {
        var w=$(window).width()
        if (w >=860) {
            $(".nav").show();
            $(".menu").css("height","");
            $("#section2 .fp-slidesNav").css({"margin-left":"164px","bottom":"108px"})
        }else{
            var status=$(".nav").attr("show");
            if(status!="1") {
                $(".nav").hide();
            }
            $("#section2 .fp-slidesNav").css({"margin-left":"-28px","bottom":"17px"})
        }
        $(".business .change li:eq(0) a").addClass("on");
        $(".business .change li:eq(0)").siblings().find("a").removeClass();
        $(".scrolldiv").css("left","0")
    }
})
