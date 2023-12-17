$(document).ready(function () {

	$('.btn-wrap').focusin(function (e) {
		e.preventDefault();
		$(this).addClass('focus');
	});

	$('.btn-wrap').focusout(function (e) {
		e.preventDefault();
		$(this).removeClass('focus');
	});

	$('.competition-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.competition-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.competition-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
				}
    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
    },
  ]
	});

	$('.winner-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		prevArrow: $('.winner-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.winner-slider-wrap .slider-navigation .slick-next'),
	});


	var imgOpts = $.extend(true, {}, $.fancybox.defaults, {
		caption: function (instance, item) {
			return $(this).next('.content').html();
		},
		beforeShow: function () {
			$('.caption--image').remove();
		},
		afterShow: function () {
			var caption = $(".fancybox-caption"),
				innerCaption = caption.clone().addClass('caption--image');

			$(".fancybox-slide--current .fancybox-content").append(innerCaption);
			caption.not('.caption--image').addClass('caption--bottom');
		},
		protect: true,
		toolbar: false,
		smallBtn: true
	});

	function applyImgOpts() {
		$('[data-fancybox="images"]').fancybox(imgOpts);
	}

	applyImgOpts();

	$(".drop-icon").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap").addClass("open");
		$("body").addClass("overflow");
	});

	$(".close-menu").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap").removeClass("open");
		$("body").removeClass("overflow");
	});

	$('.select-wrap select').select2({
		minimumResultsForSearch: -1,

	});

	$(".question-list-item .item-heading").on("click", function (e) {
		e.preventDefault();
		if ($(this).find("span").hasClass("rotate")) {
			$(this).find("span").removeClass("rotate");
		} else {
			$(".question-list-item span").removeClass('rotate');
			$(this).find("span").addClass("rotate");
		}
		$(".question-list-item").removeClass('opened');
		$(".item-body").removeClass('active');
		$(this).closest(".question-list-item").find(".item-body").addClass('active');
		$(this).closest(".question-list-item").addClass('opened');
		$(".item-body:not(.active)").slideUp();
		$(".question-list-item:not(.opened)").removeClass("active");
		$(this).closest(".question-list-item").find(".item-body").slideToggle();
		$(this).closest(".question-list-item").toggleClass("active");
	});

	$(".winner-slider .item .info-wrap .top .name").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".info-wrap").find(".bottom").addClass("opened");
	})

	$('#img-upload').on('change', function (e) {
		return readURL(this);
	});
	
		$('#img-upload1').on('change', function (e) {
		return readURL(this);
	});

	var readURL = function (input) {
		var reader;
		if (input.files && input.files[0]) {
			reader = new FileReader();
			reader.onload = function (e) {
				$('.img-upload-wrap .img').css('background-image', 'url(' + e.target.result + ')');
				$('.img-upload-wrap').addClass('uploaded');
				$('.img-upload-wrap .icon-change-wrap').removeClass("shown");

			};
			return reader.readAsDataURL(input.files[0]);
		}
	};

	$(document).on("mouseenter", '.img-upload-wrap.uploaded label', function () {
		console.log(1);
		$('.img-upload-wrap .icon-change-wrap').addClass("shown");
	});

	$(document).on("mouseleave", '.img-upload-wrap.uploaded label', function () {
		console.log(2);
		$('.img-upload-wrap .icon-change-wrap').removeClass("shown");
	});

	$(".img-upload-wrap .delete-img").on("click", function () {
		$('.img-upload-wrap').removeClass('uploaded');
	});

	$(".img-upload-wrap .delete-img").on("click", function () {
		$('.img-upload-wrap').removeClass('uploaded');
	});



	$('.popup').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade'
	});


	$("#form").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			name: {
				required: true,
			},
			subject: {
				required: true,
			},
			phone: {
				required: true,
			}
		},
		messages: {
			email: {
				required: "Укажите корректный E-mail"
			},
			name: {
				required: "Укажите Имя"
			},
			subject: {
				required: "Укажите Фамилию"
			},
			phone: {
				required: "Укажите Номер телефона"
			}
		},

	});

	$('#form').on("submit", function (e) {
		e.preventDefault();
		if ($('#form').valid()) {
			$(this).closest(".form-wrap").hide();
			$(".form-valid").show();
		}
	});

	$("#form2").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
			},
		},
		messages: {
			email: {
				required: "Укажите корректный E-mail"
			},
			password: {
				required: "Укажите Пароль"
			},
		},

	});

	$('#form2').on("submit", function (e) {
		e.preventDefault();
	});
	
		$("#form3").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
		},
		messages: {
			email: {
				required: "Укажите корректный E-mail"
			},
		},

	});

	$('#form3').on("submit", function (e) {
		e.preventDefault();
	});

	$(".password-wrap button[type=button]").on("click", function () {

		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(this).closest(".password-wrap").find("input").attr('type', 'password');
		} else {
			$(this).addClass("open");
			$(this).closest(".password-wrap").find("input").attr('type', 'text');
		}

	});
	

	

});
