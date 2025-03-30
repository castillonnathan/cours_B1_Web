function calculerEtAfficherDevis() {
    // Récupérer les valeurs du formulaire
    var longueur = parseFloat(document.getElementById('longueur').value);
    var largeur = parseFloat(document.getElementById('largeur').value);
    var epaisseur = parseFloat(document.getElementById('epaisseur').value) / 100; // Convertir cm en m
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;

    // Vérifier que les valeurs sont valides
    if (isNaN(longueur) || isNaN(largeur) || isNaN(epaisseur) || longueur <= 0 || largeur <= 0 || epaisseur <= 0) {
        alert("Veuillez saisir des valeurs valides.");
        return;
    }

    // Calcul du volume et des coûts
    var volume = longueur * largeur * epaisseur;
    var totalBéton = volume * 91; 
    var camionsNecessaires = Math.ceil(volume / 9);
    var totalTransport = camionsNecessaires * 140;
    var sousTotal = totalBéton + totalTransport;
    var tva = sousTotal * 0.2;
    var total = sousTotal + tva;

    // Mise à jour du devis
    document.getElementById('dateDevis').textContent = new Date().toLocaleDateString();
    document.getElementById('sousTotal').textContent = sousTotal.toFixed(2);
    document.getElementById('tva').textContent = tva.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);

    // Infos client
    document.getElementById('clientNomPrenom').textContent = nom + ' ' + prenom;
    document.getElementById('clientContact').textContent = "Téléphone : 123-456-7890";
    document.getElementById('clientEmail').textContent = "Email : " + nom.toLowerCase() + '@example.com';
    document.getElementById('clientAdresse').textContent = "Adresse : 123 Rue Exemple, Any City";

    // Mise à jour de la liste des matériaux
    document.getElementById('materiauxListe').innerHTML = `
        <tr>
            <td>Volume de béton</td>
            <td>91€ / m³</td>
            <td>${volume.toFixed(2)} m³</td>
            <td>${totalBéton.toFixed(2)}€</td>
        </tr>
        <tr>
            <td>Transport (9 m³ par camion)</td>
            <td>140€ / livraison</td>
            <td>${camionsNecessaires} camions</td>
            <td>${totalTransport.toFixed(2)}€</td>
        </tr>
    `;

    // Affichage correct
    document.getElementById('devis').classList.remove('hidden');
    document.getElementById('form-container').style.display = 'none';
}
