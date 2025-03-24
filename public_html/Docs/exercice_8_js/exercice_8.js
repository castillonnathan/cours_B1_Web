function calculerDevis() {
    const longueur = parseFloat(document.getElementById('longueur').value);
    const largeur = parseFloat(document.getElementById('largeur').value);
    const epaisseur = parseFloat(document.getElementById('epaisseur').value) / 100;

    const volume = longueur * largeur * epaisseur;
    const ciment = volume * 0.350;
    const camions = Math.ceil(volume / 9);
    const tarifHT = volume * 91;
    const tarifTTC = tarifHT * 1.20 + camions * 140;

    document.getElementById('volume').innerText = volume.toFixed(2);
    document.getElementById('ciment').innerText = ciment.toFixed(2);
    document.getElementById('camions').innerText = camions;
    document.getElementById('tarifHT').innerText = tarifHT.toFixed(2);
    document.getElementById('tarifTTC').innerText = tarifTTC.toFixed(2);

    document.getElementById('resultat').style.display = 'block';
}