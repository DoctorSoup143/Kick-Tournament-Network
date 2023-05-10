$(document).ready((function () {
    "use strict";
    $(window).scroll((function () {
        $(this).scrollTop() > 1 * $(window).height() ? $(".navbar-dark").addClass("scrolled") : $(".navbar-dark").removeClass("scrolled")
    })), $("#hamburger").on("click", (function () {
        $(this).toggleClass("open")
    })), $("a[href*=\\#]:not([href=\\#]):not(.control-right, .control-left)").on("click", (function () {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
                scrollTop: e.offset().top - 100
            }, 1e3), !1
        }
    }));
    new Blazy;
    var e = $(".animation-element"),
        t = $(window);
    t.on("scroll resize", (function () {
        var n = t.height(),
            o = t.scrollTop(),
            a = o + n;
        $.each(e, (function () {
            var e = $(this),
                t = e.outerHeight(),
                n = e.offset().top + 150;
            n + t >= o && n <= a && e.addClass("in-view")
        }))
    })), t.trigger("scroll"), $("body").on("hidden.bs.modal", (function (e) {
        $(e.target).find("iframe").each((function (e, t) {
            $(t).attr("src", $(t).attr("src"))
        }))
    })), lightbox.option({
        resizeDuration: 500,
        imageFadeDuration: 500,
        wrapAround: !0
    }), $(".js-video-button").modalVideo(), google.maps.event.addDomListener(window, "load", (function () {
        var e = {
            zoom: 11,
            center: new google.maps.LatLng(40.67, -73.94),
            styles: [{
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{
                    saturation: 36
                }, {
                    color: "#000000"
                }, {
                    lightness: 40
                }]
            }, {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#000000"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "all",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                    lightness: 20
                }, {
                    color: "#000000"
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }, {
                featureType: "administrative.country",
                elementType: "labels.text.fill",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#ffffff"
                }]
            }, {
                featureType: "administrative.province",
                elementType: "geometry.fill",
                stylers: [{
                    visibility: "simplified"
                }]
            }, {
                featureType: "administrative.province",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#ffffff"
                }]
            }, {
                featureType: "administrative.province",
                elementType: "labels.text.stroke",
                stylers: [{
                    weight: "0.01"
                }, {
                    invert_lightness: !0
                }, {
                    color: "#f26c4f"
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    visibility: "simplified"
                }, {
                    weight: "0.05"
                }, {
                    color: "#ffffff"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#E48632"
                }, {
                    weight: "0.10"
                }, {
                    invert_lightness: !0
                }, {
                    lightness: 29
                }]
            }, {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#E48632"
                }]
            }, {
                featureType: "road.highway.controlled_access",
                elementType: "geometry",
                stylers: [{
                    weight: "0.30"
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 18
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 19
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 17
                }]
            }]
        },
            t = document.getElementById("map-canvas"),
            n = new google.maps.Map(t, e);
        new google.maps.Marker({
            position: new google.maps.LatLng(40.67, -73.94),
            map: n,
            icon: "images/map_marker.png",
            title: "Snazzy!"
        })
    }));
    var n = (new Date).getFullYear();

    function o() {
        $("#contactForm").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function () {
            $(this).removeClass()
        }))
    }

    function a(e, t) {
        if (e) var n = "h3 text-center text-success";
        else n = "h3 text-center text-danger";
        $("#msgSubmit").removeClass().addClass(n).text(t)
    }

    function i() {
        $("#newsletter").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function () {
            $(this).removeClass()
        }))
    }

    function s(e, t) {
        if (e) var n = "h3 text-center tada animated text-success";
        else n = "h3 text-center text-danger";
        $("#msgSignup").removeClass().addClass(n).text(t)
    }
    document.getElementById("year").innerHTML = n, $("#contactForm").validator().on("submit", (function (e) {
        var t, n, i;
        e.isDefaultPrevented() ? (o(), a(!1, "Did you fill in the form properly?")) : (e.preventDefault(), t = $("#name").val(), n = $("#email").val(), i = $("#message").val(), $.ajax({
            type: "POST",
            url: "php/form-process.php",
            data: "name=" + t + "&email=" + n + "&message=" + i,
            success: function (e) {
                "success" === e ? ($("#contactForm")[0].reset(), a(!0, "Message Submitted!")) : (o(), a(!1, e))
            }
        }))
    })), $("#newsletter").validator().on("submit", (function (e) {
        var t;
        e.isDefaultPrevented() ? (i(), s(!1, "Did you fill in the form properly?")) : (e.preventDefault(), t = $("#emailsign").val(), $.ajax({
            type: "POST",
            url: "php/newsletter-process.php",
            data: "&emailsign=" + t,
            success: function (e) {
                "success" === e ? ($("#newsletter")[0].reset(), s(!0, "Awesome! Thank you for subscribing!")) : (i(), s(!1, e))
            }
        }))
    }))
})), window.onload = function () {
    var e = $(".games-portfolio");
    e.isotope({}), $(".game-tags li a").on("click", (function () {
        var t = $(this).attr("data-filter");
        return e.isotope({
            filter: t
        }), !1
    })), $("#progress").animate({
        width: "100%"
    }, 300, (function () {
        $("#loader-wrapper").addClass("loaded")
    }))
};
