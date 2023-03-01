const filterBtns = document.querySelector('.filter');
const allData = document.querySelectorAll('.projects__card');

filterBtns.addEventListener("click", (event) => {
    const btn = event.target;
    const i = btn.dataset.filter;
    if (i === "all") {
        allData.forEach(card => card.style.display = "")
    } else {
        allData.forEach(card => {
            if (!card.classList.contains('f_'+i)) {
                card.style.display = "none";
            } else {
                card.style.display = "";
            }
        })
    }   
});
