//  Chemin relatif : reponses/script-03.js
//  Chemin relatif : files/user.json

$(document).ready(function(){
    // Créer une balise <pre> et l'ajouter dans la div
    var preElement = $('<pre>');
    $('#ce').append(preElement);

    // Ajouter la classe CSS «language-javascript» à la balise <pre>
    preElement.addClass('language-javascript');

    // Créer une balise <code> et l'ajouter dans la balise <pre>
    var codeElement = $('<code>');
    preElement.append(codeElement);

    // Faire une requête AJAX pour récupérer le fichier user.json sous format texte
    $.ajax({
        // URL de la requête
        url: "files/users.json",
        // Type de requête
        type: "GET",
        // Type de données attendu
        dataType: "text",
        // Fonction exécutée si la requête réussit
        success: function(response) {
            // Ajouter le contenu du fichier dans la balise <pre>
            codeElement.text(response);
            // Appeler la méthode «Prism.highlightAll()» pour colorer la syntaxe
            Prism.highlightAll();
        },
    
    });
});
