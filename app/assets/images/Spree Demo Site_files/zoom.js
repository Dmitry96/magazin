(function() {
  var add_image_handlers, show_variant_images, update_variant_price;

  add_image_handlers = function() {
    ($('#main-image')).data('selectedThumb', ($('#main-image img')).attr('src'));
    ($('ul.thumbnails li')).eq(0).addClass('selected');
    ($('ul.thumbnails a')).on('click', function(event) {
      ($('#main-image')).data('selectedThumb', ($(event.currentTarget)).attr('href'));
      ($('#main-image')).data('selectedThumbId', ($(event.currentTarget)).parent().attr('id'));
      ($('#main-image')).data('index', ($(event.currentTarget)).parent().index());
      ($(this)).mouseout(function() {
        ($('ul.thumbnails li')).removeClass('selected');
        return ($(event.currentTarget)).parent('li').addClass('selected');
      });
      return false;
    });
    ($('ul.thumbnails li')).on('mouseenter', function(event) {
      ($('img.click-to-zoom')).attr('src', "/assets/zoom-5ca66cc538e664bbf2abe0e6a9bea35fd0b4c458c380af1375d593efafabc740.gif");
      return ($('#main-image img')).first().attr('src', ($(event.currentTarget)).find('a').attr('href'));
    });
    ($('ul.thumbnails li')).on('mouseleave', function(event) {
      ($('img.click-to-zoom')).attr('src', "/assets/zoom-5ca66cc538e664bbf2abe0e6a9bea35fd0b4c458c380af1375d593efafabc740.gif");
      return ($('#main-image img')).first().attr('src', ($('#main-image')).data('selectedThumb'));
    });
    ($('img.zoom-click')).on('click', function(event) {
      var index;
      index = ($('#main-image')).data('index');
      if (index == null) {
        index = 0;
      }
      ($('.fancybox'))[index].click();
      return event.preventDefault();
    });
    return ($('img.click-to-zoom')).on('click', function(event) {
      var index;
      index = ($('#main-image')).data('index');
      if (index == null) {
        index = 0;
      }
      ($('.fancybox'))[index].click();
      return event.preventDefault();
    });
  };

  show_variant_images = function(variant_id) {
    var currentThumb, newImg, thumb;
    ($('li.vtmb')).hide();
    ($('li.vtmb-' + variant_id)).show();
    currentThumb = $('#' + ($('#main-image')).data('selectedThumbId'));
    if (!currentThumb.hasClass('vtmb-' + variant_id) && !currentThumb.hasClass('tmb-all')) {
      thumb = $(($('ul.thumbnails li:visible')).eq(0));
      newImg = thumb.find('a').attr('href');
      ($('ul.thumbnails li')).removeClass('selected');
      thumb.addClass('selected');
      ($('#main-image img')).attr('src', newImg);
      ($('#main-image')).data('selectedThumb', newImg);
      return ($('#main-image')).data('selectedThumbId', thumb.attr('id'));
    }
  };

  update_variant_price = function(variant) {
    var variant_price;
    variant_price = variant.data('price');
    if (variant_price) {
      return ($('.price.selling')).text(variant_price);
    }
  };

  $(function() {
    ($('img.click-to-zoom')).attr('src', "/assets/zoom-5ca66cc538e664bbf2abe0e6a9bea35fd0b4c458c380af1375d593efafabc740.gif");
    add_image_handlers();
    if (($('#product-variants input[type="radio"]')).length > 0) {
      show_variant_images(($('#product-variants input[type="radio"]')).eq(0).attr('value'));
    }
    ($('#product-variants input[type="radio"]')).click(function(event) {
      show_variant_images(this.value);
      return update_variant_price($(this));
    });
    return ($('.fancybox')).fancybox();
  });

}).call(this);
