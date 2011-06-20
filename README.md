 jqVideoBox
===========
jqVideoBox - is jquery lightbox for videos from Youtube, Metacafe, Google Video, Dailymotion, Revver, Veoh, Vimeo, Smotri, Vkontakte, Rutube, Mail.ru, Qip.ru and custom flash.

jqVideoBox is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>

Main idea and concept mootools plugin videbox (http://videobox-lb.sourceforge.net/)

Requirements
------------
Jquery version required: 1.2.x - 1.6.0

SWFObject version required: v2.x

Usage
-----
To activate jqVideoBox:

    $("elem").jqvideobox();

Options
-------
 * width               - Width of the lightbox
 * height              - Height of the lightbox
 * animateCaption      - Enable/Disable caption animation
 * defaultOverLayFade  - Default overlay fade value
 * flvplayer           - Path to default flash player
 * getimage            - Get image from service
 * navigation          - Activate navigation
 * thumblin            - fetch thumbnails from thumbl.in service (getimage need to be active, activated by default) 


Changelog
---------
 - 1.5.3 added support for youtube html5 code
   added missing commas

 - 1.5.2 added support for gametrailers.com, myvideo.de, collegehumor.com, sevenload.com
 
 - 1.5.1 added support for smotri.com, vkontakte.ru(hash needed), rutube.ru, video.mail.ru, video.qip.ru
   thumbl.in support added, fetching thumbnails from thumbl.in
   
 - 1.5 added support for dailymotion.com, blip.tv, revver.com, veoh.com, vimeo.com
   added paging in specific group
   some minor fixes
   swfobject 2.x support added
  
 - 1.00 ported from mootools plugin videbox (http://videobox-lb.sourceforge.net/) to jquery