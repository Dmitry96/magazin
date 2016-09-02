(function() {
  Spree.disableSaveOnClick = function() {
    return ($('form.edit_order')).on('submit', function(e) {
      if (($(this)).data('submitted') === true) {
        return e.preventDefault();
      } else {
        ($(this)).data('submitted', true);
        return ($(this)).find(':submit, :image').removeClass('primary').addClass('disabled');
      }
    });
  };

  Spree.enableSave = function() {
    return ($('form.edit_order')).data('submitted', false).find(':submit, :image').attr('disabled', false).addClass('primary').removeClass('disabled');
  };

  Spree.ready(function($) {
    return Spree.Checkout = {};
  });

}).call(this);
