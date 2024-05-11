class ModuleSettings {
  html       : HTMLHtmlElement;
  body       : HTMLBodyElement;
  backgrounds: NodeList;

  constructor() {
    this.html        = document.querySelector('html');
    this.body        = document.querySelector('body');
    this.backgrounds = document.querySelectorAll('[data-bg_desktop], [data-bg_mobile]');

    this.setBackground();

    this.adminBackgorund();
    window.addEventListener('resize', this.setBackground);
  }

  setBackground = () => {
    if (this.backgrounds) {
      this.backgrounds.forEach((item: HTMLElement) => {
        let bgHolderDesktop: HTMLSpanElement = item.querySelector('.bgHolderDesktop');
        let bgHolderMobile: HTMLSpanElement = item.querySelector('.bgHolderMobile');
        if (window.innerWidth > 767 && item.dataset.bg_desktop) {
          if (bgHolderMobile) bgHolderMobile.remove();

          if (item.dataset.bg_desktop.includes('url')) {
            if (item.dataset.bg_op_desktop !== '1' || item.dataset.bg_att_desktop === 'fixed') {
              if ( ! bgHolderDesktop ) {
                const styles = {
                  position            : 'absolute',
                  top                 : '0',
                  right               : '0',
                  left                : '0',
                  bottom              : '0',
                  zIndex              : '-1',
                  backgroundImage     : item.dataset.bg_desktop,
                  backgroundPosition  : item.dataset.bg_pos_desktop,
                  backgroundRepeat    : 'no-repeat',
                  backgroundAttachment: item.dataset.bg_att_desktop,
                  // backgroundSize      : 'cover',
                  opacity             : item.dataset.bg_op_desktop
                }
                bgHolderDesktop = document.createElement("span");
                bgHolderDesktop.className = 'bgHolderDesktop';
                Object.assign(bgHolderDesktop.style, styles);
                item.style.zIndex = '1';
                item.appendChild(bgHolderDesktop);
                item.style.backgroundImage = null;
                item.style.backgroundPosition = null;
                item.style.backgroundAttachment = null;
              }
            } else {
              item.style.backgroundImage      = item.dataset.bg_desktop;
              item.style.backgroundPosition   = item.dataset.bg_pos_desktop;
              item.style.backgroundAttachment = item.dataset.bg_att_desktop,
              // item.style.backgroundSize       = 'cover';
              item.style.backgroundRepeat     = 'no-repeat';
              if ( bgHolderDesktop ) {
                bgHolderDesktop.remove();
              }
            }
          }
        } else if (window.innerWidth <= 767 && item.dataset.bg_mobile) {
          if (bgHolderDesktop) bgHolderDesktop.remove();

          if (item.dataset.bg_mobile.includes('url')) {
            if (item.dataset.bg_op_mobile !== '1') {
              if (!bgHolderMobile) {
                const styles = {
                  position          : 'absolute',
                  top               : '0',
                  right             : '0',
                  left              : '0',
                  bottom            : '0',
                  zIndex            : '-1',
                  backgroundImage   : item.dataset.bg_mobile,
                  backgroundPosition: item.dataset.bg_pos_mobile,
                  backgroundRepeat  : 'no-repeat',
                  backgroundSize    : 'cover',
                  opacity           : item.dataset.bg_op_mobile
                }
                bgHolderMobile = document.createElement("span");
                bgHolderMobile.className = 'bgHolderMobile';
                Object.assign(bgHolderMobile.style, styles);
                item.style.zIndex = '1';
                item.appendChild(bgHolderMobile);
                item.style.background = null;
              }
            } else {
              item.style.backgroundImage    = item.dataset.bg_mobile
              item.style.backgroundPosition = item.dataset.bg_pos_mobile;
              item.style.backgroundSize     = 'cover';
              item.style.backgroundRepeat   = 'no-repeat';
              if (bgHolderMobile) {
                bgHolderMobile.remove();
              }
            }
          }
        } else {
          item.style.backgroundImage = null;
          item.style.backgroundPosition = null;
          item.style.backgroundAttachment = null;
          if (bgHolderDesktop) bgHolderDesktop.remove();
          if (bgHolderMobile) bgHolderMobile.remove();
        }
      });
    }
  }

  adminBackgorund = () => {
    if (this.body.classList.contains('wp-admin')) {
      var interval = setInterval(() => {
        this.backgrounds = document.querySelectorAll('[data-bg_desktop], [data-bg_mobile]');
        if (this.backgrounds) {
          this.setBackground();
          clearInterval(interval);
        }
      }, 500);

      document.addEventListener('mousemove', () => {
        this.backgrounds = document.querySelectorAll('[data-bg_desktop], [data-bg_mobile]');
        this.setBackground();
      });
    }
  }
}

new ModuleSettings;
