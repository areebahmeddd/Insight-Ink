import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server or perform any other action
    console.log('Form data:', formData);
  };

  return (
    <body 0="" class="language-switcher- new-theme-css u743823-site-bg-color u743823-site-bg-image u743823-contact body-to-showx u743823-contact-desktop u743823-desktop u743823-contact-  u743823-">
    <input type="hidden" id="csrf_token" value="94aRFO13s9308MaAIQLKECpb1dIPn7cj9SAPF8FV">    
              
    
        <script type="text/javascript">
    $(document).ready(function (){
              var store_enabled_value = 'disable';
        setCookie('store_enabled',store_enabled_value,1);
                    var ecom_store_enabled_value = 'disable';
        setCookie('ecom_store_enabled',ecom_store_enabled_value,1);
          });
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  </script>
<script type="text/javascript">
  $(document).ready(function (){
          var bypass_cache = 'disable';
        setCookie('bypass_cache',bypass_cache,1);
  });

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
</script>    

    
        

    
          
      <style type="text/css">
        .temporary-bar {background: rgb(255, 255, 255); color: #636363; display: inline-block; font-family: sans-serif; bottom: 15px; width: 250px; right: 20px;
          left: 10px; padding: 15px 15px 15px 20px; z-index: 99999; font-weight: 600; border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.04);}
        .temporary-bar .trial-lock {display: inline-block; float: left; padding: 0px 12px 0 0; font-size: 30px;}
        .temporary-bar h2 {margin: 3px 0 0;padding: 0;font-size: 13px;font-weight: 600;font-family: sans-serif;}
        .temporary-bar a {color: #8BC34A;font-size: 13px;}
        .temporary-bar a:hover {color: #6baa11; text-decoration: underline;}
      </style>
        
        
    
      <div id="price-list-wrapper">
              </div>
        

    <div class="column-container full-height-container animation-wrapper ecommerce-gallery-container" data-animatetype="slideup" data-animation_time="medium">
      
        
        <style type="text/css">
      
  </style>




<div class="embed-overlay js-embed-overlay u743823-overlay-bg-color">
  <div class="embed-close js-embed-close menu-svg-icon">
    <svg viewBox="0 0 320 512"><use xlink:href="#times-pixpa-icon" width="320" height="512"></use></svg>
  </div>
  <div class="embed-inner js-embed-inner">

  </div>
</div>
 
<script src="./Mohit_files/lenis-smooth-scroll.js.download"></script>
<script type="text/javascript">
  $( document ).ready(function() {
    window.headerwidth = $(".header-title-nav-wrapper").innerWidth() +10;
    // header layout 10 start
    if ((userObject.headerLayout == '10' || userObject.headerLayout == '11')) {
      var heightSlider = $('#header').innerHeight();
      if (heightSlider < 100) {
        $('.milestone-menu-modal').css('margin-top', heightSlider);
        $('.milestone-menu-modal').css({ 'height': 'calc(100% - ' + heightSlider+ 'px)' });
        $('.milestone-menu-modal .user-links').css('height', 'auto');
      } else{
        $('.milestone-menu-modal').css('margin-top', '100px');
        $('.milestone-menu-modal').css({ 'height': 'calc(100% - 100px)' });
        $('.milestone-menu-modal .user-links').css('height', 'auto');
      }
      if ($(".milestone-menu-modal .user-links").height() > $(".milestone-menu-modal").height() == 1) {
        $(".milestone-menu-modal").css("display","block");
      };
    }
    // header layout 10 end
    if (window.innerWidth > 767) {
      if (userObject.headerLayout == "8" || userObject.headerLayout == "9") {
        if ($('.js-header-container').hasClass('site-logo-none')) {
          var logo_width, element_spacing, header_w;
          logo_width = window.headerwidth
          if (logo_width < 450) {
            logo_width = window.headerwidth
          } else{
            logo_width = 450
          }
          
          header_w = $(".header-container").innerWidth() - logo_width;          
          $('.sticky-header-container').find(".header-title-nav-wrapper").css({
            'width' : ''
          });
          $(".header-layout-logo-center-nav-left-right .site-logo-none .header-actions-social-button-left, .header-layout-logo-center-nav-left-right .site-logo-none .header-actions-social-button-right").css({
            'width' : header_w/2+"px"
          });
        }
      }
    }

    Header.headerInit();
    Mobile.mobileInit();
    Header_v2.header_v2Init();
    if (userObject.headerLayout == "10" || userObject.headerLayout == "11") {
      $( '.header-nav-item-is-group' ).addClass( "drop-text" );
    }

    var templateType = 'normal_page';
    if (templateType == "single_page"){
      if (window.innerWidth <= 1024){
        $(".js-header-nav-wrapper *").on("click", function(event) {
          if($(event.target).hasClass('header-nav-item-is-group-linkx') || $(event.target).hasClass('header-nav-item-is-group')){
          } else{
            $(".js-header-nav-mobile-btn").click();  
          }
        });
        $(".social-cta-margin *").on("click", function() {
          $(".js-header-nav-mobile-btn").click();
        });
      }
    }

    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  });  
</script>

<style>
  html.lenis {height: auto !important;}
  .lenis.lenis-smooth {scroll-behavior: auto;}
  .lenis.lenis-smooth [data-lenis-prevent] {overscroll-behavior: contain;}
  .lenis.lenis-stopped {overflow: hidden;}  
  .lenis.lenis-scrolling iframe {pointer-events: none;}
</style>      

      <div class="full-height-body-container  stage-spacing-contentbox">
        <div class="coverbanner-container stage-spacing-cover ">
                                                        
                            </div>
        <div class="stage-spacing body-site-margin stage-spacing-contentbox ">
          <div class="3 body-inset-value body-inset-value-none">
              <div data-linktype="1" class="  body-inset-width">
                <style type="text/css">
  .stage-spacing-contentbox{height: max-content;}
  .stage-spacing-contentbox:after{content: '';float: left;}
  .fancybox-lock, .fancybox-lock .fancybox-overlay {overflow: auto !important;}
  @media screen and ( max-width: 768px){
    .stage-spacing-contentbox{overflow-x: hidden;}
  }

      @media screen and (min-width: 767px){
      .bypass-header-yes .header-actions-social-button *:not(.is-global-btn, .js-pixpa-weglot-language a, .header-nav-is-dropdown-item a, .search-input-container svg, .search-input-container input, .search-input-container svg > use), 
      .bypass-header-yes .header-title *:not(.is-global-btn),
      .bypass-header-yes .header-nav-item > a:not(.is-global-btn), 
      .bypass-header-yes .header-nav-item > a *:not(.is-global-btn), 
      .bypass-header-yes .header-nav-item .header-nav-item-is-group-linkx, .bypass-header-yes .header-action-cta  .is-global-btn {
        color: #ffffff !important;
        fill: #ffffff !important;
      }

      .new-theme-css .bypass-header-yes .header-nav-item:not(.hover-cur-active-link, .weglot-header, .separator_block):after, .new-theme-css .bypass-header-yes.u743823-header-bg-color.header .header-wrapper .header-inner .header-nav .header-nav-wrapper .header-nav-item:not(.hover-cur-active-link, .weglot-header, .separator_block):after, .new-theme-css .bypass-header-yes .header-nav-item:not(.hover-cur-active-link, .weglot-header, .separator_block):hover:before, .new-theme-css .bypass-header-yes.u743823-header-bg-color.header .header-wrapper .header-inner .header-nav .header-nav-wrapper .header-nav-item:not(.hover-cur-active-link, .weglot-header, .separator_block):hover:before{
        background: #ffffff;
      }

      .bypass-header-yes .header-nav-item > a.cur-active-link{
                  text-decoration: 
              }

      .bypass-header-yes .header-action-cta .is-global-btn{
              }

      .bypass-header-yes .header-action-cta .is-global-btn-solid{
        background: ;
        border: none !important;
      }

      .bypass-header-yes .header-action-cta .is-global-btn-outline{
        border: 1px solid #ffffff;
      }

      .bypass-header-yes .header-action-cta .is-global-btn-outline:hover{
              }

      .bypass-header-yes .header-action-cta .is-global-btn-link{
        border-bottom: 1.5px solid #ffffff;
      }

      .bypass-header-yes .header-nav-item .header-nav-item-is-group .menu-icon svg{
        fill: #ffffff;
      }
    }

    @media screen and (min-width: 425px){
      .bypass-header-yes .header-pixpa-burger *, .bypass-header-yes .header-title-text *, .bypass-header-yes .header-actions-item.header-action-cart-search *{
        color: #ffffff;
        fill: #ffffff;
      }

      .bypass-header-yes .header-pixpa-burger .mobile_menu_label span{
        color: #ffffff;
        fill: #ffffff;
      }
    }

    @media screen and (max-width: 425px){
      .bypass-header-yes .header-pixpa-burger *, .bypass-header-yes .header-title-text *, .bypass-header-yes .header-actions-item.header-action-cart-search *{
        color: #ffffff;
        fill: #ffffff;
      }

      .bypass-header-yes .header-pixpa-burger .mobile_menu_label span{
        color: #ffffff;
        fill: #ffffff;
      }
    }
  
</style>


<div id="" class="is-wrapper is-wrapper-new">

  
  <!--?xml encoding="utf-8" ?--><div class="is-section is-section-contact is-section-everywhere is-section-fit2width-container is-section-fullwidth is-section-75 is-align-left is-section-padding-0 is-section-margin-0 is-box dynamic-content-responsive-pad dynamic-component-container is-bg-has-color is-bg-background is-bordercolor-accent is-separatorcolor-accent" data-padding_desktop="" data-padding_mobile="6 6" data-headercolor="" data-bcolor="#a7a7a7" data-separatorcolor="#a7a7a7">
	<div class="is-boxes-fit2width-container"><div class="is-boxes" style="z-index: unset;">
		<div class="is-box-centered">
			<div class="is-container animation-item container is-content-width_large js-gallery-dynamic-content animation-finished" style="max-width: 1200px; z-index: unset;">
				<div class="row clearfix dynamic-component-rowtoolhide" style="padding: 0"><div class="content-margin clearfix" data-noedit="">
						<div class="dynamic-photo-gallery dynamic-component" data-section_id="2880572" data-category_type="contact_form" data-link_id="3549174" data-component_layout="layout1" data-component_image_aspect_ratio="dynamic" data-component_title_status="1" data-component_subtitle_status="0" data-component_desc_status="0" data-component_show_link_as="0" data-component_title="h2" data-component_subtitle="p_small" data-component_desc="p_small" data-component="contactForm" data-is_new_contact_form="1" data-mode="readonly-protected" data-noedit="true" id="dynamic-3549174" data-done="notdone"><div class="js-dynamic-photo-gallery-overlay-btn dynamic-photo-gallery-overlay-btn"><button data-noedit="" data-mode="readonly-protected" data-iframe_src="/custom-page/contact-form/3549174" data-comp="contactForm" class="edit-photo-gallery js-edit-photo-gallery js-manage-component-button" data-link_id="3549174" aria-label="Page Section" style="display: none;"></button><button data-link_id="3549174" class="delete-photo-gallery js-delete-photo-gallery js-delete-component-button" aria-label="Page Section" style="display: none;"></button></div><div class="js-edit-photo-galleryxx dynamic-photo-gallery-overlay" data-mode="readonly-protected" data-noedit="" data-link_id="3549174" data-iframe_src="/custom-page/contact-form/3549174"></div>
					<div class="js-dyanmic-component-container" id="dynamic_compnent3549174"><div id="form-page-container-3549174">

	<style type="text/css">
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .items-image.img_circle,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .items-image.img_circle{
    border-radius: 50%;
  }


  /* newsletter form submut button alignment  */
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout5"] .grid-list .grid-list-item.text-center .form-inner .form-content .is-global-btn{
    margin: 1rem auto 0 auto;
  }

  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout5"] .grid-list .grid-list-item.text-right .form-inner .form-content .is-global-btn{
    margin-left: auto;
  }


      #form-page-container-3549174 #form-page .grid-list .grid-list-item .items-image,
    #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .items-image
    {
      overflow: hidden;
      border-radius: 16px;
    }
  
  /* Vertical Align  */
  #form-page-container-3549174 #form-page .grid-list .grid-list-item.align-center,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item.align-center
  {
    align-items: center;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item.align-top,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item.align-top
  {
    align-items: flex-start;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item.align-bottom,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item.align-bottom
  {
    align-items: flex-end;
  }


  /*spacing*/
  #form-page-container-3549174 #form-page .pxp-block,
  #newsletter-page-container-3549174 #newsletter-form .pxp-block{
    padding-bottom: 24px;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .title:not(.form-content .title),
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .left-col-content .title:not(.form-content .title),
  #form-page-container-3549174 #form-page.guestbook-form[data-layout='layout1'] .faqs-grid-container .grid-list .grid-list-item .row_space .form-comments .comments-heading,
  #form-page-container-3549174 #form-page.guestbook-form[data-layout='layout2'] .faqs-grid-container .grid-list .grid-list-item .row_space .form-comments .comments-heading,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .pxp-block-content .title:not(.form-content .title),
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .left-col-content .title:not(.form-content .title)
  {
    padding-bottom: 4%;
    margin: 0;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item.content_first .items-image,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item.content_first .items-image
  {
    margin-top: %;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item.image_first .items-image,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item.image_first .items-image{
    margin-bottom: %;
    margin-top: 0;
  }

  /* Width  */
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .image-width,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .image-width
  {
    width: 45%;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .row_space,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .row_space
  {
    width: calc(100% - ( 45% + 7%));
  }

  #form-page-container-3549174 #form-page.headline_fullbleed .grid-list .grid-list-item .pxp-block-content,
  #newsletter-page-container-3549174 #newsletter-form.headline_fullbleed .grid-list .grid-list-item .pxp-block-content
  {
    width: calc(100% - ( 45% + 7% + 4vw));
  }

  /* to mantain width calculation in safari browser */
  
  #form-page-container-3549174 #form-page[data-layout="layout5"] .grid-list .grid-list-item .row_space,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout4"] .grid-list .grid-list-item .row_space,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout5"] .grid-list .grid-list-item .row_space{
    width: 100%;
    margin: 0;
  }

  /*#form-page-container-3549174 #form-page[data-layout="layout7"].headline_fullbleed .grid-list .grid-list-item .pxp-block-content{
    width: 100%;  
  }*/


  /* spacing */
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .row_space,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .row_space{
    margin-left: 7%;
  }

  #form-page-container-3549174 #form-page[data-layout="layout5"] .grid-list .grid-list-item .row_space,
  #form-page-container-3549174 #form-page[data-layout="layout2"]:not(#form-page-container-3549174 #form-page[data-layout="layout2"].guestbook-form) .grid-list .grid-list-item .row_space,
  #form-page-container-3549174 #form-page[data-layout="layout4"]:not(#form-page-container-3549174 #form-page[data-layout="layout4"].guestbook-form) .grid-list .grid-list-item .row_space,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout2"] .grid-list .grid-list-item .row_space{
    margin-left: 0;
  }

  /*#form-page-container-3549174 #form-page[data-layout="layout5"] .grid-list .grid-list-item .row_space,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout4"] .grid-list .grid-list-item .row_space,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout5"] .grid-list .grid-list-item .row_space{
    margin-top: 7%;
    margin-left: 0;
  }*/

  #form-page-container-3549174 #form-page[data-layout="layout5"] .grid-list .grid-list-item.text-right .image-width, 
  #form-page-container-3549174 #form-page[data-layout="layout5"] .grid-list .grid-list-item.text-right .row_space,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout4"] .grid-list .grid-list-item.text-right .row_space,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout5"] .grid-list .grid-list-item.text-right .row_space,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout4"] .grid-list .grid-list-item.text-right .image-width,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout5"] .grid-list .grid-list-item.text-right .image-width{
    margin-left: auto;
  }

  #form-page-container-3549174 #form-page[data-layout="layout2"]:not(#form-page-container-3549174 #form-page[data-layout="layout2"].guestbook-form) .grid-list .grid-list-item .row_space,
  #form-page-container-3549174 #form-page[data-layout="layout4"]:not(#form-page-container-3549174 #form-page[data-layout="layout4"].guestbook-form) .grid-list .grid-list-item .row_space,
  #newsletter-page-container-3549174 #newsletter-form[data-layout="layout2"] .grid-list .grid-list-item .row_space
  {
    margin-right: 7%;
    margin-left: 0;
  }

  /* to mantain ascpect ratio circle in safari browser */
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .items-image.animate-hover,
  #form-page-container-3549174 #form-page.headline_fullbleed .grid-list .grid-list-item .items-image.animate-hover,
  #newsletter-page-container-3549174 #newsletter-form.headline_fullbleed .grid-list .grid-list-item .items-image.animate-hover,
  #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .items-image.animate-hover{
      -webkit-mask-image: -webkit-radial-gradient(white, black);
    }

  /* animations */
    /* zoom-in */
    #form-page-container-3549174 #form-page .grid-list .grid-list-item .items-image.animate-hover img,
    #form-page-container-3549174 #form-page.headline_fullbleed .grid-list .grid-list-item .items-image.animate-hover .post_photo,
    #newsletter-page-container-3549174 #newsletter-form.headline_fullbleed .grid-list .grid-list-item .items-image.animate-hover .post_photo,
    #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .items-image.animate-hover img
    {
      transition: transform 1s ease-out;
      transform: scale(1) translateZ(0);
    }

    #form-page-container-3549174 #form-page .grid-list .grid-list-item .items-image.animate-hover:hover img,
    #form-page-container-3549174 #form-page.headline_fullbleed .grid-list .grid-list-item .items-image.animate-hover:hover .post_photo,
    #newsletter-page-container-3549174 #newsletter-form.headline_fullbleed .grid-list .grid-list-item .items-image.animate-hover:hover .post_photo,
    #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .items-image.animate-hover:hover img
    {
      transition: transform 1s ease-out;
      will-change: transform;
      transform: scale(1.03) translateZ(0);
    }
  

      #form-page-container-3549174 #form-page[data-layout="layout6"].headline_fullbleed .grid-list .grid-list-item .row_space,
    #newsletter-page-container-3549174 #newsletter-form[data-layout="layout6"].headline_fullbleed .grid-list .grid-list-item .row_space
    {
      margin-left: 7%;
      margin-right: 4vw;
    }

    #form-page-container-3549174 #form-page[data-layout="layout7"].headline_fullbleed .grid-list .grid-list-item .row_space,
    #newsletter-page-container-3549174 #newsletter-form[data-layout="layout7"].headline_fullbleed .grid-list .grid-list-item .row_space
    {
      margin-left: 4vw;
      margin-right: 7%;
    }
  

  #newsletter-page-container-3549174 #newsletter-form .form-content .form-field-item input{
    padding: 1.4em 2.4em;
          border-radius: 0;
      }

  #newsletter-page-container-3549174 #newsletter-form .form-content .form-field-item input.is-global-btn-small{
    font-size: 13px;
  }

  #newsletter-page-container-3549174 #newsletter-form .form-content .form-field-item input.is-global-btn-medium{
    font-size: 15px;
  }

  #newsletter-page-container-3549174 #newsletter-form .form-content .form-field-item input.is-global-btn-large{
    font-size: 17px;
  }


  /* Number scale and star rating colors  */
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .number-scale-rating .number-scale label{
    color: #4b4b4b;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .number-scale-rating .number-scale label:hover{
    background: rgba(75,75,75, 0.05);
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .number-scale-rating .number-scale label > input:checked + .number
  {
    background: rgba(75,75,75, 0.05);
    opacity: 1;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .star-scale-rating .rating .icon-star,
  #form-page-container-3549174.guestbook-form-page-container-3549174 #form-page .grid-list .grid-list-item .form-field-item .star-scale-rating .rating .icon-star{
    fill: rgba(75,75,75, 0.2);
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale .face-svg svg > path{
    fill: rgba(75,75,75, 0.05);
  }


  /* smiley face */
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label[for="disappoint"]:hover svg > path, 
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label input#disappoint:checked + .face-svg svg > path{
    fill: #EF4623;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label[for="frown"]:hover svg > path, 
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label input#frown:checked + .face-svg svg > path{
    fill: #F68E20;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label[for="expressionless"]:hover svg > path, 
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label input#expressionless:checked + .face-svg svg > path{
    fill: #FECC08;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label[for="smile"]:hover svg > path, 
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label input#smile:checked + .face-svg svg > path{
    fill: #91E53E;
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label[for="grin"]:hover svg > path, 
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .smiley-scale-rating .smiley-scale label input#grin:checked + .face-svg svg > path{
    fill: #0EC12F;
  }      

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .star-scale-rating .rating:not(:checked) > label:hover .icon-star,
  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .star-scale-rating.rating:not(:checked) > label:hover ~ label .icon-star,
  #form-page-container-3549174.guestbook-form-page-container-3549174 #form-page .grid-list .grid-list-item .form-field-item .star-scale-rating .rating:not(:checked) > label:hover .icon-star,
  #form-page-container-3549174.guestbook-form-page-container-3549174 #form-page .grid-list .grid-list-item .form-field-item .star-scale-rating.rating:not(:checked) > label:hover ~ label .icon-star{
    fill: rgba(75,75,75, 0.7);
  }

  #form-page-container-3549174 #form-page .grid-list .grid-list-item .pxp-block-content .form-field-item .star-scale-rating .rating > input:checked ~ label .icon-star,
  #form-page-container-3549174.guestbook-form-page-container-3549174 #form-page .grid-list .grid-list-item .form-field-item .star-scale-rating .rating > input:checked ~ label .icon-star{
    fill: rgba(75,75,75, 1);
  }


  @media screen and (min-width: 768px){
        
          #newsletter-page-container-3549174 #newsletter-form:not(#newsletter-form[data-layout="layout4"], #newsletter-form[data-layout="layout5"], #newsletter-form[data-layout="layout6"], #newsletter-form[data-layout="layout7"]) .grid-list .grid-list-item .row_space .form-inner .form-content{
        max-width: calc(55% + 7%);
      }

      #newsletter-page-container-3549174 #newsletter-form[data-layout="layout6"] .grid-list .grid-list-item .row_space .form-inner .form-content, #newsletter-page-container-3549174 #newsletter-form[data-layout="layout7"] .grid-list .grid-list-item .row_space .form-inner .form-content{
        max-width: 55%;
      }
    
    
    /* 3field layout newsletter   */
      }
  

  @media screen and (max-width: 767px){
    #form-page-container-3549174 #form-page .grid-list .grid-list-item .row_space,
    #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item .row_space
    {
      width: 100%;
      margin-left: 0;
    }
    #form-page-container-3549174 #form-page[data-layout="layout5"] .grid-list .grid-list-item .row_space,
    #newsletter-page-container-3549174 #newsletter-form[data-layout="layout4"] .grid-list .grid-list-item .row_space,
    #newsletter-page-container-3549174 #newsletter-form[data-layout="layout5"] .grid-list .grid-list-item .row_space,
    #form-page-container-3549174 #form-page.headline_fullbleed .grid-list .grid-list-item .image-width,
    #form-page-container-3549174 #form-page.headline_fullbleed .grid-list .grid-list-item .pxp-block-content,
    #newsletter-page-container-3549174 #newsletter-form.headline_fullbleed .grid-list .grid-list-item .image-width,
    #newsletter-page-container-3549174 #newsletter-form.headline_fullbleed .grid-list .grid-list-item .pxp-block-content
    {
      width: 100%;
    }

    #form-page-container-3549174 #form-page[data-layout="layout6"].headline_fullbleed .grid-list .grid-list-item .row_space,
    #form-page-container-3549174 #form-page[data-layout="layout7"].headline_fullbleed .grid-list .grid-list-item .row_space,
    #newsletter-page-container-3549174 #newsletter-form[data-layout="layout6"].headline_fullbleed .grid-list .grid-list-item .row_space,
    #newsletter-page-container-3549174 #newsletter-form[data-layout="layout7"].headline_fullbleed .grid-list .grid-list-item .row_space
    {
      margin:  0;
      padding: 0 4.5vw;
    }

    #form-page-container-3549174 #form-page[data-layout="layout6"].headline_fullbleed .grid-list .grid-list-item .row_space,
    #form-page-container-3549174 #form-page[data-layout="layout7"].headline_fullbleed .grid-list .grid-list-item .row_space,
    #newsletter-page-container-3549174 #newsletter-form[data-layout="layout6"].headline_fullbleed .grid-list .grid-list-item .row_space,
    #newsletter-page-container-3549174 #newsletter-form[data-layout="layout7"].headline_fullbleed .grid-list .grid-list-item .row_space
    {
      margin-top: 7vh;
    }

    #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item.text-center .form-inner .form-content .is-global-btn{
        margin: 1rem auto 0 auto;
    }

    #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item.text-left .form-inner .form-content .is-global-btn{
      margin-top: 1rem;
      margin-left: 0;
    }

    #newsletter-page-container-3549174 #newsletter-form .grid-list .grid-list-item.text-right .form-inner .form-content .is-global-btn{
      margin-top: 1rem;
      margin-left: auto;
    }
  }
</style>	<div id="form-page" class="dynamic-content-width u3549174-got-a-project-for-us-bg-color form-page-custompage" data-layout="layout1">
				<div class="faqs-grid-container ">
			<div class="js-grid-list-padding">
				<div class="grid-list js-grid-list animation-item">
					<div class="grid-list-sizer"></div>
					<div class="grid-list-item js-grid-list-item text-left align-top" data-height="1483" data-width="1200">
													<div class="image-width">
								<div data-listitemtype="featured-image" data-key="539823" data-photoid="539823" data-photo_versionid="1696695241" data-watermark="0" data-watermark_versionid="" class="js-get-resized-image_3549174 items-image js-item-image animate-hover" style="border-radius: ;">
	                		                  	<img data-sizes="auto" class="lazyload js-get-resized-image-src" data-src="" src="https://mohit-nagaraj.pixpa.com/contact" data-srcset="" alt="" style="background-position: 25% 25%;">

											
																		</div>
							</div>
						
						<div class="pxp-block-content row_space">
							<div class="text-left">
									                	                  <h2 class="title   u743823-heading2-text     ">

	                      Need any help? You have us

	                  </h2>
	                	              
	              	                <div class="p     u743823-secondary-text   u3549174-got-a-project-for-us-text-color">

	                  <div class="description-para      u743823-secondary-text   u3549174-got-a-project-for-us-text-color">

	                    <p>Feel free to get in touch with us using the contact form below. Whether you have questions, feedback, or inquiries, we're here to assist you. Simply fill out the form, and we'll get back to you as soon as possible. Your input is valuable to us, and we look forward to hearing from you.</p>

	                  </div>
	                  
	                </div>
	              							</div>
							<div class="form-inner">
	<div class="form-content form-content-center">
					<form autocomplete="on" role="form" method="POST" action="https://mohit-nagaraj.pixpa.com/contact-query" class="form-fields js-form-fields js-csrf-form-field u743823-secondary-text u3549174-got-a-project-for-us-text-color " onsubmit="return submitContactForm(event,this,3549174)" enctype="multipart/form-data" id="contact_form_3549174">
				
			<input type="hidden" name="_token" value="94aRFO13s9308MaAIQLKECpb1dIPn7cj9SAPF8FV">
			<input type="hidden" name="g_captcha_token" id="g_captcha_token">
			<input type="hidden" name="is_json" value="1">
			<input type="hidden" name="type" value="2">
			<input type="hidden" name="linkid" value="3549174">
			<div class="captcha-none">
				<input type="text" autocomplete="offf" class="cms-input field-element" name="name-search" value="">
			</div>
							
				

												        			    

			    						<div class="form-field-wrapper field-type-10">
																										<label class="title">Name *</label>
																																													 
								<div class="clearfix"></div>
								<div class="form-field-item fname">
									<input autocomplete="given-name" aria-label="First Name" data-req="1" name="fields[1038068][0]" placeholder="First Name" type="text" class="cms-input field-element " value="" required="" pattern="[A-Za-z\s]+" title="Please enter a valid first name">
									
									
								</div>
								<div class="form-field-item lname">
									<input autocomplete="family-name" aria-label="Last Name" name="fields[1038068][1]" type="text" placeholder="Last Name" class="cms-input field-element" value="" required="" pattern="[A-Za-z\s]+" title="Please enter a valid last name">
									
									
								</div>
																		</div>

																	        			    

			    						<div class="form-field-item width-full   field-type-3">
																										<label class="title">Email *</label>
																																													 
								<input name="fields[1038069]" aria-label="Email" type="email" placeholder="" class="cms-input field-element " value="" required="" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}">
																		</div>

																	        			    

			    						<div class="form-field-item width-full   field-type-2">
																										<label class="title">Message *</label>
																																						 
							<textarea class="field-element" aria-label="Textarea" placeholder="" name="fields[1038070]" required=""></textarea>
											</div>

									
				
				<div class="captcha-none">
					<input type="email" autocomplete="offf" class="cms-input field-element" name="email-search" value="">
				</div>
				

			
			<div class="clearfix"></div>
			

			<div class="flex  justify-left">
				<button id="rzp-button3549174" type="submit" aria-label="Send message" class="submit-btn js-submit-form  is-global-btn-medium  no    is-global-btn">
					Send message
					
					<div class="is-global-btn submit-loader js-submit-loader" style="display: none;">
						<div class="circle-loader" style="display: none;">
							<div class="checkmark-tick draw" style="display: none;"></div>
						</div>
					</div>
				</button>

				
			</div>

			
			<div class="u743823-secondary-text js-calendar-form-error form-errors error-messages alert alert-danger" style="display: none;">
				<label class="error_messsage_3549174"></label>
			</div>

		</form>
	</div>
</div>
 
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div></div></div>
				</div></div>
			</div>
		</div>
	</div></div>
<div class="is-section-tool_visibility"></div></div>

<div class="is-section is-section-imagelist is-section-everywhere is-section-fit2width-container is-bg-background is-bg-has-color is-bordercolor-accent is-separatorcolor-accent is-align-left  is-section-padding-0  is-section-margin-0  is-section-fullwidth is-section-75 is-box dynamic-component-container" data-padding_desktop="" data-padding_mobile="6 6">
	<div class="is-boxes-fit2width-container"><div class="is-boxes">
		<div class="is-box-centered">
			<div class="is-container animation-item is-content-width_large container animation-finished">
				<div class="row clearfix dynamic-component-rowtoolhide" style="padding: 0"><div class="content-margin clearfix" data-noedit="">
					<div class="dynamic-list-items dynamic-component" data-section_id="2884333" data-category_type="team" data-component_layout="layout10" data-component_image_aspect_ratio="3:2" data-component_title="p_large" data-component_subtitle="p_small" data-component_desc="p" data-component_columns="3" data-component_item_quantity="3" data-component_title_status="1" data-component_subtitle_status="0" data-component_desc_status="1" data-component_show_link_as="2" data-link_id="3549218" data-component="listComponent" data-component_type="image_with_text" data-mode="readonly-protected" data-noedit="true" id="dynamic-3549218" data-done="notdone"><div class="js-dynamic-photo-gallery-overlay-btn dynamic-photo-gallery-overlay-btn"><div class="dynamic-list_items_button_container"><button data-noedit="" data-mode="readonly-protected" data-iframe_src="/custom-page/list-component/3549218" class="edit-photo-galleryx js-edit-photo-gallery js-manage-component-button" data-listitems="items" data-comp="image_with_text" data-link_id="3549218" aria-label="Page Section" style="display: none;"></button></div><button data-mode="readonly-protected" data-noedit="" data-link_id="3549218" class="delete-photo-gallery js-delete-photo-gallery js-delete-component-button" aria-label="Page Section" style="display: none;"></button></div><div class="js-edit-photo-galleryxx dynamic-photo-gallery-overlay" data-mode="readonly-protected" data-noedit="" data-listitems="items" data-link_id="3549218" data-iframe_src="/custom-page/list-component/3549218"></div>
					<div class="js-dyanmic-component-container" id="dynamic_compnent3549218"><div id="builder-list-container-3549218" class="prince">   
    <style type="text/css">
    #builder-list-container-3549218 .u743823-hover-listitem-bg-color:hover, 
    #builder-list-container-3549218 .pxp-block-grid-items:hover .u743823-hover-listitem-bg-color{
      background: rgba(255,255,255, 1);
    }
   

  #builder-list-container-3549218 .u743823-hover-dynamic-text-color-only, .is-wrapper .u743823-hover-dynamic-text-color-only{
    color: #fff;
  }


  #builder-list-container-3549218 .pxp-block-grid-items svg path{
    fill: #fff;
  }

  #builder-list-container-3549218 .pxp-block-grid-items:hover .u743823-hover-dynamic-text-color-only{
    color: #000000;
  }

  #builder-list-container-3549218 .builder-image_with_text_fullwidth-items[data-layout="layout1"] .pxp-block-grid-items:hover .u743823-hover-dynamic-text-color-only{
    color: #000000;
  }


  #builder-list-container-3549218 .builder-image_with_text_fullwidth-items[data-layout="layout1"] .u743823-hover-dynamic-text-color-only, .is-wrapper .u743823-hover-dynamic-text-color-only{
    color: #fff;
  }

  #builder-list-container-3549218 .pxp-block-grid-items:hover .pxp-block-content.u743823-hover-listitem-bg-color{
    background: rgba(255,255,255, 1);
  }


  #builder-list-container-3549218 .pxp-block-grid-items:hover * svg path{
    fill: #000000;
  }

  #builder-list-container-3549218 .faqs-grid-container .social-links:not(:first-child){
    margin-left: 1.5vw;
  }

  #builder-list-container-3549218 .faqs-grid-container .square-outline .social-links, #builder-list-container-3549218 .faqs-grid-container .circle-outline .social-links{
    border: 2px solid rgba(0,0,0);
  }

  #builder-list-container-3549218 #builder-social-items .faqs-grid-container .grid-list .social-links{
    width: 21px;
    height: 21px;
  }

  #builder-list-container-3549218 .faqs-grid-container .circle-solid .social-links, #builder-list-container-3549218 .faqs-grid-container .square-solid 
    .social-links{
    background: rgba(0,0,0);
  }

  #builder-list-container-3549218 .faqs-grid-container .social-links{
    fill: #000000;
  }

      #builder-list-container-3549218 .grid-list .grid-list-item .items-image, #builder-list-container-3549218 .grid-list .image-overlay, #builder-list-container-3549218 .grid-list .grid-list-item.accent-color, #builder-list-container-3549218 .grid-list .grid-list-item .pxp-block-content.u743823-hover-listitem-bg-color{
      overflow: hidden;
      border-radius: 20px;
    }
  
  #builder-list-container-3549218 .grid-list-item .pxp-block.full_card_active{
    border-radius: 0px;
  }

      #builder-list-container-3549218 .grid-list .grid-list-item .text_content.full_card_active, #builder-list-container-3549218 .grid-list .grid-list-item .text_content.text_card .text_card_active{
      background-color: rgba(243,243,243, 1);
      width: calc(100% - 36px*2);
      margin: 36px;
    }

      


  /* Card Border */
      #builder-list-container-3549218 .grid-list .grid-list-item .text_content.full_card_active, 
      #builder-list-container-3549218 .grid-list .grid-list-item .text_content.text_card .text_card_active
    {
              border: 0px solid rgba(0,0,0);
          }
  
  /*card-color*/
  #builder-list-container-3549218 .grid-list .grid-list-item.custom-color .text_content.full_card_active, #builder-list-container-3549218 .grid-list .grid-list-item.custom-color .text_content.text_card .text_card_active{
    background-color: rgba(0,0,0, 1);
  }

  #builder-list-container-3549218 .grid-list .grid-list-item.custom-color .custom-text-color{
    color: rgba(255,255,255);
  }


  #builder-list-container-3549218 .grid-list-item.img_circle .text_card_active{
    border-radius: 50%;
  }

  /*spacing*/
  #builder-list-container-3549218 .pxp-block{
    padding-bottom: 48px;
  }

  #builder-list-container-3549218 .pxp-block .section-title{
    margin: 0;
    color: inherit;
  }

  #builder-list-container-3549218 .grid-list-item .pxp-block{
    padding: 0;
  }

  /*carousel navigation nd section headline*/
  #builder-list-container-3549218 .pxp-block .width-50{
    width: 50%;
  }

  /*carousel navigation nd section headline*/
  #builder-list-container-3549218 .pxp-block .width-100{
    width: 100%;
  }

  #builder-list-container-3549218 .grid-list-item .pxp-block .pxp-block-content .title{
    padding-bottom: 0%;
  }

  #builder-list-container-3549218 .grid-list-item .pxp-block .pxp-block-content .subtitle{
    padding-bottom: 0%;
  }

  #builder-list-container-3549218 .grid-list-item .pxp-block .pxp-block-content .global-button, #builder-list-container-3549218 .grid-list-item .pxp-block .pxp-block-content .global-link{
    padding-top: 6%;
    margin: 0;
  }

  #builder-list-container-3549218 .grid-list-item .description-para h1, #builder-list-container-3549218 .grid-list-item .description-para h2, #builder-list-container-3549218 .grid-list-item .description-para h3, #builder-list-container-3549218 .grid-list-item .description-para h4, #builder-list-container-3549218 .grid-list-item .description-para p{
    margin: 0;
  }

  /*card on hover styling*/
  
  #builder-list-container-3549218 .grid-list .grid-list-sizer, #builder-list-container-3549218 .grid-list .grid-list-item{
    width: calc(100% / 3 - 20px);
  }

  /* to mantain ascpect ratio circle in safari browser */
  #builder-list-container-3549218 #builder-image_with_text-items .grid-list .grid-list-item.animate-hover{
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }

  /* animations */
   /* saturate */
    #builder-list-container-3549218 #builder-image_with_text-items .grid-list .grid-list-item.animate-hover img
    {
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
    }

    #builder-list-container-3549218 #builder-image_with_text-items .grid-list .grid-list-item.animate-hover:hover img
    {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      -webkit-transition: .3s ease-in-out;
      transition: .3s ease-in-out;
    }
  
  /* Box Shadow */
  

  
  
  @media screen and (max-width: 767px){
          #builder-list-container-3549218 .grid-list .grid-list-item .text_content.full_card_active, #builder-list-container-3549218 .grid-list .grid-list-item .text_content.text_card .text_card_active{
        width: calc(100% - 36px*2);
        margin: 36px;
      }

          
    #builder-list-container-3549218 .grid-list .grid-list-sizer, #builder-list-container-3549218 .grid-list .grid-list-item{
      width: calc(100% / 1 - 10px);
    }

    #builder-list-container-3549218 .faqs-grid-container .social-links:not(:first-child){
      margin-left: 1.5vmax;
    }
  }

  @media screen and (max-width: 768px){
    #builder-list-container-3549218 .pxp-block-grid-items .pxp-block-content.u743823-hover-listitem-bg-color{
      background: rgba(255,255,255, 1);
    }

    #builder-list-container-3549218 .pxp-block-grid-items .u743823-hover-dynamic-text-color-only{
      color: #000000;
    }
  }
  
</style>
    <div id="builder-image_with_text-items" data-type="image_with_text" data-layout="layout7" data-columns="">
              <div class="pxp-block flex align-center"> 
                      <div class="section-title pxp-block-title list-title-heading width-100 text-center">
              <h2 style="text-align: left;">Meet The Team</h2>
            </div>
                            </div>
      
              <div class="faqs-grid-container pd-t0">
          <div class="js-grid-list-padding">
            <div class="grid-list js-grid-list " data-columns="3">
              <div class="grid-list-sizer" data-gutter="20"></div>
                                                      <div data-key="1228169" data-photoid="1228169" data-photo_versionid="1697303487" data-watermark="0" data-watermark_versionid="" data-index="0" class="js-get-resized-image_3549218 grid-list-item js-grid-list-item animation-item pxp-block-grid-items  animate-hover " data-url="" data-target="" data-height="300" data-width="300" data-gutter="20" style="">
                  
                                              <div class="items-image js-item-image ">
                                                                                <div class="img_below_640_container">
                              
                            <img data-sizes="auto" class="img_below_640 js-get-resized-image-src" data-src="" src="https://mohit-nagaraj.pixpa.com/contact" data-srcset="" alt="Areeb" style="background-position: 25% 25%;">
                                                          <div data-colortype="color" class="image-overlay js-item-image-overlay"></div>
                                                                                  </div>
                                                                            </div>
                                            
                      
                                                                        <div class="pxp-block text_content text-center align-bottom justify-center ">
                            
                            <div class="pxp-block-content u743823-hover-listitem-bg-color ">
                                                              <p class="subtitle      u743823-secondary-text   u743823-hover-dynamic-text-color-only">                                  
                                  Founder
                                </p>
                              
                                                              <h3 class="title    u743823-heading3-text     u743823-hover-dynamic-text-color-only">
                                  Areeb
                                </h3>
                                                          </div>
                          </div>
                                                                </div>
                                                      <div data-key="1228170" data-photoid="1228170" data-photo_versionid="1697303682" data-watermark="0" data-watermark_versionid="" data-index="1" class="js-get-resized-image_3549218 grid-list-item js-grid-list-item animation-item pxp-block-grid-items  animate-hover " data-url="" data-target="" data-height="296" data-width="296" data-gutter="20" style="">
                  
                                              <div class="items-image js-item-image ">
                                                                                <div class="img_below_640_container">
                              
                            <img data-sizes="auto" class="img_below_640 js-get-resized-image-src" data-src="" src="https://mohit-nagaraj.pixpa.com/contact" data-srcset="" alt="Shivansh" style="background-position: 25% 25%;">
                                                          <div data-colortype="color" class="image-overlay js-item-image-overlay"></div>
                                                                                  </div>
                                                                            </div>
                                            
                      
                                                                        <a href="https://mohit-nagaraj.pixpa.com/contact" target="">
                                                  <div class="pxp-block text_content text-center align-bottom justify-center ">
                            
                            <div class="pxp-block-content u743823-hover-listitem-bg-color ">
                                                              <p class="subtitle      u743823-secondary-text   u743823-hover-dynamic-text-color-only">                                  
                                  Backend Developer
                                </p>
                              
                                                              <h3 class="title    u743823-heading3-text     u743823-hover-dynamic-text-color-only">
                                  Shivansh
                                </h3>
                                                          </div>
                          </div>
                                                  </a>
                                                                </div>
                                                      <div data-key="1228171" data-photoid="1228171" data-photo_versionid="1697303693" data-watermark="0" data-watermark_versionid="" data-index="2" class="js-get-resized-image_3549218 grid-list-item js-grid-list-item animation-item pxp-block-grid-items  animate-hover " data-url="" data-target="" data-height="298" data-width="298" data-gutter="20" style="">
                  
                                              <div class="items-image js-item-image ">
                                                                                <div class="img_below_640_container">
                              
                            <img data-sizes="auto" class="img_below_640 js-get-resized-image-src" data-src="" src="https://mohit-nagaraj.pixpa.com/contact" data-srcset="" alt="Mohit" style="background-position: 25% 25%;">
                                                          <div data-colortype="color" class="image-overlay js-item-image-overlay"></div>
                                                                                  </div>
                                                                            </div>
                                            
                      
                                                                        <div class="pxp-block text_content text-center align-bottom justify-center ">
                            
                            <div class="pxp-block-content u743823-hover-listitem-bg-color ">
                                                              <p class="subtitle      u743823-secondary-text   u743823-hover-dynamic-text-color-only">                                  
                                  Frontend Developer
                                </p>
                              
                                                              <h3 class="title    u743823-heading3-text     u743823-hover-dynamic-text-color-only">
                                  Mohit
                                </h3>
                                                          </div>
                          </div>
                                                                </div>
                                                      <div data-key="1228174" data-photoid="1228174" data-photo_versionid="1697303672" data-watermark="0" data-watermark_versionid="" data-index="3" class="js-get-resized-image_3549218 grid-list-item js-grid-list-item animation-item pxp-block-grid-items  animate-hover " data-url="" data-target="" data-height="301" data-width="301" data-gutter="20" style="">
                  
                                              <div class="items-image js-item-image ">
                                                                                <div class="img_below_640_container">
                              
                            <img data-sizes="auto" class="img_below_640 js-get-resized-image-src" data-src="" src="https://mohit-nagaraj.pixpa.com/contact" data-srcset="" alt="Anish" style="background-position: 25% 25%;">
                                                          <div data-colortype="color" class="image-overlay js-item-image-overlay"></div>
                                                                                  </div>
                                                                            </div>
                                            
                      
                                                                        <div class="pxp-block text_content text-center align-bottom justify-center ">
                            
                            <div class="pxp-block-content u743823-hover-listitem-bg-color ">
                                                              <p class="subtitle      u743823-secondary-text   u743823-hover-dynamic-text-color-only">                                  
                                  Andriod Developer
                                </p>
                              
                                                              <h3 class="title    u743823-heading3-text     u743823-hover-dynamic-text-color-only">
                                  Anish
                                </h3>
                                                          </div>
                          </div>
                                                                </div>
                                                      <div data-key="1228173" data-photoid="1228173" data-photo_versionid="1697303720" data-watermark="0" data-watermark_versionid="" data-index="4" class="js-get-resized-image_3549218 grid-list-item js-grid-list-item animation-item pxp-block-grid-items  animate-hover " data-url="" data-target="" data-height="290" data-width="290" data-gutter="20" style="">
                  
                                              <div class="items-image js-item-image ">
                                                                                <div class="img_below_640_container">
                              
                            <img data-sizes="auto" class="img_below_640 js-get-resized-image-src" data-src="" src="https://mohit-nagaraj.pixpa.com/contact" data-srcset="" alt="Nandini" style="background-position: 25% 25%;">
                                                          <div data-colortype="color" class="image-overlay js-item-image-overlay"></div>
                                                                                  </div>
                                                                            </div>
                                            
                      
                                                                        <div class="pxp-block text_content text-center align-bottom justify-center ">
                            
                            <div class="pxp-block-content u743823-hover-listitem-bg-color ">
                                                              <p class="subtitle      u743823-secondary-text   u743823-hover-dynamic-text-color-only">                                  
                                  Tech Lead
                                </p>
                              
                                                              <h3 class="title    u743823-heading3-text     u743823-hover-dynamic-text-color-only">
                                  Nandini
                                </h3>
                                                          </div>
                          </div>
                                                                </div>
                                                      <div data-key="1228172" data-photoid="1228172" data-photo_versionid="1697303742" data-watermark="0" data-watermark_versionid="" data-index="5" class="js-get-resized-image_3549218 grid-list-item js-grid-list-item animation-item pxp-block-grid-items  animate-hover " data-url="" data-target="" data-height="295" data-width="295" data-gutter="20" style="">
                  
                                              <div class="items-image js-item-image ">
                                                                                <div class="img_below_640_container">
                              
                            <img data-sizes="auto" class="img_below_640 js-get-resized-image-src" data-src="" src="https://mohit-nagaraj.pixpa.com/contact" data-srcset="" alt="Ravikant" style="background-position: 25% 25%;">
                                                          <div data-colortype="color" class="image-overlay js-item-image-overlay"></div>
                                                                                  </div>
                                                                            </div>
                                            
                      
                                                                        <a href="https://mohit-nagaraj.pixpa.com/contact" target="">
                                                  <div class="pxp-block text_content text-center align-bottom justify-center ">
                            
                            <div class="pxp-block-content u743823-hover-listitem-bg-color ">
                                                              <p class="subtitle      u743823-secondary-text   u743823-hover-dynamic-text-color-only">                                  
                                  Customer Success
                                </p>
                              
                                                              <h3 class="title    u743823-heading3-text     u743823-hover-dynamic-text-color-only">
                                  Ravikant
                                </h3>
                                                          </div>
                          </div>
                                                  </a>
                                                                </div>
                                <div class="clearfix"></div>
            </div>
          </div>
        </div>
          </div>
  </div></div></div>
				</div></div>
			</div>
		</div>
	</div></div>
<div class="is-section-tool_visibility"></div></div>

<div class="is-section is-section-location is-section-fit2width-container is-align-center is-section-padding-0 is-section-margin-0 is-box is-section-fullwidth is-section-60 is-bg-has-color is-bg-neutral is-separatorcolor-accent is-bordercolor-accent" data-padding_mobile="6 6" data-padding_desktop="0 0 0" data-headercolor="" data-separatorcolor="#a7a7a7" data-bcolor="#a7a7a7">
  <div class="is-boxes-fit2width-container"><div class="is-boxes">
    <div class="is-box-centered">
      <div class="is-container animation-item container is-content-width_full animation-finished">
        <div class="row clearfix"><div class="content-margin clearfix" data-noedit="">
          <div class="column full margin">
            <h4>Our Location</h4>
            <h4>Kumaraswamy Layout, Bengaluru, Karnataka</h4>
          </div>
          <div class="column full">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe data-iframe="location" data-filter="grayscale(1)" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9775636283694!2d77.56397481086827!3d12.909163516191063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1697305203752!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border: 0px; filter: grayscale(1);" allowfullscreen="" class="is-section is-section-fit2width-container-fullwidth is-section-60" data-height="60" data-padding_mobile="6 6"></iframe>
            
</div>
          </div>
        </div></div>
      </div>
    </div>
  </div>
</div>
<div class="is-section-tool_visibility"></div></div>

<div class="is-section is-section-faqs is-section-everywhere is-section-fit2width-container is-bg-background is-bg-has-color is-bordercolor-accent is-separatorcolor-accent is-align-left  is-section-padding-0  is-section-margin-0  is-section-fullwidth  is-section is-section-fullwidth is-section-75 is-box dynamic-component-container" data-padding_desktop="" data-padding_mobile="6 6">
	<div class="is-boxes-fit2width-container"><div class="is-boxes">
		<div class="is-box-centered">
			<div class="is-container animation-item is-content-width_large container animation-finished">
				<div class="row clearfix dynamic-component-rowtoolhide" style="padding: 0"><div class="content-margin clearfix" data-noedit="">
					<div class="dynamic-list-items dynamic-component" data-section_id="2853678" data-category_type="faqs" data-component_title="p_large" data-component_subtitle="p_large" data-component_desc="p" data-link_id="3549242" data-component_item_quantity="5" data-component_title_status="1" data-component_subtitle_status="0" data-component_desc_status="1" data-component_show_link_as="0" data-component="listComponent" data-component_type="faqs" data-component_layout="layout4" data-mode="readonly-protected" data-noedit="true" id="dynamic-3549242" data-done="notdone"><div class="js-dynamic-photo-gallery-overlay-btn dynamic-photo-gallery-overlay-btn"><div class="dynamic-list_items_button_container"><button data-noedit="" data-mode="readonly-protected" data-iframe_src="/custom-page/list-component/3549242" class="edit-photo-galleryx js-edit-photo-gallery js-manage-component-button" data-listitems="items" data-comp="faqs" data-link_id="3549242" aria-label="Page Section" style="display: none;"></button></div><button data-mode="readonly-protected" data-noedit="" data-link_id="3549242" class="delete-photo-gallery js-delete-photo-gallery js-delete-component-button" aria-label="Page Section" style="display: none;"></button></div><div class="js-edit-photo-galleryxx dynamic-photo-gallery-overlay" data-mode="readonly-protected" data-noedit="" data-listitems="items" data-link_id="3549242" data-iframe_src="/custom-page/list-component/3549242"></div>
					<div class="js-dyanmic-component-container" id="dynamic_compnent3549242"><div id="builder-list-container-3549242">
		<style type="text/css">
  
  #builder-list-container-3549242 #builder-faqs-items .pxp-block{
    padding-bottom: 20px;
  }

  #builder-list-container-3549242 #builder-faqs-items:not(#builder-faqs-items[data-layout="layout4"], #builder-faqs-items[data-layout="layout6"]) .grid-list-item.pxp-block-content .faq-title{
    padding-bottom: 6%;
    margin: 0;
  }

  #builder-list-container-3549242 #builder-faqs-items[data-layout="layout4"] .grid-list-item.pxp-block-content .description-para,
  #builder-list-container-3549242 #builder-faqs-items[data-layout="layout6"] .grid-list-item.pxp-block-content .description-para{
    padding-top: 6%;
    margin: 0;
    flex-direction: column;
  }

  #builder-list-container-3549242 .grid-list-item .description-para h1, #builder-list-container-3549242 .grid-list-item .description-para h2, #builder-list-container-3549242 .grid-list-item .description-para h3, #builder-list-container-3549242 .grid-list-item .description-para h4, #builder-list-container-3549242 .grid-list-item .description-para p{
    margin: 0;
  }

  /*Dynamic button type links*/
  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_social_links.square-outline .social-links, #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_social_links.circle-outline .social-links{
    border: 1.5px solid rgba(0,0,0);
  }

  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_social_links.circle-solid .social-links, #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_social_links.square-solid .social-links{
    background: rgba(0,0,0);
  }

  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_social_links .social-links{
    width: 21px;
    height: 21px;
  }

      #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_social_links .social-links svg{
      fill: #a7a7a7;
    }
    

  /* for left & center  */
  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links.justify-left .global-margin:only-child,
  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links.justify-center .global-margin:only-child{
    margin-right: 0;
  }

  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links.justify-left .global-margin,
  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links.justify-center .global-margin{
    margin-right: 1.5vw;
  }

  /* for right  */
  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links.justify-right .global-margin:only-child{
    margin-left: 0;
  }

  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links.justify-right .global-margin{
    margin-left: 1.5vw;
  }

  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links .global-margin{
    margin-top: 6%;
  }
  

  #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links .dynamic-img img{
    max-height: 30px;
    width: auto;
  }

  
  #builder-list-container-3549242 #builder-faqs-items[data-layout="layout3"] .pxp-block:first-child,
  #builder-list-container-3549242 #builder-faqs-items[data-layout="layout6"] .pxp-block:first-child {
    width: 33%;
    margin-right: 6% ;
    padding-right: 0;
  }

  #builder-list-container-3549242 #builder-faqs-items[data-layout="layout3"] .faqs-grid-container.pxp-block,
  #builder-list-container-3549242 #builder-faqs-items[data-layout="layout6"] .faqs-grid-container.pxp-block {
    width: calc(100% - (33% + 6%));
    margin-left: 0;
    padding-left: 0;
  }

  @media screen and (max-width: 767px){
    /* for left & center  */
    #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links.justify-left .global-margin,
    #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links.justify-center .global-margin{
      margin-right: 1.5vmax;
    }

    /* for right  */
    #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links.justify-right .global-margin{
      margin-left: 1.5vmax;
    }

    #builder-list-container-3549242 .grid-list .grid-list-item .dynamic_btn_links{
      display: flex;
      flex-wrap: wrap;
    }

    #builder-list-container-3549242 #builder-faqs-items[data-layout="layout3"] .pxp-block:first-child, 
    #builder-list-container-3549242 #builder-faqs-items[data-layout="layout3"] .faqs-grid-container.pxp-block,
    #builder-list-container-3549242 #builder-faqs-items[data-layout="layout6"] .pxp-block:first-child, 
    #builder-list-container-3549242 #builder-faqs-items[data-layout="layout6"] .faqs-grid-container.pxp-block{
      width: 100%;
      margin: 0;
    }
  }
</style>		<div id="builder-faqs-items" data-type="faqs" data-layout="layout4">
			
							<div class="pxp-block">
					<div class="section-title pxp-block-title list-title-heading text-left">
						<h2 class="secondary-text-large">Frequently Asked Questions</h2>
					</div>
				</div>
			


			<div class="faqs-grid-container pxp-block pd-t0">
				<div class="js-grid-list-padding">
			    <div class="grid-list js-grid-list text-left justify-left">
			      			      	<div class="grid-list-item animation-item border-color-tb js-grid-list-item pxp-block-content content-w-100" data-index="0" data-height="1600" data-width="1200">

			        	
			        	<h4 class="js-faq-title faq-title faq-title-svg-right    u743823-heading4-text   ">

								<span class="faq-title-arrow"> What is the primary purpose of the PIB automated feedback system? </span>

								<span class="arrow-down svg-icons faq-title-svg    u743823-heading4-text   ">
					        		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path></svg>
					        	</span>

						</h4>

						

			        	
			        	
			        		
									<div class="description-para js-faq-descriptions descriptions     u743823-secondary-text  ">

										<p>Insight Ink is designed to monitor and analyze national and regional news articles, e-papers, and YouTube videos in various languages. Its primary purpose is to categorize media content by government departments and sentiment, providing real-time notifications for negative news. This system strengthens government-public communication by enabling swift actions in response to media feedback.</p>

									</div>

																	

			        </div>
			      			      	<div class="grid-list-item animation-item border-color-tb js-grid-list-item pxp-block-content content-w-100" data-index="1" data-height="1600" data-width="1200">

			        	
			        	<h4 class="js-faq-title faq-title faq-title-svg-right    u743823-heading4-text   ">

								<span class="faq-title-arrow"> How does the PIB automated feedback system work? </span>

								<span class="arrow-down svg-icons faq-title-svg    u743823-heading4-text   ">
					        		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path></svg>
					        	</span>

						</h4>

						

			        	
			        	
			        		
									<div class="description-para js-faq-descriptions descriptions     u743823-secondary-text  ">

										<p>The system utilizes advanced AI and machine learning algorithms to analyze media content. It scans news articles and videos, categorizes them by relevant government departments, and assesses the sentiment within the content. When negative news is detected, it generates real-time notifications for government officials to take appropriate actions. This process ensures that the government remains informed about media coverage and can respond effectively.</p>

									</div>

																	

			        </div>
			      			      	<div class="grid-list-item animation-item border-color-tb js-grid-list-item pxp-block-content content-w-100" data-index="2" data-height="1600" data-width="1200">

			        	
			        	<h4 class="js-faq-title faq-title faq-title-svg-right    u743823-heading4-text   ">

								<span class="faq-title-arrow"> What languages does the PIB automated feedback system support? </span>

								<span class="arrow-down svg-icons faq-title-svg    u743823-heading4-text   ">
					        		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path></svg>
					        	</span>

						</h4>

						

			        	
			        	
			        		
									<div class="description-para js-faq-descriptions descriptions     u743823-secondary-text  ">

										<p>Insight Ink is designed to support various languages, ensuring comprehensive media monitoring and analysis. It can process content in multiple Indian languages as well as English. This broad language support enables the system to capture media coverage from diverse sources, making it an invaluable tool for government officials.</p>

									</div>

																	

			        </div>
			      			      	<div class="grid-list-item animation-item border-color-tb js-grid-list-item pxp-block-content content-w-100" data-index="3" data-height="1600" data-width="1200">

			        	
			        	<h4 class="js-faq-title faq-title faq-title-svg-right    u743823-heading4-text   ">

								<span class="faq-title-arrow"> Who can access and use the this? </span>

								<span class="arrow-down svg-icons faq-title-svg    u743823-heading4-text   ">
					        		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path></svg>
					        	</span>

						</h4>

						

			        	
			        	
			        		
									<div class="description-para js-faq-descriptions descriptions     u743823-secondary-text  ">

										<p>Insight Ink is primarily intended for use by government officials and departments in the Government of India. It provides a user-friendly interface for authorized personnel to access real-time media feedback and take appropriate actions. By empowering government officials with this tool, it enhances government-public communication and responsiveness to media coverage.<br></p>

									</div>

																	

			        </div>
			      			      <div class="clearfix"></div>
			    </div>
			  </div>
			</div>
		</div>
	</div></div></div>
				</div></div>
			</div>
		</div>
	</div></div>
<div class="is-section-tool_visibility"></div></div>

<div class="is-section is-section-textlist is-section-everywhere is-section-fit2width-container is-bg-background is-bg-has-color is-bordercolor-accent is-separatorcolor-accent is-align-center  is-section-padding-0  is-section-margin-0 is-section-fullwidth is-section-75 is-box dynamic-component-container" data-padding_desktop="" data-padding_mobile="6 6">
	<div class="is-boxes-fit2width-container"><div class="is-boxes">
		<div class="is-box-centered">
			<div class="is-container animation-item is-content-width_large container animation-finished">
				<div class="row clearfix dynamic-component-rowtoolhide" style="padding: 0"><div class="content-margin clearfix" data-noedit="">
					<div class="dynamic-list-items dynamic-component" data-section_id="2921353" data-category_type="footer" data-component_layout="layout1" data-component_columns="3" data-component_title="h3" data-component_subtitle="h4" data-component_desc="p" data-component_item_quantity="3" data-component_title_status="1" data-component_subtitle_status="1" data-component_desc_status="1" data-component_show_link_as="2" data-link_id="3549243" data-component="listComponent" data-component_type="text_list_items" data-mode="readonly-protected" data-noedit="true" id="dynamic-3549243" data-done="notdone"><div class="js-dynamic-photo-gallery-overlay-btn dynamic-photo-gallery-overlay-btn"><div class="dynamic-list_items_button_container"><button data-noedit="" data-mode="readonly-protected" data-iframe_src="/custom-page/list-component/3549243" class="edit-photo-galleryx js-edit-photo-gallery js-manage-component-button" data-listitems="items" data-comp="text_list_items" data-link_id="3549243" aria-label="Page Section" style="display: none;"></button></div><button data-mode="readonly-protected" data-noedit="" data-link_id="3549243" class="delete-photo-gallery js-delete-photo-gallery js-delete-component-button" aria-label="Page Section" style="display: none;"></button></div><div class="js-edit-photo-galleryxx dynamic-photo-gallery-overlay" data-mode="readonly-protected" data-noedit="" data-listitems="items" data-link_id="3549243" data-iframe_src="/custom-page/list-component/3549243"></div>
					<div class="js-dyanmic-component-container" id="dynamic_compnent3549243"><div id="builder-list-container-3549243">
		<style type="text/css">

      #builder-list-container-3549243 .grid-list-item.full_card_active, #builder-list-container-3549243 .grid-list-item .text_content.full_card_active,  #builder-list-container-3549243 .grid-list-item .pxp-block.full_card_active{
      background-color: rgba(243,243,243, 1);
      padding: 36px;
      border-radius: 0px;
    }

    #builder-list-container-3549243 .grid-list-item.full_card_active .grid-slider{
      padding: 36px;
    }

      
  /* Card Border */
      #builder-list-container-3549243 .grid-list-item.full_card_active, #builder-list-container-3549243 .grid-list-item .text_content.full_card_active,
    #builder-list-container-3549243 .grid-list-item .pxp-block.full_card_active
    {
              border: 0px solid rgba(0,0,0);
          }
   

  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout4"] .grid-list-item.full_card_active,
  #builder-list-container-3549243 .grid-list-item.full_card_active .pxp-block, 
  #builder-list-container-3549243 .grid-list .slides .grid-list-item.full_card_active
  {
    padding: 0;
  }


  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout10"] .faqs-grid-container .grid-list .grid-list-item .block_divider{
    border-right: 1px solid rgba(255,255,255);
  }

  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout10"] .faqs-grid-container .grid-list .grid-list-item:last-child .block_divider{
    border-right: 0;
  }

  /*custom card color*/
  #builder-list-container-3549243 .grid-list-item.custom-color.full_card_active,
  #builder-list-container-3549243 .grid-list-item .text_content.custom-color.full_card_active, 
  #builder-list-container-3549243 .grid-list-item.custom-color .pxp-block.full_card_active,
  #builder-list-container-3549243 .grid-list-item .pxp-block.full_card_active.custom-color{
    background-color: rgba(0,0,0, 1);
  }

  #builder-list-container-3549243 .grid-list-item.full_card_active .pxp-block-content .custom-text-color, 
  #builder-list-container-3549243 .grid-list-item.text_card .pxp-block-content .custom-text-color,
  #builder-list-container-3549243 .grid-list-item.full_card_active .pxp-block-content .custom-text-color h1, 
  #builder-list-container-3549243 .grid-list-item.full_card_active .pxp-block-content .custom-text-color h2, 
  #builder-list-container-3549243 .grid-list-item.full_card_active .pxp-block-content .custom-text-color h3, 
  #builder-list-container-3549243 .grid-list-item.full_card_active .pxp-block-content .custom-text-color h4, 
  #builder-list-container-3549243 .grid-list-item.full_card_active .pxp-block-content .custom-text-color p,
  #builder-list-container-3549243 .grid-list-item.text_card .pxp-block-content .custom-text-color h1, 
  #builder-list-container-3549243 .grid-list-item.text_card .pxp-block-content .custom-text-color h2, 
  #builder-list-container-3549243 .grid-list-item.text_card .pxp-block-content .custom-text-color h3, 
  #builder-list-container-3549243 .grid-list-item.text_card .pxp-block-content .custom-text-color h4, 
  #builder-list-container-3549243 .grid-list-item.text_card .pxp-block-content .custom-text-color p,
  #builder-list-container-3549243 .grid-list-item .full_card_active.custom-color .custom-text-color,
  #builder-list-container-3549243 .grid-list-item .full_card_active.custom-color .custom-text-color p{
    color: rgba(255,255,255);
  }


  /*spacing*/
  #builder-list-container-3549243 .pxp-block,  
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout8"] .pxp-block:first-child, 
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout19"] .pxp-block:first-child, 
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .pxp-block:first-child,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .pxp-block:first-child,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout22"] .pxp-block:first-child{
    padding-bottom: 24px;
  }

  #builder-list-container-3549243 .pxp-block .section-title{
    margin: 0;
    color: inherit;
  }

  #builder-list-container-3549243 .grid-list-item .pxp-block{
    padding: 0;
  }

  /*carousel navigation nd section headline*/
  #builder-list-container-3549243 .pxp-block .width-50{
    width: 50%;
  }

  /*carousel navigation nd section headline*/
  #builder-list-container-3549243 .pxp-block .width-100{
    width: 100%;
  }

  /* carousel navigation arrow top-right style3  */
  @media screen and (max-width: 767px){
    #builder-list-container-3549243 .pxp-block .section-title.width-50{
      width: 100%;
    }
  }

  #builder-list-container-3549243 .grid-list-item .pxp-block .pxp-block-content .title, #builder-list-container-3549243 .grid-list .grid-list-item .col-32 .title, #builder-list-container-3549243 .grid-list-item.pxp-block-content .title, #builder-list-container-3549243 .grid-list .grid-list-item .content-left .title{
    padding-bottom: 3%;
    margin: 0;
  }

  #builder-list-container-3549243 .grid-list-item .pxp-block .pxp-block-content .subtitle, #builder-list-container-3549243 .grid-list .grid-list-item .col-62 .subtitle, #builder-list-container-3549243 .grid-list .grid-list-item .col-50 .subtitle, #builder-list-container-3549243 .grid-list-item.pxp-block-content .subtitle, #builder-list-container-3549243 .grid-list .grid-list-item .content-width .subtitle{
    padding-bottom: 4%;
    margin: 0;
  }

  #builder-list-container-3549243 .grid-list-item .pxp-block .pxp-block-content .global-button, #builder-list-container-3549243 .grid-list-item .pxp-block .pxp-block-content .global-link, #builder-list-container-3549243 .grid-list .grid-list-item .col-62 .global-button, #builder-list-container-3549243 .grid-list .grid-list-item .col-62 .global-link, #builder-list-container-3549243 .grid-list-item.pxp-block-content .global-button, #builder-list-container-3549243 .grid-list-item.pxp-block-content .global-link{
    padding-top: 5%;
    margin: 0;
  }

  #builder-list-container-3549243 .grid-list-item .description-para h1, #builder-list-container-3549243 .grid-list-item .description-para h2, #builder-list-container-3549243 .grid-list-item .description-para h3, #builder-list-container-3549243 .grid-list-item .description-para h4{
    margin: 0;
  }

  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout22"] .grid-list-item.pxp-block-content .description-para{
    padding-top: 3%;
    margin: 0;
    flex-direction: column;
  }

  /*layout5_22 dynamic_width*/
  #builder-list-container-3549243 #builder-with_text-items.new_dynamic_width .grid-list .grid-list-item .content-width{
    width: 100%;
  }

  #builder-list-container-3549243 #builder-with_text-items.new_dynamic_width .grid-list .grid-list-item .content-left{
    width: calc(100% - ( 100% + 15%));
  }

  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout8"] .pxp-block:first-child,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout19"] .pxp-block:first-child,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .pxp-block:first-child,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .pxp-block:first-child,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout22"] .pxp-block:first-child {
    width: 33%;
    margin-right: 15% ;
    padding-right: 0;
  }

  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout8"] .faqs-grid-container.pxp-block,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout19"] .faqs-grid-container.pxp-block,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .faqs-grid-container.pxp-block,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .faqs-grid-container.pxp-block,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout22"] .faqs-grid-container.pxp-block {
    width: calc(100% - (33% + 15%));
    margin-left: 0;
    padding-left: 0;
  }

  #builder-list-container-3549243 #builder-with_text-items.new_dynamic_width .grid-list .grid-list-item .content-left{
    margin-right: 15%;
  }

  /*alternate layouts spacing*/
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout5"] .grid-list .grid-list-item .col-32,  
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout6"] .grid-list .grid-list-item .col-25, 
  #builder-with_text-items[data-layout="layout6"] .grid-list .grid-list-item .col-50{
    margin-right: 7%;
  }


  /*card on hover styling*/
  
  /*griditem calculation*/
  #builder-list-container-3549243 .grid-list .grid-list-sizer:not(#builder-with_text-items[data-layout="layout8"] .grid-list .grid-list-sizer, #builder-with_text-items[data-layout="layout19"] .grid-list .grid-list-sizer), 
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .grid-list .grid-list-sizer, 
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .grid-list .grid-list-item,
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .grid-list .grid-list-sizer, 
  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .grid-list .grid-list-item,
  #builder-list-container-3549243 .grid-list .grid-list-item:not(#builder-with_text-items[data-layout="layout8"] .grid-list .grid-list-item, #builder-with_text-items[data-layout="layout19"] .grid-list .grid-list-item, #builder-with_text-items[data-layout="layout21"] .grid-list .grid-list-item, #builder-with_text-items[data-layout="layout22"] .grid-list .grid-list-item){
    width: calc(100% / 2 - 45px);
  }

  /*Dynamic button type links*/
  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_social_links.square-outline .social-links, #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_social_links.circle-outline .social-links{
    border: 1.5px solid rgba(0,0,0);
  }

  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_social_links.circle-solid .social-links, #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_social_links.square-solid .social-links{
    background: rgba(0,0,0);
  }

  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_social_links .social-links{
    width: 21px;
    height: 21px;
  }

      #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_social_links .social-links svg{
      fill: #a7a7a7;
    }
    

  /*cover banner dynamic css*/
  /* for left & center  */
  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links.justify-left .global-margin:only-child,
  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links.justify-center .global-margin:only-child{
    margin-right: 0;
  }

  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links.justify-left .global-margin,
  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links.justify-center .global-margin{
    margin-right: 1.5vw;
  }

  /* for right  */
  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links.justify-right .global-margin:only-child{
    margin-left: 0;
  }

  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links.justify-right .global-margin{
    margin-left: 1.5vw;
  }

  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links .global-margin{
    margin-top: 5%;
  }

  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout18"].new_dynamic_width .grid-list .grid-list-item .dynamic_btn_links{
    margin: 0 0 1px 5%;
    white-space: nowrap;
  }

  #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links .dynamic-img img{
    max-height: 30px;
    width: auto;
  }

  
  /* Box Shadow */
  

  
  
  @media screen and (min-width: 1025px){
      }

  @media screen and (max-width: 767px){

    #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links{
      display: flex;
      flex-wrap: wrap;
    }

          #builder-list-container-3549243 .grid-list-item.full_card_active, #builder-list-container-3549243 .grid-list-item .text_content.full_card_active,  #builder-list-container-3549243 .grid-list-item .pxp-block.full_card_active, #builder-list-container-3549243 .grid-list-item.full_card_active .grid-slider{
        padding: 36px;
      }

          
    #builder-list-container-3549243 .grid-list .grid-list-sizer:not(#builder-with_text-items[data-layout="layout8"] .grid-list .grid-list-sizer, #builder-with_text-items[data-layout="layout19"] .grid-list .grid-list-sizer), 
    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .grid-list .grid-list-sizer, 
    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .grid-list .grid-list-item,
    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .grid-list .grid-list-sizer, 
    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .grid-list .grid-list-item,
    #builder-list-container-3549243 .grid-list .grid-list-item:not(#builder-with_text-items[data-layout="layout8"] .grid-list .grid-list-item, #builder-with_text-items[data-layout="layout19"] .grid-list .grid-list-item, #builder-with_text-items[data-layout="layout21"] .grid-list .grid-list-item, #builder-with_text-items[data-layout="layout22"] .grid-list .grid-list-item){
      width: calc(100% / 1 - 36px);
    }



    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout10"] .faqs-grid-container .grid-list .grid-list-item .block_divider{
      border-bottom: 1px solid rgba(255,255,255);
      border-right: 0;
    }

    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout10"] .faqs-grid-container .grid-list .grid-list-item:last-child .block_divider{
      border-bottom: 0;
    }

    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout10"] .faqs-grid-container .grid-list .slides .grid-list-item .block_divider{
      border-bottom: 0;
      border-right: 1px solid rgba(255,255,255);
    }

    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout10"] .faqs-grid-container .grid-list .slides .grid-list-item:last-child .block_divider{
      border-bottom: 0;
      border-right: 0;
    }

    #builder-list-container-3549243 #builder-with_text-items.new_dynamic_width .grid-list .grid-list-item .content-width, #builder-list-container-3549243 #builder-with_text-items.new_dynamic_width .grid-list .grid-list-item .content-left, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout19"] .pxp-block:first-child, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout19"] .faqs-grid-container.pxp-block,
    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout8"] .pxp-block:first-child, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout8"] .faqs-grid-container.pxp-block,
    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .pxp-block:first-child, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .faqs-grid-container.pxp-block, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout22"] .pxp-block:first-child, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout22"] .faqs-grid-container.pxp-block, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .pxp-block:first-child, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .faqs-grid-container.pxp-block{
      width: 100%;
    }

    #builder-list-container-3549243 #builder-with_text-items.new_dynamic_width .grid-list .grid-list-item .content-left,  #builder-list-container-3549243 #builder-with_text-items[data-layout="layout8"] .pxp-block:first-child, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout19"] .pxp-block:first-child, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout20"] .pxp-block:first-child, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout9"] .pxp-block:first-child, #builder-list-container-3549243 #builder-with_text-items[data-layout="layout22"] .pxp-block:first-child{
      margin-right: 0;
    }

    #builder-list-container-3549243 #builder-with_text-items[data-layout="layout18"].new_dynamic_width .grid-list .grid-list-item .dynamic_btn_links{
      margin: 5% 0 1px 0;
      white-space: nowrap;
    }

    /* for left & center  */
    #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links.justify-left .global-margin,
    #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links.justify-center .global-margin{
      margin-right: 1.5vmax;
    }

    /* for right  */
    #builder-list-container-3549243 .grid-list .grid-list-item .dynamic_btn_links.justify-right .global-margin{
      margin-left: 1.5vmax;
    }
  }
</style>
		<div id="builder-with_text-items" data-type="text_list_items" data-layout="layout20">
			
							<div class="pxp-block pd-t0">
					<div class="section-title pxp-block-title list-title-heading text-left">
						<h3>support@insight-ink.com</h3>
<p>Shoot any questions you may have direclty to us! We would be happy to help you out</p>
					</div>
				</div>
			
			<div class="faqs-grid-container pxp-block pd-t0">
				<div class="js-grid-list-padding">
			    <div class="grid-list js-grid-list ">
			    	<div class="grid-list-sizer"></div>
			      			      	<div class="grid-list-item js-grid-list-item animation-item pxp-block-content  content-w-100  text-left justify-left" data-index="0" data-height="1600" data-width="1200">
			      		<div class="text_content  pxp-block-content">
				        			
									
				        					        		<div class="p     u743823-secondary-text   u3549243-list-i-tem-text-color">

											<div class=" description-para      u743823-secondary-text   u3549243-list-i-tem-text-color">

												<p>Dayananda Sagar College of Engineering, </p>
<p>Shavige Malleshwara Hills, 91st Main Rd, 1st Stage, Kumaraswamy Layout, Bengaluru, Karnataka,<a href="https://mohit-nagaraj.pixpa.com/contact#"></a></p>

											</div>
												
										</div>
	                  
									
									<div class="dynamic_btn_links flex flex-wrap align-center text-left justify-left none">
			                          			                        </div>
								</div>
							</div>
			      			      	<div class="grid-list-item js-grid-list-item animation-item pxp-block-content  content-w-100  text-left justify-left" data-index="1" data-height="1600" data-width="1200">
			      		<div class="text_content  pxp-block-content">
				        			
									
				        					        		<div class="p     u743823-secondary-text   u3549243-list-i-tem-text-color">

											<div class=" description-para      u743823-secondary-text   u3549243-list-i-tem-text-color">

												<p>Instagram<br>LinkedIn<br>YouTube<br>Facebook</p>

											</div>
												
										</div>
	                  
									
									<div class="dynamic_btn_links flex flex-wrap align-center text-left justify-left none">
			                          			                        </div>
								</div>
							</div>
			      			      <div class="clearfix"></div>
			    </div>
			  </div>
			</div>
		</div>
	</div></div></div>
				</div></div>
			</div>
		</div>
	</div></div>
<div class="is-section-tool_visibility"></div></div><script type="text/javascript" defer="" data-src="https://mohit-nagaraj.pixpa.com/assets/contact-js/3549174?id=1697304529&amp;host=mohit-nagaraj.pixpa.com" class="js-dynamic-component-append" src="./Mohit_files/3549174"></script>
<script type="text/javascript" defer="" data-src="https://mohit-nagaraj.pixpa.com/assets/list-js/3549218?id=1697304529&amp;host=mohit-nagaraj.pixpa.com" class="js-dynamic-component-append" src="./Mohit_files/3549218"></script>
<script type="text/javascript" defer="" data-src="https://mohit-nagaraj.pixpa.com/assets/list-js/3549242?id=1697304529&amp;host=mohit-nagaraj.pixpa.com" class="js-dynamic-component-append" src="./Mohit_files/3549242"></script>
<script type="text/javascript" defer="" data-src="https://mohit-nagaraj.pixpa.com/assets/list-js/3549243?id=1697304529&amp;host=mohit-nagaraj.pixpa.com" class="js-dynamic-component-append" src="./Mohit_files/3549243"></script>


    
  </div>


<div class="cover-video-wrapper js-listitems_cover-video-wrapper u743823-overlay-bg-color ">
  <div class="cover-close js-list_item-video-close listitem_video_close u743823-overlay-text-color">
    <span class="menu-svg-icon">
      <svg viewBox="0 0 320 512"><use xlink:href="#times-pixpa-icon" width="320" height="512"></use></svg>
    </span>
  </div>
  <iframe src="./Mohit_files/saved_resource.html" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
</div>

<div class="js-tabBoxColor-input-btn" style="display: none;" data-background="#ffffff" data-neutral="#F3F3F3" data-accent="#a7a7a7" data-darkaccent="#3c3c3c" data-textcolor="#4b4b4b"></div>
              </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>      
      
            

      <div class="clearfix"></div>
      <div class="footer-site-margin u743823-footer-bg-color js-horz-footer footer-container-skyline">
        


<div class="share-options-overlay js-share-options-overlay">
</div>

<div id="share-website">
  <div class="blog-share-options share-website js-share-options-modal share-icon u743823-secondary-text">
    <div class="lg-dropdown js-share-option-container">
      <span class="lg-modal-text u743823-secondary-text u743823-secondary-text-large">Share</span>
      <div class="pixpa-lg-share-wrapper">
        <div class="url-anchor" href="http://mohit-nagaraj.pixpa.com/contact">
          <span class="pixpa-lg-input-share">http://mohit-nagaraj.pixpa.com/contact</span>
          <a data-clipboard-text="http://mohit-nagaraj.pixpa.com/contact" class="copyclipboard-common remove_link" href="javascript:void(0)">
            <svg viewBox="0 0 12 12"><use xlink:href="#copy-pixpa-icon" width="12" height="12"></use></svg>
          </a>
          <span class="u743823-secondary-text js-copy-success copy-success">Copied</span>
        </div>
      </div>

      <ul class="lg-dropdown-list">
        <li>
          <a rel="noopener nofollow" class="url-anchor-share" target="_blank" href="https://mohit-nagaraj.pixpa.com/pixpa-social-share?url=https://www.pixpa.com&amp;media=facebook" onclick="window.open(this.href, &#39;Pixpa&#39;, &#39;left=350,top=150,width=500,height=500,toolbar=1,resizable=0&#39;); return false;">
            <span class="social-icons menu-svg-icon"><svg viewBox="0 0 32 32"><use xlink:href="#facebook-pixpa-lg-icon" width="32" height="32"></use></svg></span>
            
          </a>
        </li>
        <li>
          <a rel="noopener nofollow" class="url-anchor-share" target="_blank" href="https://mohit-nagaraj.pixpa.com/pixpa-social-share?url=https://www.pixpa.com&amp;media=twitter" onclick="window.open(this.href, &#39;Pixpa&#39;, &#39;left=350,top=150,width=500,height=500,toolbar=1,resizable=0&#39;); return false;">
            <span class="social-icons menu-svg-icon"><svg viewBox="0 0 32 32"><use xlink:href="#twitter-pixpa-lg-icon" width="32" height="32"></use></svg></span>
            
          </a>
        </li>
        <li>
          <a rel="noopener nofollow" class="url-anchor-share" target="_blank" href="https://mohit-nagaraj.pixpa.com/pixpa-social-share?url=https://www.pixpa.com&amp;media=pinterest" onclick="window.open(this.href, &#39;Pixpa&#39;, &#39;left=350,top=150,width=500,height=500,toolbar=1,resizable=0&#39;); return false;">
            <span class="social-icons menu-svg-icon"><svg viewBox="0 0 32 32"><use xlink:href="#pinterest-pixpa-lg-icon" width="32" height="32"></use></svg></span>
            
          </a>
        </li>
        <li>
          <a rrel="noopener nofollow" class="url-anchor-share" target="_blank" href="https://mohit-nagaraj.pixpa.com/pixpa-social-share?url=https://www.pixpa.com&amp;media=tumblr" onclick="window.open(this.href, &#39;Pixpa&#39;, &#39;left=350,top=150,width=500,height=500,toolbar=1,resizable=0&#39;); return false;">
            <span class="social-icons menu-svg-icon"><svg viewBox="0 0 32 32"><use xlink:href="#tumblr-pixpa-share-icon" width="32" height="32"></use></svg></span>
            
          </a>
        </li>
        
        
      </ul>
    </div>
    
</div>
</div>

<div class="search-option-wrapper js-search-options-modal">
  <div class="search-close right js-share-close menu-svg-icon">
    <svg viewBox="0 0 320 512"><use xlink:href="#times-pixpa-icon" width="320" height="512"></use></svg>
  </div>
  <div class="search-options-modal">
    <!--search functionality start-->
    <form class="" role="form" method="POST" action="https://mohit-nagaraj.pixpa.com/search">
      <input type="hidden" name="_token" value="94aRFO13s9308MaAIQLKECpb1dIPn7cj9SAPF8FV">
      <input type="text" name="search" aria-label="Link to Search" class="input-filed" placeholder="Search">
      <input type="submit" value="search">
      <div class="submit_icon menu-icon">
        
        <svg viewBox="0 0 512 512">
          <use xlink:href="#search-light-pixpa-icon" width="512" height="512"></use>
        </svg>
      </div>
    </form>
    <!--search functionality ends-->
  </div>
</div>

<script type="text/javascript">
  $( document ).ready(function() {
    Footer.footerInit();
  });
</script>      </div>
    </div>
          <div class="top-scroller js-top-scroller dark">
        <span class="menu-svg-icon"><svg viewBox="0 0 256 512"><use xlink:href="#long-arrowup-pixpa-icon" width="256" height="512"></use></svg></span>
      </div>
            
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none" data-usage="social-icons-svg">
    	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  		<symbol id="instagram-pixpa-icon" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></symbol>
  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	  	
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                                                                                                                                                                                                                                  <symbol id="mail-pixpa-icon" viewBox="0 0 512 512"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></symbol>
                                                                                                                                                                                      <symbol id="location-pixpa-icon" viewBox="0 0 384 512"><path d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"></path></symbol>
                                                                          <symbol id="phone-pixpa-icon" viewBox="0 0 512 512"><path d="M487.8 24.1L387 .8c-14.7-3.4-29.8 4.2-35.8 18.1l-46.5 108.5c-5.5 12.7-1.8 27.7 8.9 36.5l53.9 44.1c-34 69.2-90.3 125.6-159.6 159.6l-44.1-53.9c-8.8-10.7-23.8-14.4-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7C27.3 502 39.9 512 54.5 512 306.7 512 512 307.8 512 54.5c0-14.6-10-27.2-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23C479.7 289.7 289.6 479.7 55.1 480z"></path></symbol>
                                                                                                                                                                                                                  
      
      
    
    
    

    
    
    
    

    

    
    
    
    
            
  <symbol id="share-pixpa-icon" viewBox="0 0 448 512"><path d="M352 320c-25.6 0-48.9 10-66.1 26.4l-98.3-61.5c5.9-18.8 5.9-39.1 0-57.8l98.3-61.5C303.1 182 326.4 192 352 192c53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 9.8 1.5 19.6 4.4 28.9l-98.3 61.5C144.9 170 121.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.6 0 48.9-10 66.1-26.4l98.3 61.5c-2.9 9.4-4.4 19.1-4.4 28.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96zm0-272c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM96 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm256 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path></symbol>  
  <symbol id="search-pixpa-icon" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></symbol>
  
  

  <symbol id="cart-pixpa-icon" viewBox="0 0 576 512"><path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></symbol>


  <symbol id="menudown-pixpa-icon" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></symbol>  
  <symbol id="heart-pixpa-icon" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></symbol>  
  <symbol id="arrow-to-bottom-pixpa-icon" viewBox="0 0 384 512"><path d="M348.5 232.1l-148 148.4c-4.7 4.7-12.3 4.7-17 0l-148-148.4c-4.7-4.7-4.7-12.3 0-17l19.6-19.6c4.8-4.8 12.5-4.7 17.1.2l93.7 97.1V44c0-6.6 5.4-12 12-12h28c6.6 0 12 5.4 12 12v248.8l93.7-97.1c4.7-4.8 12.4-4.9 17.1-.2l19.6 19.6c4.9 4.7 4.9 12.3.2 17zM372 428H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12z"></path></symbol>  
  <symbol id="eye-pixpa-icon" viewBox="0 0 576 512"><path d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"></path></symbol>  
  <symbol id="eye-slash-pixpa-icon" viewBox="0 0 640 512"><path d="M637 485.25L23 1.75A8 8 0 0 0 11.76 3l-10 12.51A8 8 0 0 0 3 26.75l614 483.5a8 8 0 0 0 11.25-1.25l10-12.51a8 8 0 0 0-1.25-11.24zM320 96a128.14 128.14 0 0 1 128 128c0 21.62-5.9 41.69-15.4 59.57l25.45 20C471.65 280.09 480 253.14 480 224c0-36.83-12.91-70.31-33.78-97.33A294.88 294.88 0 0 1 576.05 256a299.73 299.73 0 0 1-67.77 87.16l25.32 19.94c28.47-26.28 52.87-57.26 70.93-92.51a32.35 32.35 0 0 0 0-29.19C550.3 135.59 442.94 64 320 64a311.23 311.23 0 0 0-130.12 28.43l45.77 36C258.24 108.52 287.56 96 320 96zm60.86 146.83A63.15 63.15 0 0 0 320 160c-1 0-1.89.24-2.85.29a45.11 45.11 0 0 1-.24 32.19zm-217.62-49.16A154.29 154.29 0 0 0 160 224a159.39 159.39 0 0 0 226.27 145.29L356.69 346c-11.7 3.53-23.85 6-36.68 6A128.15 128.15 0 0 1 192 224c0-2.44.59-4.72.72-7.12zM320 416c-107.36 0-205.47-61.31-256-160 17.43-34 41.09-62.72 68.31-86.72l-25.86-20.37c-28.48 26.28-52.87 57.25-70.93 92.5a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448a311.25 311.25 0 0 0 130.12-28.43l-29.25-23C389.06 408.84 355.15 416 320 416z"></path></symbol>
  <symbol id="plus-circle-pixpa-icon" viewBox="0 0 512 512"><path d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"></path></symbol>  
  <symbol id="envelope-pixpa-icon" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></symbol>  
  <symbol id="trash-pixpa-icon" viewBox="0 0 448 512"><path d="M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"></path></symbol>  
  <symbol id="times-circle-pixpa-icon" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></symbol>  
  <symbol id="arrow-left-pixpa-icon" viewBox="0 0 448 512"><path d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"></path></symbol>  
  <symbol id="light-arrowright-pixpa-icon" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></symbol>  
  <symbol id="facebook-pixpa-icon" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></symbol>  
  <symbol id="twitter-x-pixpa-icon" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></symbol>
  <symbol id="twitter-pixpa-icon" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></symbol>  
  <symbol id="pinterest-pixpa-icon" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></symbol>  
  <symbol id="tumblr-pixpa-icon" viewBox="0 0 320 512"><path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"></path></symbol>
  <symbol id="tumblr-pixpa-share-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2671_891)"><path d="M16.0306 0C7.1587 0 0 7.16327 0 15.9796C0 24.7959 7.1587 32 16.0306 32C24.8413 32 32 24.7959 32 15.9796C32 7.12245 24.8413 0 16.0306 0Z" fill="#001935"></path><path d="M16.9942 19.186C16.9942 20.4289 17.6197 20.849 18.5927 20.849H20V24H17.3417C14.9614 24 13.1718 22.7571 13.1718 19.7987V15.0547H11V12.4989C13.3977 11.8687 14.388 9.80306 14.5097 8H16.9942V12.0788H19.8784V15.0547H16.9942V19.186Z" fill="white"></path></g><defs><clippath id="clip0_2671_891"><rect width="32" height="32" fill="white"></rect></clippath></defs></symbol>
  <symbol id="link-pixpa-icon" viewBox="0 0 512 512"><path d="M301.148 394.702l-79.2 79.19c-50.778 50.799-133.037 50.824-183.84 0-50.799-50.778-50.824-133.037 0-183.84l79.19-79.2a132.833 132.833 0 0 1 3.532-3.403c7.55-7.005 19.795-2.004 20.208 8.286.193 4.807.598 9.607 1.216 14.384.481 3.717-.746 7.447-3.397 10.096-16.48 16.469-75.142 75.128-75.3 75.286-36.738 36.759-36.731 96.188 0 132.94 36.759 36.738 96.188 36.731 132.94 0l79.2-79.2.36-.36c36.301-36.672 36.14-96.07-.37-132.58-8.214-8.214-17.577-14.58-27.585-19.109-4.566-2.066-7.426-6.667-7.134-11.67a62.197 62.197 0 0 1 2.826-15.259c2.103-6.601 9.531-9.961 15.919-7.28 15.073 6.324 29.187 15.62 41.435 27.868 50.688 50.689 50.679 133.17 0 183.851zm-90.296-93.554c12.248 12.248 26.362 21.544 41.435 27.868 6.388 2.68 13.816-.68 15.919-7.28a62.197 62.197 0 0 0 2.826-15.259c.292-5.003-2.569-9.604-7.134-11.67-10.008-4.528-19.371-10.894-27.585-19.109-36.51-36.51-36.671-95.908-.37-132.58l.36-.36 79.2-79.2c36.752-36.731 96.181-36.738 132.94 0 36.731 36.752 36.738 96.181 0 132.94-.157.157-58.819 58.817-75.3 75.286-2.651 2.65-3.878 6.379-3.397 10.096a163.156 163.156 0 0 1 1.216 14.384c.413 10.291 12.659 15.291 20.208 8.286a131.324 131.324 0 0 0 3.532-3.403l79.19-79.2c50.824-50.803 50.799-133.062 0-183.84-50.802-50.824-133.062-50.799-183.84 0l-79.2 79.19c-50.679 50.682-50.688 133.163 0 183.851z"></path></symbol>  
  <symbol id="times-pixpa-icon" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></symbol>
  <symbol id="pixpa-lg-cross-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.7 24c-.4 0-.9-.2-1.2-.5-.7-.7-.7-1.8 0-2.4L21.1.5c.7-.7 1.8-.7 2.4 0 .7.7.7 1.8 0 2.4L2.9 23.5c-.3.3-.7.5-1.2.5z"></path><path d="M22.3 24c-.4 0-.9-.2-1.2-.5L.5 2.9C-.2 2.2-.2 1.1.5.5s1.8-.7 2.4 0l20.6 20.6c.7.7.7 1.8 0 2.4-.3.3-.8.5-1.2.5z"></path></symbol>
  <symbol id="rss-pixpa-icon" viewBox="0 0 448 512"><path d="M80 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.449-237.834-198.057-429.163-435.61-435.61C5.609 31.821 0 37.229 0 44.007v24.02c0 6.482 5.147 11.808 11.626 11.992 211.976 6.04 382.316 176.735 388.354 388.354.185 6.479 5.51 11.626 11.992 11.626h24.02c6.78.001 12.187-5.608 12.004-12.384zm-136.239-.05C305.401 305.01 174.966 174.599 12.435 168.243 5.643 167.977 0 173.444 0 180.242v24.024c0 6.431 5.072 11.705 11.497 11.98 136.768 5.847 246.411 115.511 252.258 252.258.275 6.425 5.549 11.497 11.98 11.497h24.024c6.797-.001 12.264-5.644 11.998-12.436z"></path></symbol>  
  <symbol id="rss-pixpa-share-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#FFA500"></rect><g clip-path="url(#clip0_2671_907)"><path d="M23.25 5H10.75C8.67893 5 7 6.67893 7 8.75V21.25C7 23.3211 8.67893 25 10.75 25H23.25C25.3211 25 27 23.3211 27 21.25V8.75C27 6.67893 25.3211 5 23.25 5Z" fill="#FFA500"></path><path d="M12 22.5C13.3807 22.5 14.5 21.3807 14.5 20C14.5 18.6193 13.3807 17.5 12 17.5C10.6193 17.5 9.5 18.6193 9.5 20C9.5 21.3807 10.6193 22.5 12 22.5Z" fill="white"></path><path d="M9.5 15C11.4891 15 13.3968 15.7902 14.8033 17.1967C16.2098 18.6032 17 20.5109 17 22.5H19.5C19.5 19.8478 18.4464 17.3043 16.5711 15.4289C14.6957 13.5536 12.1522 12.5 9.5 12.5V15Z" fill="white"></path><path d="M9.5 10C11.1415 10 12.767 10.3233 14.2835 10.9515C15.8001 11.5797 17.1781 12.5004 18.3388 13.6612C19.4996 14.8219 20.4203 16.1999 21.0485 17.7165C21.6767 19.233 22 20.8585 22 22.5H24.5C24.5 18.5218 22.9196 14.7064 20.1066 11.8934C17.2936 9.08035 13.4782 7.5 9.5 7.5V10Z" fill="white"></path></g><defs><clippath id="clip0_2671_907"><rect width="20" height="20" fill="white" transform="translate(7 5)"></rect></clippath></defs></symbol>

  <symbol id="plus-pixpa-icon" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></symbol>  
  <symbol id="cart-plus-pixpa-icon" viewBox="0 0 384 512"><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></symbol>  
  <symbol id="minus-pixpa-icon" viewBox="0 0 384 512"><path d="M368 224H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></symbol>  
  <symbol id="star-pixpa-icon" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></symbol>  
  <symbol id="comment-altr-pixpa-icon" viewBox="0 0 512 512"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path></symbol>  
  <symbol id="comment-alts-pixpa-icon" viewBox="0 0 512 512"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></symbol>  
  <symbol id="lock-alt-pixpa-icon" viewBox="0 0 448 512"><path d="M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48 21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z"></path></symbol>  
  <symbol id="arrow-alt-circle-right-pixpa-icon" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></symbol>  
  <symbol id="arrow-up-pixpa-icon" viewBox="0 0 448 512"><path d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z"></path></symbol>  
  <symbol id="play-pixpa-icon" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></symbol>
  <symbol id="circle-play-pixpa-icon" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"></path></symbol>
  <symbol id="caret-left-pixpa-icon" viewBox="0 0 192 512"><path d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></symbol>  
  <symbol id="caret-right-pixpa-icon" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></symbol>  
  <symbol id="caret-down-pixpa-icon" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></symbol>  
  <symbol id="chevronr-down-pixpa-icon" viewBox="0 0 448 512"><path d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></symbol>
  <symbol id="chevronl-left-pixpa-icon" viewBox="0 0 256 512"><path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></symbol>  
  <symbol id="chevronl-right-pixpa-icon" viewBox="0 0 256 512"><path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></symbol>  
  <symbol id="angle-downl-pixpa-icon" viewBox="0 0 256 512"><path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path></symbol>  
  <symbol id="angle-upl-pixpa-icon" viewBox="0 0 256 512"><path d="M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z"></path></symbol>  
  <symbol id="close-pixpa-icon" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></symbol>
  <symbol id="info-pixpa-icon" viewBox="0 0 512 512"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path></symbol>  
  <symbol id="info-circle-pixpa-icon" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></symbol>  
  <symbol id="images-pixpa-icon" viewBox="0 0 576 512"><path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"></path></symbol>  
  <symbol id="heart-pixpa-icon" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></symbol>  
  <symbol id="shopping-bag-pixpa-icon" viewBox="0 0 448 512"><path d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z"></path></symbol>  
  <symbol id="solid-timescircle-pixpa-icon" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></symbol>  
  <symbol id="light-arrowleft-pixpa-icon" viewBox="0 0 448 512"><path d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></symbol>  
  <symbol id="l-longarrow-pixpa-icon" viewBox="0 0 448 512"><path d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z"></path></symbol>  
  <symbol id="left-nav-pixpa-icon" x="0" y="0" viewBox="0 0 75 14" xml:space="preserve"><path class="st0" d="M74 7.3H1C.8 7.3.7 7.2.7 7s.1-.3.3-.3h73c.2 0 .3.1.3.3s-.1.3-.3.3z"></path><path class="st0" d="M7 13.3c-.1 0-.2 0-.2-.1l-6-6c-.1-.1-.1-.3 0-.4l6-6c.1-.1.3-.1.4 0s.1.3 0 .4L1.4 7l5.8 5.8c.1.1.1.3 0 .4 0 .1-.1.1-.2.1z"></path></symbol>  
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path></symbol>  
  <symbol id="r-longarrow-pixpa-icon" viewBox="0 0 448 512"><path d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path></symbol>  
  <symbol id="right-nav-pixpa-icon" x="0" y="0" viewBox="0 0 75 14" xml:space="preserve"><path class="st0" d="M74 7.3H1C.8 7.3.7 7.2.7 7s.1-.3.3-.3h73c.2 0 .3.1.3.3s-.1.3-.3.3z"></path><path class="st0" d="M68 13.3c-.1 0-.2 0-.2-.1-.1-.1-.1-.3 0-.4L73.6 7l-5.8-5.8c-.1-.1-.1-.3 0-.4s.3-.1.4 0l6 6c.1.1.1.3 0 .4l-6 6c0 .1-.1.1-.2.1z"></path></symbol>  
  <symbol id="long_arrow_left-pixpa-icon" viewBox="0 0 448 512"><path d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z"></path></symbol>  
  <symbol id="long_arrow_right-pixpa-icon" viewBox="0 0 448 512"><path d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path></symbol>  
  <symbol id="search_plus-pixpa-icon" viewBox="0 0 512 512"><path d="M312 196v24c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z"></path></symbol>  
  <symbol id="search_minus-pixpa-icon" viewBox="0 0 512 512"><path d="M312 196v24c0 6.6-5.4 12-12 12H116c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h184c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z"></path></symbol>  
  <symbol id="play_circle-pixpa-icon" viewBox="0 0 512 512"><path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path></symbol>  
  <symbol id="pause_circle-pixpa-icon" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"></path></symbol>  
  <symbol id="expand-pixpa-icon" viewBox="0 0 448 512"><path d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H48v100c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v24c0 6.6 5.4 12 12 12h100v100c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-24c-6.6 0-12 5.4-12 12v100H300c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-24c0-6.6-5.4-12-12-12H48V332c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"></path></symbol>  
  <symbol id="compress-pixpa-icon" viewBox="0 0 448 512"><path d="M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v100h100c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v100H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h100v100c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm176 0V368h100c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12z"></path></symbol>  
  <symbol id="times-light-pixpa-icon" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></symbol>  
  <symbol id="mute-light-pixpa-icon" viewBox="0 0 512 512"><path d="M454.63 256l55.03-55.03c3.12-3.12 3.12-8.19 0-11.31l-11.31-11.31c-3.12-3.12-8.19-3.12-11.31 0L432 233.37l-55.03-55.03c-3.12-3.12-8.19-3.12-11.31 0l-11.31 11.31c-3.12 3.12-3.12 8.19 0 11.31L409.37 256l-55.03 55.03c-3.12 3.12-3.12 8.19 0 11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0L432 278.63l55.03 55.03c3.12 3.12 8.19 3.12 11.31 0l11.31-11.31c3.12-3.12 3.12-8.19 0-11.31L454.63 256zM231.81 64c-5.91 0-11.92 2.18-16.78 7.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c4.87 4.87 10.88 7.05 16.78 7.05 12.33 0 24.19-9.52 24.19-24.02V88.02C256 73.51 244.13 64 231.81 64zM224 404.67l-75.32-75.3-9.37-9.37H32V192h107.31l9.37-9.37 75.32-75.3v297.34z"></path></symbol>  
  <symbol id="up-light-pixpa-icon" viewBox="0 0 576 512"><path d="M342.91 193.57c-7.81-3.8-17.5-.48-21.34 7.5-3.81 7.97-.44 17.53 7.53 21.34C343.22 229.2 352 242.06 352 256s-8.78 26.8-22.9 33.58c-7.97 3.81-11.34 13.38-7.53 21.34 3.86 8.05 13.54 11.29 21.34 7.5C368.25 306.28 384 282.36 384 256s-15.75-50.29-41.09-62.43zM231.81 64c-5.91 0-11.92 2.18-16.78 7.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c4.87 4.87 10.88 7.05 16.78 7.05 12.33 0 24.19-9.52 24.19-24.02V88.02C256 73.51 244.13 64 231.81 64zM224 404.67L139.31 320H32V192h107.31L224 107.33v297.34zM421.51 1.83c-7.89-4.08-17.53-1.12-21.66 6.7-4.13 7.81-1.13 17.5 6.7 21.61 84.76 44.55 137.4 131.1 137.4 225.85s-52.64 181.3-137.4 225.85c-7.82 4.11-10.83 13.8-6.7 21.61 4.1 7.75 13.68 10.84 21.66 6.7C516.78 460.06 576 362.67 576 255.99c0-106.67-59.22-204.06-154.49-254.16zM480 255.99c0-66.12-34.02-126.62-88.81-157.87-7.69-4.38-17.59-1.78-22.04 5.89-4.45 7.66-1.77 17.44 5.96 21.86 44.77 25.55 72.61 75.4 72.61 130.12s-27.84 104.58-72.61 130.12c-7.72 4.42-10.4 14.2-5.96 21.86 4.3 7.38 14.06 10.44 22.04 5.89C445.98 382.62 480 322.12 480 255.99z"></path></symbol>  
  <symbol id="light-exclamationc-pixpa-icon" viewBox="0 0 512 512"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"></path></symbol>  
  <symbol id="chevronl-down-pixpa-icon" viewBox="0 0 448 512"><path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path></symbol>  
  <symbol id="chevroncircle-down-pixpa-icon" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-207.5 86.6l115-115.1c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L256 303l-99.5-99.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l115 115.1c4.8 4.6 12.4 4.6 17.1-.1z"></path></symbol>  
  <symbol id="sandwitch-pixpa-icon" viewBox="0 0 448 512"><path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></symbol>  
  <symbol id="sync-pixpa-icon" viewBox="0 0 512 512"><path d="M500 8h-27.711c-6.739 0-12.157 5.548-11.997 12.286l2.347 98.575C418.212 52.043 342.256 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h28.576c5.674 0 10.542-3.982 11.737-9.529C83.441 126.128 161.917 60 256 60c79.545 0 147.942 47.282 178.676 115.302l-126.39-3.009c-6.737-.16-12.286 5.257-12.286 11.997V212c0 6.627 5.373 12 12 12h192c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12zm-12.103 280h-28.576c-5.674 0-10.542 3.982-11.737 9.529C428.559 385.872 350.083 452 256 452c-79.546 0-147.942-47.282-178.676-115.302l126.39 3.009c6.737.16 12.286-5.257 12.286-11.997V300c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v192c0 6.627 5.373 12 12 12h27.711c6.739 0 12.157-5.548 11.997-12.286l-2.347-98.575C93.788 459.957 169.744 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176z"></path></symbol>  
  <symbol id="user-pixpa-icon" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></symbol>  
  <symbol id="home-pixpa-icon" viewBox="0 0 576 512"><path d="M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z"></path></symbol>  
  <symbol id="check_circle-pixpa-icon" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"></path></symbol>  
  <symbol id="alert_circle-pixpa-icon" viewBox="0 0 512 512"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"></path></symbol>  
  <symbol id="search-light-pixpa-icon" viewBox="0 0 512 512"><path d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path></symbol>  
  <symbol id="arrow-circle-right-pixpa-icon" viewBox="0 0 512 512"><path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm12.5 92.5l115.1 115c4.7 4.7 4.7 12.3 0 17l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-6.9-6.9c-4.7-4.7-4.7-12.5.2-17.1l85.6-82.5H140c-6.6 0-12-5.4-12-12v-10c0-6.6 5.4-12 12-12h190.3l-85.6-82.5c-4.8-4.7-4.9-12.4-.2-17.1l6.9-6.9c4.8-4.7 12.4-4.7 17.1 0z"></path></symbol>  
  <symbol id="lock-light-pixpa-icon" viewBox="0 0 448 512"><path d="M400 224h-16v-62.5C384 73.1 312.9.3 224.5 0 136-.3 64 71.6 64 160v64H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM96 160c0-70.6 57.4-128 128-128s128 57.4 128 128v64H96v-64zm304 320H48c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16z"></path></symbol>  
  <symbol id="chevron-circle-right-pixpa-icon" viewBox="0 0 512 512"><path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm86.6 224.5l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L303 256l-99.5-99.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.1 115c4.6 4.8 4.6 12.4-.1 17.1z"></path></symbol>  
  <symbol id="long-arrowup-pixpa-icon" viewBox="0 0 256 512"><path d="M3.515 168.97l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L111 92.113V468c0 6.627 5.373 12 12 12h10c6.627 0 12-5.373 12-12V92.113l83.444 83.928c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-116-116.485c-4.686-4.686-12.284-4.686-16.971 0L3.515 152c-4.687 4.686-4.687 12.284 0 16.97z"></path></symbol>  
  <symbol id="item-delete-pixpa-icon" viewBox="0 0 448 512"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></symbol>
  <symbol id="bars-pixpa-icon" data-name="Layer 1" viewBox="0 0 24 15.5">
    <path d="M23.23,1.5H.77A.76.76,0,0,1,0,.75.76.76,0,0,1,.77,0H23.23A.76.76,0,0,1,24,.75.76.76,0,0,1,23.23,1.5Z"></path>
    <path d="M23.23,15.5H.77a.75.75,0,1,1,0-1.5H23.23a.75.75,0,1,1,0,1.5Z"></path>
    <path d="M23.23,7h-14a.76.76,0,0,0-.75.75h0a.76.76,0,0,0,.75.75h14a.75.75,0,1,0,0-1.5Z"></path>
  </symbol>
  <symbol id="kebab-pixpa-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5 27" style="enable-background:new 0 0 5 27;" xml:space="preserve"><g><circle cx="2.5" cy="13.5" r="2.5"></circle></g><g><circle cx="2.5" cy="3" r="2.5"></circle></g>
    <g><circle cx="2.5" cy="24" r="2.5"></circle></g>
  </symbol>
  <symbol id="plus-pixpa-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36 36" style="enable-background:new 0 0 36 36;" xml:space="preserve"><g>
    <path d="M18,36c-0.9,0-1.5-0.7-1.5-1.5V19.5H1.5C0.7,19.5,0,18.9,0,18s0.7-1.5,1.5-1.5h14.9V1.5C16.5,0.7,17.1,0,18,0
        s1.5,0.7,1.5,1.5v14.9h14.9c0.9,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5H19.5v14.9C19.5,35.3,18.9,36,18,36z"></path></g>
  </symbol>
  <symbol id="bars-two-pixpa-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36 15" style="enable-background:new 0 0 36 15;" xml:space="preserve">
    <path d="M1.6,3.3h32.7c0.4,0,0.9-0.2,1.2-0.5C35.8,2.5,36,2.1,36,1.6s-0.2-0.9-0.5-1.2S34.8,0,34.4,0H1.6C1.2,0,0.8,0.2,0.5,0.5
      C0.2,0.8,0,1.2,0,1.6s0.2,0.9,0.5,1.2C0.8,3.1,1.2,3.3,1.6,3.3z"></path>
    <path d="M34.4,11.3H1.6c-0.4,0-0.9,0.2-1.2,0.5C0.2,12.1,0,12.5,0,12.9s0.2,0.9,0.5,1.2c0.3,0.3,0.7,0.5,1.2,0.5h32.7
      c0.4,0,0.9-0.2,1.2-0.5s0.5-0.7,0.5-1.2s-0.2-0.9-0.5-1.2C35.2,11.4,34.8,11.3,34.4,11.3z"></path>
  </symbol>
  <symbol id="candy-box-pixpa-icon" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.56897 13.1379C10.1969 13.1379 13.1379 10.1969 13.1379 6.56897C13.1379 2.94103 10.1969 0 6.56897 0C2.94103 0 0 2.94103 0 6.56897C0 10.1969 2.94103 13.1379 6.56897 13.1379Z"></path>
    <path d="M6.56897 35.9997C10.1969 35.9997 13.1379 33.0587 13.1379 29.4308C13.1379 25.8028 10.1969 22.8618 6.56897 22.8618C2.94103 22.8618 0 25.8028 0 29.4308C0 33.0587 2.94103 35.9997 6.56897 35.9997Z"></path>
    <path d="M29.4308 13.1379C33.0587 13.1379 35.9997 10.1969 35.9997 6.56897C35.9997 2.94103 33.0587 0 29.4308 0C25.8028 0 22.8618 2.94103 22.8618 6.56897C22.8618 10.1969 25.8028 13.1379 29.4308 13.1379Z"></path>
    <path d="M29.4308 35.9997C33.0587 35.9997 35.9997 33.0587 35.9997 29.4308C35.9997 25.8028 33.0587 22.8618 29.4308 22.8618C25.8028 22.8618 22.8618 25.8028 22.8618 29.4308C22.8618 33.0587 25.8028 35.9997 29.4308 35.9997Z"></path>
  </symbol>
  <symbol id="hamburger-pixpa-icon" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.63636 8.27273H34.3636C34.7976 8.27273 35.2138 8.10032 35.5207 7.79345C35.8276 7.48657 36 7.07035 36 6.63636C36 6.20237 35.8276 5.78616 35.5207 5.47928C35.2138 5.1724 34.7976 5 34.3636 5H1.63636C1.20237 5 0.786157 5.1724 0.47928 5.47928C0.172402 5.78616 0 6.20237 0 6.63636C0 7.07035 0.172402 7.48657 0.47928 7.79345C0.786157 8.10032 1.20237 8.27273 1.63636 8.27273V8.27273Z"></path>
    <path d="M34.3636 16.2729H1.63636C1.20237 16.2729 0.786157 16.4454 0.47928 16.7522C0.172402 17.0591 0 17.4753 0 17.9093C0 18.3433 0.172402 18.7595 0.47928 19.0664C0.786157 19.3733 1.20237 19.5457 1.63636 19.5457H34.3636C34.7976 19.5457 35.2138 19.3733 35.5207 19.0664C35.8276 18.7595 36 18.3433 36 17.9093C36 17.4753 35.8276 17.0591 35.5207 16.7522C35.2138 16.4454 34.7976 16.2729 34.3636 16.2729Z"></path>
    <path d="M34.3636 27.5459H1.63636C1.20237 27.5459 0.786157 27.7183 0.47928 28.0252C0.172402 28.3321 0 28.7483 0 29.1823C0 29.6163 0.172402 30.0325 0.47928 30.3393C0.786157 30.6462 1.20237 30.8186 1.63636 30.8186H34.3636C34.7976 30.8186 35.2138 30.6462 35.5207 30.3393C35.8276 30.0325 36 29.6163 36 29.1823C36 28.7483 35.8276 28.3321 35.5207 28.0252C35.2138 27.7183 34.7976 27.5459 34.3636 27.5459Z"></path>
  </symbol>

  <symbol id="cart-solid-pixpa-icon" viewBox="0 0 576 512"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></symbol>  
  <symbol id="bag-outline-pixpa-icon" viewBox="0 0 448 512"><path d="M352 128C352 57.421 294.579 0 224 0 153.42 0 96 57.421 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 32c52.935 0 96 43.065 96 96H128c0-52.935 43.065-96 96-96zm192 400c0 26.467-21.533 48-48 48H80c-26.467 0-48-21.533-48-48V160h64v48c0 8.837 7.164 16 16 16s16-7.163 16-16v-48h192v48c0 8.837 7.163 16 16 16s16-7.163 16-16v-48h64v272z"></path></symbol>  
  <symbol id="bag-solid-pixpa-icon" viewBox="0 0 448 512"><path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></symbol>  
  <symbol id="user-acc-pixpa-icon" viewBox="0 0 448 512"><path d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></symbol>
  <symbol id="carousel-arrow-left" viewBox="0 0 512 512"><path d="M2.344 250.3c-3.125 3.125-3.125 8.188 0 11.31l152 152C155.9 415.2 157.9 415.1 160 415.1s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L27.31 263.1H504C508.4 263.1 512 260.4 512 256s-3.594-8-8-8H27.31l138.3-138.3c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L2.344 250.3z"></path></symbol>
  <symbol id="carousel-arrow-right" viewBox="0 0 512 512"><path d="M509.7 261.7c3.125-3.125 3.125-8.188 0-11.31l-152-152C356.1 96.78 354.1 95.1 352 95.1s-4.094 .7813-5.656 2.344c-3.125 3.125-3.125 8.188 0 11.31l138.3 138.3H8c-4.406 0-8 3.578-8 8C0 260.4 3.594 263.1 8 263.1h476.7l-138.3 138.3c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0L509.7 261.7z"></path></symbol>
  <symbol id="whatsapp-widget" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></symbol>

  <symbol id="pixpa-colorpicker" class="" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m215.94 215.94c-10.251 10.251-16.592 24.414-16.592 40.057s6.341 29.805 16.592 40.057c10.251 10.251 24.413 16.592 40.056 16.592s29.805-6.341 40.057-16.592c10.251-10.251 16.592-24.414 16.592-40.057s-6.34-29.805-16.592-40.057-24.414-16.592-40.057-16.592-29.805 6.341-40.056 16.592z" fill="#fff" style="" data-original="#ffffff"></path><path d="m143.19 368.81-45.316 18.316-22.894 49.895c46.327 46.326 110.33 74.98 181.02 74.98l10-47.908-10-48.555c-44.055 0-83.939-17.857-112.81-46.728z" fill="#6017c9" style="" data-original="#6017c9"></path><path d="M96.464,256l-49.581-10L0,256c0,70.693,28.654,134.692,74.981,181.02l68.21-68.21  C114.32,339.939,96.464,300.055,96.464,256z" fill="#f35fae" style="" data-original="#f35fae"></path><path class="" d="m143.19 143.19-14.598-54.598-53.612-13.612c-46.327 46.327-74.981 110.33-74.981 181.02h96.464c0-44.055 17.856-83.939 46.727-112.81z" fill="#ff4f4f" style="" data-original="#ff4f4f"></path><path class="" d="M256,96.463l10-48.211L256,0C185.308,0,121.308,28.654,74.981,74.981l68.21,68.21  C172.061,114.32,211.945,96.463,256,96.463z" fill="#ff5e2c" style="" data-original="#ff5e2c"></path><path class="" d="m368.81 143.19 43.398-23.398 24.812-44.812c-46.327-46.327-110.33-74.981-181.02-74.981v96.463c44.055 0 83.939 17.857 112.81 46.728z" fill="#fbc640" style="" data-original="#fbc640"></path><path d="m415.54 256 51.444 10 45.02-10c0-70.692-28.653-134.69-74.981-181.02l-68.21 68.21c28.871 28.87 46.727 68.754 46.727 112.81z" fill="#00cf69" style="" data-original="#00cf69"></path><path d="M415.536,256c0,44.055-17.857,83.939-46.727,112.809l17.992,46.992l50.218,21.218  C483.347,390.692,512,326.693,512,256H415.536z" fill="#2aa1f2" style="" data-original="#2aa1f2"></path><path d="m256 415.54v96.463c70.692 0 134.69-28.654 181.02-74.981l-68.21-68.21c-28.87 28.871-68.754 46.728-112.81 46.728z" fill="#2858dd" style="" data-original="#2858dd"></path><path class="" d="m256 202.21 20-61.126-20-48.879c-45.23 0-86.179 18.333-115.82 47.974l28.668 58.668 49.117 19.117c9.734-9.733 23.182-15.754 38.035-15.754z" fill="#ef9a7f" style="" data-original="#ef9a7f"></path><path d="m294.04 217.96 53.177-22.177 24.608-55.608c-29.641-29.641-70.589-47.974-115.82-47.974v110c14.854 0 28.301 6.021 38.035 15.754z" fill="#ffce76" style="" data-original="#ffce76"></path><path d="m294.04 217.96c9.734 9.734 15.754 23.181 15.754 38.035l53.583 10 56.422-10c0-45.23-18.333-86.179-47.974-115.82l-77.785 77.785z" fill="#63ce96" style="" data-original="#63ce96"></path><path d="m294.04 294.04 23.835 43.835 53.95 33.95c29.641-29.641 47.974-70.59 47.974-115.82h-110c0 14.853-6.02 28.301-15.754 38.035z" fill="#7dcaff" style="" data-original="#7dcaff"></path><path d="m217.97 217.96-77.786-77.785c-29.641 29.641-47.974 70.59-47.974 115.82l57.928 20 52.077-20c0-14.853 6.021-28.301 15.755-38.035z" fill="#ff9c9c" style="" data-original="#ff9c9c"></path><path d="m202.21 256h-110c0 45.23 18.333 86.179 47.974 115.82l52.044-32.044 25.741-45.741c-9.733-9.734-15.754-23.182-15.754-38.035z" fill="#f297cb" style="" data-original="#f297cb"></path><path d="m217.97 294.04-77.786 77.785c29.641 29.641 70.589 47.974 115.82 47.974l11-60.727-11-49.279c-14.853 1e-3 -28.301-6.019-38.034-15.753z" fill="#8963c6" style="" data-original="#8963c6"></path><path d="m256 309.79v110c45.231 0 86.179-18.333 115.82-47.974l-77.785-77.785c-9.734 9.734-23.181 15.754-38.035 15.754z" fill="#73a6ff" style="" data-original="#73a6ff"></path></symbol>

</svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none" data-usage="lightgallery-icons-svg">
	<symbol id="twitter-pixpa-lg-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#04ADEC"></circle><path d="M21.5609 13.1484C21.5698 13.2728 21.5698 13.3972 21.5698 13.5215C21.5698 17.3147 18.6828 21.6852 13.4061 21.6852C11.7804 21.6852 10.2703 21.2144 9 20.3972C9.23097 20.4238 9.45303 20.4327 9.69289 20.4327C11.0342 20.4327 12.269 19.9797 13.2551 19.2068C11.9936 19.1802 10.9365 18.354 10.5723 17.217C10.75 17.2436 10.9277 17.2614 11.1142 17.2614C11.3718 17.2614 11.6295 17.2258 11.8693 17.1637C10.5546 16.8972 9.5685 15.7423 9.5685 14.3477V14.3122C9.95047 14.5254 10.3947 14.6586 10.8654 14.6764C10.0926 14.1611 9.58628 13.2817 9.58628 12.2868C9.58628 11.7538 9.72838 11.2652 9.97713 10.8388C11.3896 12.5799 13.5127 13.7169 15.8934 13.8413C15.849 13.6281 15.8223 13.4061 15.8223 13.184C15.8223 11.6028 17.1015 10.3147 18.6916 10.3147C19.5177 10.3147 20.2639 10.6611 20.788 11.2208C21.4365 11.0964 22.0583 10.8566 22.6091 10.5279C22.3959 11.1942 21.9428 11.7538 21.3477 12.1091C21.9251 12.047 22.4847 11.887 22.9999 11.665C22.6091 12.2335 22.1205 12.7398 21.5609 13.1484V13.1484Z" fill="white"></path></symbol>

	
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
	<symbol id="tumblr-pixpa-lg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.8 24c-3.6 0-6.3-1.9-6.3-6.3v-7.1H5.2V6.7c3.6-.9 5.1-4 5.3-6.7h3.7v6.1h4.4v4.5h-4.4v6.2c0 1.9.9 2.5 2.4 2.5h2.1V24h-3.9z"></path></symbol>

	<symbol id="pinterest-pixpa-lg-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#CB1F23"></circle><g clip-path="url(#clip0_2526_912)"><path d="M16.8438 9.17773C13.9047 9.17773 11 11.048 11 14.075C11 16 12.1344 17.0937 12.8219 17.0937C13.1055 17.0937 13.2687 16.3391 13.2687 16.1258C13.2687 15.8715 12.5898 15.3301 12.5898 14.2719C12.5898 12.0734 14.343 10.5148 16.6117 10.5148C18.5625 10.5148 20.0063 11.573 20.0063 13.5172C20.0063 14.9691 19.3961 17.6926 17.4195 17.6926C16.7063 17.6926 16.0961 17.2004 16.0961 16.4949C16.0961 15.4613 16.8523 14.4605 16.8523 13.3941C16.8523 11.584 14.1625 11.9121 14.1625 14.0996C14.1625 14.559 14.2227 15.0676 14.4375 15.4859C14.0422 17.1102 13.2344 19.5301 13.2344 21.2035C13.2344 21.7203 13.3117 22.2289 13.3633 22.7457C13.4607 22.8496 13.412 22.8387 13.5609 22.7867C15.0047 20.9 14.9531 20.5309 15.6063 18.0617C15.9586 18.7016 16.8695 19.0461 17.5914 19.0461C20.6336 19.0461 22 16.216 22 13.6648C22 10.9496 19.5422 9.17773 16.8438 9.17773Z" fill="white"></path></g><defs><clippath id="clip0_2526_912"><rect width="11" height="14" fill="white" transform="translate(11 9)"></rect></clippath></defs></symbol>


	

	<symbol id="link-pixpa-lg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.2 16.4h-.5c-.9-.1-1.8-.3-2.7-.8-.8-.5-1.5-1.1-2.1-1.8-.4-.5-.3-1.2.2-1.5.5-.4 1.2-.3 1.5.2.4.5.8.9 1.4 1.2.5.3 1.2.5 1.8.5s1.3 0 1.8-.3c.6-.2 1.1-.6 1.6-1l3.3-3.3c.8-.8 1.2-1.9 1.2-3.1s-.5-2.2-1.3-3-1.9-1.3-3-1.3-2.2.4-3.1 1.2l-1.9 1.9a1.09 1.09 0 0 1-1.5 0 1.09 1.09 0 0 1 0-1.5l1.9-1.9C14.1.7 15.7 0 17.4.1 19.1.1 20.7.8 22 2a6.42 6.42 0 0 1 1.9 4.6c0 1.7-.6 3.4-1.8 4.6l-3.3 3.3c-.7.7-1.5 1.2-2.3 1.5-.8.2-1.5.4-2.3.4zm-7.6 7.5A6.42 6.42 0 0 1 2 22a6.42 6.42 0 0 1-1.9-4.6c0-1.7.6-3.4 1.8-4.6l3.3-3.3c.7-.6 1.4-1.1 2.3-1.5.9-.3 1.8-.5 2.8-.4.9.1 1.8.4 2.7.8.8.5 1.5 1.1 2.1 1.8.4.5.3 1.2-.2 1.5-.5.4-1.2.3-1.5-.2-.4-.5-.8-.9-1.4-1.2s-1.2-.5-1.8-.5-1.2 0-1.8.3c-.6.2-1.1.6-1.6 1l-3.3 3.3c-.8.8-1.2 1.9-1.2 3.1s.5 2.2 1.3 3 1.9 1.3 3 1.3c1.2 0 2.2-.4 3.1-1.2l1.9-1.8a1.09 1.09 0 0 1 1.5 0 1.09 1.09 0 0 1 0 1.5l-1.9 1.9c-1.3 1.1-2.9 1.7-4.6 1.7z"></path></symbol>

	<symbol id="facebook-pixpa-lg-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#3C5A98"></circle><g clip-path="url(#clip0_2526_910)"><path d="M19.8506 16.875L20.2505 14.3413H17.7499V12.6971C17.7499 12.004 18.0992 11.3283 19.2192 11.3283H20.356V9.17117C20.356 9.17117 19.3244 9 18.338 9C16.2787 9 14.9326 10.2135 14.9326 12.4103V14.3413H12.6436V16.875H14.9326V23H17.7499V16.875H19.8506Z" fill="white"></path></g><defs><clippath id="clip0_2526_910"><rect width="9" height="14" fill="white" transform="translate(12 9)"></rect></clippath></defs>
	</symbol>

	<symbol id="pixpa-lg-maximize-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.4 24h-3.6c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2h3.6c.3 0 .6-.1.8-.4.2-.2.4-.5.4-.8v-3.6c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v3.6c0 1-.4 1.9-1.1 2.5S21.4 24 20.4 24zM7.2 24H3.6c-1 0-1.9-.4-2.5-1.1-.7-.6-1.1-1.5-1.1-2.5v-3.6c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v3.6c0 .3.1.6.4.8.2.2.5.4.8.4h3.6c.7 0 1.2.5 1.2 1.2S7.9 24 7.2 24zM22.8 8.4c-.7 0-1.2-.5-1.2-1.2V3.6c0-.3-.1-.6-.4-.8-.2-.2-.5-.4-.8-.4h-3.6c-.7 0-1.2-.5-1.2-1.2S16.1 0 16.8 0h3.6c1 0 1.9.4 2.5 1.1.7.6 1.1 1.5 1.1 2.5v3.6c0 .7-.5 1.2-1.2 1.2zm-21.6 0C.5 8.4 0 7.9 0 7.2V3.6c0-1 .4-1.9 1.1-2.5C1.7.4 2.6 0 3.6 0h3.6c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2H3.6c-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8v3.6c0 .7-.5 1.2-1.2 1.2z"></path></symbol>

	<symbol id="pixpa-lg-minimize-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.8 24c-.7 0-1.2-.5-1.2-1.2v-3.6c0-1 .4-1.9 1.1-2.5s1.6-1.1 2.5-1.1h3.6c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2h-3.6c-.3 0-.6.1-.8.4s-.4.5-.4.8v3.6c0 .7-.5 1.2-1.2 1.2zm-9.6 0c-.7 0-1.2-.5-1.2-1.2v-3.6c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4H1.2C.5 18 0 17.5 0 16.8s.5-1.2 1.2-1.2h3.6c1 0 1.9.4 2.5 1.1.7.7 1.1 1.6 1.1 2.5v3.6c0 .7-.5 1.2-1.2 1.2zM22.8 8.4h-3.6c-1 0-1.9-.4-2.5-1.1-.7-.7-1.1-1.6-1.1-2.5V1.2c0-.7.5-1.2 1.2-1.2S18 .5 18 1.2v3.6c0 .3.1.6.4.8.2.3.5.4.8.4h3.6c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2zm-18 0H1.2C.5 8.4 0 7.9 0 7.2S.5 6 1.2 6h3.6c.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V1.2C6 .5 6.5 0 7.2 0s1.2.5 1.2 1.2v3.6c0 1-.4 1.9-1.1 2.5-.6.7-1.5 1.1-2.5 1.1z"></path></symbol>

	<symbol id="pixpa-lg-pause-circle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 24A12.04 12.04 0 0 1 0 12 12.04 12.04 0 0 1 12 0a12.04 12.04 0 0 1 12 12 12.04 12.04 0 0 1-12 12zm0-21.8A9.82 9.82 0 0 0 2.2 12a9.82 9.82 0 0 0 9.8 9.8 9.82 9.82 0 0 0 9.8-9.8A9.82 9.82 0 0 0 12 2.2zM9.8 16.4a1.11 1.11 0 0 1-1.1-1.1V8.7a1.11 1.11 0 0 1 1.1-1.1 1.11 1.11 0 0 1 1.1 1.1v6.5c0 .7-.5 1.2-1.1 1.2zm4.4 0a1.11 1.11 0 0 1-1.1-1.1V8.7a1.11 1.11 0 0 1 1.1-1.1 1.11 1.11 0 0 1 1.1 1.1v6.5c0 .7-.5 1.2-1.1 1.2z"></path></symbol>

	<symbol id="pixpa-lg-play-circle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 24A12.04 12.04 0 0 1 0 12 12.04 12.04 0 0 1 12 0a12.04 12.04 0 0 1 12 12 12.04 12.04 0 0 1-12 12zm0-21.8A9.82 9.82 0 0 0 2.2 12a9.82 9.82 0 0 0 9.8 9.8 9.82 9.82 0 0 0 9.8-9.8A9.82 9.82 0 0 0 12 2.2zM9.8 17.5c-.2 0-.4 0-.5-.1a1.1 1.1 0 0 1-.6-1V7.6a1.1 1.1 0 0 1 .6-1c.4-.2.8-.2 1.1.1l6.5 4.4c.3.2.5.5.5.9s-.2.7-.5.9l-6.5 4.4c-.2.1-.4.2-.6.2zm1.1-7.8v4.7l3.5-2.3-3.5-2.4z"></path></symbol>

	<symbol id="pixpa-lg-share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 8.7c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-1.9 4.4-4.4 4.4zm0-6.5a2.22 2.22 0 0 0-2.2 2.2 2.22 2.22 0 0 0 2.2 2.2 2.22 2.22 0 0 0 2.2-2.2 2.22 2.22 0 0 0-2.2-2.2zm-13 14.2c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4c-.1 2.4-2 4.4-4.4 4.4zm0-6.6A2.22 2.22 0 0 0 3.3 12a2.22 2.22 0 0 0 2.2 2.2A2.22 2.22 0 0 0 7.7 12c-.1-1.2-1-2.2-2.2-2.2zm13 14.2c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4S21 24 18.5 24zm0-6.5a2.22 2.22 0 0 0-2.2 2.2 2.22 2.22 0 0 0 2.2 2.2 2.22 2.22 0 0 0 2.2-2.2 2.22 2.22 0 0 0-2.2-2.2z"></path><path d="M15.7 19.1c-.2 0-.4 0-.5-.1l-7.5-4.3c-.5-.3-.7-1-.4-1.5s1-.7 1.5-.4l7.5 4.3c.5.3.7 1 .4 1.5-.2.3-.6.5-1 .5zm-7.4-7.7c-.4 0-.7-.2-.9-.5-.4-.5-.2-1.2.3-1.5l7.4-4.3c.5-.3 1.2-.1 1.5.4.4.5.2 1.1-.3 1.5l-7.4 4.3c-.2.1-.4.1-.6.1z"></path></symbol>

	<symbol id="pixpa-lg-shopping-cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="9" cy="21" r="2"></circle><circle cx="20" cy="21" r="2"></circle><path d="M9.6 17c-.7 0-1.3-.2-1.9-.7-.5-.4-.9-1.1-1.1-1.8L5 6.2v-.1L4.2 2H1a.94.94 0 0 1-1-1 .94.94 0 0 1 1-1h4c.5 0 .9.3 1 .8L6.8 5H23c.3 0 .6.1.8.4.2.2.2.5.2.8l-1.6 8.4c-.1.7-.5 1.3-1.1 1.8-.5.4-1.2.7-1.9.7L9.6 17h0zM7.2 7l1.4 7.2c0 .2.2.4.4.6.2.1.4.2.7.2h9.7c.3 0 .5-.1.7-.2s.3-.4.4-.6L21.8 7H7.2z"></path></symbol>

	<symbol id="pixpa-lg-cross-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.7 24c-.4 0-.9-.2-1.2-.5-.7-.7-.7-1.8 0-2.4L21.1.5c.7-.7 1.8-.7 2.4 0 .7.7.7 1.8 0 2.4L2.9 23.5c-.3.3-.7.5-1.2.5z"></path><path d="M22.3 24c-.4 0-.9-.2-1.2-.5L.5 2.9C-.2 2.2-.2 1.1.5.5s1.8-.7 2.4 0l20.6 20.6c.7.7.7 1.8 0 2.4-.3.3-.8.5-1.2.5z"></path></symbol>

	<symbol id="pixpa-lg-zoom-in-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.8 21.6C4.8 21.6 0 16.8 0 10.8S4.8 0 10.8 0s10.8 4.8 10.8 10.8-4.8 10.8-10.8 10.8zm0-19.2c-4.6 0-8.4 3.8-8.4 8.4s3.8 8.4 8.4 8.4 8.4-3.8 8.4-8.4-3.8-8.4-8.4-8.4z"></path><path d="M22.8 24c-.3 0-.6-.1-.8-.4l-5.2-5.2c-.5-.5-.5-1.2 0-1.7s1.2-.5 1.7 0l5.2 5.2c.5.5.5 1.2 0 1.7-.3.3-.6.4-.9.4zm-12-8.4c-.7 0-1.2-.5-1.2-1.2V7.2c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v7.2c0 .7-.5 1.2-1.2 1.2z"></path><path d="M14.4 12H7.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2h7.2c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2z"></path></symbol>

	<symbol id="pixpa-lg-zoom-out-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns:v="https://vecta.io/nano"><path d="M10.8 21.6C4.8 21.6 0 16.8 0 10.8S4.8 0 10.8 0s10.8 4.8 10.8 10.8-4.8 10.8-10.8 10.8zm0-19.2c-4.6 0-8.4 3.8-8.4 8.4s3.8 8.4 8.4 8.4 8.4-3.8 8.4-8.4-3.8-8.4-8.4-8.4z"></path><path d="M22.8 24c-.3 0-.6-.1-.8-.4l-5.2-5.2c-.5-.5-.5-1.2 0-1.7s1.2-.5 1.7 0l5.2 5.2c.5.5.5 1.2 0 1.7-.3.3-.6.4-.9.4zm-8.4-12H7.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2h7.2c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2z"></path></symbol>

	<symbol id="pixpa-lg-info-pixpa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0ZM12 21.75C6.62344 21.75 2.25 17.3761 2.25 12C2.25 6.62391 6.62344 2.25 12 2.25C17.3766 2.25 21.75 6.62391 21.75 12C21.75 17.3761 17.3766 21.75 12 21.75ZM13.875 15.75H13.125V11.625C13.125 11.0063 12.6234 10.5 12 10.5H10.5C9.88125 10.5 9.375 11.0063 9.375 11.625C9.375 12.2437 9.88125 12.75 10.5 12.75H10.875V15.75H10.125C9.50625 15.75 9 16.2563 9 16.875C9 17.4937 9.50625 18 10.125 18H13.875C14.4961 18 15 17.4961 15 16.875C15 16.2539 14.4984 15.75 13.875 15.75ZM12 9C12.8283 9 13.5 8.32828 13.5 7.5C13.5 6.67172 12.8283 6 12 6C11.1717 6 10.5 6.67031 10.5 7.5C10.5 8.32969 11.1703 9 12 9Z"></path></symbol>

	<symbol id="copy-pixpa-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2525_905)"><path d="M11.7799 1.65539L10.3444 0.219844C10.2049 0.0790078 10.0127 0 9.81352 0H5.97914C5.15063 0 4.47914 0.671719 4.47914 1.5L4.4796 7.5C4.50023 8.32969 5.17289 9 6.00023 9H10.5002C11.3252 9 12.0002 8.325 12.0002 7.5V2.18555C12.0002 1.9868 11.9205 1.79602 11.7799 1.65539ZM10.8752 7.5C10.8752 7.70709 10.7073 7.875 10.5002 7.875H5.97914C5.772 7.875 5.60414 7.70709 5.60414 7.5V1.50305C5.60414 1.29595 5.77205 1.12805 5.97914 1.12805H8.97914L9.00023 2.25C9.00023 2.66414 9.33609 3 9.75023 3H10.8541V7.5H10.8752ZM6.37523 10.5C6.37523 10.7071 6.20733 10.875 6.00023 10.875H1.47914C1.272 10.875 1.10414 10.7071 1.10414 10.5L1.12477 4.50234C1.12477 4.29525 1.29267 4.12734 1.49977 4.12734H3.75023V3H1.5C0.671484 3 0 3.67148 0 4.5L0.000229688 10.5C0.00028125 11.3273 0.671953 12 1.50023 12H6.00023C6.82523 12 7.50023 11.325 7.50023 10.5V9.75H6.39633L6.37523 10.5Z" fill="black"></path></g><defs><clippath id="clip0_2525_905"><rect width="12" height="12" fill="white"></rect></clippath></defs></symbol>


	


</svg>    
    <span id="global_cache_publish_date" class="hide" data-value="1697304529"></span>
    <span id="custompage_publish_date" class="hide" data-value="1697304529"></span>
<span id="studio_preview_url" class="hide" data-value=""></span>
        <span id="global_domain" class="hide" data-value="https://mohit-nagaraj.pixpa.com"></span>
    
    <span id="global_cache_publish_date" class="hide" data-value="1697304529"></span>
    <span id="custompage_publish_date" class="hide" data-value="1697304529"></span>
<span id="studio_preview_url" class="hide" data-value=""></span>

        <span id="global_domain" class="hide" data-value="https://mohit-nagaraj.pixpa.com"></span>
        <script src="./Mohit_files/theme-v2-globalthemes.js.download"></script>
    <script type="text/javascript">      
      window.noOfColumns = 1;
      window.scrollbarWidth = 15;
      window.labels = {"common_galleryinfo":"Gallery Info","common_photoinfo":"Photo Info","common_share":"Share","common_next":"Next Post","common_previous":"Previous Post","common_back":"Back","common_search":"Search","common_photo":"Photo","common_photos":"Photos","common_mobile_menu":"MENU","common_view_btn":"VIEW","common_form_label":"Fill the form below","common_submit_btn":"Submit","common_upcoming":"Upcoming","common_comments":"Comments","common_latestposts":"Latest Posts","common_tags":"Tagged","common_contact_msg":"Message Sent.","common_gallery_caption":"Caption not available","common_thanks_for_subscribing":"Thank you for subscribing.","proofing_login_password":"Album Password","proofing_login_name":"Your Name","proofing_login_email":"Your Email","proofing_enter_btn":"ENTER","proofing_wrong_password":"Wrong Password","proofing_menu_more":"More","proofing_favoriteall":"FAVORITE ALL","proofing_downloadall":"Download Gallery","proofing_removeall":"REMOVE ALL","proofing_fav_list_remove_msg":"Are you sure you want to remove all your favorites?","proofing_lg_favorite":"Favorite","proofing_lg_buy":"Buy","proofing_lg_download":"Download","proofing_album_expired":"This album has expired.","proofing_popup_contact":"CONTACT","proofing_popup_submit_btn":"SUBMIT","proofing_popup_feedback":"Send your feedback or inquiry","proofing_menu_viewwebsite":"View Website","proofing_menu_favorites":"FAVORITES","proofing_menu_name":"Name","proofing_menu_email":"Share Favorites","proofing_share_emailfield":"Email","proofing_menu_message":"Message","proofing_menu_sendemail":"Share Favorites","proofing_popup_attachfav":"Attach favorites","proofing_popup_sharefav":"SHARE FAVORITES","proofing_popup_favorite":"SAVE AS FAVORITE","proofing_popup_save_btn":"SAVE","proofing_popup_download_btn":"DOWNLOAD","proofing_cart_view_cart":"view cart","proofing_backtocollection":"Continue Shopping","proofing_favorite_share":"Send your favorites list to family or friends by email.","proofing_message_sent":"Your message has been sent.","proofing_fav_added":"Added to favorites","proofing_fav_removed":"Removed from favorites","proofing_download_byline1":"Downloads can take a few minutes to process based on the file sizes. You can leave this page open. We will also email you this page link when download files are ready.","proofing_download_byline2":"If you face any issue, email","proofing_download_backbtn":"BACK","proofing_share_viewalbum":"View Album","proofing_share_question":"Questions? Contact","proofing_fav_list_new":"NEW FAVORITES LIST","proofing_fav_list_create":"CREATE FAVORITES LIST","proofing_fav_list_delete":"Delete List","proofing_fav_list_delete_msg":"Are you sure you want to delete your favorite list?","proofing_logout":"Logout","store_cart_item":"Item","store_cart_items":"Items","store_category_all":"All","store_product_back":"Back","store_product_quantity":"Quantity","store_product_addtocart_btn":"ADD TO CART","store_product_comingsoon":"Coming Soon","store_product_soldout":"Sold Out","store_product_similer_product":"You may also like","store_cart_shoppingcart":"SHOPPING CART","store_cart_cancel_button":"Cancel","store_cart_confirm_remove":"YES, REMOVE IT","store_cart_cancelled":"Cancelled","store_cart_still_in_cart":"Item is still in cart :)","store_cart_digital_warning":"This digital item is already in your cart!","store_cart_subtotal":"Subtotal","store_cart_subtotalbyline":"Shipping and discount codes are added at checkout","store_cart_email":"Your Email Address","store_cart_checkout_btn":"CHECKOUT","store_cart_continueshop_btn":"Continue Shopping","store_cart_emptycart":"Your shopping cart is empty","store_cart_itemaddedcart":" added to cart","store_cart_itemwillremovecart":"Item will be removed from cart","store_cart_itemdeleted":"Deleted!","store_cart_itemremovecart":" removed from cart","store_cart_item_quantity_zero":"Oops...","store_cart_item_quantity_cannot_zero":"Quantity cannot be zero!","store_backtocart":"Cart","store_shipping_checkoutstep1":"Information","store_checkout_title":"Title","store_checkout_amount":"Amount","store_checkout_subtotal":"Subtotal","store_checkout_discount":"Discount","store_checkout_shipping":"Shipping","store_checkout_inclusive_of_tax":"Inclusive of ","store_checkout_total":"Total:","store_invoice_order_note":"Order Notes","store_shipping_contactinfo":"Customer Details","store_shipping_first_name":"First Name","store_shipping_last_name":"Last Name","store_shipping_email":"Email Address","store_shipping_phone":"Phone with country code","store_shipping_address1":"Address Line 1","store_shipping_address2":"Address Line 2 (optional)","store_shipping_company":"Company Name (optional)","store_shipping_city":"City","store_shipping_country":"Country","store_shipping_state":"State \/ Province","store_shipping_zip":"Zip \/ Postal code","store_shipping_shippingadd":"Shipping Address","store_shipping_continue_btn":"CONTINUE","store_order_summary":"Order Summary","store_payment_method":"Payment Method","store_summary_checkoutstep2":"Shipping & Payment Method","store_checkout_discount_code":"Discount Code","store_summary_discountapply_btn":"Apply","store_summary_edit":"Edit","store_summary_note":"Notes to Seller (Optional)","store_summary_submitorder_btn":"COMPLETE ORDER","store_summary_terms":"I accept the terms of use","store_summary_stripe":"Credit Card \/ Debit Card","store_summary_paypal":"Paypal","store_summary_payu":"Credit Card \/ Debit Card \/ Netbanking","store_summary_paylater":"Pay Offline","store_success_confmsg":"Order Completed Successfully!'","store_success_backtostore_btn":"Back to Store","store_success_vieworder_btn":"View Order","store_invoice_download_file":"Download File","store_invoice_file_name":"File Name","store_invoice_gallery_name":"Gallery Name","store_invoice_part_number":"Part","store_invoice_processing":"Processing","store_invoice_downloads":"Downloads","store_invoice_statusbyline":"This order is either unpaid or cancelled. Downloads of digital products \/ files (if any) are not available. Please contact","store_invoice_contactowner":"If you have any questions, contact","store_invoice_id":"Invoice","store_invoice_date":"Date","store_email_neworder":"Thank You for Your Order No.","store_email_orderprocessed":"Your order is being processed. Order No.","store_email_ordershipped":"Your order has been shipped. Order No.","store_email_ordercancelled":"Your order has been cancelled. Order No.","store_email_orderno":"YOUR ORDER NO.","store_email_ordersummary":"YOUR ORDER SUMMARY","store_email_hello":"Hello","min_order_amount":"Minimum order amount should be","store_product_options":"Product Options","common_gallery_hide":"Hide","common_blog_min_read":"min read","proofing_lg_comment":"Comments","store_newsletter_optin":"Subscribe to our newsletter","proofing_logout_success_message":"Logged out successfully.","proofing_email_added_successfully":"Email Added Successfully","proofing_favorite_title":"Favorite","proofing_cart_title":"Cart","proofing_about_the_photographer":"About the Photographer","proofing_contact_title":"Contact","proofing_my_profile":"My Profile","proofing_change_your_profile_details":"Change your profile details","proofing_change_profile_image":"Change Profile Image","proofing_upload_profile_image":"Upload Profile Image","proofing_save":"Save","proofing_galleries":"Galleries","proofing_filenames":"Filenames","proofing_download_small":"Small","proofing_download_medium":"Medium","proofing_download_large":"Large","proofing_download_original_files":"Original Files","proofing_download_original_file":"Original File","proofing_please_enter_your_name_email_download_pin":"Please enter your name, email and download pin.","proofing_download_pin":"Download PIN","proofing_please_enter_your_name_email_to_download":"Please enter your name and email to download.","proofing_please_provide_your_name_email_to_access_your_favorites":"Please provide your name and email to access your favorites","proofing_please_provide_your_name_email_to_access_your_comments":"Please provide your name and email to access your comments","proofing_preparing_download_link":"Preparing Download Link","proofing_download_part":"Part","proofing_download_link":"Download link","proofing_here_download_link_that_you_have_requested":"Here is the download link that you have requested:","proofing_please_note_that_link_will_expire_in_seven_days":"Please note that link will expire in seven days.","proofing_copy_and_paste_this":"Or copy and paste this URL into your browser address bar:","proofing_floatingcart_info":"INFO","proofing_floatingcart_info_title":"Product Info","proofing_floatingcart_edit_crop":"EDIT CROP","proofing_set_your_preferred_crop":"Set your preferred crop area for printing","proofing_close":"Close","proofing_download_limit_exceeded":"Download limit exceeded. You cannot download more files.","proofing_download_auth_message":"You are not authorised to download files. Contact the site owner","proofing_download_pin_incorrect":"Download Pin is incorrect","crop_area_has_been_updated":"Crop area has been updated","invalid_coupon":"Invalid Coupon","coupon_applied":"Coupon applied","discount_coupon_removed":"Discount coupon removed.","file_expired":"File Expired","access_your_favorites":"Access Your Favorites","access_your_comments":"Access Your Comments","favorite_list_not_found":"Favorite List not found","my_favorites":"My Favorites","placeholder_name":"Name","placeholder_description":"Description (optional)","proofing_create":"Create","proofing_add_to_favorites":"ADD TO FAVORITES","common_image":"Image","common_images":"Images","proofing_other_favorite_list":"Other favourite lists","please_enter_download_password":"Please enter the download password.","proofing_paid":"PAID","proofing_unpaid":"UNPAID","proofing_amount_due":"Amount Due","proofing_album":"Album","mobileapp_install_app":"Install App","mobileapp_info":"INFO","mobileapp_call":"CALL","mobileapp_website":"WEBSITE","mobileapp_expired":"This Mobile Gallery App has expired.","store_qty":"Qty","common_placeholder_type_text_here":"Enter security text","common_placeholder_comments":"Comments","common_blog_comment":"Comment","common_shareon_facebook":"Share on Facebook","common_shareon_twitter":"Share on Twitter","common_sharevia_email":"Share via Email","common_share_pinto_pinterest":"Pin to Pinterest","common_share_poston_tumblr":"Post on Tumblr","common_share_copy_link":"Copy link to share","common_please_select_one_value":"Please select at least one value","proofing_yes":"YES","proofing_no":"NO","proofing_your_favorites":"Your Favorites","proofing_your_size":"Size","common_maintenance_password":"Password","store_out_of_stock":"Out of stock","store_some_products_unavailable":"Some products in your cart are currently unavailable. Please update your cart to proceed.","store_available_in_stock_only":"available in stock only","store_mode_of_payment":"Mode of payment:","store_payment_by":"Payment by","store_payment_by_stripe":"Stripe","store_payment_by_paypal":"Paypal","store_payment_by_payumoney":"PayUmoney","store_payment_by_offline":"Offline","your_amount":"Your amount","common_bp_comments_heading":"Comments","common_bp_comments_btn":"Post Comments","store_order_processing":"Order Processing . . .","store_admin_address":"Store Address","store_customer_address":"Shipping Address","store_successpage_cancelled":"Cancelled","store_successpage_processed":"Processed","store_successpage_shipped":"Shipped","store_successpage_invoice":"Download Invoice","store_successpage_orderdetails":"Order Details","store_successpage_filedownloads":"File Downloads","store_unavailable":"Unavailable","store_see_more_products":"See more products","proofing_login_id":"Album ID","common_folder_prev":"Previous","common_folder_next":"Next","checkout_discount_amount":"Discount amount cannot be greater than total order amount.","store_title_lable":"Store","common_loading_more_images":"Loading more images . . .","store_login_password":"Password","store_login":"Login","create_account":"Create Your Account","store_sigin":"Sign In","store_forgot_password":"Forgot your password","store_create":"Create","store_existing_account":"Already have an account?","store_reset_email":"We will send you an email if a user with this email address exists.","store_request_password":"Request Password","store_confirm_password":"Password Confirmation","store_reset_password":"Reset your password","store_my_account":"My Account","store_my_addresses":"My Addresses","store_view_addresses":"View Addresses","store_your_addresses":"Your Addresses","store_return_account":"Return to your account","store_add_address":"Add a new address","store_add_address_btn":"Add address","store_delete_button":"Delete","store_billing_address":"Billing Address","store_email_taken":"This email address is already associated with an account. If this account is yours, you can reset your password.","store_user_notfound":"We cant find a user with that e-mail address.","common_buy_this_image":"BUY THIS IMAGE","common_cart_remove":"Remove","common_cart_add":"Add","store_cart_price":"Price","shipping_rate":"Shipping Rate","instructions":"Instructions","same_as_shipping":"Same as Shipping Address","store_shipping_calculation":"Calculated at next step","store_account_disabled":"Account has been disabled. Please contact site owner.","store_order_history":"Order History","store_order":"Order","store_payment_status":"Payment Status","store_fulfillment_status":"Fulfillment Status","store_neworder":"Unfulfilled","common_search_results":"Search Results for","search_products_found":"Products Found","search_images_found":"Images Found","search_posts_found":"Posts Found","search_pages_found":"Pages Found","store_status_paid":"Paid","store_status_unpaid":"Unpaid","store_credential_error":"Invalid email\/password","store_email_exist":"The email has already been taken","store_reset_password_subject":"You are receiving this email because we received a password reset request for your account.","store_reset_password_btn":"Reset Password","store_password_link":"This password reset link will expire in","store_password_link_desc":"If you did not request a password reset, no further action is required.","store_email_regards":"Regards,","store_resetbtn_desc":"If you are having trouble clicking the Reset Password button, copy and paste the URL below into your web browser:","store_right_reserve":"All rights reserved.","store_email_subject":"Reset Password Notification.","billing_fields_required":"Please enter all required fields in the billing address.","collaborator_exist":"To accept this invitation, login in your Pixpa account.","collaborator_exist_login":"Accept and Login","collaborator_not_exist":" To accept this invitation, create your user account on Pixpa.","collaborator_new_signup":"Create User Account","collaborator_link_expire":"This invitation will expire in 7 days.","invitation_for":"Invitation from","invite_access":"has invited you to create your user account to access","invite_accepted":"Congrats, user has accepted the invitation.","invite_declined":"User has declined the invitation.","manage_users_cta":"Manage Users and Permissions","proofing_download_alert":"The downloaded image will open in a new window. Press and hold the image for the option to save.","proofing_welcome":"Welcome","abandoned_cart_subject":"You have items waiting in your cart","proofing_refunded":"REFUNDED","common_store_on_hold":"On Hold","common_store_fulfilled":"Fulfilled","common_checkout_please_select":"Please select this checkbox","common_checkout_something_wrong":"Something went wrong; please review your cart to proceed.","common_checkout_taxes_shipping_calculated":"Taxes and shipping calculated at checkout","store_cart_remove":"Remove","proofing_favoritepage_has_shared":"has shared his\/her favorite photos with you.","proofing_favoritepage_view":"VIEW FAVORITES","proofing_favoritepage_genrated":"This is a system generated message. Please do not reply to this email.","checkout_common_error_occurred":"Error Occurred while placing your order. Please contact site owner.","common_file_not_found":"File Not Found","common_enter_fields":"Please enter all required fields","common_sharepage_view_gallery":"View Gallery","coupon_valid_for_ecom":"This coupon code is applicable on ecommerce galleries product only","coupon_valid_for_store":"This coupon code is applicable on store product only","common_blog_read_more":"Read More","list_created":"Favourite List Created","list_cleared":"Favourtie List Cleared","last_favourites":"Last Favourites List can\u2019t be deleted","store_payment_by_razorpay":"Razorpay"};
      // Create the measurement node
      var scrollDiv = document.createElement("div");
      scrollDiv.className = "scrollbar-measure";
      document.body.appendChild(scrollDiv);
      // Get the scrollbar width
      scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      // Delete the DIV
      document.body.removeChild(scrollDiv);
      if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
      }
      Globalthemes.YoutubeApi();
      Globalthemes.keyDownBtn();
      //back to top scroller
      Globalthemes.WindowScroll();
      // $(window).load(function () {
      // $(document).ready(function (){
        // setTimeout(function() {

          var playerReady = false
          window.onYouTubeIframeAPIReady = function() {
            playerReady = true;
            $.each($('.slide_iframes'), function( key, value ) {
              window.players[window.players_list[key]] = new YT.Player(window.players_list[key], {
                height: '390',
                width: '640',
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
              });
            });
          }

          function onPlayerReady(event) {
            //do whatever you want here. Like, player.playVideo();  
            // window.players[event.target.a.id].setVolume(80);
            // window.players[event.target.a.id].playVideo();
            event.target.setVolume(100);
            event.target.playVideo();
          }

          function onPlayerStateChange(event) {
            // window.players[event.target.a.id].playVideo();
            // window.players[event.target.a.id].mute();
            // if(event.data === 1) {
              event.target.playVideo();
              event.target.mute();
            // }
            
          }
          var onCallYouTubeAutoPlay = function () {
            window.players_list = [], window.players = new Array();
            $.each($('.slide_iframes'), function( key, value ) {
              window.players_list.push($(value).attr('id'));
            });            
            if(playerReady){
              onYouTubeIframeAPIReady();
            }

            var fileref=document.createElement('script');
            fileref.setAttribute("type","text/javascript");
            fileref.setAttribute("async","");
            fileref.setAttribute("src","https://www.youtube.com/iframe_api" );
            // setTimeout(()=>{document.getElementsByTagName("body")[0].appendChild(fileref);},500);
            document.getElementsByTagName("body")[0].appendChild(fileref);
          }
          // onCallYouTubeAutoPlay();
        // }, 500);
        
      // });

      $(document).ready(function (){
        $('.js-before_after_slider').find('img').removeClass('js-lazyload');
        $('.js-before_after_slider').find('img').removeClass('lazyload');
        $('.js-lazyload').addClass('lazyload');
        // // $('.lazyload').css('background-image', '');
        $('.lazyload').attr('src', '');
        Common.GridAnimation();
        var resizedSignedImageUrl = "https://web-images-app.pixpa.com/";
        PhotoGalleryJs.getCommonResizedPhotos('.js-get-resized-image', resizedSignedImageUrl);

        // smooth scrolling anchor button tag
        $(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
              location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        });  
        
        var jsnoClient = 0;
        if(jsnoClient == 0){
          var announcementbar = 'mohit-nagaraj';
          Globalthemes.AnnouncementbarHeight(announcementbar);
        }

        if(userObject.isMobile == 1 || userObject.isTablet == 1){
          logouserClass = '.user-logo';
        } else {
          var logoIdealw = '400';
          if (logoIdealw == 0) {
            logouserClass = '.user-logo';
          } else{
            logouserClass = '.user-logo-custom';
          }
        }

        jQuery.fn.extend({
          ensureLoad: function(handler) {
              return this.each(function() {
                  if(this.complete) {
                      handler.call(this);
                  } else {
                      $(this).load(handler);
                  }
              });
            }
        });
        $('.is-wrapper img,.cover-image-wrapper img').ensureLoad(function() {
          $(this).siblings('.infinte-loader').fadeOut();
          // $(this).fadeIn();
        });
        ImageRightClickDisable();
        var body = document.getElementsByTagName("body");
        setTimeout( function (){
          body[0].className = body[0].className + " body-to-show";
        },50);      
      });

      // global store and proofing js start
      
    </script>

    
    <script type="text/javascript">
  function ImageRightClickDisable () {
    //Events to Stop Right Click and Drag and Mobile Hold
    $(this).bind("contextmenu", function (e) {
      if("1")
        e.preventDefault();
    });

    $(document).bind('keydown', function(event) {
      const {ctrlKey, shiftKey, metaKey, altKey, keyCode} = event;
      const isImageProtectionEnabled = ("1") &&
        ((event.which === 123) || 
        (metaKey && altKey && keyCode === 85) || 
        (ctrlKey && keyCode === 85) || 
        (metaKey && altKey && keyCode === 74) || 
        (ctrlKey && keyCode === 74 && shiftKey) || 
        (metaKey && keyCode === 83) || 
        (ctrlKey && keyCode === 83));

      if (isImageProtectionEnabled) {
        event.preventDefault();
      }

      if (ctrlKey) {
        if (keyCode === 85 || keyCode === 83 || keyCode === 65) {
          return false;
        } else if (shiftKey && (keyCode === 73 || keyCode === 74)) {
          return false;
        }
      } else if (metaKey && altKey) {
        if (keyCode === 73 || keyCode === 74 || keyCode === 85 || keyCode === 83 || keyCode === 65) {
          return false;
        }
      }
    });

    $(this).on('mousedown', function (event) {
      if(event.button==2) {
        let siblingImage = 0;
        if (event.target.tagName != 'IMG') {
          siblingImage = $(event.target).siblings('img');
        }

        if( event.target.tagName == 'IMG' || siblingImage.length > 0) {
          if("1") {
            var top = event.pageX;
            var left = event.pageY;
            $('.image-protection').remove();
            $('html').append('<div class="image-protection"> &copy Copyright Mohit</div>');
            $('.image-protection').css({
              left: top+10,
              top: left+10,
              opacity: 1,
            });
            setTimeout( function (){
              $('.image-protection').css({
              opacity: 0
              });
            }, 1000);
            return false;
          }
        }
      }
    });

    // To Stop Drag for images and Taphold on Touch devices
    $('body').on('dragstart', 'img', function(e){ return false; });
    $('body').on("taphold", function(){ return false; });

    if("1") {
      document.body.style.webkitTouchCallout='none';
    }
  }
</script>
    

          <link rel="stylesheet" href="./Mohit_files/focuspoint.css">      
      <script src="./Mohit_files/jquery.focuspoint.js.download" defer=""></script>
        <script type="text/javascript-template" id="cart-item-template">
      <div class="cart-item-list js-cart-item-list" data-optionlabel="" data-productid="">
                  <div class="jcrop-img-view crop-image-view" data-x="" data-y="" data-h="" data-w="" data-aspx="" data-aspy="">
            <img class="cart-item-image" src=""/>
          </div>
                <div class="product-details">
          <div class="cart-item-tl">
            <span class="cart-item-title"></span>
            <br>
            <span class="cart-item-label"></span>            
                          <span class="crop-image js-crop-image fl-cart-desktop-show" data-src="">EDIT CROP</span>
                      </div>
                      <span class="crop-image js-crop-image fl-cart-mobile-show" data-src="">EDIT CROP</span>
                    <input type="text" value="" data-type="" data-product_type="" data-title="" data-maxlimit="" data-prevvalue="" class="cart-item-quantity js-inside-cart-quantity"/>
          <span class="cart-item-price js-cart-item-price"></span>
        </div>
        <span class="cart-item-close js-cart-item-remove menu-icon"> <svg viewBox="0 0 448 512"><use xlink:href="#item-delete-pixpa-icon" width="448" height="512"></use></svg></span>
      </div>
    </script>
    <link rel="stylesheet" href="./Mohit_files/focuspoint.css">
<link rel="stylesheet" href="./Mohit_files/flexslider.css">
<link rel="stylesheet" href="./Mohit_files/before_after_slider.css">
<script src="./Mohit_files/jquery.focuspoint.js.download" defer=""></script>
<script src="./Mohit_files/flexslider.js.download" defer=""></script>
<script src="./Mohit_files/before_after_slider.js.download" defer=""></script>

<script src="./Mohit_files/custompage.js.download"></script>
<script language="javascript">
$(document).ready(function() {
  var coverDesignTrue = "";
  function dynamicImg() {
    $('.js-dynamic-component-img').each(function(){
      containerW = $(this).parent().width();
      $(this).width(containerW);
      $(this).height(containerW/1.5);
    });
  }

  dynamicImg();
  $(window).resize(function() {
    dynamicImg();
  });
  function unveilIEImages() {
    //var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');
    if ((old_ie > -1) || (new_ie > -1)) {
      $('.lazyload').each(function( i,v ) {
        // console.log('IE detected')
        lazySizes.loader.unveil(this);
      });
    }
  }

  unveilIEImages();
  $('.lazyload .lazyloading .lazyloaded').focusPoint();
  

  $('.is-arrow-down a').click(function (e) {
    if ($(this).parents(".is-section").nextAll('div:not(.is-hidden)').html()) { /* .hidden class can be used as an exception */
      $('html,body').animate({
          scrollTop: $(this).parents(".is-section").nextAll('div:not(.is-hidden)').offset().top - parseInt($('.is-wrapper').css('padding-top')) /* + 1 Adjustment due to topbar height*/
      }, 800);
    }
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  });

  // // $('.lazyload').css('background-image', '');
  $('.lazyload').attr('src', '');
  $('.store-grid-item').each(function() {
    var gridHeight = $(this).height();
    var gridWidth = $(this).width();
    $(this).height(gridWidth/2);
    $(this).height(gridWidth);
  });

  if ($.trim($('.is-wrapper').html()).length <= 350 ) {
    $('.is-wrapper').parent().parent('.full-height-body-container').find('.stage-spacing').removeClass('stage-spacing-contentbox')
  };

  $('.inner').css('margin-left', '0%');
  $('.inner').css('display', 'inline-block');
  $('.form-snippit-submit').on('click', function(event) {
    if($(event.target).hasClass('form-snippit-2'))
      var val = $(event.target).parents('form').children().children('input, textarea');
    else
      var val = $(event.target).siblings('input, textarea');

    var name0 = val[0].name;
    var value0 = val[0].value;
    var name1 = val[1].name;
    var value1 = val[1].value;
    var name2 = val[2].name;
    var value2 = val[2].value;
    if (val[3] != undefined){
      var name3 = val[3].name;
      var value3 = val[3].value;
    }
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    if (value0 == '' || value1 == '' || value2 == '' || value3 == '') {
      alert('Please fill all fields.');
      return false;
    } else {
      if(!validateEmail(value1)) {
        alert('Please enter a valid Email');
        return false;
      }
    };

    $(event.target).text('Sending...');
    $(event.target).prop('disabled', true);
    grecaptcha("6Ld1L6kdAAAAAFKzULwN6HL9mbTmYzi-kxGXwbPe", function(token) {
      $.ajax({
        data:{name0:name0, value0:value0, name1:name1, value1:value1, name2:name2, value2:value2, name3:name3, value3:value3, 'g_captcha_token':token, '_token':'94aRFO13s9308MaAIQLKECpb1dIPn7cj9SAPF8FV'},
        type: 'POST',
        url: '/custom-page-form',
      })
      .done(function(data) {
        $(event.target).parent().append('<span class="js-sendmail-thank-you" style="font-size:12px;letter-spacing: 0.1em;text-transform: uppercase;"> &nbsp; &nbsp; Thank you for contacting. </span>');
        $('.form-snippit-submit').text('Send');
        $('.form-snippit-submit').prop('disabled', false);
        $('#contact-form input[type="text"],#contact-form textarea[name=message]').val('');
        setTimeout(function() {
          $('#contact-form span').fadeOut();
          $('#contact-form .js-sendmail-thank-you').remove();
        }, 2000);
      });
    });  
  });

  $('.active-label').on('click', function(){
    $('.active-label').removeClass('active');
    $(this).addClass('active');
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',$(this).data('mlv'));
  });

  $('.ctrl-prev-6').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "100")
      valueToSet = "-500";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });
  $('.ctrl-next-6').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "-600")
      valueToSet = "0";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });

  $('.ctrl-prev-5').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "100")
      valueToSet = "-400";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });
  $('.ctrl-next-5').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "-500")
      valueToSet = "0";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });

  $('.ctrl-prev-4').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "100")
      valueToSet = "-300";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });
  $('.ctrl-next-4').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "-400")
      valueToSet = "0";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });

  $('.ctrl-prev-3').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "100")
      valueToSet = "-200";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });
  $('.ctrl-next-3').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "-300")
      valueToSet = "0";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });

  $('.ctrl-prev-2').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "100")
      valueToSet = "-100";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });
  $('.ctrl-next-2').on('click', function(){
    var valueToSet = 0;
    valueToSet = parseInt($(this).data('mlv'))+parseInt($(this).parent().siblings('#slides').find('.inner')[0].style.marginLeft);
    if( valueToSet == "-200")
      valueToSet = "0";
    $(this).parent().siblings('#slides').find('.inner').css('margin-left',valueToSet+'%');
  });

  if(window.innerWidth < 1024){
    var newHeight=$(window).height()+70;$(".cover-banner-img > img, .bcgx").css("height",newHeight);
    
    $('.bcg').each(function() {
      $(this).css({
        'background-position': ''
      })
    });
  }

  $(".form-newsletter").on('submit',function(){
    $(this).find('.js-newsletter-submit-btn').trigger("click");
    return false;
  });

  $('.js-newsletter-submit-btn').on('click', function(event) {
    var val = $(this).parents('.form-newsletter').find('input').val();
    var email = val;
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    var emailvalidate = $(this).parents('.form-newsletter').find('input').val();
    if (validateEmail(emailvalidate)) {
    } else {
      alert('Please enter a valid Email');
      return false;
    }

    $(event.target).text('Sending...');
    $(event.target).prop('disabled', true);

    $.ajax({
      data:{'email': email, '_token': '94aRFO13s9308MaAIQLKECpb1dIPn7cj9SAPF8FV' },
      type: 'POST',
      url: '/newsletter',
    })
    .done(function(data) {      
      $(event.target).parent().parent().append('<span class="sucess-fadeout" style="font-size:12px;letter-spacing: 0.1em;text-transform: uppercase;margin: 10px; display:inline-block"> &nbsp; &nbsp;'+(typeof window.labels != 'undefined' ? window.labels.common_thanks_for_subscribing : 'Thank you for subscribing.')+'</span>');
      $('.js-newsletter-submit').text('Subscribe');
      $('.js-newsletter-submit').prop('disabled', false);
      $('.form-newsletter input').val('');
      setTimeout(function() {
        $('.form-newsletter .sucess-fadeout').remove();
        $(event.target).text('Subscribe');
        $(event.target).prop('disabled', false);
      }, 2000);
    });
  });

  if( parseInt(coverDesignTrue ))
    Cover_Design.init();

  $('.image-focus-point').focusPoint();
  $('.slider-image').focusPoint();
  // custom page video start
  $('.js-custom-video-iframe-btn').on('click', function() {
    var iframesrc = $(this).attr('data-iframe');
    $(this).parents('.is-section').find('.js-custom-video-content iframe').attr('src', iframesrc);
    $(this).parents('.is-section').find('.js-custom-video-content').fadeIn();
  });

  $('.js-custom-video-iframe-close').on('click', function() {
    $(this).parent().hide();
    $(this).parent().find('iframe').attr('src', '');
  });

  $.each($('.is-section'), function(key, value ) {
    var mobile_padding = $(this).attr('data-padding_mobile');
    var desktop_padding = $(this).attr('data-padding_desktop');    
    // border value start
    var desktop_bsize = $(this).attr('data-bsize');
    var mobile_bsize = $(this).attr('data-bmobilesize');
    var border_style = $(this).attr('data-bstyle');
    
    var bordertop = $(this).attr('data-btop');
    var borderright = $(this).attr('data-bright');
    var borderleft = $(this).attr('data-bleft');
    var borderbottom = $(this).attr('data-bbottom');

    var border_color = $(this).attr('data-bcolor');
    if($(this).hasClass('is-bordercolor-custom')){
      border_color = $(this).attr('data-bcolor');
    } else {
      if($(this).hasClass('is-bordercolor-background')){
        border_color = $('.js-tabBoxColor-input-btn').attr('data-background')
      }
      if($(this).hasClass('is-bordercolor-neutral')){
        border_color = $('.js-tabBoxColor-input-btn').attr('data-neutral')
      }

      if($(this).hasClass('is-bordercolor-accent')){
        border_color = $('.js-tabBoxColor-input-btn').attr('data-accent')
      }

      if($(this).hasClass('is-bordercolor-darkaccent')){
        border_color = $('.js-tabBoxColor-input-btn').attr('data-darkaccent')     
      } 

      if($(this).hasClass('is-bordercolor-textcolor')){
        border_color = $('.js-tabBoxColor-input-btn').attr('data-textcolor')
      }      
    }

  

    if (mobile_padding === undefined) {
      mobile_padding = '6 6'
    }
    if (desktop_padding === undefined) {
      desktop_padding = '0 0 0'
    }

    $(this).css({
      'padding' : ''
    });

    if( window.innerWidth >= 1025) {
      if(desktop_padding != '' && desktop_padding != '0 0 0'){
          $(this).css({
          'padding-top' : desktop_padding.split(' ')[0]+'vw',
          'padding-bottom' : desktop_padding.split(' ')[1]+'vw',
          'padding-left' : desktop_padding.split(' ')[2]+'vw',
          'padding-right' : desktop_padding.split(' ')[2]+'vw',
        });
      }

      

      if ($(this).hasClass('is-section-border')) {
        if (bordertop == 'yes') {
          if ($(this).find(".is-overlay-bg").length > 0) {
            $(this).find('.is-overlay').css({
              'border-top': ''+desktop_bsize +'px ' +border_style +' ' + border_color
            });
          } else{
            $(this).find('.is-boxes-fit2width-container').css({
              'border-top': ''+desktop_bsize +'px ' +border_style +' ' + border_color
            });
          }
        }

        if (borderright == 'yes') {
          if ($(this).find(".is-overlay-bg").length > 0) {
            $(this).find('.is-overlay').css({
              'border-right': ''+desktop_bsize +'px ' +border_style +' ' + border_color
            });
          } else{
            $(this).find('.is-boxes-fit2width-container').css({
              'border-right': ''+desktop_bsize +'px ' +border_style +' ' + border_color
            });
          }
        }

        if (borderleft == 'yes') {
          if ($(this).find(".is-overlay-bg").length > 0) {
            $(this).find('.is-overlay').css({
              'border-left': ''+desktop_bsize +'px ' +border_style +' ' + border_color
            });
          } else{
            $(this).find('.is-boxes-fit2width-container').css({
              'border-left': ''+desktop_bsize +'px ' +border_style +' ' + border_color
            });
          }
        }

        if (borderbottom == 'yes') {
          if ($(this).find(".is-overlay-bg").length > 0) {
            $(this).find('.is-overlay').css({
              'border-bottom': ''+desktop_bsize +'px ' +border_style +' ' + border_color
            });
          } else{
            $(this).find('.is-boxes-fit2width-container').css({
              'border-bottom': ''+desktop_bsize +'px ' +border_style +' ' + border_color
            });
          }
        }
      }

      $('.is-setion.is-section-mobile_only').attr('id', '');

    } else {
      $('.is-setion.is-section-desktop_only').attr('id', '');

      if($(this).hasClass('is-section-height-mobile-auto')){
        if($(this).hasClass('is-box-2column-container')){
            $(this).find('.is-box-2column').css({
            'padding-top' : mobile_padding.split(' ')[0]+'vmax',
            'padding-bottom' : mobile_padding.split(' ')[1]+'vmax',
          });
        } else {
            $(this).css({
            'padding-top' : mobile_padding.split(' ')[0]+'vmax',
            'padding-bottom' : mobile_padding.split(' ')[1]+'vmax',
          });
        }
      }

      if ($(this).hasClass('is-section-border')) {
        if (bordertop == 'yes') {
          if ($(this).find(".is-overlay-bg").length > 0) {
            $(this).find('.is-overlay').css({
              'border-top': ''+mobile_bsize +'px ' +border_style +' ' + border_color
            });
          } else{
            $(this).find('.is-boxes-fit2width-container').css({
              'border-top': ''+mobile_bsize +'px ' +border_style +' ' + border_color
            });
          }
        }

        if (borderright == 'yes') {
          if ($(this).find(".is-overlay-bg").length > 0) {
            $(this).find('.is-overlay').css({
              'border-right': ''+mobile_bsize +'px ' +border_style +' ' + border_color
            });
          } else{
            $(this).find('.is-boxes-fit2width-container').css({
              'border-right': ''+mobile_bsize +'px ' +border_style +' ' + border_color
            });
          }
        }

        if (borderleft == 'yes') {
          if ($(this).find(".is-overlay-bg").length > 0) {
            $(this).find('.is-overlay').css({
              'border-left': ''+mobile_bsize +'px ' +border_style +' ' + border_color
            });
          } else{
            $(this).find('.is-boxes-fit2width-container').css({
              'border-left': ''+mobile_bsize +'px ' +border_style +' ' + border_color
            });
          }
        }

        if (borderbottom == 'yes') {
          if ($(this).find(".is-overlay-bg").length > 0) {
            $(this).find('.is-overlay').css({
              'border-bottom': ''+mobile_bsize +'px ' +border_style +' ' + border_color
            });
          } else{
            $(this).find('.is-boxes-fit2width-container').css({
              'border-bottom': ''+mobile_bsize +'px ' +border_style +' ' + border_color
            });
          }
        }
      }

    }
  });
  
  // video height full width
  if ($('.is-section').hasClass('js-video-wrapper-full')) {
    $.each($('.js-video-wrapper-full iframe'), function(key, value ) {
      var fullheight = (window.innerHeight * $(this).parents('.js-video-wrapper-full').attr('data-fullheight')) / 100;
      var secheight = fullheight;
      if( window.width/1.77 < parseInt(secheight)) {
        $(this).width((parseInt(secheight)*1.77)+15);
        $(this).height(parseInt(secheight));
        $(this).addClass('height-fix');
      } else {
        $(this).height(window.innerWidth/1.77);
      }
    });
  }
  // custom page video end

  // parallax slider in mobile
  // if(window.innerWidth < 768){
  //   $.each($('.is-section'), function(key, value ) {
  //     if($(this).find('.is-overlay-bg').hasClass('parallaxslider')){
  //       $(this).find('.is-overlay-bg').css({
  //         'background-position': 'center'
  //       })
  //     }
  //   });
  // }
  $('.js-video-snippet-btn').unbind('click');
  $('.js-video-snippet-btn').on('click', function() {
    $(this).parents('.video-snippet-img').hide();
    var iframesrc = $(this).attr('data-iframe');    
    $(this).parents('.video-snippet-img').siblings('.js-snippet-video-content').find('iframe').attr('src', iframesrc);
    $(this).parents('.video-snippet-img').siblings('.js-snippet-video-content').fadeIn();
  });
});
</script>

<script type="text/javascript">
  $(document).ready(function (){
    var id = "3990096067733016";
    var ins_token = "";
    var insta_image = '';
        function insg_new(data){
      var instagramClass = $('#instagram-extfooter-contentbox');
      var instagramClassnew = $('#instagram-extfooter-contentbox-2');
      $( ".bcr_ins_gallery-contentbox" ).empty();

      if ($('.is-wrapper').find(instagramClass).length == 1 ) {
        var imgcount = $(instagramClass).attr('data-count');
        insg(data, imgcount, instagramClass)
      }
      if ($('.is-wrapper').find(instagramClassnew).length == 1) {
        var imgcount = $(instagramClassnew).attr('data-count');
        insg(data, imgcount, instagramClassnew)
      }
    }
    insg_new(insta_image)

    function insg(data, imgcount,instagramClass){
      $.each(data, function(i, item) {
        var title = '';
        temp = $("#instagram-contentbox").html();
        temp = $(temp)[0];
        $(temp).find('.ins_popup').attr('href', 'javascript:void(0);');
        $(temp).find('.ins_popup').attr('title', title);
        $(temp).find('.ins_popup').find('img').attr('src',  item.standard_resolution_url.replace("/\\/","/"));
        $(temp).find('.ins_popup').find('img').attr('title', title);
        $(temp).find('.link-url').attr('href', item.link);
        $(temp).find('.js-plus-icon a').attr('title', title);
        $(instagramClass).find('.bcr_ins_gallery-contentbox').append(temp);
        if(i == imgcount-1) {
          return false;
        }
      });
    };
    if (id != '') {
      setTimeout(function() {
        $('.js-plus-icon').on('click', function(){
          $(this).siblings('.ins_popup').trigger('click');
        });
      },1500);
    }
  });
</script>
<script type="text/javascript-template" id="instagram-contentbox">
  <div class="bcr_unit_ins bcr_ins_box " >
    <a href="" class="ins_popup" rel="ins_gallery" title=""><img data-fixed="1" src="" alt="" title=""></a>
    <div class="both-links link-url">
      <a href="" target="_blank" class="both-links link-url">
        <span class="menu-svg-icon"><svg viewBox="0 0 512 512"><use xlink:href="#link-pixpa-icon" width="512" height="512"></use></svg></span>
      </a>
    </div>
    <div class="both-links js-plus-icon plus-icon">
      <a href="javascript:void(0)" class="menu-svg-icon" rel="" title="">
        <svg viewBox="0 0 448 512"><use xlink:href="#plus-pixpa-icon" width="448" height="512"></use></svg>
      </a>
    </div>
  </div>
</script>
<div class="cover-video-wrapper js-cover-video-wrapper">
  <div class="cover-close js-cover-close menu-icon">
    <svg viewBox="0 0 320 512"><use xlink:href="#times-pixpa-icon" width="320" height="512"></use></svg>
  </div>
  <iframe src="./Mohit_files/saved_resource(1).html" frameborder="0" allowfullscreen=""></iframe>
</div>
<script src="./Mohit_files/pikaday-min.js.download" defer=""></script>
<script src="./Mohit_files/timepicker-min.js.download" defer=""></script>
<script src="./Mohit_files/moment-min.js.download" defer=""></script>
    <script type="text/javascript">
  window.userObject = {
    themeTemplate    : "themes-v2",
    fotomotoId       : "",
    IsSaleable       : "",
    headerLayout     : "4",
    headerType       : "standard",
    headerstickyNav  : "no",
    headerBypass     : "0",
    userId           : "743823",
    imageUrl         : "",
    themeName        : "skyline",
    currLinkTypeName : "custom-page",
    controls         : "show",
    controls_arrow   : "fixed",
    photofilename    : "no",
    zoom             : "false",
    onloadType       : "grid",
    gridLayout : "pinterest_grid",
    widthProperty  : "3",
    slideshowLayout  : "single_image",
    slideshowSpeed   : "1",
    slideshowTransition : "horizontal_swipe",
    slideshowFitmode  : "fit",
    slideshowAutoplay : "no",
    slideshowImageMode: "thumbnail",
    isMobile : "",
    isTablet : "",
    browserType: "", //Chrome / Firefox / Safari
    gaProfileId : "0",
    gaAnalytics : "",
    socialIcons : "header",
    shareWidget : "hide",
    userRole : "user",
    userName : "mohit-nagaraj",
    userWebsite : "http://mohit-nagaraj.pixpa.com",
    userEndDate : "2023-10-22 00:00:00",
    userImages : "",
    userPrGal : "50",
    siteLogo : "",
    siteTitle : "Mohit",
    siteDesignId : "268",
    siteStyleId : "270500",
    disqusShortname : "",
    bannerImage : "",
    featuredImage : "",
    lightboximg_size: "auto",
    watermarkVersionId: "0",
    resizedSignedImageUrl: "https://web-images-app.pixpa.com/",
    imgQuality: "80",
  }
  if(localStorage.debug)
    console.log(userObject);
</script>    <script src="./Mohit_files/jquery.Jcrop.js.download" defer=""></script>
                <link rel="stylesheet" href="./Mohit_files/lightslider.css">      
      <script src="./Mohit_files/lightslider.js.download" defer=""></script>
    
    
        
    
    
    
      <input type="hidden" class="js-lg-proofing-lable" data-sharetitle="Share">
    
        
        
    
    <script src="./Mohit_files/lg-all_blog.umd.js.download"></script>
    
    <script src="./Mohit_files/global-pagebuilder.js.download"></script>
    <!-- lightgallery plugins -->

<script type="text/javascript" src="./Mohit_files/pixpalg_v2.js.download"></script>
    
        
    <script src="./Mohit_files/loadcss.js.download" defer=""></script>
    <script src="./Mohit_files/captcha.js.download"></script>
  <script src="./Mohit_files/enterprise.js.download"></script>
  <style type="text/css">
    .padding-t0-mobileapp{
      padding-top: 0px;
    }
    .grecaptcha-badge{
      display: none;
    }
  </style>
  <script>
    $(document).ready(function() {
      var tokenajaxSitekey = '6Ld1L6kdAAAAAFKzULwN6HL9mbTmYzi-kxGXwbPe';
      recaptchaJs($('.js-captcha-form'), '6Ld1L6kdAAAAAFKzULwN6HL9mbTmYzi-kxGXwbPe');
      Captcha.Init();
      Captcha.tokenAjaxbtn(tokenajaxSitekey);
    })
  </script>
  <script type="text/javascript">
    recaptchaJs = function(form, sitekey) {
      $(form).submit(function (e) {
        var self = $(this);
        if ($(form).find('#g_captcha_token').val() == '') {
          e.preventDefault();
          grecaptcha(sitekey, function(token) {
            $(form).find('#g_captcha_token').val(token);
            $(self).submit();
          })
        }
      })
    }
  </script>
  <script type="text/javascript">
    grecaptcha = function(sitekey, closure) {
      grecaptcha.enterprise.ready(function() {
        grecaptcha.enterprise.execute(sitekey, {action: 'submit'}).then(function(token) {
          closure(token);
        });
      });
    }
  </script>

    
    <script type="text/javascript" src="./Mohit_files/photogallery.js.download"></script>
  <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"fa6bcccdab","applicationID":"752880254","transactionName":"b11UYkdUX0EHVRJbWVYXd1VBXF5cSXcWQmpwTEJGaXZeXBJECV5aXUpFan1aXFclWQhGRFdUWlNHdVZXEmQDVl9KXVVC","queueTime":0,"applicationTime":430,"atts":"QxpXFA9OTE8=","errorBeacon":"bam.nr-data.net","agent":""}</script>
  );
}

export default ContactForm;
