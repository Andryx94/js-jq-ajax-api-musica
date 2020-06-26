$(document).ready(
  function() {
    // chiamata ajax per generazione singoli Album da array
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function (data) {
          generazioneAlbum(data.response);

          var genere = $(".select").val();
          var canzone = $(".cds-container .cd");

          canzone.each(function() {
            if ($(this).hasClass(genere)){
              $(this).removeClass("hidden")
            }
          })
        },

        error: function () {
          alert("E' avvenuto un errore. ");
        }
      }
    );    
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
