export default class Common {

  constructor() { }

  deferHTML(defer: HTMLElement[]): void {
    defer.forEach((html: HTMLElement) => {
      html.childNodes.forEach((item: HTMLElement) => {
        if (item.nodeType === 8) {
          html.innerHTML = item.nodeValue;
        } else {
          html.classList.remove('d-n');
        }
      });
    });
  }

  moreOptions(buttons: HTMLButtonElement[]): void {
    if (buttons) {
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const parent: HTMLElement = btn.parentElement;
          const hideOptions: HTMLElement[] = [].slice.call(parent.querySelectorAll('.d-n'));
          hideOptions.forEach(option => {
            option.classList.remove('d-n');
          });
          btn.remove();
        })
      });
    }
  }
}
