/*
 jqVideoBox 1.00
 - Jquery version required: 1.2.x, 1.3.x
 
 Changelog:
 
 - 1.00 ported from mootools plugin videbox (http://videobox-lb.sourceforge.net/) to jquery
 */
 
 /* Coded by: emposha <admin@emposha.com> */
/* Copyright: Emposha.com <http://www.emposha.com/> - Distributed under MIT - Keep this message! */
/*
 * initialWidth        - Initial width of the box
 * initialHeight       - Initial height of the box
 * defaultWidth        - Default width of the box
 * defaultHeight       - Default height of the box
 * animateCaption      - Enable/Disable caption animation
 * defaultOverLayFade  - Default overlay fade value
 * flvplayer  	       - Path to default flash player
 */
 
jQuery(
    function ($) 
    {
	    $.fn.jqvideobox = function (opt) 
	    {
    		return this.each(function()
			{
				function init()
		        {
		        	if ($("#lbOverlay").length == 0)
		        	{
			        	var _overlay = $(document.createElement("div")).attr({"id": "lbOverlay"}).click(closeMe);
			        	var _center = $(document.createElement("div")).attr({"id": "lbCenter"}).css({'width': options.initialWidth+'px', 'height': options.initialHeight+'px', 'display': 'none'});
			        	var _bottomContainer = $(document.createElement("div")).attr({"id": "lbBottomContainer"}).css('display', 'none');

			        	var _bottom = $(document.createElement("div")).attr('id', 'lbBottom');
						var _close = $(document.createElement("a")).attr({id: 'lbCloseLink', href: '#'}).click(closeMe);
						var _caption = $(document.createElement("div")).attr('id', 'lbCaption');
						var _number = $(document.createElement("div")).attr('id', 'lbNumber');
						var _clear = $(document.createElement("div")).css('clear', 'both');	
						
						var _prevlink = $(document.createElement("a")).attr({id: 'lbPrevLink', href: '#'}).click(prevVideo);
						var _nextlink = $(document.createElement("a")).attr({id: 'lbNextLink', href: '#'}).click(nextVideo);
						_bottom.append(_close).append(_caption).append(_number).append(_clear);
						_bottomContainer.append(_bottom);
			        	$("body").append(_overlay).append(_center).append(_bottomContainer).append(_prevlink).append(_nextlink);
		        	}
		        	
	        		overlay = $("#lbOverlay");
	        		center = $("#lbCenter");
	        		caption = $("#lbCaption");
	        		bottomContainer = $("#lbBottomContainer");
		        	prevlink = $("#lbPrevLink");
		        	nextlink = $("#lbNextLink");
		        	
		        	element.click(activate);
		        }
		        
		        function prevVideo()
		        {
		        	return false;
		        }
		        
		        function nextVideo()
		        {
		        	return false;
		        }
		        
		        function closeMe()
				{
						overlay.fadeTo("fast",0,function(){$(this).css('display','none')});
						center.css('display','none');
						bottomContainer.css('display', 'none');
						prevlink.css('display','none');
						nextlink.css('display','none');
						center.html('');
						return false;
				}
		        
		        function activate()
		        {
					setup(href);
					top = $(window).scrollTop() + (($(window).height() / 2) - (options.defaultHeight / 2));
					left= (($(window).width() / 2) - (options.defaultWidth / 2));
					center.css({'top': top + 'px', 'left':  left + 'px','display': 'none', 'background': '#fff url(css/loading.gif) no-repeat center', 'height': options.contentsHeight, 'width': options.contentsWidth});					
					overlay.css('display','block').fadeTo("fast",options.defaultOverLayFade);
					caption.html(title);
					center.fadeIn("slow",
						function()
						{
							insert();
						}
					);
					return false;
		        }
		        
		        function insert()
		        {
		        	center.css('background','#fff');
					flash ? so.write(center.attr("id")) : center.html(other) ;					
					bottomContainer.css({'top': (top + center.height() + 10) + "px", 'left': center.css('left'), 'width': options.contentsWidth+'px'});
					if (options.animateCaption)
					{
						bottomContainer.slideDown('slow');
					}
					else
					{
						bottomContainer.css('display','block');
					}
					//prevlink.css({'top': (top + (options.defaultHeight /2 )) + "px", 'display': 'block', 'left':  (parseInt(center.css('left'),10) + options.defaultWidth) + 'px'});
					//nextlink.css({'top': (top + (options.defaultHeight /2 )) + "px", 'display': 'block', 'left':  (parseInt(center.css('left'),10) - 53) + 'px'});
		        }
		        
		        function setup(sLinkHref)
		        {
		        	var aDim = rel.match(/[0-9]+/g);
		        	overlay.css({'top': $(window).scrollTop()+'px', 'height': $(window).height()+'px'});
					options.contentsWidth = (aDim && (aDim[0] > 0)) ? aDim[0] : options.defaultWidth;
					options.contentsHeight = (aDim && (aDim[1] > 0)) ? aDim[1] : options.defaultHeight;
					
					if (sLinkHref.match(/youtube\.com\/watch/i)) 
					{
				    	flash = true;
						var hRef = sLinkHref;
						var videoId = hRef.split('=');
						videoID = videoId[1];
						so = new SWFObject("http://www.youtube.com/v/"+videoID, "flvvideo", options.contentsWidth, options.contentsHeight, "0");
						so.addParam("wmode", "transparent");
					}
					else if (sLinkHref.match(/metacafe\.com\/watch/i)) 
					{
				      	flash = true;
						var hRef = sLinkHref;
						var videoId = hRef.split('/');
						videoID = videoId[4];
						so = new SWFObject("http://www.metacafe.com/fplayer/"+videoID+"/.swf", "flvvideo", options.contentsWidth, options.contentsHeight, "0");
						so.addParam("wmode", "transparent");
					}
					else if (sLinkHref.match(/google\.com\/videoplay/i)) 
					{
			      		flash = true;
						var hRef = sLinkHref;
						var videoId = hRef.split('=');
						videoID = videoId[1];
						so = new SWFObject("http://video.google.com/googleplayer.swf?docId="+videoID+"&hl=en", "flvvideo", options.contentsWidth, options.contentsHeight, "0");
						so.addParam("wmode", "transparent");
					}
					else if (sLinkHref.match(/ifilm\.com\/video/i)) 
					{
					  	flash = true;
						var hRef = sLinkHref;
						var videoId = hRef.split('video/');
						videoID = videoId[1];
						so = new SWFObject("http://www.ifilm.com/efp", "flvvideo", options.contentsWidth, options.contentsHeight, "0", "#000");
						so.addVariable("flvbaseclip", videoID+"&");
						so.addParam("wmode", "transparent");
					}
					else if (sLinkHref.match(/\.mov/i)) 
					{
						flash = false;
						if (navigator.plugins && navigator.plugins.length) 
						{
			          		other ='<object id="qtboxMovie" type="video/quicktime" codebase="http://www.apple.com/qtactivex/qtplugin.cab" data="'+sLinkHref+'" width="'+options.contentsWidth+'" height="'+options.contentsHeight+'"><param name="src" value="'+sLinkHref+'" /><param name="scale" value="aspect" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="bgcolor" value="#000000" /><param name="enablejavascript" value="true" /></object>';
			      		} 
			      		else 
			      		{
			        		other = '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="'+options.contentsWidth+'" height="'+options.contentsHeight+'" id="qtboxMovie"><param name="src" value="'+sLinkHref+'" /><param name="scale" value="aspect" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="bgcolor" value="#000000" /><param name="enablejavascript" value="true" /></object>';
			      		}
					}
					else if (sLinkHref.match(/\.wmv/i) || sLinkHref.match(/\.asx/i)) 
					{
						flash = false;
					 	other = '<object NAME="Player" WIDTH="'+options.contentsWidth+'" HEIGHT="'+options.contentsHeight+'" align="left" hspace="0" type="application/x-oleobject" CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6"><param NAME="URL" VALUE="'+sLinkHref+'"><param><param NAME="AUTOSTART" VALUE="false"></param><param name="showControls" value="true"></param><embed WIDTH="'+options.contentsWidth+'" HEIGHT="'+options.contentsHeight+'" align="left" hspace="0" SRC="'+sLinkHref+'" TYPE="application/x-oleobject" AUTOSTART="false"></embed></object>'
					}
					else if (sLinkHref.match(/\.flv/i)) 
					{
					 	flash = true;
					 	so = new SWFObject(options.flvplayer+"?file="+sLinkHref, "flvvideo", options.contentsWidth, options.contentsHeight, "0", "#000");
					}
					else 
					{
					  	flash = true;
						videoID = sLinkHref;
						so = new SWFObject(videoID, "flvvideo", options.contentsWidth, options.contentsHeight, "0");
					}
				}

		        var options = $.extend({				        
						initialWidth: 250,		// Initial width of the box (px)
						initialHeight: 250,		// Initial height of the box (px)
						defaultWidth: 425,		// Default width of the box (px)
						defaultHeight: 350,	// Default height of the box (px)
						animateCaption: true,	// Enable/Disable caption animation
						defaultOverLayFade: 0.8,	//Default overlay fade value
						flvplayer: 'swf/flvplayer.swf'
			        }, opt);
			    
			    //system vars
			    var overlay, center, caption, bottomContainer, so, flash, videoID, other, top;
			    var element = $(this);
			    var href = element.attr("href");
				var title = element.attr("title");
				var rel = element.attr("rel");

				//lets start it
		        init();
			});
		}
	}
);