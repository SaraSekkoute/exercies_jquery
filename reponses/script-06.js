$(document).ready(function() {
    // Attacher un événement keypress à #f1
    $('#f1').on('keypress', function(event) {
        // Analyse de l'objet Event dans la console
        console.log(event);
        
        //L'attribut charCode de l'objet Event permet de récupérer le code du caractère. Faire en sorte que la div#out recopie le contenu de de #f1
        var charCode = event.charCode || event.keyCode;
        
       // Si le caractère est un chiffre
       if (charCode >= 48 && charCode <= 57) {
        // Ajouter le chiffre à #out
        var chiffre = String.fromCharCode(charCode);
        var texteFiltre = $('#f1').val().replace(/\D/g, '') + chiffre;
        $('#out').text(texteFiltre);
    }
    });

    // Attacher un événement keypress à #f2
    $('#f2').on('keypress', function(event) {
        // Récupérer le code du caractère
        var charCode = event.charCode || event.keyCode;
        
        // Si le caractère est un chiffre
        if (charCode >= 48 && charCode <= 57) {
            // Ajouter le chiffre à une chaîne temporaire
            var chiffre = String.fromCharCode(charCode);
            var temp =  $('#f2').val().replace(/\D/g, '') + chiffre;
            
            // Si la longueur de la chaîne est un multiple de 3
            if (temp.length % 3 == 0) {
                // Ajouter les trois derniers chiffres à #out
                $('#out').text( temp.slice(-3));
            }
        }
    });
});