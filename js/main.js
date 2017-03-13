/**
 * Created by HuaHua on 17/3/13.
 */
$(function(){


    var   n = new Date(),
        d = n.getTime(),
        N = function () {
            var e = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/bg1.png","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/logo.png","img/menu.png"],
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
                                        $("#fp-nav ul li a span").css("background-color","#999")
                                    }else{
                                        $("#fp-nav ul li a span").css("background-color","#fff")
                                    }
                                    setTimeout(function(){
                                        $($("#fullpage > div")[index-1]).addClass("animate");
                                    },500)

                                },
                                afterSlideLoad:function(anchorLink,index,i,slideIndex){
                                    setTimeout(function(){
                                        $($("#section0 .slide")[index]).addClass("animate");
                                    },500)
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
    window.onresize=function() {
        var w=$(window).width()
        if (w >=860) {
            $(".nav").show();
            $(".menu").css("height","");
        }else{
            var status=$(".nav").attr("show");
            if(status!="1") {
                $(".nav").hide();
            }
        }
    }
})
