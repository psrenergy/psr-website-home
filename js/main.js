/*---------------------------------------------
Template name:  Elaze
Version:        1.0
Author:         TechyDevs
Author Email:   contact@techydevs.com
----------------------------------------------*/


(function ($) {
    "use strict";
    var $window = $(window);

    $window.on('load', function () {
        var $document = $(document);
        var $dom = $('html, body');
        var bodyEl = $('body');
        var preLoader =  $('.loader');

        /* ======= Preloader ======= */
        preLoader.delay('500').fadeOut(2000);

        /*=========== Off Canvas Menu Open ============*/
        $document.on('click', '.off-canvas-open', function (e) {
            e.preventDefault();
            $('.off-canvas').addClass('active');
        });

        /*=========== Off Canvas Menu Close ============*/
        $document.on('click', '.off-canvas-close', function (e) {
            e.preventDefault();
            $(".off-canvas").removeClass('active');
        });

        /*=========== off canvas dropdown toggle button append to a tag ============*/
        var offCanvasDropdown = $('.off-canvas-dropdown');

        offCanvasDropdown.parent('li').children('a').append(function() {
            return '<button class="off-canvas-dropdown-toggle icon-element icon-element-sm" type="button"><i class="fal fa-angle-down"></i></button>';
        });

        /*=========== off canvas dropdown toggle click action ============*/
        var offCanvasDropdownToggle = $('.off-canvas-dropdown-toggle');

        offCanvasDropdownToggle.on('click', function() {
            var Self = $(this);
            Self.toggleClass('active');
            Self.parent().parent().siblings().children('a').find('.off-canvas-dropdown-toggle').removeClass('active');
            Self.parent().parent().children('.off-canvas-dropdown').slideToggle();
            Self.parent().parent().siblings().children('.off-canvas-dropdown').slideUp();
            return false;
        });

        $window.on('scroll', function () {
            //header fixed
            var headerArea = $('.header-area');
            var headerAreaOuter = $('.header--area');

            if ($window.scrollTop()) {
                headerArea.addClass("fixed-top");
                // add padding top to show content behind header-area
                bodyEl.css('padding-top', headerAreaOuter.outerHeight() + 'px');
            }else{
                headerArea.removeClass("fixed-top");
                // remove padding top from body
                bodyEl.css('padding-top', '0');
            }

            //back to top button
            var backToTopBtn = $('#back-to-top');
            if ($window.scrollTop() > 300) {
                backToTopBtn.addClass('active');
            } else {
                backToTopBtn.removeClass('active');
            }
        });

        /* ======= Back to Top Button ======= */
        $document.on('click','#back-to-top', function () {
            $dom.animate({
                scrollTop: 0
            },1000);
        });

        /*==== hero-slider =====*/
        var heroSlider = $('.hero-slider');
        if (heroSlider.length) {
            heroSlider.owlCarousel({
                items: 1,
                nav: false,
                dots: true,
                autoplay: false,
                loop: true,
                smartSpeed: 1000,
                animateOut:"animate__slideOutDown",
                animateIn:"animate__fadeIn"
            });
        }
        /*==== hero-slider heading animation =====*/
        heroSlider.on('translate.owl.carousel', function(){
            $('.hero-slider .sec-title, .hero-slider .list-item').removeClass('animate__animated animate__pulse').css('opacity', '0');
            $('.hero-slider .sec-desc').removeClass('animate__animated animate__fadeInUp').css('opacity', '0');
            $('.hero-slider .btn').removeClass('animate__animated animate__fadeInUp').css('opacity', '0');
        });

        heroSlider.on('translated.owl.carousel', function(){
            $('.hero-slider .sec-title, .hero-slider .list-item').addClass('animate__animated animate__pulse').css("opacity", '1');
            $('.hero-slider .sec-desc').addClass('animate__animated animate__fadeInUp').css('opacity', '1');
            $('.hero-slider .btn').addClass('animate__animated animate__fadeInUp').css('opacity', '1');
        });

        /*=========== Countdown ============*/
        var countDown = $('#countdown');
        if (countDown.length) {
            countDown.countdown({
                year: 2022, // YYYY Format
                month: 9, // 1-12
                day: 1, // 1-31
                hour: 0, // 24 hour format 0-23
                minute: 0, // 0-59
                second: 0, // 0-59
                timezone: -6, // http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
            });
        }

        /*=========== Counter up ============*/
        var numberCounter = $('.counter');
        if (numberCounter.length) {
            numberCounter.counterUp({
                delay: 20,
                time: 2000
            });
        }

        /*==== jQuery lazy =====*/
        var lazyLoad = $('.lazy');
        if (lazyLoad.length) {
            lazyLoad.lazy();
        }

        /*==== testimonial-wrap =====*/
        var testimonialSlider = $('.testimonial-slider');
        if (testimonialSlider.length) {
            testimonialSlider.owlCarousel({
                loop: true,
                items: 5,
                nav: false,
                dots: true,
                smartSpeed: 500,
                autoplay: false,
                margin: 0,
                responsive:{
                    0:{
                        items:1,
                    },
                    767:{
                        items:2,
                    },
                    992:{
                        items:3,
                    },
                    1025:{
                        items:4,
                    },
                    1440:{
                        items:5,
                    }
                }
            });
        }

        /*==== Event gallery  =====*/
        var eventGallery = $('[data-fancybox="event-gallery"]');
        if (eventGallery.length) {
            eventGallery.fancybox({
                // Options will go here
                buttons: [
                    "zoom",
                    "share",
                    "fullScreen",
                    "download",
                    "close"
                ],
            });
        }

        /*==== Preview video  =====*/
        var previewVideo = $('[data-fancybox="preview-video"]');
        if (previewVideo.length) {
            previewVideo.fancybox();
        }

        /*========= Ajax contact form ========*/
        var submitBtn = document.querySelector('#send-message-btn');
        var form = $('.contact-form'),
            message = $('.alert-message'),
            formData;

        // Success function
        function doneFunction(response) {
            submitBtn.innerHTML = 'Send Message';
            message.fadeIn().removeClass('alert-danger').addClass('alert-success');
            message.text(response);
            setTimeout(function () {
                message.fadeOut();
            }, 3000);
            form.find('input:not([type="submit"]), textarea').val('');
        }

        // fail function
        function failFunction(data) {
            submitBtn.innerHTML = 'Send Message';
            message.fadeIn().removeClass('alert-success').addClass('alert-danger');
            message.text(data.responseText);
            setTimeout(function () {
                message.fadeOut();
            }, 3000);
        }

        // form submit
        form.submit(function (e) {
            e.preventDefault();
            formData = $(this).serialize();
            submitBtn.innerHTML = 'Sending...';
            setTimeout(function () {
                $.ajax({
                    type: 'POST',
                    url: form.attr('action'),
                    data: formData
                })
                    .done(doneFunction)
                    .fail(failFunction);
            }, 2000)
        });

        /*==== Show/Hide password of input field =====*/
        var togglePassword = $('.toggle-password');
        togglePassword.on('click', function () {
            $(this).toggleClass('active');
            var passInput = $('.password-field');
            if (passInput.attr('type') === 'password') {
                passInput.attr('type', 'text');
            } else {
                passInput.attr('type', 'password');
            }
        });


    });
    
    
})(jQuery);