jQuery(document).ready(function () {
/*

					jQuery.ajax({	
						type: 'POST',
						url: mycbgenie_image_ads_vars.ajaxadminurl,
						cache: false,		
						data: {
							action :  'mycbgenie_ajax_image_ads_action',
							//delete_or_resume	:	answer,
							//step: step
						},
						//dataType: "json",
						dataType:"html",
						success: function( response ) {	
						
							jQuery('#mcg_div').html(response);
				
						}//success
						}).fail(function(xhr, textStatus, errorThrown) {
							
									if ( window.console && window.console.log ) {
										
										console.log( xhr.responseText + textStatus + errorThrown  );
										alert('Error on update term update count! '+   xhr.responseText + textStatus + errorThrown  );
										return false;
									}
																		
						}); //ajax
					
	return false;
	*/

});
function load_image_ad_script(rand_div_number, kws, rows, cols, im_width, show_product_descr,show_read_more_btn,default_font_family,fill_color,border_color,link_color,ref,height_adjustment,hide_footer){


	/*var cs_pluginURL = jQuery("script[src]")
        .last()
        .attr("src").split('?')[0].split('/').slice(0, -2).join('/');
	
	*/
	
	console.log('rows : '+ rows + ', cols: '+ cols);
	var cs_pluginURL = mycbgenie_url.pluginsUrl;

    jQuery.ajax({
        url: cs_pluginURL+'/image_ad_ajax.php',
		type: 'POST',
        cache: false,
        dataType: "html",
		data: {
			kws 				: 	kws,
			rows 				: 	rows,			
			cols 				: 	cols,
			im_width			:	im_width,
			ref					: 	ref,
			show_product_descr	:	show_product_descr,
			show_read_more_btn	:	show_read_more_btn,
			default_font_family	:	default_font_family,
			fill_color			:	fill_color,
			border_color		:	border_color,
			link_color			:	link_color,
			height_adjustment	:	height_adjustment,
			hide_footer			:	hide_footer
		},
        success: function (data) {
			   //console.log((data)); 
            jQuery('.mcg_div_'+rand_div_number).html(data);
        },
        error: function (data) {
            console.log('MYCBGENIE Failed to load external content');
        }
    });
	
	return false;
}