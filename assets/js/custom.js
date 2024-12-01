
/*------------------------ [Pre-Loader] ------------------------*/

jQuery(window).on("load", function() {
	jQuery(".overlay").css({'display':'none'});
});

jQuery(document).ready(function() {

	"use strict";


	/*------------------------ [Weekend Mode Button] ------------------------*/

	jQuery(".mber-switch-btn input:checkbox").on('click', function() {
		jQuery(this).parents(".mber-weekend-mode").toggleClass("checked");
		if($('.mber-switch-btn input:checkbox:checked').length){
			jQuery('.mber-tech, .mber-adm-29-10-2021, .mber-adm-21-12-2021, .mber-adm-05-04-22, .mber-adm-05-10-2022, .mber-adm-24-11-2022, .mber-adm-13-12-2023, .mber-adm-20-03-2024, .mber-adm2-27-12-2023, .mber-adm2-16-02-2024, .mber-adm2-18-04-2024, .mber-ug-23-05-2022, .mber-ug-01-08-2022, .mber-ug-11-07-2023, .mber-spasibo, .mber-html-text-khmel, .mber-doklad-2023, .mber-pfpkpep, .mber-sichinava, .mber-html-text-23-08-2023, .mber-html-text-23-11-2023, .mber-html-text-06-06-2024, .mber-html-text-page, .mber-project-detail, .mber-portfolio-content, .mber-image-page, .mber-soundcloud-page, .mber-vimeo-content, .mber-youtube-video-page, .mber-home-main-content, .weekend-mode-hide, .mber-slider-page').addClass("hidepage");
			jQuery('.mber-tech, .mber-adm-29-10-2021, .mber-adm-21-12-2021, .mber-adm-05-04-22, .mber-adm-05-10-2022, .mber-adm-24-11-2022, .mber-adm-13-12-2023, .mber-adm-20-03-2024, .mber-adm2-27-12-2023, .mber-adm2-16-02-2024, .mber-adm2-18-04-2024, .mber-ug-23-05-2022, .mber-ug-01-08-2022, .mber-ug-11-07-2023, .mber-spasibo, .mber-html-text-khmel, .mber-doklad-2023, .mber-pfpkpep, .mber-sichinava, .mber-html-text-23-08-2023, .mber-html-text-23-11-2023, .mber-html-text-06-06-2024, .mber-html-text-page, .mber-project-detail, .mber-portfolio-content, .mber-image-page, .mber-soundcloud-page, .mber-vimeo-content, .mber-youtube-video-page, .mber-home-main-content, .weekend-mode-hide, .mber-single-news-content, .mber-slider-page').removeClass("showpage");
		} else {
			jQuery('.mber-project-detail, .mber-single-news-content').removeClass('showpage');
			jQuery('.mber-portfolio-content, .mber-home-main-content, .weekend-mode-hide').removeClass('hidepage');
		}
		jQuery(".mber-weekend-mode, .mber-home-image").toggleClass("showpage");
		jQuery(".mber-weekend-image").toggleClass("visible-img");
	});

	jQuery(".mber-burger").on('click', function() {
		jQuery('.mber-about-wrap, .mber-home-wrap').toggleClass("border-none");
	});

	jQuery(".mber-burger").on('click', function() {
		jQuery('.mber-burger').toggleClass("click");
	});



	/*------------------------ [Portfolio Tab] ------------------------*/

	var links = document.querySelectorAll('.mber-tab-filters ul li a');
	var content = document.querySelectorAll('div.content');
	var lis = document.querySelectorAll('.mber-tab-filters ul li');

	for (let i = 0; i < links.length; i++){
		links[i].addEventListener('click', function(e){
			e.preventDefault();
			var activLinks = document.querySelector('.mber-tab-filters ul li a.activ');
			var activContent = document.querySelector('.mber-tab-content-box>div.activ');

			activLinks.classList.remove('activ');
			activContent.classList.remove('activ');

			this.classList.add('activ');
			var attr = this.getAttribute('href');

			var activ = document.querySelector(attr);

			activ.classList.add('activ');

			var lisLength = lis.length;
			var lisWidth = 100 / lisLength;
			var position = i*lisWidth;

		});
	}


	/*------------------------ [Tab on click] ------------------------*/

	jQuery(".all-content-wrap.detail-page").click(function() {
		jQuery('.mber-project-detail').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	});
	jQuery(".close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-project-detail').removeClass("showpage");
	});

	jQuery(".all-content-wrap.image-page").click(function() {
		jQuery('.mber-image-page').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-image-page').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.slider-page").click(function() {
		jQuery('.mber-slider-page').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-slider-page').removeClass("showpage");
	});

	jQuery(".all-content-wrap.soundcloud-page").click(function() {
		jQuery('.mber-soundcloud-page').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-soundcloud-page').removeClass("showpage");
	});

	jQuery(".all-content-wrap.vimeo-video-page").click(function() {
		jQuery('.mber-vimeo-content').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-vimeo-content').removeClass("showpage");
	});

	jQuery(".all-content-wrap.youtube-video-page").click(function() {
		jQuery('.mber-youtube-video-page').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-youtube-video-page').removeClass("showpage");
	});

	jQuery(".mber-blog-wrap").click(function() {
		jQuery('.mber-single-news-content').toggleClass("showpage");
		jQuery('.mber-news-content').toggleClass("hidepage");
	});
	jQuery(".blog-back-btn").click(function() {
		jQuery('.mber-news-content').removeClass("hidepage");
		jQuery('.mber-single-news-content').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.html-text-23-08-2023").click(function() {
		jQuery('.mber-html-text-23-08-2023').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-html-text-23-08-2023').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.html-text-23-11-2023").click(function() {
		jQuery('.mber-html-text-23-11-2023').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-html-text-23-11-2023').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.html-text-06-06-2024").click(function() {
		jQuery('.mber-html-text-06-06-2024').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-html-text-06-06-2024').removeClass("showpage");
	});

	jQuery(".all-content-wrap.adm-29-10-2021").click(function() {
		jQuery('.mber-adm-29-10-2021').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm-29-10-2021').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.adm-21-12-2021").click(function() {
		jQuery('.mber-adm-21-12-2021').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm-21-12-2021').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.adm-05-04-22").click(function() {
		jQuery('.mber-adm-05-04-22').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm-05-04-22').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.adm-05-10-2022").click(function() {
		jQuery('.mber-adm-05-10-2022').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm-05-10-2022').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.adm-24-11-2022").click(function() {
		jQuery('.mber-adm-24-11-2022').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm-24-11-2022').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.adm-13-12-2023").click(function() {
		jQuery('.mber-adm-13-12-2023').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm-13-12-2023').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.adm-20-03-2024").click(function() {
		jQuery('.mber-adm-20-03-2024').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm-20-03-2024').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.adm2-27-12-2023").click(function() {
		jQuery('.mber-adm2-27-12-2023').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm2-27-12-2023').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.adm2-16-02-2024").click(function() {
		jQuery('.mber-adm2-16-02-2024').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm2-16-02-2024').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.adm2-18-04-2024").click(function() {
		jQuery('.mber-adm2-18-04-2024').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-adm2-18-04-2024').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.ug-23-05-2022").click(function() {
		jQuery('.mber-ug-23-05-2022').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-ug-23-05-2022').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.ug-01-08-2022").click(function() {
		jQuery('.mber-ug-01-08-2022').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-ug-01-08-2022').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.ug-11-07-2023").click(function() {
		jQuery('.mber-ug-11-07-2023').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-ug-11-07-2023').removeClass("showpage");
	});

	//jQuery(".all-content-wrap.spasibo").click(function() {
		//jQuery('.mber-spasibo').toggleClass("showpage");
		//jQuery('.mber-home-main-content').toggleClass("hidepage");
	//})
	//jQuery(".image-close, .close").click(function() {
		//jQuery('.mber-home-main-content').removeClass("hidepage");
		//jQuery('.mber-spasibo').removeClass("showpage");
	//});
	jQuery(".all-content-wrap.spasibo").click(function() {
		jQuery('.mber-spasibo').toggleClass("showpage");
		jQuery('.mber-news-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-news-content').removeClass("hidepage");
		jQuery('.mber-spasibo').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.tech").click(function() {
		jQuery('.mber-tech').toggleClass("showpage");
		jQuery('.mber-news-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-news-content').removeClass("hidepage");
		jQuery('.mber-tech').removeClass("showpage");
	});

	jQuery("a.pfpkpep").click(function() {
		jQuery('.mber-pfpkpep').toggleClass("showpage");
		jQuery('.mber-news-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-news-content').removeClass("hidepage");
		jQuery('.mber-pfpkpep').removeClass("showpage");
	});
	
	jQuery("a.sichinava").click(function() {
		jQuery('.mber-sichinava').toggleClass("showpage");
		jQuery('.mber-news-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-news-content').removeClass("hidepage");
		jQuery('.mber-sichinava').removeClass("showpage");
	});
	
	jQuery("a.doklad-2023").click(function() {
		jQuery('.mber-doklad-2023').toggleClass("showpage");
		jQuery('.mber-news-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-news-content').removeClass("hidepage");
		jQuery('.mber-doklad-2023').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.html-text-khmel").click(function() {
		jQuery('.mber-html-text-khmel').toggleClass("showpage");
		jQuery('.mber-news-content').toggleClass("hidepage");
	})
	jQuery(".image-close, .close").click(function() {
		jQuery('.mber-news-content').removeClass("hidepage");
		jQuery('.mber-html-text-khmel').removeClass("showpage");
	});
	
	
	
	
	
	jQuery(".all-content-wrap.html-text-page").click(function() {
		jQuery('.mber-html-text-page').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-html-text-page').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.html-text-page-2").click(function() {
		jQuery('.mber-html-text-page-2').toggleClass("showpage");
		jQuery('.mber-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.mber-portfolio-content').removeClass("hidepage");
		jQuery('.mber-html-text-page-2').removeClass("showpage");
	});


	/*------------------------ [Read More] ------------------------*/

	var limit = 3;
	$(".mber-blog-list .mber-blog-card").slice(0, limit).show();
	$(document).on('click','#load_more',function(e){
		limit += 3;
		e.preventDefault();
		$(".mber-blog-list .mber-blog-card").slice(0, limit).show();
	});	
	
});


/*------------------------ [Cursor Script] ------------------------*/

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

	// Listeners
	document.body.addEventListener('mousemove', onMouseMove);
	for (let i = 0; i < $hoverables.length; i++) {
		$hoverables[i].addEventListener('mouseenter', onMouseHover);
		$hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
	}

	// Move the cursor
	function onMouseMove(e) {
		TweenMax.to($bigBall, .4, {
			x: e.pageX - 15,
			y: e.pageY - 15
		})
		TweenMax.to($smallBall, .1, {
			x: e.pageX - 5,
			y: e.pageY - 7
		})
	}

	// Hover an element
	function onMouseHover() {
		TweenMax.to($bigBall, .3, {
			scale: 4
		})
	}
	function onMouseHoverOut() {
		TweenMax.to($bigBall, .3, {
			scale: 1
		})
	}

/*------------------------ [Menu hide during weekend mode] ------------------------*/
$(".mber-switch-btn input").click(function(){
  $("body").toggleClass("menu-hide-wrap");
});




/*------------------------ [Simplistic Dialog] ------------------------*/
function dialog() {

  // Declare variables
  var dialogBox = $('.dialog'),
      dialogTrigger = $('.dialog__trigger'),
      dialogClose = $('.dialog__close'),
      dialogTitle = $('.dialog__title'),
      dialogContent = $('.dialog__content'),
      dialogAction = $('.dialog__action');

  // Open the dialog
  dialogTrigger.on('click', function(e) {
    dialogBox.toggleClass('dialog--active');
    e.stopPropagation();
  });

  // Close the dialog - click close button
  dialogClose.on('click', function() {
    dialogBox.removeClass('dialog--active');
  });

  // Close the dialog - press escape key // key#27
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      dialogBox.removeClass('dialog--active');
    }
  });

  // Close the dialog - click outside
  $(document).on('click', function(e) {
    if ($(e.target).is(dialogBox) === false &&
        $(e.target).is(dialogTitle) === false &&
        $(e.target).is(dialogContent) === false &&
        $(e.target).is(dialogAction) === false) {
      dialogBox.removeClass('dialog--active');   
    }
  });

}

// Run function
$(dialog);









