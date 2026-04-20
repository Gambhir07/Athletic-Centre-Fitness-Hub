document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const submitBtn = document.querySelector('.btn-submit');

    contactForm.addEventListener('submit', (e) => {
        
        e.preventDefault();

      
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

     
        if (!name || !email || !message) {
            alert("SYSTEM ERROR: ALL DATA FIELDS MUST BE POPULATED.");
            return;
        }

       
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "UPLOADING_DATA...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.6";

        
        setTimeout(() => {
            console.log("Communication Logged:", { name, email, message });
            
            alert(`SUCCESS: COMMUNICATION INITIALIZED.\nRECIPIENT: ${name}\nSTATUS: SENT TO ATHLETIC CENTRE FITNESS HUB`);

            contactForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
        }, 2000);
    });
});