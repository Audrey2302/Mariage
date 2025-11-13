        // Afficher/masquer les détails selon la présence
        const radioOui = document.getElementById('oui');
        const radioNon = document.getElementById('non');
        const detailsSection = document.getElementById('detailsSection');
        const radioPlus1 = document.getElementById('plus1');
        const nomPlus1Group = document.getElementById('nomPlus1Group');

        radioOui.addEventListener('change', () => {
            detailsSection.style.display = 'block';
        });

        radioNon.addEventListener('change', () => {
            detailsSection.style.display = 'none';
        });

        radioPlus1.addEventListener('change', () => {
            nomPlus1Group.style.display = 'block';
        });

        document.getElementById('seul').addEventListener('change', () => {
            nomPlus1Group.style.display = 'none';
        });

        // Gérer la soumission du formulaire
        document.getElementById('rsvpForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            console.log('Données RSVP:', data);
            
            // Afficher le message de succès
            document.getElementById('successMessage').style.display = 'block';
            e.target.style.display = 'none';
            
            // Ici, vous pouvez ajouter l'envoi vers un service backend
            // Par exemple: fetch('/api/rsvp', { method: 'POST', body: JSON.stringify(data) })
        });

        // Animation au scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card, section').forEach(el => {
            observer.observe(el);
        });