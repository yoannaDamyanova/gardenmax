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
/* THEMES */
$font-family      : var(--igs-font-family), arial, sans-serif;
$font-size-desktop: var(--igs-font-size-desktop);
$font-size-mobile : var(--igs-font-size-mobile);
$font-weight      : var(--igs-font-weight);

/* Base */
$font-family-base: $font-family;
$font-size-base  : $font-size-desktop;
$font-weight-base: $font-weight;
$line-height-base: 1;

/* Font Families */

/* Font Weights */
$font-weight-exlight : 100;
$font-weight-light   : 300;
$font-weight-normal  : 400;
$font-weight-medium  : 500;
$font-weight-semibold: 600;
$font-weight-bold    : 700;
$font-weight-eb      : 800;
$font-weight-black   : 900;

/* Headings */
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

- **Display** - settings/_display.scss

Генерират се класове за вертицално подрованяне на css свойството **display**

```scss
/* Displays */
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

CSS класове за свойството **display**

```css
/* За всички резолюции */

d-i
d-ib
d-b
d-t
d-tr
d-tc
d-f
d-if
d-n

/* За екрани които са точно за md точката на прекъсване. */
d-o-md-i
d-o-md-ib
d-o-md-b
d-o-md-t
d-o-md-tr
d-o-md-tc
d-o-md-f
d-o-md-if
d-o-md-n


/* За екрани които са по-големи от md точката на прекъсване. */
d-u-md-i
d-u-md-ib
d-u-md-b
d-u-md-t
d-u-md-tr
d-u-md-tc
d-u-md-f
d-u-md-if
d-u-md-n

/* За екрани които са по-малко от md точката на прекъсване. */
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

- **Flex Elements** - settings/_flex.scss
Генерират се класове за flex елементите **flex**, **flex-grow**, **flex-shrink**, **flex-direction**, **flex-wrap**.

```scss
/* Flex */

$flex-prefix: 'f';

$flexs: (
  '1' : 0 1 100%,
  '3' : 0 0 33.33%,
  '40': 0 0 40px,
  '60': 0 0 60px,
  '80': 0 0 80px,
  'h' : 0 0 50%,
  'a' : 0 0 auto,
);

$flex-directions: (
  'r': row,
  'c': column,
  'rr': row-reverse,
  'cr': column-reverse
);

$flex-wraps: (
  'w': wrap,
  'nw': nowrap,
  'wr': wrap-reverse,
);

$flex-grows: (
  'g-0': 0,
  'g-1': 1,
);

$flex-shrink: (
  's-0': 0,
  's-1': 1,
);

$all-flexs: (
  flex: $flexs,
  flex-direction: $flex-directions,
  flex-wrap: $flex-wraps,
  flex-grow: $flex-grows,
  flex-shrink: $flex-shrink
);


/* Flex Aligns Items */
$flex-align-items: (
  'fs': flex-start,
  'fe': flex-end,
  'c' : center,
  'b' : baseline,
  's' : stretch
);

/* Flex justify Content */
$flex-justify-contents: (
  'fs': flex-start,
  'fe': flex-end,
  'c' : center,
  'sb': space-between,
  'sa': space-around,
  'se': space-evenly
);

/* Flex align content */
$flex-align-contents: (
  'fs': flex-start,
  'fe': flex-end,
  'c' : center,
  'sb': space-between,
  'sa': space-around,
  's' : stretch
);

/* Flex align Self */
$flex-align-selfs: (
  'a' : auto,
  'fs': flex-start,
  'fe': flex-end,
  'c' : center,
  'b' : baseline,
  's' : stretch
);


/* Flex Aligns */
$flex-aligns: (
  'ai': (
    align-items: $flex-align-items
  ),
  'jc': (
    justify-content: $flex-justify-contents
  ),
  'ac': (
    align-content: $flex-align-contents
  ),
  'as': (
    align-self: $flex-align-selfs
  )
);
```

За да ги изповате трябва да извиката някой от следните класове в html документа:

CSS класове за свойство **flex**

```css
/* За всички резолюции */
f-1
f-3
f-40
f-60
f-80
f-h
f-a
...

/* За екрани които са точно за md точката на прекъсване. */
f-о-md-1
f-о-md-3
f-о-md-40
f-о-md-60
f-о-md-80
f-о-md-h
f-о-md-a
....


/* За екрани които са по-големи от md точката на прекъсване. */
f-u-md-1
f-u-md-3
f-u-md-40
f-u-md-60
f-u-md-80
f-u-md-h
f-u-md-a
...

/* За екрани които са по-малко от md точката на прекъсване. */
f-d-md-1
f-d-md-3
f-d-md-40
f-d-md-60
f-d-md-80
f-d-md-h
f-d-md-a
...
```

CSS класове за свойство **flex-direction**

```css
/* За всички резолюции */
f-r
f-c
f-rr
f-cr

/* За екрани които са точно за md точката на прекъсване. */
f-o-md-r
f-o-md-c
f-o-md-rr
f-o-md-cr

/* За екрани които са по-големи от md точката на прекъсване. */
f-u-md-r
f-u-md-c
f-u-md-rr
f-u-md-cr

/* За екрани които са по-малко от md точката на прекъсване. */
f-d-md-r
f-d-md-c
f-d-md-rr
f-d-md-cr
```

CSS класове за свойство **flex-wrap**

```css
/* За всички резолюции */
f-w
f-nw
f-wr

/* За екрани които са точно за md точката на прекъсване. */
f-o-md-w
f-o-md-nw
f-o-md-wr

/* За екрани които са по-големи от md точката на прекъсване. */
f-u-md-w
f-u-md-nw
f-u-md-wr

/* За екрани които са по-малко от md точката на прекъсване. */
f-d-md-w
f-d-md-nw
f-d-md-wr
```

CSS класове за свойство **flex-grow**

```css
/* За всички резолюции */
f-g-0
f-g-1

/* За екрани които са точно за md точката на прекъсване. */
f-o-md-g-0
f-o-md-g-1

/* За екрани които са по-големи от md точката на прекъсване. */
f-u-md-g-0
f-u-md-g-1

/* За екрани които са по-малко от md точката на прекъсване. */
f-d-md-g-0
f-d-md-g-1
```

CSS класове за свойство **flex-shrink**

```css
/* За всички резолюции */
f-s-0
f-s-1

/* За екрани които са точно за md точката на прекъсване. */
f-o-md-s-0
f-o-md-s-1

/* За екрани които са по-големи от md точката на прекъсване. */
f-u-md-s-0
f-u-md-s-1

/* За екрани които са по-малко от md точката на прекъсване. */
f-d-md-s-0
f-d-md-s-1
```

CSS класове за свойство **align-items**
```css
/* За всички резолюции */
ai-fs
ai-fe
ai-c
ai-b
ai-s

/* За екрани които са точно за md точката на прекъсване. */
ai-o-md-fs
ai-o-md-fe
ai-o-md-c
ai-o-md-b
ai-o-md-s

/* За екрани които са по-големи от md точката на прекъсване. */
ai-u-md-fs
ai-u-md-fe
ai-u-md-c
ai-u-md-b
ai-u-md-s

/* За екрани които са по-малко от md точката на прекъсване. */
ai-d-md-fs
ai-d-md-fe
ai-d-md-c
ai-d-md-b
ai-d-md-s
```

CSS класове за свойство **justify-content**
```css
/* За всички резолюции */
jc-fs
jc-fe
jc-c
jc-sb
jc-sa
jc-se

/* За екрани които са точно за md точката на прекъсване. */
jc-o-md-fs
jc-o-md-fe
jc-o-md-c
jc-o-md-sb
jc-o-md-sa
jc-o-md-se

/* За екрани които са по-големи от md точката на прекъсване. */
jc-u-md-fs
jc-u-md-fe
jc-u-md-c
jc-u-md-sb
jc-u-md-sa
jc-u-md-se

/* За екрани които са по-малко от md точката на прекъсване. */
jc-d-md-fs
jc-d-md-fe
jc-d-md-c
jc-d-md-sb
jc-d-md-sa
jc-d-md-se
```

CSS класове за свойство **align-content**
```css
/* За всички резолюции */
ac-fs
ac-fe
ac-c
ac-sb
ac-sa
ac-s

/* За екрани които са точно за md точката на прекъсване. */
ac-o-md-fs
ac-o-md-fe
ac-o-md-c
ac-o-md-sb
ac-o-md-sa
ac-o-md-s

/* За екрани които са по-големи от md точката на прекъсване. */
ac-u-md-fs
ac-u-md-fe
ac-u-md-c
ac-u-md-sb
ac-u-md-sa
ac-u-md-s

/* За екрани които са по-малко от md точката на прекъсване. */
ac-d-md-fs
ac-d-md-fe
ac-d-md-c
ac-d-md-sb
ac-d-md-sa
ac-d-md-s
```

CSS класове за свойство **align-self**
```css
/* За всички резолюции */
as-a
as-f
as-f
as-c
as-b
as-s

/* За екрани които са точно за md точката на прекъсване. */
as-o-md-a
as-o-md-f
as-o-md-f
as-o-md-c
as-o-md-b
as-o-md-s

/* За екрани които са по-големи от md точката на прекъсване. */
as-u-md-a
as-u-md-f
as-u-md-f
as-u-md-c
as-u-md-b
as-u-md-s

/* За екрани които са по-малко от md точката на прекъсване. */
as-d-md-a
as-d-md-f
as-d-md-f
as-d-md-c
as-d-md-b
as-d-md-s
```

За останалите точки на прекъсване се сменят префиксите за **up, duwn, only** и размера на екрана **xs, sm, md, lg**.

- **Spasing** - settings/_spacing.scss

Генерират се класове за свойтствата за отстояния **margin** и **padding**. За свойстото **maring** може да се използва буквата **n** пред стойнността когато е необходимо тя да бъде отрицателна.

Префиксите, които се изполват за двате стойства са:
- **m** - за margin
- **p** - за padding

Тези две свойства имаме и допълнителни префикси за посоката в която желаете да поставите остоянието. Те са:

- **t** - за top
- **r** - за right
- **b** - за bottom
- **l** - за left
- **x** - за left и right
- **y** - за top и bottom

За свойтсвото **maring** се генерира и стойност auto,като се изпова буквата **a** на мястото за стойност.

```scss
/* Spacing */
$spacers: (
  0: 0,
  5: 5px,
  8: 8px,
  10: 10px,
  12: 12px,
  15: 15px,
  20: 20px,
  25: 25px,
  30: 30px,
  35: 35px,
  40: 40px,
  45: 45px,
  50: 50px,
  60: 60px,
  70: 70px,
  80: 80px,
  90: 90px,
  100: 100px,
  120: 120px,
  160: 160px,
);
```

CSS класове за свойство **maring**

```css
/* За всички резолюции */
m-0
mt-0
mb-0
mr-0
ml-0
my-0
mx-0
m-5
mt-5
mb-5
mr-5
ml-5
my-5
mx-5
m-n5
mt-n5
mb-n5
mr-n5
ml-n5
my-n5
mx-n5
...
m-a
mt-a
mb-a
mr-a
ml-a
my-a
mx-a

/* За екрани които са точно за md точката на прекъсване. */
m-o-md-0
mt-o-md-0
mb-o-md-0
mr-o-md-0
ml-o-md-0
my-o-md-0
mx-o-md-0
m-o-md-5
mt-o-md-5
mb-o-md-5
mr-o-md-5
ml-o-md-5
my-o-md-5
mx-o-md-5
m-o-md-n5
mt-o-md-n5
mb-o-md-n5
mr-o-md-n5
ml-o-md-n5
my-o-md-n5
mx-o-md-n5
...
m-o-md-a
mt-o-md-a
mb-o-md-a
mr-o-md-a
ml-o-md-a
my-o-md-a
mx-o-md-a

/* За екрани които са по-големи от md точката на прекъсване. */
m-u-md-0
mt-u-md-0
mb-u-md-0
mr-u-md-0
ml-u-md-0
my-u-md-0
mx-u-md-0
m-u-md-5
mt-u-md-5
mb-u-md-5
mr-u-md-5
ml-u-md-5
my-u-md-5
mx-u-md-5
m-u-md-n5
mt-u-md-n5
mb-u-md-n5
mr-u-md-n5
ml-u-md-n5
my-u-md-n5
mx-u-md-n5
...
m-u-md-a
mt-u-md-a
mb-u-md-a
mr-u-md-a
ml-u-md-a
my-u-md-a
mx-u-md-a

/* За екрани които са по-малко от md точката на прекъсване. */
m-d-md-0
mt-d-md-0
mb-d-md-0
mr-d-md-0
ml-d-md-0
my-d-md-0
mx-d-md-0
m-d-md-5
mt-d-md-5
mb-d-md-5
mr-d-md-5
ml-d-md-5
my-d-md-5
mx-d-md-5
m-d-md-n5
mt-d-md-n5
mb-d-md-n5
mr-d-md-n5
ml-d-md-n5
my-d-md-n5
mx-d-md-n5
...
m-d-md-a
mt-d-md-a
mb-d-md-a
mr-d-md-a
ml-d-md-a
my-d-md-a
mx-d-md-a
```

CSS класове за свойство **padding**

```css
/* За всички резолюции */
p-0
pt-0
pb-0
pr-0
pl-0
py-0
px-0
p-5
pt-5
pb-5
pr-5
pl-5
py-5
px-5
...
p-a
pt-a
pb-a
pr-a
pl-a
py-a
px-a

/* За екрани които са точно за md точката на прекъсване. */
p-o-md-0
pt-o-md-0
pb-o-md-0
pr-o-md-0
pl-o-md-0
py-o-md-0
px-o-md-0
p-o-md-5
pt-o-md-5
pb-o-md-5
pr-o-md-5
pl-o-md-5
py-o-md-5
px-o-md-5
...
p-o-md-a
pt-o-md-a
pb-o-md-a
pr-o-md-a
pl-o-md-a
py-o-md-a
px-o-md-a

/* За екрани които са по-големи от md точката на прекъсване. */
p-u-md-0
pt-u-md-0
pb-u-md-0
pr-u-md-0
pl-u-md-0
py-u-md-0
px-u-md-0
p-u-md-5
pt-u-md-5
pb-u-md-5
pr-u-md-5
pl-u-md-5
py-u-md-5
px-u-md-5
p-u-md-n5
pt-u-md-n5
pb-u-md-n5
pr-u-md-n5
pl-u-md-n5
py-u-md-n5
px-u-md-n5
...
p-u-md-a
pt-u-md-a
pb-u-md-a
pr-u-md-a
pl-u-md-a
py-u-md-a
px-u-md-a

/* За екрани които са по-малко от md точката на прекъсване. */
p-d-md-0
pt-d-md-0
pb-d-md-0
pr-d-md-0
pl-d-md-0
py-d-md-0
px-d-md-0
p-d-md-5
pt-d-md-5
pb-d-md-5
pr-d-md-5
pl-d-md-5
py-d-md-5
px-d-md-5
p-d-md-n5
pt-d-md-n5
pb-d-md-n5
pr-d-md-n5
pl-d-md-n5
py-d-md-n5
px-d-md-n5
...
p-d-md-a
pt-d-md-a
pb-d-md-a
pr-d-md-a
pl-d-md-a
py-d-md-a
px-d-md-a
```

- **Text styles** - settings/_text.scss
Генерират се класове за flex елементите **flex**, **color**, **text-align**, **text-transform**, **text-decoration**, **font-size**, **line-height**, **font-family**, **font-weight**, **font-style**, **letter-spacing**

```scss
/* Text */

/* Text Colors */
$text-color-prefix: 'tc';
$text-colors: map-merge((),
$theme-colors);

/* Text Align */
$text-align-prefix: 'ta';
$text-aligns: (
  'l': left,
  'c': center,
  'r': right,
  'j': justify
);

/* Text Transform */
$text-transform-prefix: 'tt';
$text-transforms: (
  'n': none,
  'l': lowercase,
  'u': uppercase,
  'c': capitalize,
  'j': justify
);

/* Text Decaration */
$text-decoration-prefix: 'td';
$text-decorations: (
  'n': none,
  'u': underline,
);

/* Font Sizes */
$font-size-prefix: 'fs';
$font-sizes: (
  '0' : 0,
  '10': 10px,
  '11': 11px,
  '12': 12px,
  '13': 13px,
  '14': 14px,
  '15': 15px,
  '16': 16px,
  '18': 18px,
  '20': 20px,
  '22': 22px,
  '24': 24px,
  '26': 26px,
  '30': 30px,
  '40': 40px,
  '50': 50px,
  '60': 60px,
);

/* Font Sizes */
$line-height-prefix: 'lh';
$line-heights: (
  '0'  : 0,
  '1'  : 1,
  '1-2': 1.2,
  '1-4': 1.4,
  '1-5': 1.5,
);

/* Font Families */
$font-family-prefix: 'ff';
$font-families: (
  'b' : $font-family-base,
  'h' : $headings-font-family,
);

/* Font Weights */
$font-weight-prefix: 'fw';
$font-weights: (
  'l' : $font-weight-light,
  'n' : $font-weight-normal,
  'm' : $font-weight-medium,
  'sb': $font-weight-semibold,
  'b' : $font-weight-bold,
  'bl': $font-weight-black
);

/* Font Styles */
$font-style-prefix: 'fst';
$font-styles: (
  'i': italic
);

/* Letter Spacing */
$letter-spacing-prefix: 'ls';
$letter-spaings: (
  '0': 0,
  '1': 1px,
  '2': 2px
);
```

CSS класове за свойство **text-color**
За свойството **text-color** може да се прилога и за елементи при преминава с мишката (hover) и елемент имащи клас .active. Добавят се следните буктви в клас:
- **h** - за hover
- **a** - за active

```css
/* За всички резолюции */
tc-1
tc-h-1
tc-a-1
tc-2
tc-h-2
tc-a-2
tc-3
tc-h-3
tc-a-3
...
tc-w
tc-h-w
tc-a-w
tc-b
tc-h-b
tc-a-b
tc-i
tc-h-i
tc-a-i

/* За екрани които са точно за md точката на прекъсване. */
tc-o-md-1
tc-h-o-md-1
tc-a-o-md-1
tc-o-md-2
tc-h-o-md-2
tc-a-o-md-2
tc-o-md-3
tc-h-o-md-3
tc-a-o-md-3
...
tc-o-md-w
tc-h-o-md-w
tc-a-o-md-w
tc-o-md-b
tc-h-o-md-b
tc-a-o-md-b
tc-o-md-i
tc-h-o-md-i
tc-a-o-md-i

/* За екрани които са по-големи от md точката на прекъсване. */
tc-u-md-1
tc-h-u-md-1
tc-a-u-md-1
tc-u-md-2
tc-h-u-md-2
tc-a-u-md-2
tc-u-md-3
tc-h-u-md-3
tc-a-u-md-3
...
tc-u-md-w
tc-h-u-md-w
tc-a-u-md-w
tc-u-md-b
tc-h-u-md-b
tc-a-u-md-b
tc-u-md-i
tc-h-u-md-i
tc-a-u-md-i

/* За екрани които са по-малко от md точката на прекъсване. */
tc-d-md-1
tc-h-d-md-1
tc-a-d-md-1
tc-d-md-2
tc-h-d-md-2
tc-a-d-md-2
tc-d-md-3
tc-h-d-md-3
tc-a-d-md-3
...
tc-d-md-w
tc-h-d-md-w
tc-a-d-md-w
tc-d-md-b
tc-h-d-md-b
tc-a-d-md-b
tc-d-md-i
tc-h-d-md-i
tc-a-d-md-i
```

За останалите точки на прекъсване се сменят префиксите за **up, down, only** и размера на екрана **xs, sm, md, lg**.

- **Verticla Align** - settings/_align.scss

Генерират се класове за вертицално подрованяне на css свойството **vertical-align**

```scss
/* Vertical Align */
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
/* За всички резолюции */
va-base
va-t
va-m
va-b
va-tt
va-tb

/* За екрани които са точно за md точката на прекъсване. */
va-o-md-base
va-o-md-t
va-o-md-m
va-o-md-b
va-o-md-tt
va-o-md-tb

/* За екрани които са по-големи от md точката на прекъсване. */
va-u-md-base
va-u-md-t
va-u-md-m
va-u-md-b
va-u-md-tt
va-u-md-tb

/* За екрани които са по-малко от md точката на прекъсване. */
va-d-md-base
va-d-md-t
va-d-md-m
va-d-md-b
va-d-md-tt
va-d-md-tb
```

За останалите точки на прекъсване се сменят префиксите за **up, down, only** и размера на екрана **xs, sm, md, lg**.


