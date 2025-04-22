// Définitions des mots
        const definitions = {
            "PHP": {
                title: "PHP",
                text: "PHP (Hypertext Preprocessor) est un langage de programmation principalement utilisé pour la création de pages web dynamiques.",
                image: "https://www.php.net/images/logos/php-logo.svg"
            },
            "JavaScript": {
                title: "JavaScript",
                text: "JavaScript est un langage de programmation qui permet d’ajouter de l’interactivité aux pages web.",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/64/JavaScript-logo.png"
            },
            "CSS": {
                title: "CSS",
                text: "CSS (Cascading Style Sheets) est un langage de description utilisé pour définir l'apparence des pages web.",
                image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cascading_Style_Sheets.svg"
            }
        };

        const popup = document.getElementById('popup');
        const popupTitle = document.getElementById('popup-title');
        const popupText = document.getElementById('popup-text');
        const popupImage = document.getElementById('popup-image');

        // Fonction pour afficher le popup
        function showPopup(event, word) {
            const definition = definitions[word];

            if (definition) {
                popupTitle.textContent = definition.title;
                popupText.textContent = definition.text;

                // Affichage de l'image si présente
                if (definition.image) {
                    popupImage.src = definition.image;
                    popupImage.style.display = 'block';
                } else {
                    popupImage.style.display = 'none';
                }

                // Positionner le popup près du mot cliqué
                const rect = event.target.getBoundingClientRect();
                popup.style.left = `${rect.left}px`;
                popup.style.top = `${rect.bottom + window.scrollY + 5}px`;

                // Afficher le popup
                popup.style.display = 'block';
            }
        }

        // Masquer le popup quand l'utilisateur clique ailleurs
        document.addEventListener('click', function(event) {
            if (!event.target.classList.contains('highlight')) {
                popup.style.display = 'none';
            }
        });

        // Ajouter un événement au survol des mots
        document.querySelectorAll('.highlight').forEach(element => {
            const word = element.getAttribute('data-word');
            element.addEventListener('mouseenter', (event) => showPopup(event, word));
            element.addEventListener('click', (event) => showPopup(event, word));
        });