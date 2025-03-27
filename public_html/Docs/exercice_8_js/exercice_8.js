function calculerEtAfficherDevis() {
    // Récupérer les données du formulaire
    var longueur = document.getElementById('longueur').value;
    var largeur = document.getElementById('largeur').value;
    var epaisseur = document.getElementById('epaisseur').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;

    // Calculer les valeurs (ajuster selon ton algorithme, ici un exemple)
    var volume = (longueur * largeur * epaisseur) / 100; // volume en m3
    var prixTotal = volume * 100; // Exemple de prix (100€ par m3)

    // Mettre à jour les informations du devis
    document.getElementById('dateDevis').textContent = new Date().toLocaleDateString();
    document.getElementById('sousTotal').textContent = prixTotal.toFixed(2);
    document.getElementById('tva').textContent = (prixTotal * 0.2).toFixed(2);
    document.getElementById('total').textContent = (prixTotal * 1.2).toFixed(2);

    // Afficher le devis et cacher le formulaire
    document.getElementById('devis').classList.remove('hidden');
    document.getElementById('form-container').style.display = 'none';
}

function imprimerDevis() {
    window.print();
}
