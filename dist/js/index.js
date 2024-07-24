$(document).ready(function () {
    $(window).scrollTop(0)
    setTimeout(()=>{$(".pre-holder").fadeOut(500) },0)
    $(" .toggle-btn").on("click", function () {
        $(".nav").css({
            color: "black",
            background: "white",
        });
        $(".nav .nav_list a").addClass("bg-red");
        $(".nav_list").slideToggle(500);
        $(".nav_info").slideToggle(500);
    });
    $(window).resize(function () {
        if (this.outerWidth > 720) {
            $(".nav_list").css({ display: "flex" });
            $(".nav_info").css({ display: "flex" });
        } else {
            $(".nav_list").css({ display: "none" });
            $(".nav_info").css({ display: "none" });
            $(".nav").css({
                color: "black",
                background: "white",
            });
            $(".nav .nav_list a").addClass("bg-red");
        }
    });
    $(window).scroll(() => {
        if ($("html").innerWidth() > 600) {
            if ($("html").scrollTop() >= 30) {
                $(".nav").css({
                    color: "black",
                    background: "white",
                });
                $(".nav .nav_list a").addClass("bg-red");
            } else {
                $(".nav").css({
                    color: "white",
                    background: "none",
                });
                $(".nav .nav_list a").removeClass("bg-red");
            }
        }
    });
    $(".menu .content").scroll(function () {
        const scrollAll = this.scrollWidth - this.clientWidth;
        const scrollLeft = this.scrollLeft;
        if (
            Math.floor(scrollLeft) == scrollAll ||
            Math.ceil(scrollLeft) == scrollAll
        ) {
            $(".menu .item-3").fadeOut(1000).fadeIn(200);
            $(".menu .item-1").fadeOut(0).fadeIn(500);
            setTimeout(() => {
                this.scrollLeft = 0;
            }, 400);
        }
    });
    $(".menu .slide-1").click(function () {
        $(".menu .content").fadeOut(100).fadeIn(300).scrollLeft(0);
    });
    $(".menu .slide-2").click(function () {
        const wdht = $(".menu .item-2").innerWidth();
        $(".menu .content")
            .fadeOut(100)
            .fadeIn(300)
            .scrollLeft(wdht / 2);
    });
    $(".menu .slide-3").click(function () {
        const wdht = $(".menu .item-2").innerWidth();
        $(".menu .content")
            .fadeOut(100)
            .fadeIn(300)
            .scrollLeft((wdht * 3) / 2);
    });

    $(".Testimonials .content").scroll(function () {

        const scrollAll = this.scrollWidth - this.clientWidth;
        const scrollLeft = this.scrollLeft;

        if (
            Math.floor(scrollLeft) == scrollAll ||
            Math.ceil(scrollLeft) == scrollAll
        ) {
            $(".Testimonials .item-3").fadeOut(1000).fadeIn(200);
            $(".Testimonials .item-1").fadeOut(0).fadeIn(500);
           setTimeout(()=>{
            this.scrollLeft =0;
           },300)

            
        }
    });
    $(".Testimonials .slide-1").click(function () {
        $(".Testimonials .content").fadeOut(100).fadeIn(300).scrollLeft(0);
    });
    $(".Testimonials .slide-2").click(function () {
        const wdht = $(".Testimonials .content").innerWidth();
        $(".Testimonials .content")
            .fadeOut(100)
            .fadeIn(300)
            .scrollLeft(wdht );
    });
    $(".Testimonials .slide-3").click(function () {
        const wdht = $(".Testimonials .content").innerWidth();
        $(".Testimonials .content")
            .fadeOut(100)
            .fadeIn(300)
            .scrollLeft((wdht * 2));
    });

});
