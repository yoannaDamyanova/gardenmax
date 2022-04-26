export default class Button {

  constructor() { }

  states(elements: HTMLElement[]) : void {

    if (elements) {
      elements.forEach((btn: HTMLElement) => {
        btn.addEventListener('click', () => {
          const parentSelector = btn.dataset.parent;

          if (btn.classList.contains('active')) {
            btn.classList.remove('active');
          } else {
            btn.classList.add('active');
          }

          if (parentSelector) {
            const parent = btn.closest(parentSelector);

            if (parent.classList.contains('active')) {
              parent.classList.remove('active');
            } else {
              parent.classList.add('active');
            }
          }
        });
      });
    }
  }

  state(selector: string) : void {
    const elements = [].slice.call(document.querySelectorAll(selector));

    this.states(elements);
  }

  stateGroup(selector: string): void {
    const buttons = [].slice.call(document.querySelectorAll(selector));

    if (buttons) {
      buttons.forEach((btn: HTMLElement) => {
        btn.addEventListener('click', () => {
          const group = btn.closest('.js-btn-group');

          if (!btn.classList.contains('active')) {
            const currentActive = group.querySelector(`${selector}.active`);
            btn.classList.add('active');
            currentActive.classList.remove('active');
          }
        })
      });
    }
  }
}
