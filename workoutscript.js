 function filter(category, btn) {
        const cards = document.querySelectorAll('.routine-card');
        const buttons = document.querySelectorAll('.filter-btn');

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

      
        cards.forEach(card => {
            const cat = card.getAttribute('data-cat');
            if (category === 'all' || cat === category) {
                card.style.display = 'block';
               
                card.style.opacity = '0';
                setTimeout(() => { card.style.opacity = '1'; }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    }