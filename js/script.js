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
      var canzone = $(".cds-container .cd");

      //leggo tutte le canzoni, resetto la classe hidden e la ri-aggiungo se non ha il genere selezionato
      canzone.each(function() {
        $(this).removeClass("hidden")
        if (!$(this).hasClass(genere)){
          $(this).addClass("hidden")
        }
      })
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
