"use strict";
class BasicExampleTypeScript extends HTMLElement {
    createdCallback() {
        // called when the element is registered.
        console.log('custom-elements-basic-example-ts: createdCallback() of custom-elements-basic-example-ts');
        let _bucketSpan = document.createElement('span');
        _bucketSpan.innerHTML = 'bucketSpan/TypeScript initial';
        this.appendChild(_bucketSpan);
        this._bucketSpan = _bucketSpan;
    }
    attachedCallback() {
        // called when the element is added to the DOM
        console.log('custom-elements-basic-example-ts: attachedCallback() of custom-elements-basic-example-ts');
    }
    detachedCallback() {
        // called when the element is removed from the DOM
        console.log('custom-elements-basic-example-ts: detachedCallback() of custom-elements-basic-example-ts');
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        // called when an (observed) attribute is added, changed or removed
        console.log('custom-elements-basic-example-ts: attributeChangedCallback() of custom-elements-basic-example-ts', attr, oldValue, newValue);
    }
    get bucket() {
        return 'Bucket: ' + this._bucketSpan.innerHTML;
    }
    set bucket(newContent) {
        console.log('custom-elements-basic-example-ts: Setting bucket to \"' + newContent + '"!');
        this._bucketSpan.innerHTML = 'bucketSpan/TypeScript ' + newContent;
    }
    blink() {
        // example of custom method
        this._bucketSpan.style.color = this.getAttribute("blink-color");
    }
}
document.registerElement('custom-elements-basic-example-ts', BasicExampleTypeScript);
