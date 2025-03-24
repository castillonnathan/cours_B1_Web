function calculerEtAfficherDevis() {
    // Récupérer les valeurs des champs du formulaire
    const longueur = parseFloat(document.getElementById('longueur').value);
    const largeur = parseFloat(document.getElementById('largeur').value);
    const epaisseur = parseFloat(document.getElementById('epaisseur').value) / 100;

    // Calculer le volume de béton
    const volume = longueur * largeur * epaisseur;

    // Calculer la quantité de ciment nécessaire
    const ciment = volume * 0.350;

    // Déterminer le nombre de camions nécessaires
    const camions = Math.ceil(volume / 9);

    // Calculer le tarif HT et TTC
    const tarifHT = volume * 91;
    const tarifTTC = tarifHT * 1.20 + camions * 140;

    // Mettre à jour les éléments du devis
    document.getElementById('dateDevis').innerText = new Date().toLocaleDateString();
    document.getElementById('sousTotal').innerText = tarifHT.toFixed(2);
    document.getElementById('tva').innerText = (tarifHT * 0.20).toFixed(2);
    document.getElementById('total').innerText = tarifTTC.toFixed(2);

    // Masquer le conteneur du formulaire et afficher le devis
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('devis').style.display = 'block';
}
function imprimerDevis() {
    window.print();
}
