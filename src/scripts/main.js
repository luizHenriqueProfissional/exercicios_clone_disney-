document.addEventListener('DOMContentLoaded' , function () {
  const tabsButton = document.querySelectorAll('[data-tab-button]');
  

  for (let i = 0; i< tabsButton.length; i++) {
    tabsButton[i].addEventListener('click', function(e){
      const abaAlvo = e.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
      escondeAbas();
      botaoAtivo();
      e.target.classList.add('shows__tabs__button--is-active')
      aba.classList.add('shows__list--is-active')
    })
  }
  
})

function botaoAtivo () {
  const tabsButton = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < tabsButton.length; i++) {
    tabsButton[i].classList.remove('shows__tabs__button--is-active')
  }
}

function escondeAbas() {
  const tabContents = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove('shows__list--is-active');
  }
}