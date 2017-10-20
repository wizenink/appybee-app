$(function(){
  $('.preview-add-button').click(function(){
      var form_data = {};
      form_data["id_colmena"] = $('.payment-form input[name="id_colmena"]').val();
      $.ajax({
				type: 'GET',
        contentType: 'application/json',
        crossDomain: true,
        url: 'http://10.126.89.30:3000/colmenas/' + form_data['id_colmena'],
        success: function(data) {
            var html = '';
            for(var i = 0; i < data.length; i++){
              html += '<tr>' +
                      '<td>' + data[i].idCOLMENA + '</td>'+
                      '<td>' + data[i].PESO + '</td>'+
                      '<td>' + data[i].NINDIVIDUOS + '</td>'+
                      '<td>' + data[i].NITROGENO + '</td>'+
                      '<td>' + data[i].PH + '</td>'+
                      '<td>' + data[i].TEMPERATURA + '</td>'+
                      '<td>' + data[i].ESTADO + '</td>'+
                      '</tr>';
            }
              
            $('#table tbody').html(html);
            $(".results").show()
            
        }
      });
  });
});
