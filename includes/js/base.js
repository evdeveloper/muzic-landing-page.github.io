// JavaScript Document
$(document).ready(function(){
	Modernizr.addTest('firefox', function () {
	 return !!navigator.userAgent.match(/firefox/i);
	});
	
	var  screen_h = $(window).height(),
		$_page = $('body'),
		$_pages = $('._page'),
		$_home = $('#home'),
		$_discography = $('#discography'),
		$discography_content = $('#discography-content'),
		discography_content_h = $discography_content.height(),
		discography_content_w = $discography_content.width(),
		$rotate_albums = $('#rotate-albums'),
		$rotate_albums_faces = $('#rotate-albums-faces'),
		$rotate_to_left = $('.rotate-to-left'),
		$rotate_to_bottom = $('.rotate-to-bottom'),
		$rotate_to_right = $('.rotate-to-right'),
		$rotate_to_front = $('.rotate-to-front'),
		$rotate_to_back = $('.rotate-to-back'),
		$_contact = $('#contact'),
		$_about = $('#about'),
		$trackslist = $('.sc-trackslist'),
		$a_1 = $('.about_1'),
		$a_2 = $('.about_2'),
		$a_3 = $('.about_3'),
		data_speed_a1 = $a_1.attr('data-speed'),
		data_speed_a2 = $a_2.attr('data-speed'),
		data_speed_a3 = $a_3.attr('data-speed'),
		$h1_discography = $('#h1_discography'),
		$arrow_discography = $('#arrow_discography'),
		data_speed_h1 = $h1_discography.attr('data-speed'),
		data_speed_arrow = $arrow_discography.attr('data-speed'),
		$arrow_scroll = $('.arrow_scroll'),
		$_page_close = $('._page-close'),
		$logo = $('.logo'),

		scene = document.getElementById('home'),
		parallax = new Parallax(scene),
		sceneAbout = document.getElementById('about'),
		parallaxAbout = new Parallax(sceneAbout);
	
	$_pages.css('line-height',screen_h+'px');

	var	$a_ = $('.nav-a'),
		$a_home = $('#a-home'),
		$a_discography = $('#a-disco'),
		$a_contact = $('#a-contact'),
		$a_about = $('#a-about'),
		$open_player = $('.open-player'),
		$close_player = $('.close-player'),
		$rotate = $('#rotate');

	$trackslist.css('height',screen_h-110);

	$open_player.on('click',function(){
		$rotate.addClass('is-turned');
	});
	$close_player.on('click',function(){
		if($('.sc-player').hasClass('menu')){
			$('.sc-menu').trigger('click');
			setTimeout(function(){
				$rotate.removeClass('is-turned');
			},400);
		}
		else{
			$rotate.removeClass('is-turned');
		}
	});

	$logo.on('click',function(){
		$_page.toggleClass('share');
	});

	$a_discography.on('click',function(){
		$a_.removeClass('current');
		$(this).addClass('current');
		discography();
		return false;
	});
	$a_contact.on('click',function(){
		$a_.removeClass('current');
		$(this).addClass('current');
		contact();
		return false;
	});
	$a_about.on('click',function(){
		$a_.removeClass('current');
		$(this).addClass('current');
		about();
		return false;
	});

	$a_home.on('click',function(){
		$a_.removeClass('current');
		$(this).addClass('current');
		home();
	});
	$_page_close.on('click',function(){
		$a_.removeClass('current');
		$a_home.addClass('current');
		home();
	});
	$(document).keyup(function(e) {
		var  esc = 27,
			 up = 38,
			 left = 37,
			 right = 39,
			 down = 40;

		if(e.keyCode == esc){
			if($_page.hasClass('share')){
				$_page.removeClass('share');
			}
			else{
				$a_.removeClass('current');
				$a_home.addClass('current');
				home();
			}
		}
		if(e.keyCode == up){$rotate.addClass('is-turned');}
		if(e.keyCode == down){
			if($('.sc-player').hasClass('menu')){
				$('.sc-menu').trigger('click');
				setTimeout(function(){
					$rotate.removeClass('is-turned');
				},400);
			}
			else{
				$rotate.removeClass('is-turned');
			}
		}

		if($_page.hasClass('_discography')){
			if(e.keyCode == left){
				if($rotate_albums_faces.hasClass('is-turned-front')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-bottom');
				}
				else if($rotate_albums_faces.hasClass('is-turned-right')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-front');
				}
				else if($rotate_albums_faces.hasClass('is-turned-back')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-right');
				}
				else if($rotate_albums_faces.hasClass('is-turned-left')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-back');
				}
				else if($rotate_albums_faces.hasClass('is-turned-bottom')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-left');
				}
			}
			if(e.keyCode == right){
				if($rotate_albums_faces.hasClass('is-turned-front')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-right');
				}
				else if($rotate_albums_faces.hasClass('is-turned-right')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-back');
				}
				else if($rotate_albums_faces.hasClass('is-turned-back')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-left');
				}
				else if($rotate_albums_faces.hasClass('is-turned-left')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-bottom');
				}
				else if($rotate_albums_faces.hasClass('is-turned-bottom')){
					rotate_albums_faces_reset();
					$rotate_albums_faces.addClass('is-turned-front');
				}
			}
		}
	});

	$rotate_to_left.on('click',function(){
		rotate_albums_faces_reset();
		$rotate_albums_faces.addClass('is-turned-left');
	});
	$rotate_to_right.on('click',function(){
		rotate_albums_faces_reset();
		$rotate_albums_faces.addClass('is-turned-right');
	});
	$rotate_to_back.on('click',function(){
		rotate_albums_faces_reset();
		$rotate_albums_faces.addClass('is-turned-back');
	});
	$rotate_to_front.on('click',function(){
		rotate_albums_faces_reset();
		$rotate_albums_faces.addClass('is-turned-front');
	});
	$rotate_to_bottom.on('click',function(){
		rotate_albums_faces_reset();
		$rotate_albums_faces.addClass('is-turned-bottom');
	});

	function rotate_albums_faces_reset(){
		$rotate_albums_faces.removeClass('is-turned-front');
		$rotate_albums_faces.removeClass('is-turned-left');
		$rotate_albums_faces.removeClass('is-turned-right');
		$rotate_albums_faces.removeClass('is-turned-back');
	}

	function home(){
		$('body')[0].className = $('body')[0].className.replace(/\_.*?\b/g,'');
		$_pages.removeClass('ready');
		$_page.addClass('_home');
		$_home.addClass('ready');
	};
	function discography(){
		$('body')[0].className = $('body')[0].className.replace(/\_.*?\b/g,'');
		$_pages.removeClass('ready');
		$_page.addClass('_discography');
		$_discography.addClass('ready');
	};
	function about(){
		$('body')[0].className = $('body')[0].className.replace(/\_.*?\b/g,'');
		$_pages.removeClass('ready');
		$_page.addClass('_about');
		$_about.addClass('ready');
	};
	function contact(){
		$('body')[0].className = $('body')[0].className.replace(/\_.*?\b/g,'');
		$_pages.removeClass('ready');
		$_page.addClass('_contact');
		$_contact.addClass('ready');
	};

	$_about.on("scroll", function(){
		var  scroll_top = $_about.scrollTop();
		$a_1.css({y:(scroll_top/data_speed_a1)});
		$a_2.css({y:(scroll_top/data_speed_a2)});
		$a_3.css({y:-(scroll_top/data_speed_a3)});
	});
	$_discography.on("scroll", function(){
		var  scroll_top = $_discography.scrollTop();
		$h1_discography.css({y:(scroll_top/data_speed_h1)});
		$arrow_discography.css({y:(scroll_top/data_speed_arrow)});
	});

	$arrow_scroll.on('click',function(){
		$('#discography').animate({scrollTop: ($("#overflow").offset().top + 30)});
	});
});
$(window).load(function(){
	var  $_page = $('body');
	setTimeout(function(){
		$_page.addClass('ready');
	},2500);
});
$(window).resize(function(){
	var $_pages = $('._page'),
		$trackslist = $('.sc-trackslist'),
		screen_h = $(window).height();
	$_pages.css('line-height',screen_h+'px');
	$trackslist.css('height',screen_h-110);
});

$(function(){
	var  header = $('.site-header'),
		canvas = $('<canvas></canvas>').appendTo(header)[0],
	     
		ctx    = canvas.getContext('2d'),
		color  = '#fc335c',
		idle   = null, mousePosition;

	canvas.width         = window.innerWidth;
	canvas.height        = header.outerHeight();
	canvas.style.display = 'block';

	ctx.fillStyle = color;
	ctx.lineWidth = .1;
	ctx.strokeStyle = color;

	var  mousePosition = {
			x: 30 * canvas.width,
			y: 30 * canvas.height
		},
		dots = {
			nb: 150,
			distance: 90,
			d_radius: 900,
			array: []
		};

	function Dot(){
	   this.x = Math.random() * canvas.width;
	   this.y = Math.random() * canvas.height;

	   this.vx = -.5 + Math.random();
	   this.vy = -.5 + Math.random();

	   this.radius = Math.random();
	}

	Dot.prototype = {
	   create: function(){
	       ctx.beginPath();
	       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	       ctx.fill();
	   },

	   animate: function(){
	       
	       for(var i = 0, dot=false; i < dots.nb; i++){

	           dot = dots.array[i];

	           if(dot.y < 0 || dot.y > canvas.height){
	               dot.vx = dot.vx;
	               dot.vy = - dot.vy;
	           }else if(dot.x < 0 || dot.x > canvas.width){
	               dot.vx = - dot.vx;
	               dot.vy = dot.vy;
	           }
	           dot.x += dot.vx;
	           dot.y += dot.vy;
	       }
	   },

	   line: function(){
	       for(var i = 0; i < dots.nb; i++){
	           for(var j = 0; j < dots.nb; j++){
	               i_dot = dots.array[i];
	               j_dot = dots.array[j];

	               if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
	                   if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
	                       ctx.beginPath();
	                       ctx.moveTo(i_dot.x, i_dot.y);
	                       ctx.lineTo(j_dot.x, j_dot.y);
	                       ctx.stroke();
	                       ctx.closePath();
	                   }
	               }
	           }
	       }
	   }
	};

	function createDots(){
	   ctx.clearRect(0, 0, canvas.width, canvas.height);
	   for(var i = 0; i < dots.nb; i++){
	       dots.array.push(new Dot());
	       dot = dots.array[i];

	       dot.create();
	   }

	   dot.line();
	   dot.animate();
	}

	idle = setInterval(createDots, 1000/30);

	$(canvas).on('mousemove mouseleave', function(e){
	   if(e.type == 'mousemove'){
	       mousePosition.x = canvas.width / 2;
	       mousePosition.y = canvas.height / 2;
	   }
	   if(e.type == 'mouseleave'){
	       mousePosition.x = canvas.width / 2;
	       mousePosition.y = canvas.height / 2;
	   }
	});
});

var kk=false;
jQuery(function(){
	var kKeys=[];function Kpress(e){
		kKeys.push(e.keyCode);
		if(kKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65")>=0){jQuery(this).unbind('keydown', Kpress);konami_code();}}
		jQuery(document).keydown(Kpress);
	});
function konami_code(){
	var  $body = $('body'),
		$lol = $('.lol');
	$body.addClass('konami');
	$lol.on('click',function(){
		$body.removeClass('konami');
	});
}