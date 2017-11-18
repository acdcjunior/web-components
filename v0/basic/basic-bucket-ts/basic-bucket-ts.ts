
class BasicBucketTypeScript extends HTMLElement {

    // use when extending another component, but the class must extend it as well, and must use "is"
    // static get extends() { return extends: 'other-element' ; }

    // when omitted, it observes all attributes
    // static get observedAttributes() { return ['observedAttributeOne', 'observedAttributeTwo']; }

    _bucketSpan: HTMLSpanElement;

    createdCallback() {
        // called when the element is registered.
        console.log('basic-bucket-ts: createdCallback() of basic-bucket-ts');

        let _bucketSpan = document.createElement('span');
        _bucketSpan.innerHTML = 'bucketSpan/TypeScript initial';
        this.appendChild(_bucketSpan);
        this._bucketSpan = _bucketSpan;
    }

    attachedCallback() {
        // called when the element is added to the DOM
        console.log('basic-bucket-ts: attachedCallback() of basic-bucket-ts');
    }
    detachedCallback() {
        // called when the element is removed from the DOM
        console.log('basic-bucket-ts: detachedCallback() of basic-bucket-ts');
    }

    attributeChangedCallback(attr: string, oldValue: any, newValue: any) {
        // called when an (observed) attribute is added, changed or removed
        console.log('basic-bucket-ts: attributeChangedCallback() of basic-bucket-ts', attr, oldValue, newValue);
    }

    get bucket() {
        return 'Bucket: ' + this._bucketSpan.innerHTML;
    }
    set bucket(newContent) {
        console.log('basic-bucket-ts: Setting bucket to \"' + newContent + '"!');
        this._bucketSpan.innerHTML = 'bucketSpan/TypeScript ' + newContent;
    }

    blink() {
        // example of custom method
        this._bucketSpan.style.color = this.getAttribute("blink-color");
    }
}

(<any>document).registerElement('basic-bucket-ts', BasicBucketTypeScript);