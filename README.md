# Jettix

    Under construction

## About

HTML, CSS, SCSS, JavaScript Framework.

## Usage

```shell
npm install jettix --save-dev
```

## Особенности

### Locator

```scss
//_variables.scss
$locator: ".%" !default;
```

#### Standard mode "."

Как большинство современных фреймворков, пачкаем HTML и делаем тяжелым CSS.
Хотя можно минимизаторами удалить из скомпилированного CSS лишние.

```html

<div class="grid-12">
    <div class="col-4 col-b10-3 col-b8-2 off-b6"></div>
    <div class="col-8 col-b10-9 col-b8-10 col-b6-12"></div>
</div>
```

#### SCSS develop mode "%"

Для облегчения компилируемого CSS и чистого HTML.

```html

<div class="main">
    <div class="sidebar"></div>
    <div class="content"></div>
</div>
```

```scss
.main {
    @extend %grid-12;

    .sidebar {
        @extend %col-4, %col-b10-3, %col-b8-2, %off-b6;
    }

    .sidebar {
        @extend %col-8, %col-b10-9, %col-b8-10, %col-b6-12;
    }
}
```

#### Debug mode ".%" or "%."

Включает возможность 2х предыдущих модов.
