(function ($) {
  'use strict';
  $.mailchimpSingleOptIn = {
    init: function (selector, options) {
      $(selector).mailchimpSingleOptIn(options);
    }
  };
  $.fn.mailchimpSingleOptIn = function (options) {
    $(this).each(function(i, elem) {
      let form = $(elem);
      let email = form.find('input[type=email]');
      let settings = $.extend({
        onSubmit() {},
        onError() {},
        onSuccess() {}
      }, options);
      form.attr('novalidate', 'true');
      email.attr('name', 'email');
      form.submit(function (e) {
        e.preventDefault();
        let data = { list_id: settings.listID };
        let dataArray = form.serializeArray();
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value;
        });
        settings.onSubmit();
        $.ajax({
          method: 'POST',
          url: settings.url,
          data: data,
          success: settings.onSuccess,
          error: settings.onError
        });
      });
    });
    return this;
  };
})(jQuery);
