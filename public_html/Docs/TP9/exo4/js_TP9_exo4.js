/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function calendrier(jourDebut, mois, annee, taille = 'moyen', fond = '#e0f7fa', texte = '#000') {
    const nbJours = new Date(annee, mois, 0).getDate();
    const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    let html = `<table class="calendrier ${taille}"><tr>`;

    for (let j of jours) html += `<th>${j}</th>`;
    html += '</tr><tr>';

    let compteur = 1;
    for (let i = 1; i < jourDebut; i++) {
      html += '<td></td>';
      compteur++;
    }

    for (let jour = 1; jour <= nbJours; jour++) {
      html += `<td style="background:${fond}; color:${texte}">${jour}</td>`;
      if (compteur % 7 === 0) html += '</tr><tr>';
      compteur++;
    }

    while ((compteur - 1) % 7 !== 0) {
      html += '<td></td>';
      compteur++;
    }

    html += '</tr></table>';
    document.getElementById('resultat').innerHTML = html;
  }

  function generer() {
    const taille = document.getElementById('taille').value;
    const fond = document.getElementById('couleurFond').value;
    const texte = document.getElementById('couleurTexte').value;

    // Exemple : Mars 2025 commence un samedi => jourDebut = 6, mois = 3, année = 2025
    calendrier(6, 3, 2025, taille, fond, texte);
  }

  function genererDepuisSaisie() {
    const jour = parseInt(document.getElementById('inputJour').value);
    const mois = parseInt(document.getElementById('inputMois').value);
    const annee = parseInt(document.getElementById('inputAnnee').value);

    const taille = document.getElementById('taille').value;
    const fond = document.getElementById('couleurFond').value;
    const texte = document.getElementById('couleurTexte').value;

    if (jour >= 1 && jour <= 7 && mois >= 1 && mois <= 12 && annee > 0) {
      calendrier(jour, mois, annee, taille, fond, texte);
    } else {
      alert("Veuillez entrer des valeurs valides !");
    }
  }

  // Affiche un calendrier par défaut au chargement
  calendrier(1, 4, 2024);

