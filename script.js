let toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.parentNode.classList.toggle("active")
    })
    
})