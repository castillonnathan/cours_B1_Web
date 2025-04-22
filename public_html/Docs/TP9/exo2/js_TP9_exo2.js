/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const form = document.getElementById('formulaire');
        const tableBody = document.querySelector('#tableVisiteurs tbody');
        const exportBtn = document.getElementById('export');

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nom = document.getElementById('nom').value.trim();
            const prenom = document.getElementById('prenom').value.trim();
            const etude = document.getElementById('etude').value;

            if (nom && prenom && etude) {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${nom}</td>
                    <td>${prenom}</td>
                    <td>${etude}</td>
                `;
                tableBody.appendChild(newRow);
                form.reset();
            }
        });

        exportBtn.addEventListener('click', function() {
            const rows = document.querySelectorAll('#tableVisiteurs tbody tr');
            let textContent = "Nom\tPrénom\tÉtude suivie\n";

            rows.forEach(row => {
                const cols = row.querySelectorAll('td');
                const line = Array.from(cols).map(td => td.textContent).join('\t');
                textContent += line + "\n";
            });

            const blob = new Blob([textContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = "liste_visiteurs.txt";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

