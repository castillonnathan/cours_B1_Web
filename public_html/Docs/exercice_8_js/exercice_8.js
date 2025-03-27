function calculerEtAfficherDevis() {
    // Récupérer les données du formulaire
    var longueur = parseFloat(document.getElementById('longueur').value);
    var largeur = parseFloat(document.getElementById('largeur').value);
    var epaisseur = parseFloat(document.getElementById('epaisseur').value) / 100; // Convertir cm en m
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;

    // Calculer le volume de béton en m³
    var volume = longueur * largeur * epaisseur;

    // Quantité de ciment nécessaire (350 kg par m³ de béton)
    var cimentNecessaire = volume * 350; // En kg
    var cimentNecessaireTonnes = cimentNecessaire / 1000; // En tonnes

    // Calculer le nombre de camions nécessaires (9 m³ par camion)
    var camionsNecessaires = Math.ceil(volume / 9);

    // Prix du béton et du transport
    var prixBétonParM3 = 91; // HT
    var prixTransport = 140; // par livraison
    var totalBéton = volume * prixBétonParM3;
    var totalTransport = camionsNecessaires * prixTransport;

    // Calcul du devis HT et TTC
    var sousTotal = totalBéton + totalTransport;
    var tva = sousTotal * 0.2; // TVA 20%
    var total = sousTotal + tva;

    // Mettre à jour le devis avec les informations
    document.getElementById('dateDevis').textContent = new Date().toLocaleDateString();
    document.getElementById('sousTotal').textContent = sousTotal.toFixed(2);
    document.getElementById('tva').textContent = tva.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);

    // Mettre à jour les informations client
    document.getElementById('clientNomPrenom').textContent = nom + ' ' + prenom;
    document.getElementById('clientContact').textContent = "Téléphone : 123-456-7890";
    document.getElementById('clientEmail').textContent = "Email : " + nom.toLowerCase() + '@example.com';
    document.getElementById('clientAdresse').textContent = "Adresse : 123 Rue Exemple, Any City";

    // Mettre à jour le tableau des matériaux
    var materiauxListeHTML = `
        <tr>
            <td>Volume de béton</td>
            <td>91€ / m³</td>
            <td>${volume.toFixed(2)} m³</td>
            <td>${totalBéton.toFixed(2)}€</td>
        </tr>
        <tr>
            <td>Ciment nécessaire</td>
            <td>350 kg / m³</td>
            <td>${cimentNecessaireTonnes.toFixed(2)} tonnes</td>
            <td>${(cimentNecessaire * 91 / 1000).toFixed(2)}€</td> <!-- Calculer le coût du ciment -->
        </tr>
        <tr>
            <td>Transport (9 m³ par camion)</td>
            <td>140€ / livraison</td>
            <td>${camionsNecessaires} camions</td>
            <td>${totalTransport.toFixed(2)}€</td>
        </tr>
    `;

    document.getElementById('materiauxListe').innerHTML = materiauxListeHTML;

    // Afficher le devis et cacher le formulaire
    document.getElementById('devis').classList.remove('hidden');
    document.getElementById('form-container').style.display = 'none';
}

function imprimerDevis() {
    window.print();
}
