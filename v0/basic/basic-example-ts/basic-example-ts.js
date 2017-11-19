"use strict";
class BasicExampleTypeScript extends HTMLElement {
    createdCallback() {
        // called when the element is registered.
        console.log('basic-example-ts: createdCallback() of basic-example-ts');
        let _bucketSpan = document.createElement('span');
        _bucketSpan.innerHTML = 'bucketSpan/TypeScript initial';
        this.appendChild(_bucketSpan);
        this._bucketSpan = _bucketSpan;
    }
    attachedCallback() {
        // called when the element is added to the DOM
        console.log('basic-example-ts: attachedCallback() of basic-example-ts');
    }
    detachedCallback() {
        // called when the element is removed from the DOM
        console.log('basic-example-ts: detachedCallback() of basic-example-ts');
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        // called when an (observed) attribute is added, changed or removed
        console.log('basic-example-ts: attributeChangedCallback() of basic-example-ts', attr, oldValue, newValue);
    }
    get bucket() {
        return 'Bucket: ' + this._bucketSpan.innerHTML;
    }
    set bucket(newContent) {
        console.log('basic-example-ts: Setting bucket to \"' + newContent + '"!');
        this._bucketSpan.innerHTML = 'bucketSpan/TypeScript ' + newContent;
    }
    blink() {
        // example of custom method
        this._bucketSpan.style.color = this.getAttribute("blink-color");
    }
}
document.registerElement('basic-example-ts', BasicExampleTypeScript);
