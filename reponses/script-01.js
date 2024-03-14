//  chemin relatif : reponses/script-01.js
// 
$(document).ready(function()
{
    //Modifier la couleur du texte de la première div (rouge)
    $("#ce div:first").css("color", "red");

    //Cloner la première et l'ajouter à la fin de la liste des div
    var value1 = $("#ce div:first").clone();
    $("#ce").append(value1);

   //Déplacer la dernière div et la mettre au début de la liste
   lastdiv=$('#ce div:last');
   lastdiv.detach().prependTo("#ce");
 
   //Créer une nouvelle div, l'ajouter à la fin de la liste et afficher dedans le nombre total des div de la liste (y compris celle ajoutée)
   var newdiv = $("<div>").text("le nombre total des div : " + $("#ce div").length);
   $("#ce").append(newdiv);

   //Parcourir toutes les div et y ajouter un numéro d'ordre 1, 2, ...
   $("#ce div").each(function (i) {
    $(this).text((i + 1) + " " +$(this).text());
  });



})