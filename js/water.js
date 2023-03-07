const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remainder = document.getElementById('remainder')

fillLargeCup()


smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {

    if(smallCups[idx].classList.contains('full') && 
    !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    fillLargeCup()
}

function fillLargeCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 530}px`
    }

    percentage.innerText = `${fullCups / totalCups * 100}%`

    if(fullCups === totalCups) {
        remainder.style.visibility = 'hidden'
        remainder.style.height = 0
    } else {
        remainder.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}