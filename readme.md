# CSS FRAMEWORK - Инструкции за работа

В това кратко ръководство се описва работата с custom css framework. За да се може да се използва е необходимо да има инсталиран node.js, като версията на която е тестван е 18.17.1.

## Инсталация
За да започнете да използвате css framework е необходими да инсталирате небоходимите палкети. За целта в конзолата трябва да изпълнителните следната команда:

```bash
npm instal or npm i
```
## Команди за компилация

```bash
npm run watch
```
Тази команда стартира копилиране на файловете във вид и формат за изповане в браузъра и след за премени във файловете и извършва нова компилация след нея.

> [!WARNING]
> Когато добавите нов SCSS или JS трябва да рестатирате тази команда

```bash
npm run build
```
Тази команда стартира копилиране на файловете във вид и формат за изповане в браузъра. Компилацията се изпълнява само веднъж.

```bash
npm run prod
```
Тази команда стартира копилиране на файловете във вид и формат за изповане в браузъра, като се файловете се минифицират и се премахват излизшните елемент в тях.

## Начални настройки

CSS Framework използва css променливи за основните, цветове, шрифтове и размери. Те се намират в таг **head** в homepage.html файла. Тези настройки трябва да се променят спрямо дизайн, който е одобрен. Като може да се добавят или премахват цветове, като след това трябва да бъдат добавяни във файла settings/_colors.scss

```html
<style type="text/css">
  :root {
    --igs-color-1: #462e22;
    --igs-color-1-rgb: 70, 46, 34;
    --igs-color-2: #fbd999;
    --igs-color-2-rgb: 251, 217, 153;
    --igs-color-3: #fff4e0;
    --igs-color-3-rgb: 255, 244, 224;
    --igs-color-4: #880AC9;
    --igs-color-4-rgb: 136, 10, 201;
    --igs-color-5: #500ABF;
    --igs-color-5-rgb: 80, 10, 191;
    --igs-text-color: #000000;
    --igs-link-color: #462e22;
    --igs-title-color: #462e22;
    --igs-font-weight: regular;
    --igs-font-family: Montserrat;
    --igs-font-size-desktop: 16px;
    --igs-font-size-mobile: 16px;
    --igs-headings-font-family: Montserrat;
    --igs-headings-font-weight: 700;
    --igs-h1-desktop: 60px;
    --igs-h1-mobile: 40px;
    --igs-h2-desktop: 46px;
    --igs-h2-mobile: 32px;
    --igs-h3-desktop: 24px;
    --igs-h3-mobile: 20px;
    --igs-h4-desktop: 22px;
    --igs-h4-mobile: 20px;
    --igs-h5-desktop: 20px;
    --igs-h5-mobile: 20px;
    --igs-h6-desktop: 16px;
    --igs-h6-mobile: 16px;
  }
</style>
```

```scss
$black: #000;
$white: #fff;

$color-1     : var(--igs-color-1);
$color-1-rgb : var(--igs-color-1-rgb);
$color-2     : var(--igs-color-2);
$color-2-rgb : var(--igs-color-2-rgb);
$color-3     : var(--igs-color-3);
$color-3-rgb : var(--igs-color-3-rgb);
$color-4     : var(--igs-color-4);
$color-4-rgb : var(--igs-color-4-rgb);
$color-5     : var(--igs-color-5);
$color-5-rgb : var(--igs-color-5-rgb);

$text-color    : var(--igs-text-color);
$link-color    : var(--igs-link-color);
$headings-color: var(--igs-title-color);

$body-color: $text-color;
$body-bg   : $white;

$theme-colors: (
  '1': $color-1,
  '2': $color-2,
  '3': $color-3,
  '4': $color-4,
  '5': $color-5,
  'w': $white,
  'b': $black,
  'i': inherit
);
```

При промяна на размерите и вида шрифответе промените автоматично се отразяват във файла settings/_typography.scss

```scss
// WP THEMES
$font-family      : var(--igs-font-family), arial, sans-serif;
$font-size-desktop: var(--igs-font-size-desktop);
$font-size-mobile : var(--igs-font-size-mobile);
$font-weight      : var(--igs-font-weight);

// Base
$font-family-base: $font-family;
$font-size-base  : $font-size-desktop;
$font-weight-base: $font-weight;
$line-height-base: 1;

// Font Families

// Font Weights
$font-weight-exlight : 100;
$font-weight-light   : 300;
$font-weight-normal  : 400;
$font-weight-medium  : 500;
$font-weight-semibold: 600;
$font-weight-bold    : 700;
$font-weight-eb      : 800;
$font-weight-black   : 900;

// Headings
$headings-font-family  : var(--igs-headings-font-family), arial, sans-serif;
$headings-font-weight  : var(--igs-headings-font-weight);
$headings-line-height  : 1.2;
$headings-text-tranform: null;

$heading-desktop: (
  'h1': var(--igs-h1-desktop),
  'h2': var(--igs-h2-desktop),
  'h3': var(--igs-h3-desktop),
  'h4': var(--igs-h4-desktop),
  'h5': var(--igs-h5-desktop),
  'h6': var(--igs-h6-desktop)
);

$heading-mobile: (
  'h1': var(--igs-h1-mobile),
  'h2': var(--igs-h2-mobile),
  'h3': var(--igs-h3-mobile),
  'h4': var(--igs-h4-mobile),
  'h5': var(--igs-h5-mobile),
  'h6': var(--igs-h6-mobile)
);

$list-position: inside;

$ul-list-style-type: none;
$ol-list-style-type: decimal;
```


## Как се работи CSS Framework?
Посредство SCSS пролменли и миксини се генерират css класове за най-инползваните css свойства. В тях са включават и варианти, които да бъдат действащи за различни размери на екраните.

Структурата на тези класове се изгражда по следния начин.

1. Превикс на свойството последнат от тире
  на пр. **d-** за display
2. Превикс за размера на екран за който ще важи то свойство. Тази превикс не е задължителен. Когато той липсва свойстото ще вади за всички екрани. Виж виж SASS струкурата секцията Breadkpoints.
  на пр. **u-sm-** за екрани, които са по-големи от 992px;
3. Стойност на за свойството.
  на .пр **b** - за block.

Финланият резултат ще бъде **d-u-sm-b**. Този клас ще добави на елемент свойстовото **display: block** за екрани, които са по-големи от точката на прекъсване `sm`

```css
@media (min-width: 992px) {
  .d-u-sm-b {
    display: block;
  }
}
```

## SASS Структура

- **Breakpoints** - settings/_breakpoints.scss

Отрделят се точнките на прекъсване или резличните резолюции, за които да се генерират класове. Стойносите за изповат за създаване на медийни условия.

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 768px,
  md: 992px,
  lg: 1230px
);
```

Задават се и медийни префикси, които да указват дали дадното свойстов ще важи за размери по-големи, по-малко, точно определна или между две стойности на точките за прекъсване.

```scss
$media-prefix: (
  up  : 'u',
  down: 'd',
  only: 'o'
);
```
- **Container** - settings/_container.scss

Определят се размерите на контейнерите за всеки  breakpoints.

```scss
$container-gutter-width: $gutter;
$container-max-widths: (
  md: 992px,
  lg: 1200px,
);

$container-width-fluid:  1792px;

@include _assert-ascending($container-max-widths, '$container-max-widths');
```

За breakpointsб за които няма зададен размер контейнера автоматично се задава на 100%.

Контейнера се използва с клас **container**. За контейнерите нямаме префикси за различни breakpoints, те автоматично се адаптират.

Ако е необходимо изповане на контейнер който да заема целият екран се изповат клас **container-fluid**, които заема максимален размер от променливат ``$container-width-fluid``.

- **Verticla Align** - settings/_align.scss

Генерират се класове за вертицално подрованяне на css свойството **vertical-align**

```scss
// Vertical Align
$vertical-align-prefix: 'va';
$vertical-aligns: (
  'base': baseline,
  't'   : top,
  'm'   : middle,
  'b'   : bottom,
  'tt'  : text-top,
  'tb'  : text-bottom
);
```

За да ги изповате трябва да извиката някой от следните класове в html документа:

```css
// За всички резолюции

va-base
va-t
va-m
va-b
va-tt
va-tb

// За екрани които са по-големи от md точката на прекъсване.

va-o-md-base
va-o-md-t
va-o-md-m
va-o-md-b
va-o-md-tt
va-o-md-tb


// За екрани които са по-големи от md точката на прекъсване.

va-u-md-base
va-u-md-t
va-u-md-m
va-u-md-b
va-u-md-tt
va-u-md-tb

// За екрани които са по-малко от md точката на прекъсване.

va-d-md-base
va-d-md-t
va-d-md-m
va-d-md-b
va-d-md-tt
va-d-md-tb
```

За останалите точки на прекъсване се сменят префиксите за **up, down, only** и размера на екрана **xs, sm, md, lg**.

- **Display** - settings/_display.scss

Генерират се класове за вертицално подрованяне на css свойството **display**

```scss
// Displays
$display-prefix: 'd';
$displays: (
  'i' : inline,
  'ib': inline-block,
  'b' : block,
  't' : table,
  'tr': table-row,
  'tc': table-cell,
  'f' : flex,
  'if': inline-flex,
  'n' : none,
);

```

За да ги изповате трябва да извиката някой от следните класове в html документа:

```css
// За всички резолюции

d-i
d-ib
d-b
d-t
d-tr
d-tc
d-f
d-if
d-n

// За екрани които са по-големи от md точката на прекъсване.

d-o-md-i
d-o-md-ib
d-o-md-b
d-o-md-t
d-o-md-tr
d-o-md-tc
d-o-md-f
d-o-md-if
d-o-md-n


// За екрани които са по-големи от md точката на прекъсване.

d-u-md-i
d-u-md-ib
d-u-md-b
d-u-md-t
d-u-md-tr
d-u-md-tc
d-u-md-f
d-u-md-if
d-u-md-n

// За екрани които са по-малко от md точката на прекъсване.

d-d-md-i
d-d-md-ib
d-d-md-b
d-d-md-t
d-d-md-tr
d-d-md-tc
d-d-md-f
d-d-md-if
d-d-md-n
```

За останалите точки на прекъсване се сменят префиксите за **up, down, only** и размера на екрана **xs, sm, md, lg**.


