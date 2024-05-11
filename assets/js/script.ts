import Button from "./componets/_button";
import { scrollToElement } from "./componets/_scrollto";

class Main {
  button       : Button;
  body         : HTMLBodyElement;
  btnMenu      : HTMLButtonElement;
  subMenu      : HTMLLinkElement[];
  searchInput  : HTMLInputElement;
  searchResults: HTMLDivElement;

  constructor() {
    this.button = new Button();
    this.button.state('.js-state');
    this.body    = document.querySelector('body');
    this.btnMenu = document.querySelector('.js-menu');
    this.subMenu = [].slice.call(document.querySelectorAll('.header__menu > .menu-item-has-children'));
    this.anchorsScroll();
    this.toggleMenu();
    this.toggleSubmenu();
  }

  anchorsScroll() {
    const anchors = document.querySelectorAll('.js-anchor');
    anchors.forEach(anchor =>
      anchor.addEventListener('click', (e) => {
        const href = (anchor as HTMLLinkElement).getAttribute('href');
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          this.body.classList.remove('menu-opened');
          scrollToElement(href);
        }
      })
    );
  }

  toggleMenu() {
    if (this.btnMenu) {
      this.btnMenu.addEventListener('click', () => {
        if (this.body.classList.contains('open-menu')) {
          this.body.removeAttribute('style');
        } else {
          this.body.style.overflow = 'hidden';
          this.body.style.height = '100dvh';
        }
        this.body.classList.toggle('open-menu');
      })
    }
  }

  toggleSubmenu() {
    if (this.subMenu.length) {
      this.subMenu.forEach(li => {
        li.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;

          if (target.tagName == 'LI') {
            target.classList.toggle('open');
          }

        });
      });
    }
  }
}

new Main;
