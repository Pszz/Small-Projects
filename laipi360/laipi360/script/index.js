!function(){function n(){!function(){new Swiper(".swiper-containe",{pagination:".swiper-pagination",autoplay:3e3,nextButton:".arrow-right",prevButton:".arrow-left"})}(),function(){function n(){t.animate({top:"-"+e+"00%"},2e3,"swing",function(){e>i?(e=1,t.css("top",0)):e++,setTimeout(n,2e3)})}var t=$("#loop"),i=t.children("h4").length,e=1;t[0].innerHTML+=t[0].innerHTML,n()}(),function(){var n=$("#list-menu"),t=n.children("a");t.append("<i></i>"),n.children("a[href=#]").attr("href","javascript:;"),t.click(function(){var n=$(this),i=n.attr("v");$(".list-content").hide(),$(".list-content[v="+i+"]").show(),t.removeClass("list-menu-active"),n.addClass("list-menu-active")})}()}setTimeout(n,0)}();