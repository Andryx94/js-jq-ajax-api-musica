$(document).ready(
  function() {
    // chiamata ajax per generazione singoli Album da array
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function (data) {
          generazioneAlbum(data.response);
        },

        error: function () {
          alert("E' avvenuto un errore. ");
        }
      }
    );

    //avvio funzione al cambio opzione select
    $(".select").change(function(){
      var genere = $(this).val();
      $(".cds-container .cd").hide();
      $(".cds-container .cd." + genere).show();
    })
  }
);

//FUNZIONE generazione Album
function generazioneAlbum(arrayCd){
  var source = $("#template").html();
  var template = Handlebars.compile(source);

  //genera singolo album da array
  for (var i = 0; i < arrayCd.length; i++){
    var singoloCd = arrayCd[i];
    var html = template(singoloCd);
    $(".cds-container").append(html);
  }
}
