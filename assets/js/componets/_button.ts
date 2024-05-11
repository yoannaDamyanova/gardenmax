export default class Button {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  state(selector: string) : void {
    const elements = [].slice.call(document.querySelectorAll(selector));

    elements.forEach((btn: HTMLElement) => {
      btn.addEventListener('click', () => {
        const parentSelector = btn.dataset.parent;
        const activeClass = btn.dataset.class ?? 'active';

        if (parentSelector) {
          const parent = btn.closest(parentSelector) as HTMLElement;

          if (parent.classList.contains('js-state-group') && parent.classList.contains(activeClass) && ! btn.classList.contains(activeClass)) {
            const active = parent.querySelector('.' + activeClass);
            active.classList.remove(activeClass);

            this.toggleActiveClass(btn, activeClass);

          } else {
            this.toggleActiveClass(parent, activeClass);
          }
        }

        this.toggleActiveClass(btn, activeClass);
      });
    });
  }

  toggleActiveClass(element: HTMLElement, cssClass: string) {
    if (element.classList.contains(cssClass)) {
      element.classList.remove(cssClass);
    } else {
      element.classList.add(cssClass);
    }
  }
}
