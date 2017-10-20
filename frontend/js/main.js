$(function(){
  $('.preview-add-button').click(function(){
      var form_data = {};
      form_data["id_colmena"] = $('.payment-form input[name="id_colmena"]').val();
      $.ajax({
				type: 'GET',
        contentType: 'application/json',
        crossDomain: true,
        url: 'http://10.126.89.30:3000/colmenas/' + form_data["id_colmena"],
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
      });
  });
});
