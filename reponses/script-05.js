$(document).ready(function () {
    
    function format(number) {
        // Convertir le nombre en une chaîne de caractères
        var formattedNumber = number.toFixed(2).toString();
    
        // Séparer les milliers par un espace
        var parts = formattedNumber.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
        // Rejoindre les parties séparées et retourner le résultat
        return parts.join('.');
    }



    var rows = document.querySelectorAll('table tbody tr');
    var sum = 0;
    
    // Commencer à l'indice 1 pour éviter de traiter l'en-tête de tableau
    for(var i = 1; i < rows.length - 1 ; i++) {
        // Calculer le produit des prix et des quantités pour chaque ligne
        var concatenatedContent = rows[i].cells[1].textContent * rows[i].cells[2].textContent;
        
        // Ajouter le produit à la somme totale
        sum += concatenatedContent;
        
        // Assigner le contenu concaténé à la troisième cellule
        rows[i].cells[3].textContent = format(concatenatedContent); // Arrondi à 2 décimales
    }
    
    // Assigner la somme à la dernière cellule de la dernière ligne
    rows[rows.length - 1].cells[1].textContent =format(sum) ; // Arrondi à 2 décimales  
});