$(document).ready(function () {
    // Récupérez les utilisateurs et stockez-les dans la variable users
    $.ajax({
        // URL de la requête
        url: "files/users.json",
        // Type de requête
        type: "GET",
        // Type de données attendu
        dataType: "json", // Nous attendons un objet JSON directement, donc le type de données devrait être "json"
        // Fonction exécutée si la requête réussit
        success: function(response) {
            // Créer un tableau HTML et ajouter une ligne avec les entêtes Email et Token
            var usersTable = '<table style="border: 1px solid black;"><tr><th style="border: 1px solid black;">Email</th><th style="border: 1px solid black;">Token</th></tr>';
 
            // Parcourir la réponse pour construire le tableau
            for (var i = 0; i < response.length; i++) {
                // Pour chaque utilisateur, ajouter une ligne avec les données email et token
                usersTable += '<tr><td style="border: 1px solid black;">' + response[i].email + '</td><td style="border: 1px solid black;">' + response[i].token + '</td></tr>';
            }
            // Fermer la balise de la table
            usersTable += '</table>';

            // Ajouter la table au corps de la page
            $('#ce').html(usersTable);  
        },
      
    });
});