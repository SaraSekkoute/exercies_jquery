$(document).ready(function () {
    var textarea1 = document.getElementById('f1');
    var output1 = document.getElementById('out');

    // Attacher un gestionnaire d'événements keypress à la zone de texte #f1
    textarea1.addEventListener('keypress', function(event) {
        // Code à exécuter lorsque l'événement keypress est déclenché
        console.log('Touche pressée : ' + event.key );
        var charCode = event.charCode || event.keyCode; // Utiliser event.keyCode pour la compatibilité avec certains navigateurs
        
        // Filtre pour ne garder que les chiffres
        if (charCode >= 48 && charCode <= 57) {
            var charStr = String.fromCharCode(charCode);
            output1.textContent += charStr;
        }
    });

    var textarea2 = document.getElementById('f2');
    var output2 = document.getElementById('out');

    // Créer une variable pour stocker les caractères saisis dans #f2
    var characters = "";

    // Attacher un gestionnaire d'événements keypress à la zone de texte #f2
    textarea2.addEventListener('keypress', function(event) {
        // Code à exécuter lorsque l'événement keypress est déclenché
        console.log('Touche pressée : ' + event.key );
        var charCode = event.charCode || event.keyCode; // Utiliser event.keyCode pour la compatibilité avec certains navigateurs
        
        // Filtre pour ne garder que les chiffres
        if (charCode >= 48 && charCode <= 57) {
            var charStr = String.fromCharCode(charCode);
            characters += charStr;
            if (characters.length >= 3) {
                // Recopier les trois derniers caractères dans la div#out
                output2.textContent += characters.slice(-3);
                characters = ""; // Réinitialiser la variable characters
            }
        }
    });
});
