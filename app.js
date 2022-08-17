const tabItem = document.querySelectorAll('.tab-nav__item');
const tabContentItem = document.querySelectorAll('.tab__content');

tabItem.forEach(elem => {
    elem.addEventListener('click', activeTab);
})

function activeTab() {
    tabItem.forEach(elem => {
        elem.classList.remove('_active');
    })
    this.classList.add('_active');
    let tabName = this.getAttribute('data-tab');
    console.log(tabName);

    activeTabContent(tabName);
}

function activeTabContent(tabName) {
    tabContentItem.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');
    })
}