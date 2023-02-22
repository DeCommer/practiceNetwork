/* $('a').click(function() {
    console.log($(this).html());
})
 */

var submenu = document.querySelectorAll('ul li ul');

function hideMenu() {
    for(let i = 0; i < submenu.length; i++) {
        submenu[i].className = 'hide-menu';
    }
}

hideMenu();
let menuLinks = document.querySelectorAll('.menulink');

for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(e){
        e.preventDefault();

        let thisMenu = this.parentNode.querySelector('ul');
        //thisMenu.className = 'show-menu';
     
        if(thisMenu.classList.contains('hide-menu')) {
            hideMenu();
            thisMenu.className = 'show-menu';
        }
        else {
            thisMenu.className = 'hide-menu';
        }



    });
}