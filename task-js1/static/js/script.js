// ######################################
'use strict';

let tab = document.getElementsByClassName('tabs__item');
let tabContent = document.getElementsByClassName('tab-item-content');

let tabs = document.querySelector('.tabs');
console.log(tabs)

function hideTabsContent(a) {
    console.log("hide content")
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active');
        tab[i].classList.remove('active-item');
    }
}


tabs.addEventListener('click', function() {
    console.log("Clicked")
    let target = event.target;
    console.log(target)
    if (target.className === 'tabs__item') {
        for (let i = 0; i < tab.length; i++) {
            if (target === tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
});


function showTabsContent(b) {
    hideTabsContent(0);
    console.log("Clicked...")
    tab[b].classList.add('active-item');
    tabContent[b].classList.add('active');
}