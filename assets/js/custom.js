
var winWidth = $(window).width();
var transparent, counterObj;
var noOfTyres = 5;
var registerWarrentyExtentionFormCount = 1;
var unregisterWarrentyClaimIndex = 0;

// ## Common functions -- Start ##
// Menu Toggle function
function menuHideShow() {
    try {
        $(".menu-btn").click(function () {
            $(".cp-menu,.menu-overlay").addClass("active");
            $(".bs-prd-360-popup").removeClass("active");
            $("body").addClass("lock-scroll");
        });
        $(".menu-close, .menu-overlay, .change-pincode").click(function () {
            $(".cp-menu,.menu-overlay").removeClass("active");
            $("body").removeClass("lock-scroll");
        });
    } catch (error) {
        console.log(error);
    }
}

// checkout page order detail drawer hide/show js function
function orderDetailDrawer() {
    try {
        $(".js-show-order").on("click", function () {
            $(".overlay").addClass("active");
            $(this).closest(".bs-order-detail").addClass("show");
            $(this).fadeOut(400);
        });
        // $(".js-order-close").on("click", function () {
        //     $(".overlay").removeClass("active");
        //     $(this).closest(".order-detail").removeClass("show");
        //     $(".js-show-order").fadeIn(400);
        // });
        $(".overlay, .js-order-close").click(function () {
            if ($(".bs-order-detail").hasClass("show")) {
                $(".js-show-order").fadeIn(400);
            }
            $(".bs-order-detail").removeClass("show");
            $(".overlay").removeClass("active");
            $(".js-show-order").fadeIn(400);
        });
    } catch (error) {
        console.log(error);
    }
}

//checkout page - edit pincode function

function changePincode() {
    $(".change-pincode").click(function () {
        var closestParent = $(this).closest(".form-group");
        closestParent.removeClass("disabled");
        closestParent.find(".form-control").removeAttr("disabled").focus();
        $(this).fadeOut();
    })
}

// Menu mCustom Scrollbar implementationdisabled
function menuScrollbar() {
    try {
        if (winWidth > 800) {
            $(".menu-cont").mCustomScrollbar();
        }
    } catch (error) {
        console.log(error);
    }
}

// Popup mCustom Scrollbar implementation
function scrollContent() {
    try {
        if (winWidth > 800) {
            $(".scroll-content").mCustomScrollbar();
        }
    } catch (error) {
        console.log(error);
    }
}

// Page Scroll Menu Fixed
var transparentRemoved = false;
function fixedHeader() {
    try {
        var scroll = $(window).scrollTop();
        var headerHeight = ($(".cp-header").outerHeight()) - 20;
        if (scroll >= headerHeight) {
            $(".cp-header").addClass("slick-header");
            if ($(".prod-detail-wrap .prod-nav").length) {
                $(".prod-detail-wrap .prod-nav").addClass("re-position");
            }
            if (transparent) {
                $(".cp-header").removeClass("typ-transparent");
                transparentRemoved = true;
            }
        } else {
            if (transparentRemoved) {
                $(".cp-header").addClass("typ-transparent");
            }
            $(".cp-header").removeClass("slick-header");
            $(".prod-detail-wrap .prod-nav").removeClass("re-position");
        }
    } catch (error) {
        console.log(error);
    }
}

// Page Scroll Menu Fixed
function showMoreAccountLinks() {
    try {
        $(".user-name").click(function () {
            $(".loggedin-user .acc-links").stop(true, true).slideToggle();
            $(this).toggleClass("active");

        })
    } catch (error) {
        console.log(error);
    }
}

// Set Background image from image source
function setBg() {
    try {
        $(".set-bg").each(function () {
            var currentImg = $(this).find(".fetch-img-src")[0];
            var currentImgPath = currentImg.currentSrc;
            // if($(this).find('.fetch-pic-src').hasClass('lozad')) {
            //     var currPicture = $(this).find('.fetch-pic-src img.fetch-pic-img')[0];
            //     console.log('Current Picture',currPicture);
            //     currentImgPath = currPicture.currentSrc;
            //     console.log(currentImgPath);
            //     // $(this).attr('data-background-image',currentImgPath);
            // }else {
            $(this).css("background-image", "url(" + currentImgPath + ")");
            // }
        });
    } catch (error) {
        console.log(error);
    }
}

// Blog Listing Slider
function blogSlider() {
    try {
        var blogListing = new Swiper("#blog-listing", {
            slidesPerView: "auto",
            spaceBetween: 16,
            simulateTouch: true,
            pagination: {
                el: "#blog-listing .swiper-pagination",
                type: "bullets"
            },
            breakpoints: {
                768: {
                    slidesPerView: "auto",
                    simulateTouch: true,
                    pagination: {
                        el: "#blog-listing .swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }
                },
                1280: {
                    slidesPerView: 3,
                    simulateTouch: false
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}
// Blog Listing Slider
function blogSlider2() {
    try {
        var blogListing = new Swiper("#blog-listing2", {
            slidesPerView: "auto",
            spaceBetween: 16,
            simulateTouch: true,
            pagination: {
                el: "#blog-listing2 .swiper-pagination",
                type: "bullets"
            },
            breakpoints: {
                768: {
                    slidesPerView: "auto",
                    simulateTouch: true,
                    pagination: {
                        el: "#blog-listing2 .swiper-pagination",
                        type: "bullets"
                    }
                },
                1280: {
                    slidesPerView: 3,
                    simulateTouch: false
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}
function blogSlider3() {
    try {
        var blogListing = new Swiper("#blog-listing3", {
            slidesPerView: "auto",
            spaceBetween: 16,
            simulateTouch: true,
            pagination: {
                el: "#blog-listing3 .swiper-pagination",
                type: "bullets"
            },
            breakpoints: {
                768: {
                    slidesPerView: "auto",
                    simulateTouch: true,
                    pagination: {
                        el: "#blog-listing3 .swiper-pagination",
                        type: "bullets"
                    }
                },
                1280: {
                    slidesPerView: 3,
                    simulateTouch: false
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}


// Select2 Dropdown function
function jsSelect(obj, configOptions) {
    $(obj).select2(configOptions);

    if ($(obj).hasClass("js-opt")) {
        $('.js-opt').on('select2:select', function (e) {
            var data = e.params.data.id;
            $(this).closest(".js-select-data").find(".js-sel").removeClass("active");
            if (data === 'all') {
                $(this).closest(".js-select-data").find(".js-sel").addClass('active');
            } else {
                $(this).closest(".js-select-data").find(".js-sel[data-name='" + data + "']").addClass("active");
            }
        });
    }
}

// Tyeahead Autocomplete function
function autoComplete() {
    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;
            matches = [];
            substrRegex = new RegExp(q, "i");
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });
            cb(matches);
        };
    };
    var dummyArray = ["Honda", "Volkswagen", "Hyundai", "Honda1", "Honda2", "Honda3", "Honda4", "Honda5", "Honda6"];
    $(".js-autocomplete").typeahead({
        //minLength: 1,
        highlight: true,
        hint: false,
    }, {
        name: "dummyArray",
        source: substringMatcher(dummyArray),
        limit: 20
    });
    var tyreSizeArray = ["90/142", "90/140", "90/110"];
    $(".js-autocomplete-tsize").typeahead({
        minLength: 1,
        highlight: true,
        hint: false,
    }, {
        name: "tyreSizeArray",
        source: substringMatcher(tyreSizeArray),
        limit: 20
    });
    var cityArray = ["Mumbai", "Chennai", "Kolkata"];
    $(".js-autocomplete-city").typeahead({
        minLength: 1,
        highlight: true,
        hint: false,
    }, {
        name: "cityArray",
        source: substringMatcher(cityArray),
        limit: 20
    });
    var stateArray = ["Maharashtra", "Tamil Nadu", "West Bengal"];
    $(".js-autocomplete-state").typeahead({
        minLength: 1,
        highlight: true,
        hint: false,
    }, {
        name: "stateArray",
        source: substringMatcher(stateArray),
        limit: 20
    });
    var skuArray = ["Ceat Gripp 100/90-18 56P", "Ceat Zoom Plus 110/90-18 61P", "Ceat Milaze 90/90-12 54J", "Ceat Zoom 100/90 R17", "Ceat Milaze 90/90-12 Tt 64b"];
    $(".js-autocomplete-sku").typeahead({
        //minLength: 1,
        highlight: true,
        hint: false,
    }, {
        name: "skuArray",
        source: substringMatcher(skuArray),
        limit: 20
    });
    var batArray = ["Grippmaster", "Grippstar EW"];
    $(".js-autocomplete-bat").typeahead({
        //minLength: 1,
        highlight: true,
        hint: false,
    }, {
        name: "batArray",
        source: substringMatcher(batArray),
        limit: 20
    });
}

// Formcontrol Placeholder translate
function inputPlaceholder() {
    try {
        $(".bs-form .form-control").on("focus", function () {
            if ($(this).closest(".form-group").find(".input-label").length != 0) {
                $(this).closest(".form-group").addClass("focus");
            }
        });
        $(".bs-form .form-control").on("focusout", function () {
            if ($(this).val().length == 0) {
                $(this).closest(".form-group").removeClass("focus");
            }
        });
        $(".bs-form .form-control").on("keyup", function () {
            if ($(this).closest(".form-group").find(".input-label").length != 0 && $(this).val().length != 0) {
                $(this).closest(".form-group").addClass("valid");
            } else {
                $(this).closest(".form-group").removeClass("valid");
            }
        });
        $(".form-group select").on("select2:open", function () {
            if ($(this).closest(".form-group").find(".input-label").length != 0) {
                $(this).closest(".form-group").addClass("focus");
            }
        });
        $(".form-group select").on("select2:close", function () {
            if ($(this).closest(".form-group").find(".select2-selection__rendered").html() == "") {
                $(this).closest(".form-group").removeClass("focus");
            } else {
                $(this).closest(".form-group").removeClass("focus");
                $(this).closest(".form-group").addClass("valid");
            }
        });
        $(".form-group .datepicker").on("pick.datepicker", function () {
            $(this).closest(".form-group").removeClass("focus");
            $(this).closest(".form-group").addClass("valid");
        });

        $("button[type=reset]").click(function () {
            $(this).closest("form").find(".form-group").removeClass("focus valid");
        });

    } catch (error) {
        console.log(error);
    }
}

// Show More functionality
function readMore() {
    try {
        $(".js-read-more").click(function () {
            if (!$(this).hasClass("read-less")) {
                $(this).closest(".js-read-more-parent").find(".js-read-more-cont").stop(true, true).slideDown();
                $(this).text("read less");
                $(this).addClass("read-less");
            } else {
                $(this).closest(".js-read-more-parent").find(".js-read-more-cont").stop(true, true).slideUp();
                $(this).text("read More");
                $(this).removeClass("read-less");
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// 360 degree Product slider -- Start
function alignSlider(e) {
    try {
        var control = e.control;
        var svg = control.find("svg")[0].getBoundingClientRect();
        var path = control.find(".rs-border")[0].getBoundingClientRect();
        control.height(path.height).width(path.width);
        var l = path.left - svg.left;
        var t = path.top - svg.top;
        control.find(".rs-container").css("left", -l).css("top", -t);
    } catch (error) {
        console.log(error);
    }
}

function roundSlider360() {
    try {
        var $threeSixty = $(".threesixty");
        $threeSixty.threeSixty({
            dragDirection: "horizontal",
            useKeys: true,
            startFrame: 10,
            draggable: false
        });
        $("#slider2").roundSlider({
            handleShape: "dot",
            radius: 300,
            width: 6,
            startAngle: "225",
            endAngle: "+90",
            create: function (e) {
                alignSlider.call(this, e);
            },
            beforeCreate: function () {
                this.options.radius = this.control.parent().width() / 2;
                this["_bind"]($(window), "resize", function () {
                    var radius = this.control.parent().width() / 2;
                    this.option("radius", radius);
                });
            },
            drag: function (e) {
                if (e.preValue < e.value) {
                    $threeSixty.nextFrame();
                }
                if (e.preValue > e.value) {
                    $threeSixty.prevFrame();
                }
            },
            change: function (e) {
                $threeSixty.goToFrame(e.value);
            },
            sliderType: "min-range",
            min: 72,
            max: 0,
            startValue: 0,
            keyboardAction: false,
            mouseScrollAction: false,
            value: 10,
            svgMode: true,
            handleSize: "+16",
            lineCap: "round"
        });
    } catch (error) {
        console.log(error);
    }
}

// 360 degree Product slider -- End

// YouTube video dynamic load

function ytVidLoad() {
    var muteEnabled;
    $('.js-yt-container').each(function () {
        var ytContainer = $(this).data('embed');
        var ytThumbnailImg = 'https://img.youtube.com/vi/' + ytContainer + '/sddefault.jpg';
        $(this).css("background-image", "url(" + ytThumbnailImg + ")");

        if ($(this).data('mute')) {
            muteEnabled = $(this).data('mute');
            console.log(muteEnabled);
            var iframeStruct = '<iframe src="https://www.youtube.com/embed/' + ytContainer + '?autoplay=1' + muteEnabled + ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
            var iframeStruct = '<iframe src="https://www.youtube.com/embed/' + ytContainer + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
        $(this).find('.js-yt-play').on('click', function () {
            $(this).closest('.js-yt-container').append(iframeStruct);
            $(this).fadeOut(400);
        });
    });
}

function ytPopupLoad() {
    $('.js-dynamic-video').on('click', function () {
        var targetEmbed = $(this).data('embed');
        var iframeStruct = '<iframe src="https://www.youtube.com/embed/' + targetEmbed + '?autoplay=1' + ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        $('#dynamic-video').find('.iframe-container').append(iframeStruct);
    });
}

// Scroll to section function

function scrollToSec() {
    try {
        $(".js-scrollto").on("click", function () {
            var headerH = $(".cp-header").outerHeight() + 30;
            var currTarget = $(this).data("id");
            var offsetSec = $("#" + currTarget);
            if ($(this).hasClass("scrollToMap")) {
                if (winWidth < 768) {
                    $("html,body").animate({
                        scrollTop: offsetSec.offset().top - headerH
                    }, 800);
                }

            }
            else {
                $("html,body").animate({
                    scrollTop: offsetSec.offset().top - headerH
                }, 800);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// Pop up close event

function popupClose() {
    $(".bs-modal").on('hidden.bs.modal', function () {
        // alert("Hello World!");
        if ($(this).find('iframe').length != 0) {
            $(this).find('iframe').remove();
            $(this).find('.js-yt-play').fadeIn();
        }
    });
}

// ## Common functions -- End ##
// Banner slider : Home
// function homeBanner() {
//     try {
//         var homeSlider = new Swiper(".home-slider", {
//             effect: "fade",
//             speed: 600,
//             navigation: {
//                 nextEl: ".home-slider .swiper-button-next",
//                 prevEl: ".home-slider .swiper-button-prev"
//             }
//         });
//         var last_child = 0;
//         $(".cp-banner .banner-tyres img[data-index=" + last_child + "]").addClass("active");
//         $(".cp-banner .banner-tyres img[data-index=" + last_child + "]").addClass("active");
//         homeSlider.on("slideChange", function (index) {
//             $(".cp-banner .banner-tyres img[data-index=" + last_child + "]").removeClass("active");
//             $(".cp-banner .banner-tyres img[data-index=" + last_child + "]").hide();
//             setTimeout(function () {
//                 $(".cp-banner .banner-tyres img[data-index=" + homeSlider.activeIndex + "]").show("500");
//                 $(".cp-banner .banner-tyres img[data-index=" + homeSlider.activeIndex + "]").addClass("active");
//             }, .3);
//             last_child = homeSlider.activeIndex;
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

function homeBanner() {
    try {
        var homeSlider = new Swiper(".home-slider", {
            effect: "fade",
            speed: 600,
            navigation: {
                nextEl: ".home-slider .swiper-button-next",
                prevEl: ".home-slider .swiper-button-prev"
            }
        });
        var last_child = 0;
        $(".cp-banner .banner-tyres .p-img[data-index=" + last_child + "]").addClass("active");
        $(".cp-banner .banner-tyres .p-img[data-index=" + last_child + "]").addClass("active");
        homeSlider.on("slideChange", function (index) {
            $(".cp-banner .banner-tyres .p-img[data-index=" + last_child + "]").removeClass("active");
            $(".cp-banner .banner-tyres .p-img[data-index=" + last_child + "]").hide();
            setTimeout(function () {
                $(".cp-banner .banner-tyres .p-img[data-index=" + homeSlider.activeIndex + "]").show("500");
                $(".cp-banner .banner-tyres .p-img[data-index=" + homeSlider.activeIndex + "]").addClass("active");
            }, .3);
            last_child = homeSlider.activeIndex;
        });

        $(".cp-banner .swiper-button-next, .cp-banner .swiper-button-prev").click(function () {
            var iframeCount = $(this).closest(".cp-banner").find(".iframe-container").length;
            if (iframeCount) {
                $(".cp-banner .swiper-slide iframe").remove();
                $(".swiper-slide").removeClass("video-playing");
            }
        })

        $(".cp-banner .js-play-banner-vid").click(function () {
            $(this).closest(".swiper-slide").find(".js-yt-play").trigger("click");
            $(this).closest(".swiper-slide").addClass("video-playing");
        })


        // $(".swiper-button-next, .swiper-button-prev").click(function () {
        //     if ($(".swiper-slide-active").hasClass(".video-playing ")) {

        //     }
        // })

    } catch (error) {
        console.log(error);
    }
}


// Banner slider : Need Assistance	
function needAssistanceBanner() {
    try {
        var needAssistanceSlider = new Swiper(".need-assistance-slider", {
            effect: "fade",
            speed: 600,
            navigation: {
                nextEl: ".need-assistance-slider .swiper-button-next",
                prevEl: ".need-assistance-slider .swiper-button-prev"
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// Number Countdown functionality : Home
function countDown() {
    try {
        var options = {
            useEasing: true,
            useGrouping: true,
            separator: ",",
            decimal: "."
        };
        var countryCnt = new CountUp("countryCounter", 0, 100, 0, 2.5, options);
        if (!countryCnt.error) {
            countryCnt.start();
        } else {
            console.error(countryCnt.error);
        }
        var brandCntr = new CountUp("brandCounter", 0, 50, 0, 2.5, options);
        if (!brandCntr.error) {
            brandCntr.start();
        } else {
            console.error(brandCntr.error);
        }
        var storeCntr = new CountUp("storeConter", 0, 4500, 0, 2.5, options);
        if (!storeCntr.error) {
            storeCntr.start();
        } else {
            console.error(storeCntr.error);
        }

        var anualTurnoverCnt = new CountUp("anualTurnover", 0, 6700, 0, 2.5, options);
        if (!anualTurnoverCnt.error) {
            anualTurnoverCnt.start();
        } else {
            console.error(anualTurnoverCnt.error);
        }
        var countriesCntr = new CountUp("countriesCounter", 0, 100, 0, 2.5, options);
        if (!countriesCntr.error) {
            countriesCntr.start();
        } else {
            console.error(countriesCntr.error);
        }
        var empCntr = new CountUp("empConter", 0, 6400, 0, 2.5, options);
        if (!empCntr.error) {
            empCntr.start();
        } else {
            console.error(empCntr.error);
        }
        return {
            countryCnt: countryCnt,
            brandCntr: brandCntr,
            storeCntr: storeCntr,
            anualTurnoverCnt: anualTurnoverCnt,
            countriesCntr: countriesCntr,
            empCntr: empCntr
        };
    } catch (error) {
        console.log(error);
    }
}

// Find Tyre module show more fields functionality : Product Pre-listing and Home
function findTyreMore() {
    try {
        $(".js-findtyre").on("focus", function () {
            $(this).closest(".bs-form").find(".show-more-wrap").slideDown(400);
        });
    } catch (error) {
        console.log(error);
    }
}

// Product gallery slider and zoom functionality : Product Detail
function productShowcase() {
    try {
        var prdShowcaseSlider = new Swiper(".js-product-showcase .swiper-container", {
            slidesPerView: 1,
            loop: false,
            autoplay: false,
            simulateTouch: true,
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 18
                },
                768: {
                    slidesPerView: 1
                }
            },
            on: {
                init: function () { }
            },
            pagination: {
                el: ".js-product-showcase .swiper-pagination",
                type: "bullets",
                clickable: true,
                renderBullet: function (index, className) {
                    if ($(this.slides[index]).hasClass("has-video")) {
                        return "<span class='" + className + "'><span class='icon icon-play'></span></span>";
                    } else {
                        return "<span class='" + className + "'></span>";
                    }
                }
            }
        });
        var zoomWindowW = $(window).width() - ($(".bs-product-showcase").width() + $(".bs-product-showcase").offset().left);
        var zoomWindowH = $(window).height() - $(".bs-product-showcase").offset().top;
        zoomWindowW = zoomWindowW - zoomWindowW / 100 * 20;
        zoomWindowH = zoomWindowH - zoomWindowH / 100 * 20;
        $(window).resize(function () {
            if (winWidth > 1024) {
                zoomWindowW = $(window).width() - ($(".bs-product-showcase").width() + $(".bs-product-showcase").offset().left);
                zoomWindowH = $(window).height() - $(".bs-product-showcase").offset().top;
                zoomWindowW = zoomWindowW - zoomWindowW / 100 * 20;
                zoomWindowH = zoomWindowH - zoomWindowH / 100 * 20;
                $(".zoomWindowContainer").remove();
                $(".zoomContainer").remove();
                $(".js-product-showcase  .product-image").removeData("elevateZoom");
                $(".js-product-showcase  .product-image").elevateZoom({
                    zoomWindowPosition: "zoom-container",
                    zoomWindowWidth: zoomWindowW,
                    zoomWindowHeight: zoomWindowH
                });
            }
        });
        if (winWidth > 1024) {
            $(".zoomWindowContainer").remove();
            $(".zoomContainer").remove();
            $(".js-product-showcase  .product-image").removeData("elevateZoom");
            $(".js-product-showcase  .product-image").elevateZoom({
                zoomWindowPosition: "zoom-container",
                zoomWindowWidth: zoomWindowW,
                zoomWindowHeight: zoomWindowH
            });
        }
        $(".btn-360-module").on("click", function () {
            $(".bs-prd-360-popup").addClass("active");
        });
        $(".bs-prd-360-popup .btn-close").on("click", function () {
            $(".bs-prd-360-popup").removeClass("active");
        });
    } catch (error) {
        console.log(error);
    }
}


function cricketProductFeatures() {
    try {
        var cricketProductFeatures = new Swiper(".mod-feature-points .feature-slider .swiper-container", {
            slidesPerView: 1,
            loop: false,
            autoplay: false,
            effect: "fade",
            navigation: {
                nextEl: ".mod-feature-points .swiper-button-next",
                prevEl: ".mod-feature-points .swiper-button-prev"
            },
        });
    } catch (error) {
        console.log(error);
    }
}



// Other Product Slider : Product Detail
function otherProdSlider() {
    try {
        var otherProduct = new Swiper("#other-prod-swiper", {
            slidesPerView: "auto",
            spaceBetween: 20,
            simulateTouch: true,
            autoplay: {
                delay: 8e3
            },
            pagination: {
                el: "#other-prod-swiper .swiper-pagination",
                type: "bullets"
            },
            navigation: {
                nextEl: ".bs-other-prod .swiper-button-next",
                prevEl: ".bs-other-prod .swiper-button-prev"
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    simulateTouch: true
                },
                1280: {
                    slidesPerView: 4,
                    simulateTouch: false
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// Other Product Slider : order success page
function otherProdSlider2() {
    try {
        var otherProduct2 = new Swiper("#other-prod-swiper2", {
            slidesPerView: "auto",
            spaceBetween: 20,
            simulateTouch: true,
            autoplay: {
                delay: 8e3
            },
            pagination: {
                el: "#other-prod-swiper2 .swiper-pagination",
                type: "bullets"
            },
            navigation: {
                nextEl: ".bs-other-prod .swiper-button-next",
                prevEl: ".bs-other-prod .swiper-button-prev"
            },
            breakpoints: {
                768: {
                    spaceBetween: 16,
                    simulateTouch: true
                },
                1280: {
                    spaceBetween: 25,
                    slidesPerView: 1,
                    simulateTouch: false
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function otherProdSlider3() {
    try {
        var otherProduct2 = new Swiper("#other-prod-swiper3", {
            slidesPerView: "auto",
            spaceBetween: 20,
            simulateTouch: true,
            autoplay: {
                delay: 8e3
            },
            pagination: {
                el: "#other-prod-swiper3 .swiper-pagination",
                type: "bullets"
            },
            navigation: {
                nextEl: ".bs-other-prod .swiper-button-next",
                prevEl: ".bs-other-prod .swiper-button-prev"
            },
            breakpoints: {
                768: {
                    spaceBetween: 16,
                    simulateTouch: true
                },
                1280: {
                    spaceBetween: 25,
                    slidesPerView: 2,
                    simulateTouch: false
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function awardsSlider() {
    try {
        var awardsSlider = new Swiper(".recognitions-awards .awards-slider", {
            slidesPerView: 1,
            spaceBetween: 10,

            pagination: {
                el: ".recognitions-awards .swiper-pagination",
                type: "bullets"
            },
            navigation: {
                nextEl: ".recognitions-awards .swiper-button-next",
                prevEl: ".recognitions-awards .swiper-button-prev"
            },
            breakpoints: {
                768: {
                    simulateTouch: true
                },
                1280: {
                    simulateTouch: false
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// timeline slider start

var growWithCeatThumbs, growWithCeatTop;
function growWithCeatSlider() {
    try {

        growWithCeatThumbs = new Swiper('.tab-pane.active .grow-with-ceat .timeline .swiper-container', {
            spaceBetween: 10,
            // centeredSlides: true,
            //  initialSlide: noOfSlides - 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 4,
                    centeredSlides: false,
                },
                1280: {
                    slidesPerView: 6,
                }
            }
        });

        growWithCeatTop = new Swiper('.tab-pane.active .grow-with-ceat .top-view .swiper-container', {
            spaceBetween: 0,
            // initialSlide: noOfSlides - 1,
            navigation: {
                nextEl: '.grow-with-ceat .swiper-button-next',
                prevEl: '.grow-with-ceat .swiper-button-prev',
            },
            thumbs: {
                swiper: growWithCeatThumbs
            },
            on: {
                slideChange: function () {
                    $(".data-item").removeClass("active");
                }
            }
        });

        $('.career-pg a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            growWithCeatThumbs.destroy();
            growWithCeatTop.destroy();
            console.log(34);
            growWithCeatThumbs = new Swiper('.tab-pane.active .grow-with-ceat .timeline .swiper-container', {
                spaceBetween: 10,
                // centeredSlides: true,
                //  initialSlide: noOfSlides - 1,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                breakpoints: {
                    320: {
                        slidesPerView: 3,
                        centeredSlides: false,
                    },
                    768: {
                        slidesPerView: 4,
                        centeredSlides: false,
                    },
                    1280: {
                        slidesPerView: 6,
                    }
                }
            });

            growWithCeatTop = new Swiper('.tab-pane.active .grow-with-ceat .top-view .swiper-container', {
                spaceBetween: 0,
                // initialSlide: noOfSlides - 1,
                navigation: {
                    nextEl: '.grow-with-ceat .swiper-button-next',
                    prevEl: '.grow-with-ceat .swiper-button-prev',
                },
                thumbs: {
                    swiper: growWithCeatThumbs
                },
                on: {
                    slideChange: function () {
                        $(".data-item").removeClass("active");
                    }
                }
            });

        });

    } catch (error) {
        console.log(error);
    }
}


function timelineSlider() {
    try {
        var noOfSlides = $(".bs-timeline .timeline .swiper-container .swiper-slide").length;
        var galleryThumbs = new Swiper('.bs-timeline .timeline .swiper-container', {
            spaceBetween: 10,
            // centeredSlides: true,
            //  initialSlide: noOfSlides - 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 4,
                    centeredSlides: false,
                },
                1280: {
                    slidesPerView: 6,
                }
            }
        });

        var galleryTop = new Swiper('.bs-timeline .top-view .swiper-container', {
            spaceBetween: 0,
            // initialSlide: noOfSlides - 1,
            navigation: {
                nextEl: '.bs-timeline .swiper-button-next',
                prevEl: '.bs-timeline .swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            },
            on: {
                slideChange: function () {
                    $(".data-item").removeClass("active");
                }
            }
        });

        //galleryThumbs.slideTo(noOfSlides - 1)

        var galleryThumbsCenter = new Swiper('.bs-timeline.typ-2 .timeline.typ-center .swiper-container', {
            spaceBetween: 0,
            // centeredSlides: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 4,
                    centeredSlides: false,
                },
                1280: {
                    slidesPerView: 5,
                }
            }
        });


        var galleryTopCenter = new Swiper('.bs-timeline.typ-2 .top-view .swiper-container', {
            spaceBetween: 0,
            navigation: {
                nextEl: '.bs-timeline .swiper-button-next',
                prevEl: '.bs-timeline .swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbsCenter
            }
        });
        //  galleryThumbs.controller.control = galleryTop;
    } catch (error) {
        console.log(error);
    }
}

// timeline slider end


// governance report start

function getCountOfReports() {
    var reportCount = $(".lyt-governance .box .item").length;
    if (reportCount == 1) {
        $(".lyt-governance").addClass("only-one-report");
    }
}
// governance report start

// Video play pause functionality tyre testing block : Product Detail
function playPauseVideo() {
    try {
        $(".js-play-video").click(function () {
            if ($(this).hasClass("js-pause-video")) {
                $(this).closest(".bs-prod-highlight").find(".prod-video").fadeOut();
                $(this).closest(".bs-prod-highlight").find(".hide-me").fadeIn();
                $(this).removeClass("js-pause-video");
                $(this).find(".icon").removeClass("icon-pause-video");
                $(this).find(".icon").addClass("icon-play-video");
                $(this).closest(".bs-prod-highlight").find(".prod-video iframe").remove();
            } else {
                var dataTgt = $(this).data('embed');
                var iframeStruct = '<iframe src="https://www.youtube.com/embed/' + dataTgt + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                $(this).closest(".bs-prod-highlight").find(".prod-video").fadeIn();
                $(this).closest(".bs-prod-highlight").find(".prod-video").append(iframeStruct);
                $(this).closest(".bs-prod-highlight").find(".hide-me").fadeOut();
                $(this).addClass("js-pause-video");
                $(this).find(".icon").addClass("icon-pause-video");
                $(this).find(".icon").removeClass("icon-play-video");
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// company page video card slider
//var slider2016, slider2017, slider2018, slider2019, slider2020;

var multipleSwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 14,
    simulateTouch: true,
    pagination: {
        el: ".tab-cont.active .swiper-pagination",
        type: "bullets",
        clickable: true
    },
    navigation: {
        nextEl: ".tab-cont.active .swiper-button-next",
        prevEl: ".tab-cont.active .swiper-button-prev"
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
        }
    }
}


function journeyCardsSlider2() {
    try {
        var sliderYr = new Swiper("#journey-cards", {
            slidesPerView: "auto",
            spaceBetween: 14,
            simulateTouch: true,
            pagination: {
                el: ".bs-blog-listing .swiper-pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".bs-blog-listing .swiper-button-next",
                prevEl: ".bs-blog-listing .swiper-button-prev"
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function marketCommentsSlider() {
    try {
        var sliderYr = new Swiper("#market-comments-slider", {
            slidesPerView: "auto",
            spaceBetween: 14,
            simulateTouch: true,
            pagination: {
                el: ".bs-blog-listing .swiper-pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".bs-blog-listing .swiper-button-next",
                prevEl: ".bs-blog-listing .swiper-button-prev"
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function timelineBasicSlider() {
    try {
        var sliderYr = new Swiper(".bs-timeline.typ-basic-slider .top-view .swiper-container", {
            slidesPerView: "auto",
            spaceBetween: 80,
            simulateTouch: true,
            pagination: {
                el: ".bs-timeline.typ-basic-slider .swiper-pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".bs-timeline.typ-basic-slider .swiper-button-next",
                prevEl: ".bs-timeline.typ-basic-slider .swiper-button-prev"
            },
            breakpoints: {
                1280: {
                    slidesPerView: 2,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}


var sliderYr;

function journeyCardsSlider() {
    try {
        sliderYr = new Swiper(".journey-cards .tab-cont.active .our-journey", {
            slidesPerView: "auto",
            spaceBetween: 14,
            simulateTouch: true,
            pagination: {
                el: ".tab-cont.active .swiper-pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".tab-cont.active .swiper-button-next",
                prevEl: ".tab-cont.active .swiper-button-prev"
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3,
                }
            }
        });
        // slider2017 = new Swiper("#journey-cards-2017", multipleSwiperOptions);
        // slider2018 = new Swiper("#journey-cards-2018", multipleSwiperOptions);
        // slider2019 = new Swiper("#journey-cards-2019", multipleSwiperOptions);
        // slider2020 = new Swiper("#journey-cards-2020", multipleSwiperOptions); 
        // $('.bs-data-pt .data-item').on('click', function () {
        //     var clickedTab = $(this).attr("data-rel");
        //     $('.bs-data-pt .data-item').removeClass("active");
        //     $(this).addClass("active");

        // });
    } catch (error) {
        console.log(error);
    }
}


// Timeline click function

function timelineClick() {
    $('.bs-data-pt .data-item').on('click', function () {
        var clickedTab = $(this).attr("data-rel");
        $(this).closest('.bs-data-pt').find('.data-item').removeClass('active');
        $(this).addClass("active");
        if ($('.journey-cards .our-journey').length != 0) {
            sliderYr.destroy();
            $(this).closest(".custom-tab").find(".tab-cont").removeClass("active");
            $(this).closest(".custom-tab").find(".tab-" + clickedTab).addClass("active");
            sliderYr = new Swiper(".journey-cards .tab-cont.active .our-journey", {
                slidesPerView: "auto",
                spaceBetween: 14,
                simulateTouch: true,
                pagination: {
                    el: ".tab-cont.active .swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: ".tab-cont.active .swiper-button-next",
                    prevEl: ".tab-cont.active .swiper-button-prev"
                },
                breakpoints: {
                    1280: {
                        slidesPerView: 3,
                    }
                }
            });
        }
    });
}

// Product Feature and Benefit Detail box : Product Detail
function featureBenefitBox() {
    try {
        $(".mod-feature-points .point").on("click", function () {
            var currID = $(this).attr("id");
            console.log(currID);
            $(".mod-feature-points .feature-detail[data-id=" + currID + "]").fadeIn(400);
        });
        $(".mod-feature-points .feature-detail .close-btn").on("click", function () {
            $(this).closest(".feature-detail").fadeOut(400);
        });
    } catch (error) {
        console.log(error);
    }
}

// Product Scroll to section : Product Detail
function pdScrollTo() {
    try {
        $(".bs-prod-detail .js-scroll").on("click", function () {
            var currTarget = $(this).attr("id");
            $(".js-scroll").removeClass("active");
            $(this).addClass("active");
            var offsetSec = $(".scroll-section[data-id=" + currTarget + "]");
            $("html,body").animate({
                scrollTop: offsetSec.offset().top - 140
            }, 1600);
        });
    } catch (error) {
        console.log(error);
    }
}

// Promo code drawer only for mobile 
function applyPromo() {
    $(".js-apply-promo").on("click", function () {
        $(".bs-order-detail .promo-wrap .applied-promo").fadeIn(400);
        $(".bs-order-detail .promo-wrap .btn-icon-text").fadeOut(400);
        $(".modal-header .close").trigger("click");
    });
}

// Promo code drawer only for mobile
function removePromo() {
    $(".js-remove-promo").on("click", function (e) {
        e.preventDefault();
        var form = $("#apply_promocode");
        form.validate().resetForm(); // clear out the validation errors
        form[0].reset(); // clear out the form data
        $(form).find('.form-group').removeClass('focus valid');

        $(this).closest(".applied-promo").fadeOut(400);
        $(this).closest(".applied-promo").next(".btn-icon-text").fadeIn(400);
    });
}

// price qty calculation
function priceQtyCalc() {
    var dynamicQtyFld = $(".js-dynmc-qty");
    var dynamicPriceFld = $(".js-dynmc-price");
    $(dynamicPriceFld).each(function (e) {
        $(this).attr("data-price", $(this).text())
    })

    // Qty attribute assign
    $(dynamicQtyFld).each(function (e) {
        $(this).attr("data-qty", $(this).val())
    })

    // Inr formatting
    var formatInrString = function (rawString, decimal) {
        console.log(rawString)
        rawString = (rawString).toString().replace(",", "");
        console.log(rawString)
        deci = (decimal != undefined) ? decimal : 2
        console.log("deci", deci)

        var finalValue = parseFloat(rawString).toFixed(deci).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,')
        if (decimal === undefined) {
            finalValue = finalValue.slice(0, -3)
        } else {
            finalValue = finalValue.slice(0)
        }

        return finalValue
    }


    $(dynamicQtyFld).on('change', function (e) {
        var indx = $(dynamicQtyFld).index($(e.currentTarget))
        var getVal = $(dynamicPriceFld).eq(indx).attr("data-price");
        getVal = (getVal).toString().replace(",", "");
        getVal = getVal * parseInt(e.currentTarget.value);
        finalVal = formatInrString(getVal)
        $(dynamicPriceFld).eq(indx).text(finalVal)

        // var prevQty = $(dynamicQtyFld).eq(indx).attr("data-qty");
        // var cartQty = $(dynamicQtyFld).eq(indx).val();
        // $(dynamicQtyFld).eq(indx).attr("data-qty", cartQty);

        // totalCart_Count -= parseInt(prevQty);
        // totalCart_Count += parseInt(cartQty)
        // $(".quick-nav .cart-wrap .count").text(totalCart_Count)

    });
}

// footer accordion for mobile
function footAccord() {
    $(".footer-accord-head").click(function () {
        var clickedElm = $(this);
        if (clickedElm.hasClass("active")) {
            clickedElm.removeClass("active");
            clickedElm.closest(".cp-footer").find(".footer-accord-cont").stop(true, true).slideUp();
        } else {
            clickedElm.closest(".cp-footer").find(".footer-accord-head").removeClass("active");
            clickedElm.closest(".cp-footer").find(".footer-accord-cont").stop(true, true).slideUp();
            clickedElm.addClass("active");
            clickedElm.closest(".footer-accord-item").find(".footer-accord-cont").stop(true, true).slideDown();
        }
    });
}

// cart page - function to show services on basis of selection home-delivery/pickup-store

function chooseDeliveryOpt() {

    var defaultDeliveryOpt = $(".delvy-select input[type='radio']:checked").attr("data-show");
    var closestParent = $(".delvy-select input[type='radio']:checked").closest(".bs-prod-service");
    closestParent.find(".svc-list > .item").hide()
    closestParent.find(".svc-list > .item." + defaultDeliveryOpt).show();


    $(".delvy-select input[type='radio']").change(function () {
        var closestParent = $(this).closest(".bs-prod-service");
        var deliveryOpt = $(this).attr("data-show");
        closestParent.find(".svc-list > .item").hide()
        closestParent.find(".svc-list > .item." + deliveryOpt).show();
    })
}

//  cart page - offer timer function start
function offerTimer(date, time) {
    try {
        //COUNTDOWN TIMER
        //edit ".25" below to change time in terms of day
        // var offerEndTime = new Date("October 13, 2014 11:13:00");
        // var endDate = $(".js-offer-timer").attr("data-end-date");
        // var endTime = $(".js-offer-timer").attr("data-end-time");
        var endDate = date;
        var endTime = time;
        endDate = endDate.split("/");
        endTime = endTime.split(":");
        // console.log(stDate,stTime,endDate,endTime)
        // console.log(new Date(parseInt(strDate[0]),parseInt(strDate[1]),parseInt(strDate[2]),parseInt(strTime[0]),parseInt(strTime[1])));
        var deadline = new Date(parseInt(endDate[0]), parseInt(endDate[1]) - 1, parseInt(endDate[2]), parseInt(endTime[0]), parseInt(endTime[1]));
        console.log(deadline, deadline - Date.now());
        //var deadline = new Date(Date.now() + .02 * 24 * 3600 * 1000);
        // console.log(deadline - Date.now());
        var x = setInterval(function () {
            var now = Date.now();
            var t = deadline - now;
            // console.log(t/1740)
            var days = Math.floor(t / (1e3 * 60 * 60 * 24));
            var hours = Math.floor(t % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
            var minutes = Math.floor(t % (1e3 * 60 * 60) / (1e3 * 60));
            var seconds = Math.floor(t % (1e3 * 60) / 1e3);
            if (days > 0) {
                document.getElementById("day").innerHTML = days + "d";
                document.getElementById("hour").innerHTML = hours + "h";
                document.getElementById("minute").innerHTML = "";
                document.getElementById("second").innerHTML = "";
            } else if (hours > 0) {
                document.getElementById("day").innerHTML = "";
                document.getElementById("hour").innerHTML = hours + "h";
                document.getElementById("minute").innerHTML = minutes + "m";
                document.getElementById("second").innerHTML = "";
            } else if (minutes > 0) {
                document.getElementById("day").innerHTML = "";
                document.getElementById("hour").innerHTML = "";
                document.getElementById("minute").innerHTML = minutes + "m";
                document.getElementById("second").innerHTML = seconds + "sec";
            } else if (seconds > 0) {
                document.getElementById("day").innerHTML = "";
                document.getElementById("hour").innerHTML = "";
                document.getElementById("minute").innerHTML = "00m";
                document.getElementById("second").innerHTML = seconds + "sec";
            }
            // document.getElementById("day").innerHTML = days;
            // document.getElementById("hour").innerHTML = hours;
            // document.getElementById("minute").innerHTML = minutes;
            // document.getElementById("second").innerHTML = seconds;
            if (t < 0) {
                clearInterval(x);
                // document.getElementById("day").innerHTML = "0";
                // document.getElementById("hour").innerHTML = "0";
                // document.getElementById("minute").innerHTML = "0";
                document.getElementById("second").innerHTML = "0 sec";
            }
        }, 1e3);
        //COUNTDOWN BAR
        function progress(timeleft, timetotal, $element) {
            //console.log(timeleft + "--" + timetotal + "---" + $element.width());
            //var progressBarWidth = timeleft * $element.width() / timetotal;
            var progressBarWidth = timeleft / timetotal * 100 + "%";
            // console.log(progressBarWidth)
            // $element.find("div").animate({
            //     width: progressBarWidth+"%"
            // }, timeleft == timetotal ? 0 : 1000, "linear");
            $element.find("div").width(progressBarWidth);
            if (timeleft > 0) {
                setTimeout(function () {
                    progress(timeleft - 1e3, timetotal, $element);
                }, 1e3);
            }
        }
        if (deadline - Date.now() > 0) {
            progress(deadline - Date.now(), deadline - Date.now(), $("#progressBar"));
        }
    } catch (error) {
        console.log(error);
    }
}

// offer time for mobile 
function moveOfferTimerMobile() {
    //$(".bs-offer-timer").prependTo(".bs-order-detail .act-wrap");
    $(".bs-offer-timer").insertBefore(".amt-review-wrap .js-show-order");
}

// cart page offer timer function end


// step logic in upload pages start
$('.mob-mannual-btn').on('click', function () {
    // if($(this).attr('data-sec') == 'tyreUnRegSerialNo') {
    //     $('.cnf_TabOption').text('Manual')
    // }
    $(this).parents('.step').removeClass('active');
    $(this).parents('.tab-pane').find('.step:eq(2)').addClass('active');
    $(this).parents('.bs-tab').addClass('theme-white');
})

$('.back-btn').on('click', function (e) {
    var secRef = $(this).data('sec-id');
    // if($(this).attr('data-sec') == 'tyreUnRegSerialNo') {
    //     $('.cnf_TabOption').text('CONFIRM SERIAL NUMBER')
    // }
    $(this).parents('.step').removeClass('active');
    $(this).parents('.tab-pane').find('.step:eq(0)').addClass('active');
    $(this).parents('.bs-tab').removeClass('theme-white');
})

$('.mob-file-btn').on('change', function () {
    $(this).parents('.step').removeClass('active');
    $(this).parents('.tab-pane').find('.step:eq(1)').addClass('active');
    $(this).closest('.bs-tab').find('.nav-item:eq(0)').addClass('done');
})

$('.mob-upload-cross').on('click', function (e) {
    $(this).parents('.step').removeClass('active');
    $(this).parents('.tab-pane').find('.step:eq(0)').addClass('active');
    $(this).closest('.bs-tab').find('.nav-item:eq(0)').removeClass('done');
})

$('.mob-upload-submit').on('click', function (e) {
    var secRef = $(this).data('sec-id');
    console.log(secRef);
    if (secRef == 'sec1') {
        $(this).closest('.mob-sec').find('.nav-item').eq(0).addClass('done');
        $(this).closest('.mob-sec').find('.nav-item').eq(1).find('.nav-link').removeClass('disabled').trigger('click');
    } else if (secRef == 'sec2') {
        $(this).closest('.mob-sec').find('.nav-item').eq(1).addClass('done');
        $(this).closest('.mob-sec').find('.nav-item').eq(2).find('.nav-link').removeClass('disabled').trigger('click');
    } else if (secRef == 'sec3') {
        location.href = './return-replace-status.html';
    } else if (secRef == 'sec4') {
        location.href = './reg-claim-warranty-status.html';
    } else if (secRef == 'sec5') {
        location.href = './reg-claim-warranty-status.html';
    }
})
// step logic in upload pages end

// cart pincode loader on search btn click and input blur
$('.search-pinCode').on('click', function (e) {
    e.preventDefault();
    if ($('input[name=cart_pincode]').val().length == 6) {
        $(this).parents('.bs-prod-service').addClass('sec-loader');
        setTimeout(() => {
            $(this).parents('.bs-prod-service').removeClass('sec-loader');
        }, 3000);
    }
});

$('input[name=cart_pincode]').on('blur', function (e) {
    if ($(this).val().length == 6) {
        $(this).parents('.bs-prod-service').addClass('sec-loader');
        setTimeout(() => {
            $(this).parents('.bs-prod-service').removeClass('sec-loader');
        }, 3000);
    }
});

// delete cart functionality
$('.delete-cart').on('click', function (e) {
    $(this).parents('.product-item').remove();
})

// support page file uploader on change event
$('input[name=otherQueries_fileUpload], input[name=returnReplacedForm_defectFront], input[name=returnReplacedForm_defectBack], input[name=returnReplacedForm_serialnumber], input[name=claimWarrantyUnreg_thread], input[name=claimWarrantyUnreg_defect], input[name=claimWarrantyUnreg_odometer], input[name=regClaimWarrentyStep3Form_treadDepth], input[name=regClaimWarrentyStep3Form_defect], input[name=regClaimWarrentyStep3Form_odometer]').on('change', function (e) {
    $(this).parent().removeClass('active');
    if ($(this).parents('.upload-field').length != 0) {
        $(this).closest('.upload-field').find('.uploaded-img').addClass('active');
    } else {
        $(this).closest('.upload').find('.uploaded-img').addClass('active');
        if ($(this).attr('name') == 'returnReplacedForm_defectBack') {
            $(this).closest('.form-group').find('.verified-text').removeClass('success').addClass('error');
        } else {
            $(this).closest('.form-group').find('.verified-text').removeClass('error').addClass('success');
        }
    }
})

$('.delete-support-file').on('click', function (e) {
    $(this).parent().removeClass('active');
    if ($(this).parents('.upload-field').length != 0) {
        $(this).closest('.upload-field').find('.upload-img').addClass('active');
        $(this).closest('.upload-field').find('.upload-img').find('input:file').val('');
    } else {
        $(this).closest('.upload').find('.upload-img').addClass('active');
        $(this).closest('.upload').find('.upload-img').find('input:file').val('');
        $(this).closest('.form-group').find('.verified-text').removeClass('success').removeClass('error');
    }
})

$('input[name=registerWarrentyExtention_tyreSerialNo], input[name=registerWarrentyExtention_tyreSKUNo]').on('blur', function (e) {
    if ($(this).val() != '') {
        $(this).closest('.form-group').find('.verified-text').removeClass('error').addClass('success');
    } else {
        $(this).closest('.form-group').find('.verified-text').removeClass('success').addClass('error');
    }
})

$('input[name=cancel_item_reason]').on('change', function (e) {
    if ($(this).val() == 'other') {
        $(this).closest('.bs-order-detail').find('.bs-form').removeClass('hide');
    } else {
        $(this).closest('.bs-order-detail').find('.bs-form').addClass('hide');
    }
})

// radio btn on change functionality return replace page
$('input[name=returnReplaceForm_reason]').on('change', function (e) {
    if ($(this).val() == 'otherReason') {
        // $('#returnReplaceForm').find('button[type=submit]').attr('data-target', '#supportSuccess');
        $(this).closest('#returnReplaceForm').find('button[type=submit]').text('Submit');
    } else {
        // $('#returnReplaceForm').find('button[type=submit]').attr('data-target', '#registrationerror2');
        $(this).closest('#returnReplaceForm').find('button[type=submit]').text('Continue');
    }
})

// select tyre journey function start

// Select tyre product Slider
function selectVehicleSlider() {
    try {
        var selectVehicleSlider = new Swiper(".select-vehicle-slider", {
            slidesPerView: 1,
            // spaceBetween: 16,
            simulateTouch: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function () {
                    var currTrgt = $(this)[0].activeIndex;
                    var getSlide = $(this)[0].slides[currTrgt];
                    var getVehType = $(getSlide).find('.p-name').data('id');
                    $('.bs-select-tyre .veh-typ').removeClass('active');
                    $('.bs-select-tyre .veh-typ.' + getVehType).addClass('active');
                    if ($(getSlide).find('.p-name').hasClass('bike') === true) {
                        $(getSlide).closest('.bs-select-tyre').find('.slide-1 .vehicle').addClass('bike');
                    } else {
                        $(getSlide).closest('.bs-select-tyre').find('.slide-1 .vehicle').removeClass('bike');
                    }
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function tyreColumnSelect(vehPos, colWidth) {
    var colPos = 0;
    if ($('.bs-select-tyre .veh-typ.active .slide-wrap.active').hasClass('road-typ-selected') === true) {
        return false;
    } else {
        $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.column').each(function () {
            colPos = $(this).position().left;
            if (vehPos > colPos && vehPos < (colPos + colWidth)) {
                $('.bs-select-tyre .veh-typ.active .slide-wrap.active .column').removeClass('selected');
                $(this).addClass('selected');
                $(this).find('input[type="radio"]').prop('checked', true);
            }
        });
    }
}
var multiStepPos = 0;

function updateCurrentDist(pos, ele, conwidth, minDist, maxDist, vobj) {
    if (pos < 0) {
        ele.text(0);
    } else if ($('.bs-select-tyre .veh-typ.active .slide-wrap.active').hasClass('road-typ-selected') === true || $('.bs-select-tyre .veh-typ.active .slide-wrap.active').hasClass('distance-selection')) {
        multiStepPos = pos;
        ele.text(Math.floor(minDist + (maxDist * pos / (conwidth - vobj.width()))));
    }
}

function selectTyreJourney() {
    var prevStatePos = 0;
    var headerH = $(".cp-header").outerHeight();
    offPos = $('.bs-select-tyre').offset().top;
    $('.bs-select-tyre .js-autocomplete').focusout(function () {
        if (winWidth < 767) {
            $("html,body").animate({
                scrollTop: offPos - headerH
            }, 800);
        }
    });

    $(document).on('click', '.bs-select-tyre .js-next-step', function (e) {
        var currContWidth = $(this).closest('.slide-wrap.active').width();
        var nextStep = 0;
        for (let i = $(this).closest('.veh-typ.active').find('.slide-wrap.active').index() + 1; i < $(this).closest('.veh-typ.active').find('.slide-wrap').length; i++) {
            if ($(this).closest('.veh-typ.active').find('.slide-wrap').eq(i).hasClass('hidden') === false) {
                nextStep = $(this).closest('.veh-typ.active').find('.slide-wrap').eq(i).index();
                break;
            }
        }
        if ($(this).hasClass('last-step') === false) {
            $(this).closest('.slide-wrap.active').find('.inner-assets .vehicle').animate({
                left: currContWidth + 150
            }, 800, function () {
                if ($(this).closest('.slide-wrap').hasClass('slide-1') === true) {
                    $('.slide-1').removeClass('active');
                }
                $(".bs-select-tyre .veh-typ.active .slide-wrap").removeClass("active");
                // $(".bs-select-tyre .veh-typ.active ." + nextStep).addClass("active");
                if ($(".bs-select-tyre .veh-typ.active .slide-wrap").eq(nextStep).hasClass('result-sec') === true) {
                    $('.bs-select-tyre').addClass('final-result');
                    var optArr = [];
                    $(".bs-select-tyre .veh-typ.active .slide-wrap").each(function () {
                        var optObj = {
                            'img': '',
                            'title': ''
                        }
                        if ($(this).hasClass('distance-selection') === true && $(this).hasClass('hidden') === false) {
                            optObj.title = $(this).find('.km-indicator .amount').text() + ' KM';
                            optObj.img = 'assets/images/km-sm.svg';
                            optArr.push(optObj);
                        } else if ($(this).hasClass('hidden') === false && $(this).hasClass('result-sec') === false) {
                            optObj.title = $(this).find('.column.selected .title').text();
                            if ($(this).find('.column.selected img').length != 0) {
                                $(this).find('.column.selected img').each(function () {
                                    if ($(this).closest('picture').length != 0 && $(this).closest('picture').hasClass('hidden') === false) {
                                        optObj.img = $(this).attr('src').replace('.svg', '-sm.svg');
                                    } else if ($(this).closest('picture').length == 0 && $(this).hasClass('hidden') === false) {
                                        optObj.img = $(this).attr('src').replace('.svg', '-sm.svg');
                                    }
                                });
                            }
                            optArr.push(optObj);
                        }
                    });
                    $('.bs-select-tyre .veh-typ.active .slide-wrap.result-sec').find('.product-result .option-list .list').html('');
                    var selectedOptHTML = '';
                    $.each(optArr, function (index, value) {
                        selectedOptHTML += `<li class="item">
                            <span class="img-box">
                                <img src=`+ value.img + ` alt="">
                            </span>
                            <span class="opt-name">`+ value.title + `</span>
                        </li>`
                    });
                    $('.bs-select-tyre .veh-typ.active .slide-wrap.result-sec').find('.product-result .option-list .list').html(selectedOptHTML);
                }
                $(".bs-select-tyre .veh-typ.active .slide-wrap").eq(nextStep).addClass("active");

                $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle').css('left', -100 + '%');
                $(".bs-select-tyre .veh-typ.active .slide-wrap").eq(nextStep).one('transitionend', function (event) {
                    var getColumnPos = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.column.selected').position().left;
                    var getColumnWidth = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.column.selected').width();
                    var getVehicleWidth = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle').width();
                    console.log(getColumnPos, getColumnWidth, getVehicleWidth);
                    var totTranslate = getColumnPos + (getColumnWidth / 2) - (getVehicleWidth / 2);
                    var vehicleObj = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle');
                    vehicleObj.animate({
                        left: totTranslate
                    }, 1200).promise().then(function () {
                        console.log('Draggabbily pre init')
                        $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle').draggabilly({
                            axis: 'x',
                            grid: [getColumnWidth, 0]
                        }).on('dragEnd', function () {
                            tyreColumnSelect($(this).data('draggabilly').position.x, getColumnWidth);
                        });
                    });
                });
            });
        } else {
            $(this).closest('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.inner-assets .vehicle').animate({
                left: currContWidth + 150
            }, 800, function () {
                $(".bs-select-tyre .veh-typ.active .slide-wrap").removeClass("active");
                setTimeout(function () {
                    var optArr = [];
                    $(".bs-select-tyre .veh-typ.active .slide-wrap").each(function () {
                        var optObj = {
                            'img': '',
                            'title': ''
                        }
                        if ($(this).hasClass('distance-selection') === true && $(this).hasClass('hidden') === false) {
                            optObj.title = $(this).find('.km-indicator .amount').text() + ' KM';
                            optObj.img = 'assets/images/km-sm.svg';
                            optArr.push(optObj);
                        } else if ($(this).hasClass('hidden') === false && $(this).hasClass('result-sec') === false) {
                            optObj.title = $(this).find('.column.selected .title').text();
                            if ($(this).find('.column.selected img').length != 0) {
                                $(this).find('.column.selected img').each(function () {
                                    if ($(this).closest('picture').length != 0 && $(this).closest('picture').hasClass('hidden') === false) {
                                        optObj.img = $(this).attr('src').replace('.svg', '-sm.svg');
                                    } else if ($(this).closest('picture').length == 0 && $(this).hasClass('hidden') === false) {
                                        optObj.img = $(this).attr('src').replace('.svg', '-sm.svg');
                                    }
                                });
                            }
                            optArr.push(optObj);
                        }
                    });
                    $('.bs-select-tyre .veh-typ.active .slide-wrap.result-sec').find('.product-result .option-list .list').html('');
                    var selectedOptHTML = '';
                    $.each(optArr, function (index, value) {
                        selectedOptHTML += `<li class="item">
                            <span class="img-box">
                                <img src=`+ value.img + ` alt="">
                            </span>
                            <span class="opt-name">`+ value.title + `</span>
                        </li>`
                    });
                    $('.bs-select-tyre .veh-typ.active .slide-wrap.result-sec').find('.product-result .option-list .list').html(selectedOptHTML);
                    $('.bs-select-tyre').addClass('final-result');
                    // $(".bs-select-tyre .veh-typ.active ." + nextStep).addClass("active");
                    $(".bs-select-tyre .veh-typ.active .slide-wrap").eq(nextStep).addClass("active");
                }, 1000);
            });
        }

    });

    $('.options-available .column').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var obj = $(this);
        var vehWidth = $(this).closest('.slide-wrap.active').find('.vehicle').width();
        $(this).closest(".options-available").find('.column').removeClass("selected");
        obj.addClass("selected");
        var totTranslate = obj.position().left + (obj.width() / 2) - (vehWidth / 2);
        var vehicleObj = $(this).closest('.slide-wrap.active').find('.vehicle');
        vehicleObj.animate({
            left: totTranslate
        }, 800);

        var selectedOtpImg = obj.find(".asset-img img").attr("src");

        obj.closest(".slide-wrap").find(".mobile-img-wrap img").attr("src", selectedOtpImg);
    });

    $(document).on('click', '.js-next-stage', function () {
        $('.slide-wrap.active').find('.vehicle .amount').text(0);
        var obj = $(this);
        var sliderWidth = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').width();
        var vehicleObj = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle');
        var currValueObj = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle .amount');
        var containerWidth = 0;
        var minDist = Number($('.slide-wrap.active').find('.inner-assets .start-km .distance').text());
        var maxDist = Number($('.slide-wrap.active').find('.inner-assets .end-km .distance').text());
        var getCurrPos = 0;
        prevStatePos = vehicleObj.position().left;
        $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle').animate({
            left: sliderWidth + 150
        }, 800, function () {
            vehicleObj.draggabilly('destroy');
            $('.bs-select-tyre .veh-typ.active .slide-wrap.active').addClass("road-typ-selected");
            containerWidth = $('.slide-wrap.active').find('.inner-assets').width();
            vehicleObj.draggabilly({
                axis: 'x',
                containment: '.bs-select-tyre .veh-typ.active .slide-wrap.active .inner-assets'
            }).on('pointerMove', function () {
                getCurrPos = vehicleObj.data('draggabilly').position.x;
                updateCurrentDist(getCurrPos, currValueObj, containerWidth, minDist, maxDist, vehicleObj);
            });
            vehicleObj.animate({
                left: 0
            }, 1200);
            if ($('.bs-select-tyre .veh-typ.active .slide-wrap.active').hasClass('road-typ-selected') === true) {
                obj.off();
                obj.removeClass('js-next-stage').addClass('js-next-step');
            }
        });
    })

    $(".js-prev-stage").click(function () {
        if ($(this).closest('.slide-wrap.active').hasClass('road-typ-selected') === true) {
            $(this).closest('.step-navigation').find('.js-next-step').off();
            $(this).closest('.step-navigation').find('.js-next-step').addClass('js-next-stage').removeClass('js-next-step');
            $(this).closest('.slide-wrap.active').removeClass("road-typ-selected");
            $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.column.selected').one('transitionend', function () {
                var getColumnWidth = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.column.selected').width();
                $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle .amount').text(0);
                $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle').draggabilly('destroy');
                $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle').animate({
                    left: prevStatePos
                }, 400, function () {
                    $('.bs-select-tyre .veh-typ.active .slide-wrap.active .vehicle').draggabilly({
                        axis: 'x',
                        grid: [getColumnWidth, 0]
                    });
                });
            });
        } else if ($(this).hasClass('last-step') === true) {
            var prevStep = $(this).attr("data-prev-slide");
            var slideWidth = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').width();
            $('.slide-1').find('.vehicle').css('left', 0.6 * slideWidth);
            $(".bs-select-tyre .veh-typ.active .slide-wrap").removeClass("active");
            $('.' + prevStep).addClass('active');
            if (winWidth < 768) {
                setTimeout(function () {
                    $(".common-asset-wrap .road").hide();
                })
            }
        } else {
            var prevStep = 0;
            console.log($(this).closest('.veh-typ.active').find('.slide-wrap.active').index());
            for (let i = $(this).closest('.veh-typ.active').find('.slide-wrap.active').index() - 1; i >= 0; i--) {
                if ($(this).closest('.veh-typ.active').find('.slide-wrap').eq(i).hasClass('hidden') === false) {
                    prevStep = $(this).closest('.veh-typ.active').find('.slide-wrap').eq(i).index();
                    break;
                }
            }
            $(".bs-select-tyre .veh-typ.active .slide-wrap").eq(prevStep).find('.vehicle').css('left', 0);
            $(".bs-select-tyre .veh-typ.active .slide-wrap").removeClass("active");
            $(".bs-select-tyre .veh-typ.active .slide-wrap").eq(prevStep).addClass('active');
            $(".bs-select-tyre .veh-typ.active .slide-wrap").eq(prevStep).one('transitionend', function () {
                if ($(".bs-select-tyre .veh-typ.active .slide-wrap").eq(prevStep).hasClass('multi-step') || $(".bs-select-tyre .veh-typ.active .slide-wrap").eq(prevStep).hasClass('distance-selection')) {
                    $(".bs-select-tyre .veh-typ.active .slide-wrap").eq(prevStep).find('.vehicle').css('left', multiStepPos);
                } else {
                    var getColumnPos = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.column.selected').position().left;
                    var getColumnWidth = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.column.selected').width();
                    var getVehicleWidth = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').find('.vehicle').width();
                    var totTranslate = getColumnPos + (getColumnWidth / 2) - (getVehicleWidth / 2);
                    $(".bs-select-tyre .veh-typ.active .slide-wrap").eq(prevStep).find('.vehicle').animate({
                        left: totTranslate
                    }, 1200);
                }
            })
        }
    })

    $('.js-reset-step').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var headerH = $(".cp-header").outerHeight();
        var slideWidth = $('.bs-select-tyre .veh-typ.active .slide-wrap.active').width();
        $('.slide-1').find('.vehicle').css('left', 0.6 * slideWidth);
        $(".bs-select-tyre .veh-typ.active .slide-wrap").removeClass("active");
        $('.bs-select-tyre .veh-typ.active .multi-step').find('.js-next-step').off();
        $('.bs-select-tyre .veh-typ.active .multi-step').find('.js-next-step').addClass('js-next-stage').removeClass('js-next-step');
        $('.bs-select-tyre .veh-typ.active .slide-wrap').removeClass("road-typ-selected");
        setTimeout(function () {
            $(".bs-select-tyre").removeClass("final-result");
            $('.slide-1').addClass('active');
            $('.bs-select-tyre').attr('class', 'bs-select-tyre');
            $('.bs-select-tyre .slide-wrap').removeClass('hidden');
            if (winWidth < 768) {
                $(".common-asset-wrap .road").hide();
                $("html,body").animate({
                    scrollTop: $('.bs-select-tyre').offset().top - headerH
                }, 800);
            }
        }, 800);
    })

    // selected option image change - script for mobile 

    if (winWidth < 768) {
        if ($(".bs-select-tyre .slide-1").hasClass("active")) {
            //   setTimeout(function(){
            $(".common-asset-wrap .road").hide();
            //  })
        }
    }

    $(".mobile-img-wrap").each(function () {
        var selectedOptImage = $(this).closest(".slide-wrap").find(".options-available .selected .asset-img img").attr("src");
        $(this).find("img").attr("src", selectedOptImage);
    })

}
// select tyre journey function end

// select bat journey function start

function selectBatJourney() {
    $('.bs-select-bat .js-bat').on('click', function () {
        var currTgt = $(this).attr('data-slide');
        if ($(this).hasClass('last-step') === true) {
            var optArr = [];
            $(".bs-select-bat .slide-wrap").each(function () {
                var optObj = {
                    'img': '',
                    'title': ''
                }
                if ($(this).hasClass('hidden') === false && $(this).hasClass('result-sec') === false && $(this).hasClass('slide-1') === false) {
                    optObj.img = $(this).find('input[type="radio"]:checked').data('img');
                    if ($(this).find('.column.selected').length !== 0) {
                        optObj.title = $(this).find('.column.selected .title').text();
                        optArr.push(optObj);
                    } else {
                        optObj.title = $(this).find('input[type="radio"]:checked').next('label').text();
                        optArr.push(optObj);
                    }
                }
                // if ($(this).hasClass('distance-selection') === true && $(this).hasClass('hidden') === false) {
                //     optObj.title = $(this).find('.km-indicator .amount').text() + ' KM';
                //     optObj.img = 'assets/images/km-sm.svg';
                //     optArr.push(optObj);
                // } else if ($(this).hasClass('hidden') === false && $(this).hasClass('result-sec') === false) {
                //     optObj.title = $(this).find('.column.selected .title').text();
                //     if ($(this).find('.column.selected img').length != 0) {
                //         $(this).find('.column.selected img').each(function () {
                //             if ($(this).closest('picture').length != 0 && $(this).closest('picture').hasClass('hidden') === false) {
                //                 optObj.img = $(this).attr('src').replace('.svg', '-sm.svg');
                //             } else if ($(this).closest('picture').length == 0 && $(this).hasClass('hidden') === false) {
                //                 optObj.img = $(this).attr('src').replace('.svg', '-sm.svg');
                //             }
                //         });
                //     }
                //     optArr.push(optObj);
                // }
            });
            $('.bs-select-bat .slide-wrap.result-sec').find('.product-result .option-list .list').html('');
            var selectedOptHTML = '';
            $.each(optArr, function (index, value) {
                selectedOptHTML += `<li class="item">
                    <span class="img-box">
                        <img src=`+ value.img + ` alt="">
                    </span>
                    <span class="opt-name">`+ value.title + `</span>
                </li>`
            });
            $('.bs-select-bat .slide-wrap.result-sec').find('.product-result .option-list .list').html(selectedOptHTML);
            $('.bs-select-bat').addClass('final-result');
        }
        if ($(this).closest('.slide-wrap').find('input[type="radio"]:checked').data('opt') === 'bat') {
            $(this).closest('.bs-select-bat').find('.slide-wrap').removeClass('hidden');
            $('.bs-select-bat').find('.slide-wrap.ball').addClass('hidden');
        } else if ($(this).closest('.slide-wrap').find('input[type="radio"]:checked').data('opt') === 'ball') {
            $(this).closest('.bs-select-bat').find('.slide-wrap').removeClass('hidden');
            $('.bs-select-bat').find('.slide-wrap.bat').addClass('hidden');
        }
        $(this).closest('.bs-select-bat').find('.slide-wrap').removeClass('active');
        $(this).closest('.bs-select-bat').find('.slide-wrap.' + currTgt).each(function (index) {
            // console.log($(this),currTgt,index);
            if ($(this).hasClass('hidden') === false) {
                $(this).closest('.bs-select-bat').find('.slide-wrap.' + currTgt).eq(index).addClass('active');
            }
        });
        if ($(this).hasClass('js-reset-step')) {
            $('.bs-select-bat').removeClass('final-result');
        }
    });
    $('.bs-select-bat .options-available .column').on('click', function (e) {
        var obj = $(this);
        e.preventDefault();
        e.stopPropagation();
        $(this).closest(".options-available").find('.column').removeClass("selected");
        obj.addClass("selected");
        $(obj.find('input[type="radio"]')[0]).prop('checked', true);
    });
    $('.bs-select-bat input[name=select-bat]').on('change', function () {
        var currImg = $(this).data('img').replace('-sm.svg', '.svg');
        $(this).closest('.option-selection-wrap').find('.infography-wrap img').attr('src', currImg);
    })
}

// select bat journey function end

// shareholder information slider

function shareholderInfoSlider() {
    try {
        var shareholderSlider = new Swiper(".bs-shldr-info .swiper-container", {
            effect: "fade",
            speed: 600,
            navigation: {
                nextEl: ".bs-shldr-info .swiper-button-next",
                prevEl: ".bs-shldr-info .swiper-button-prev"
            },
            pagination: {
                el: ".bs-shldr-info .swiper-pagination",
                type: "bullets"
            }
        });
    } catch (error) {
        console.log(error);
    }
}


function innerPgSlider() {
    try {
        var shareholderSlider = new Swiper(".bs-innerpg-slider .swiper-container", {
            speed: 600,
            spaceBetween: 20,
            autoplay: true,
            navigation: {
                nextEl: ".bs-innerpg-slider .swiper-button-next",
                prevEl: ".bs-innerpg-slider .swiper-button-prev"
            },
            pagination: {
                el: ".bs-innerpg-slider .swiper-pagination",
                type: "bullets"
            }
        });
    } catch (error) {
        console.log(error);
    }
}


// Gallery slider

function gallerySlider() {
    try {
        var gallerySwiper = new Swiper(".tab-pane.active .gallery-slider .swiper-container", {
            speed: 600,
            slidesPerView: "auto",
            spaceBetween: 15,
            navigation: {
                nextEl: ".tab-pane.active .gallery-slider .swiper-button-next",
                prevEl: ".tab-pane.active .gallery-slider .swiper-button-prev"
            },
            pagination: {
                el: ".tab-pane.active .gallery-slider .swiper-pagination",
                type: "bullets"
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3,
                }
            }
        });
        $('.lyt-story-impact a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            gallerySwiper.destroy();

            gallerySwiper = new Swiper(".tab-pane.active .gallery-slider .swiper-container", {
                speed: 600,
                slidesPerView: "auto",
                spaceBetween: 15,
                navigation: {
                    nextEl: ".tab-pane.active .gallery-slider .swiper-button-next",
                    prevEl: ".tab-pane.active .gallery-slider .swiper-button-prev"
                },
                pagination: {
                    el: ".tab-pane.active .gallery-slider .swiper-pagination",
                    type: "bullets"
                },
                breakpoints: {
                    1280: {
                        slidesPerView: 3,
                    }
                }
            });

            // setTimeout(function() {

            // },100)
        });
    } catch (error) {
        console.log(error);
    }
}

// custom accordion for investors pages - start

function custAccord() {
    $(".js-accord-head").click(function () {
        if (!$(this).hasClass("active")) {
            var parentElm = $(this).closest(".js-cust-accord");
            $(".js-accord-head").removeClass("active");
            $(this).addClass("active");
            parentElm.find(".js-accord-cont").slideUp();
            $(this).next().slideDown();
        }
        else {
            $(this).next().slideUp();
            $(".js-accord-head").removeClass("active");
        }
    })
}

// custom accordion for investors pages - end


// about us page map dot click function for mobile only - start

function aboutDotClick() {
    try {
        $(".bs-about-map .dot").on("click", function (e) {
            e.stopPropagation();
            $(".bs-about-map .branch").removeClass("active");
            $(this).closest(".branch").addClass("active");
        })

        $(document).on("click", function (e) {
            if ($(e.target).is(".bs-about-map") === false) {
                $(".bs-about-map .branch").removeClass("active");
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// about us page map dot click function for mobile only - end


// company page video card slider

function videoCardSlider() {
    try {
        var videoCard = new Swiper("#video-card", {
            slidesPerView: "auto",
            spaceBetween: 14,
            simulateTouch: true,
            pagination: {
                el: ".bs-blog-listing.typ-core .swiper-pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".bs-blog-listing.typ-core .swiper-button-next",
                prevEl: ".bs-blog-listing.typ-core .swiper-button-prev"
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 14,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}


// channel-partner page video slider
function ourLatestProductSlider() {
    try {
        var videoCard = new Swiper("#our-latest-products .swiper-container", {
            slidesPerView: "auto",
            spaceBetween: 14,
            simulateTouch: true,
            pagination: {
                el: "#our-latest-products .swiper-pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: "#our-latest-products .swiper-button-next",
                prevEl: "#our-latest-products .swiper-button-prev"
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 14,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}




// company page - map Location slider

function locationSlider() {
    try {
        var locationSlider = new Swiper(".location-details .branches-slider", {
            slidesPerView: 1,
            simulateTouch: true,
            navigation: {
                nextEl: ".location-details .swiper-button-next",
                prevEl: ".location-details .swiper-button-prev"
            },
            on: {
                slideChangeTransitionEnd: function () {
                    var activeSlide = $(".location-details .branches-slider .swiper-slide-active").attr("data-location");
                    $(".map-img .dot").removeClass("active");
                    $(".map-img #" + activeSlide).addClass("active")
                },
            }
        });

        $(".map-img .dot").click(function () {
            var clickedLoc = $(this).attr("id");
            var matchLocation = $(".location-details .branches-slider .swiper-slide[data-location = '" + clickedLoc + "']").index();
            locationSlider.slideTo(matchLocation);
        })
    } catch (error) {
        console.log(error);
    }
}

// innovations slider function

function innovationSlider() {
    try {
        var innovationSwiper = new Swiper(".bs-innovation-slider .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 14,
            simulateTouch: true,
            pagination: {
                el: ".bs-innovation-slider .swiper-pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".bs-innovation-slider .swiper-button-next",
                prevEl: ".bs-innovation-slider .swiper-button-prev"
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// Media coverage swiper

function mediaCoverageSlider() {
    try {
        var mediaCoverageSwiper = new Swiper("#media-coverage", {
            slidesPerView: 3,
            spaceBetween: 24,
            simulateTouch: true,
            pagination: {
                el: ".swiper-pagination.media-coverage",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next.media-coverage",
                prevEl: ".swiper-button-prev.media-coverage"
            }
        });
    } catch (error) {
        console.log(error);
    }
}

$('.btn-back-link').on('click', function () {
    var index = $(this).closest('.registerWarrentyForm').index();
    if (index == 0) {
        location.href = './register-warranty.html';
    } else {
        $(this).closest('.registerWarrentyForm').removeClass('active').prev().addClass('active');
        $('.progress-list').find('.progress-item').eq(index).removeClass('active');
        $('.progress-list').find('.progress-item').eq(index - 1).removeClass('completed').addClass('active');
    }
})

// redirection function
function redirectToPage(pageLink) {
    location.href = pageLink + ".shtml";
}

// mobile click image info popup auto open function

function imgClickInfoPopup() {
    $('.mob-sec').find('.bs-tab').on('shown.bs.tab', function () {
        var currTgt = $(this).find('.tab-pane.show.active');
        console.log(currTgt);
        $(currTgt).find('.icon.icon-error[data-toggle="modal"]').trigger('click');
    })
}

function triggerTabClick() {
    $('.mob-sec').find('.bs-tab.on-page-load').eq(0).find('.nav-item').eq(0).find('.nav-link').eq(0).trigger('click');
}

// cricket compare product start

function prodCompare() {
    $('.card-item.typ-edit .js-compare-btn').on('click', function () {
        console.log($(this).closest('.prod-comparison-entry').find('input.form-control').val());
        if ($(this).closest('.prod-comparison-entry').find('input.form-control').val() === '') {
            return false
        } else {
            $(this).closest('.card-item.typ-edit').addClass('prod-add');
            $(this).closest('.prod-comparison-entry').find('input.form-control').val('');
            $(this).closest('.prod-comparison-entry').find('.form-group').removeClass('focus');
            $(this).closest('.prod-comparison-entry').find('.form-group').removeClass('valid');
        }
    });
    $('.card-item.typ-edit .del-btn').on('click', function () {
        $(this).closest('.card-item.typ-edit').removeClass('prod-add');
    })
}

// ready function
$(function () {
    prodCompare();
    if (sessionStorage.getItem('tyreDetails') == 'withoutImage') {
        $('.typ-register-warranty').removeClass('click-img');
    }

    if (winWidth < 1025 && $('.mob-sec .bs-tab').length != 0) {
        imgClickInfoPopup();
    }

    // Global Preload Image
    var lozadObj = lozad(".lozad", {
        loaded: function (el) {
            // Custom implementation on a loaded element	
            $(el).closest(".pre-loading").addClass("loaded");
        }
    });
    if ($(".js-cust-accord").length) {
        if (winWidth < 768) {
            custAccord();
        }
    }
    lozadObj.observe();
    if ($(".datepicker").length > 0) {
        var todayDate = new Date();
        $(".datepicker").datepicker({
            startDate: todayDate,
            autoHide: true
        });
    }
    if ($(".wow").length > 0) {
        new WOW({
            callback: function (box) {
                if ($(box).find("#countryCounter").length > 0) {
                    counterObj.countryCnt.reset();
                    counterObj.countryCnt.start();
                }
                if ($(box).find("#brandCounter").length > 0) {
                    counterObj.brandCntr.reset();
                    counterObj.brandCntr.start();
                }
                if ($(box).find("#storeConter").length > 0) {
                    counterObj.storeCntr.reset();
                    counterObj.storeCntr.start();
                }
                if ($(box).find("#anualTurnover").length > 0) {
                    counterObj.anualTurnoverCnt.reset();
                    counterObj.anualTurnoverCnt.start();
                }
                if ($(box).find("#countriesCounter").length > 0) {
                    counterObj.countriesCntr.reset();
                    counterObj.countriesCntr.start();
                }
                if ($(box).find("#empConter").length > 0) {
                    counterObj.empCntr.reset();
                    counterObj.empCntr.start();
                }
            }
        }).init();
    }
    $(window).scroll(function () {
        if ($(".cp-header").length != 0) {
            fixedHeader();
        }
    });
    if ($(".cp-header").length != 0) {
        fixedHeader();
    }
    if ($(".loggedin-user").length != 0) {
        showMoreAccountLinks();
    }
    if ($(".home-slider").length != 0) {
        homeBanner();
    }
    if ($(".js-scrollto").length != 0) {
        scrollToSec();
    }
    if ($(".need-assistance-slider").length != 0) {
        needAssistanceBanner();
    }
    if ($("#blog-listing").length != 0) {
        blogSlider();
    }
    if ($("#blog-listing2").length != 0) {
        blogSlider2();
    }
    if ($("#blog-listing3").length != 0) {
        blogSlider3();
    }
    if ($(".bs-select-tyre").length != 0) {
        selectTyreJourney();
    }
    if ($(".cp-header").length != 0) {
        menuHideShow();
        menuScrollbar();
    }
    if ($(".scroll-content").length != 0) {
        scrollContent();
    }
    if ($(".set-bg").length != 0) {
        setTimeout(function () {
            setBg();
        }, 500);
    }
    if ($("[class*=' js-autocomplete'],[class^='js-autocomplete']").length != 0) {
        autoComplete();
    }
    if ($(".bs-select").length != 0) {
        if ($(".bs-select .js-select").length != 0) {
            var options = {
                minimumResultsForSearch: Infinity
            };
            jsSelect(".bs-select .js-select", options);
        }
        if ($(".bs-select .js-menu-select").length != 0) {
            var options = {
                minimumResultsForSearch: Infinity,
                theme: "menu-dd"
            };
            jsSelect(".bs-select .js-menu-select", options);
        }
        if ($(".bs-select .js-footer-select").length != 0) {
            var options = {
                minimumResultsForSearch: Infinity,
                theme: "footer-dd"
            };
            jsSelect(".bs-select .js-footer-select", options);
        }
        if ($(".bs-select .js-select-form").length != 0) {
            var options = {
                minimumResultsForSearch: Infinity,
                theme: "form-dd"
            };
            jsSelect(".bs-select .js-select-form", options);
        }
    }
    if ($(".typ-transparent").length != 0) {
        transparent = true;
    }
    if ($(".js-product-showcase").length != 0) {
        productShowcase();
    }
    if ($(".mod-feature-points .feature-slider").length != 0) {
        cricketProductFeatures();
    }
    if ($(".js-counter").length != 0) {
        counterObj = countDown();
    }
    if ($(".js-findtyre").length != 0) {
        findTyreMore();
    }
    if ($(".bs-form .form-control").length != 0) {
        inputPlaceholder();
    }
    if ($("#other-prod-swiper").length != 0) {
        otherProdSlider();
    }
    if ($("#other-prod-swiper2").length != 0) {
        otherProdSlider2();
    }
    if ($("#other-prod-swiper3").length != 0) {
        otherProdSlider3();
    }
    if ($(".bs-timeline").length != 0) {
        if (!$(".bs-timeline").hasClass("grow-with-ceat")) {
            timelineSlider();
        }
    }
    if ($(".grow-with-ceat").length != 0) {
        growWithCeatSlider();
        // galleryThumbs.destroy();
        // galleryTop.destroy();
    }
    if (winWidth < 768) {
        if ($(".bs-about-map").length != 0) {
            aboutDotClick();
        }
    }

    if ($(".awards-slider").length != 0) {
        awardsSlider();
    }
    if ($(".threesixty").length != 0) {
        roundSlider360();
    }
    if ($(".js-read-more").length != 0) {
        readMore();
    }
    if ($(".js-play-video").length != 0) {
        playPauseVideo();
    }
    if ($(".mod-feature-points").length != 0) {
        featureBenefitBox();
    }
    if ($(".bs-prod-detail").length != 0) {
        pdScrollTo();
    }
    if ($(".change-pincode").length) {
        changePincode();
    }
    if ($(".bs-order-detail").length != 0) {
        applyPromo();
        removePromo();
        orderDetailDrawer();
    }
    if ($(".cp-footer").length != 0) {
        if (winWidth < 768) {
            footAccord();
        }
    }
    if ($(".lyt-governance").length) {
        getCountOfReports();
    }


    if ($(".bs-offer-timer").length != 0) {
        offerTimer('2020/10/28', '23:59');
    }

    if ($(".bs-prod-service").length != 0) {
        chooseDeliveryOpt()
    }

    if ($(".bs-offer-timer").length != 0) {
        if (winWidth < 768) {
            moveOfferTimerMobile();
        }
    }
    if ($('.js-yt-container').length != 0) {
        ytVidLoad();
    }
    if ($('.bs-shldr-info').length != 0) {
        shareholderInfoSlider();
    }
    if ($('.bs-innerpg-slider .swiper-container').length != 0) {
        innerPgSlider();
    }
    if ($('.gallery-slider').length != 0) {
        gallerySlider();
    }
    if ($('.bs-modal').length != 0) {
        popupClose();
    }
    if ($('#video-card').length != 0) {
        videoCardSlider();
    }
    if ($('#our-latest-products').length != 0) {
        ourLatestProductSlider();
    }
    if ($('.journey-cards').length != 0) {
        journeyCardsSlider();
        //timelineTabsClick();
    }

    if ($('#journey-cards').length != 0) {
        journeyCardsSlider2();
    }
    if ($('#market-comments-slider').length != 0) {
        marketCommentsSlider();
    }
    if ($('.bs-timeline.typ-basic-slider').length != 0) {
        timelineBasicSlider();
    }

    if ($('.branches-slider').length != 0) {
        locationSlider();
    }

    if ($('.bs-innovation-slider').length != 0) {
        innovationSlider();
    }

    if ($('.bs-data-pt').length != 0) {
        timelineClick();
    }

    if ($('#media-coverage').length != 0) {
        mediaCoverageSlider();
    }

    if ($('.js-dynamic-video').length != 0) {
        ytPopupLoad();
    }

    if ($('.bs-select-bat').length != 0) {
        selectBatJourney();
    }

    $(window).load(function () {
        $(".loader").addClass("hide");
        if ($(".bs-form .form-control").length != 0) {
            $(".bs-form .form-control").each(function () {
                var checkVal = $(this).val();
                if (checkVal != "") {
                    $(this).closest(".form-group").addClass("focus");
                }
            })
        }
    });

    if ($('.bs-tab').length != 0) {
        triggerTabClick();
    }

});


$(".Click-here").on('click', function() {
    $(".custom-model-main").addClass('form-model-open');
  }); 
  $(".close-btn, .btn, .bg-overlay").click(function(){
    $(".custom-model-main").removeClass('form-model-open');
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // TAB
  // $(document).on('click', '.tab-wrap ul li a', function (e) {
  //     var curTabContentId = $(this).attr('href');
  //     $(this).parents('.tab-wrap').find('ul li').removeClass('active');
  //     $(this).parents('li').addClass('active');
  //     $(this).parents('.tab-wrap').find('.tab-content-id').removeClass('active');
  //     $(curTabContentId).addClass("active");
  //     e.preventDefault();
  // });
