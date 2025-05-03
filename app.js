document.addEventListener("DOMContentLoaded", function() {    
    // if(sessionStorage.getItem('loaded') == 1) {
    

    // }
    const name = document.querySelector('.greeting')

    const typed = new Typed(name, {
        strings:["Hello I'm Kevin Ha"],
        typeSpeed: 50,
        showCursor: false,
        onComplete() {
            // sessionStorage.setItem('loaded', 1)
            loadEverythingElse()
        }},
    )
})

function loadEverythingElse() {
    const img = document.querySelector('img')
    const subText = document.querySelector('.intro')
    const icons = document.querySelector('.icon--container')
    img.classList.add('loadAnim')
    subText.classList.add('loadAnim')
    icons.classList.add('loadAnim')
}