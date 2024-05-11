class Modal {
  body: HTMLBodyElement;

  constructor() {
    this.body = document.querySelector('body');

    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('modal')) {
        this.onHide(target);
      } else if (target.classList.contains('modal__close')) {
        this.onHide(target.closest('.modal'));
      } else if (target.classList.contains('js-modal')) {
        this.onShow(target.dataset.target);
      }

    });
  }

  onHide(modal: HTMLElement) {
    this.body.classList.remove('modal-open');

    if (modal.classList.contains('js-modal-add-to-cart')) {
      modal.remove();
    } else {
      modal.style.display = 'none';
    }
  }

  onShow(id: string) {
    const modal = document.querySelector(`#${id}`) as HTMLElement;
    modal.style.display = null;
    this.body.classList.add('modal-open');
  }
}

new Modal;
