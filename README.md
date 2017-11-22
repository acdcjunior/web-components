# Web Components Implementation Examples

Online demo: https://acdcjunior.github.io/web-components/

# v0

The [Web Components **`v0`** example implementations](v0/index.html) folder shows:

- `custom-elements-basic-example-es5`: minimal Web Components `v0` example using `ES5`
- `custom-elements-basic-example-es2015`: minimal Web Components `v0` example using `ES2015` (`ES6`)
- `custom-elements-basic-example-ts`: minimal Web Components `v0` example using `TypeScript`
- `extends-example`: example of Web Components `v0` extending a (browser) native `input` component
- `template-example`: example of Web Components `v0` cloning and using a `template` tag
- `shadow-dom-example`: example of Web Components `v0` using the `Shadow DOM`
- `insert-using-js`: example of Custom Element `v0` inserted programmatically
- `html-import-example`: example of nested `HTML Import`s and load/error event callback functions

# v1

The [Web Components **`v1`** example implementations](v1/index.html) folder shows:

- `custom-element-v1-es2015`: minimal Custom Element `v1` example using `ECMAScript 2015` (`ES6`)
- `shadow-dom-v1-example`: example of Web Components `v1` using the `Shadow DOM`


# From v0 to v1

- Custom Elements v1 are not compatible with ES5-style classes.
 [There are polyfills](https://github.com/webcomponents/custom-elements#es5-vs-es2015) and workarounds, but they don't work seamlessly (may not actually use the native implementation, just the polyfilled one) and at best and have many limitations.
- HTML Imports are dead. They are being replaced by ES6 Modules, which already have some browser support.

# Single file Components

A common way to implement was to declare the custom element's HTML (`<template>`) and JavaScript code (`<script>`) in a single
HTML file and import it whenever needed.

But now that HTML Imports are deprecated, this approach can no longer be used. What happens and what are the alternatives?

The first consequence is the `.html` file will become a `.js` that will be loaded as a ES6 Module. How to load the template?

- Have the template as a string in the `.js` file;
- Load the template via Ajax;
- Add a build step (with webpack, gulp, etc.) and inline the HTML file;
- Wait for the browsers and see what they will come up with.

## Custom Elements



#### Migration Guide

| v0  | v1 |
| ------------- | ------------- |
| `document.registerElement('tag', {prototype, extends})` | `customElements.define('tag', class, {extends})` |
| `createdCallback()`  | `constructor()` |
| `attachedCallback()`  | `connectedCallback()` |
| `detachedCallback()`  | `disconnectedCallback()` |
| `attributeChangedCallback(a,o,n)`  | `attributeChangedCallback(a,o,n)` + `static get observedAttributes()` |
| -  | `adoptedCallback()` |
| - | `customElements.whenDefined()` |
| `ElmtClass = document.registerElement(...)` | `ElmtClass = customElements.get('tag')` |
| | |
| `.createShadowRoot()` | `.attachShadow({mode: 'open'});` |
