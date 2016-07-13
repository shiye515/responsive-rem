# responsive-rem
基于 rem 的移动端响应式布局方案

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/responsive-rem.svg?style=flat-square
[npm-url]: http://npmjs.org/package/responsive-rem
[download-image]: https://img.shields.io/npm/dm/responsive-rem.svg?style=flat-square
[download-url]: https://npmjs.org/package/responsive-rem


## install

[![responsive-rem](https://nodei.co/npm/responsive-rem.png)](https://npmjs.org/package/responsive-rem)

`npm install responsive-rem`

## 用法

初始化
```javascript
import rrem from 'responsive-rem'
rrem([designWidth[, remSize]])
```

### designWidth
- type: Number
- default: 750
- desc: 设计稿宽度

### remSize
- type: Number
- default: 10
- desc: 1rem 的宽度，单位px