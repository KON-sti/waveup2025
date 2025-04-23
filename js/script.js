$(function () {
    // m_nav

    $(".m_nav").hide();
    $(".hamburger").click(function () {
        $(".m_nav").stop().slideToggle(200);
    });
    $(".hamburger").click(function () {
        $(this).children("img").toggleClass('turn_quarter');
    });

    // section 1

    $(".notice_text").hide();
    $(".notice_title").click(function () {
        $(this).next().stop().slideToggle(300);
    });
    $(".notice_title").click(function () {
        $(this).children().children("img").toggleClass('turn_half');
    });

    // section 2

    $("#lineup li p").click(function () {
        $(this).parent().addClass("lineup_on").siblings().removeClass("lineup_on");
        updateContentSpacing();
    });
    function updateContentSpacing() {
        setTimeout(function () {
            var activeContentHeight = $(".lineup_on .date_slide").outerHeight();
            $("#section_2").css("padding-bottom", activeContentHeight + -8 + "px");
        }, 300);
    }
    $(window).resize(function () {
        if ($(".lineup_on").length) {
            updateContentSpacing();
        }
    });
    $(document).ready(function () {
        if ($(".lineup_on").length) {
            updateContentSpacing();
        }
    });

    // section 3

    function checkScreenSize() {
        if ($(window).width() > 1000) {
            $(".ticket_info_content_container").show();
        } else {
            if (!$(".ticket_info_accordion_btn").hasClass("ticket_active")) {
                $(".ticket_info_content_container").hide();
            }
        }
    }
    checkScreenSize();
    $(window).resize(function () {
        checkScreenSize();
    });
    $(".ticket_info_accordion_btn").click(function () {
        $(this).toggleClass("ticket_active");
        $(".ticket_info_content_container").slideToggle(300);
    });

    function checkScreenSize() {
        if ($(window).width() > 1000) {
            $(".m_ticket_content_container").show();
        } else {
            if (!$(".m_ticket_accordion_btn").hasClass("ticket_active")) {
                $(".m_ticket_content_container").hide();
            }
        }
    }
    checkScreenSize();
    $(window).resize(function () {
        checkScreenSize();
    });
    $(".m_ticket_accordion_btn").click(function () {
        $(this).toggleClass("ticket_active");
        $(".m_ticket_content_container").slideToggle(300);
    });

    // section 5

    function checkScreenSize() {
        if ($(window).width() > 1000) {
            $(".enter_content_container").show();
        } else {
            if (!$(".enter_accordion_btn").hasClass("caution_active")) {
                $(".enter_content_container").hide();
            }
        }
    }
    checkScreenSize();
    $(window).resize(function () {
        checkScreenSize();
    });
    $(".enter_accordion_btn").click(function () {
        $(this).toggleClass("caution_active");
        $(".enter_content_container").slideToggle(300);
    });

    function checkScreenSize() {
        if ($(window).width() > 1000) {
            $(".watch_content_container").show();
        } else {
            if (!$(".watch_accordion_btn").hasClass("caution_active")) {
                $(".watch_content_container").hide();
            }
        }
    }
    checkScreenSize();
    $(window).resize(function () {
        checkScreenSize();
    });
    $(".watch_accordion_btn").click(function () {
        $(this).toggleClass("caution_active");
        $(".watch_content_container").slideToggle(300);
    });

    function checkScreenSize() {
        if ($(window).width() > 1000) {
            $(".location_content_container").show();
        } else {
            if (!$(".location_accordion_btn").hasClass("caution_active")) {
                $(".location_content_container").hide();
            }
        }
    }
    checkScreenSize();
    $(window).resize(function () {
        checkScreenSize();
    });
    $(".location_accordion_btn").click(function () {
        $(this).toggleClass("caution_active");
        $(".location_content_container").slideToggle(300);
    });

    // section 6

    $("#faqs li p").click(function() {
        $(this).parent().addClass("faqs_on").siblings().removeClass("faqs_on");
        updateFaqsSpacing();
    });

    $(".faq_title").click(function() {
        $(this).next().stop().slideToggle(300, function() {
            updateFaqsSpacing();
        });

        $(this).children().children("img").toggleClass('turn_half');
    });

    function updateFaqsSpacing() {
        setTimeout(function() {
            var $activeTab = $(".faqs_on");
            if ($activeTab.length) {
                var $container = $activeTab.find(".faq_container");
                var totalHeight = 0;
                
                $container.find(".faq_answer:visible").each(function() {
                    totalHeight += $(this).outerHeight(true);
                });
                
                $container.find(".faq_title").each(function() {
                    totalHeight += $(this).outerHeight(true);
                });
                
                totalHeight += 64; // 여분 공간 추가 (필요 시 조정)
                
                $("#section_6").css("padding-bottom", totalHeight + "px");
            }
        }, 310);
    }

    $(window).resize(function() {
        if ($(".faqs_on").length) {
            updateFaqsSpacing();
        }
    });

    $(document).ready(function() {
        if ($("#faqs li").length && !$(".faqs_on").length) {
            $("#faqs li:first").addClass("faqs_on");
        }
        
        if ($(".faqs_on").length) {
            updateFaqsSpacing();
        }
        
        $(".faq_answer").hide();
    });

});
