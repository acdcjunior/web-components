class BasicCustomElementV1 extends HTMLElement {

    constructor() {
        super(); // mandatory

        //3 An instance of the element is created or upgraded. Useful for initializing state, settings up event
        //3 listeners, or creating shadow dom. See the spec for restrictions on what you can do in the constructor.

        // called when the element is registered.
        console.log('custom-element-v1-es2015: constructor() of custom-element-v1-es2015');

        let _bucketSpan = document.createElement('span');
        _bucketSpan.innerHTML = 'bucketSpan/ES2015 initial';
        this.appendChild(_bucketSpan);
        this._bucketSpan = _bucketSpan;
    }

    connectedCallback() {
        // called when the element is added to the DOM
        console.log('custom-element-v1-es2015: connectedCallback() of custom-element-v1-es2015');
    }

    disconnectedCallback() {
        // called when the element is removed from the DOM
        console.log('custom-element-v1-es2015: disconnectedCallback() of custom-element-v1-es2015');
    }

    // lists which attribute are observed (aka will emit attributeChangedCallback() calls)
    static get observedAttributes() { return ['attribute-via-js']; }

    attributeChangedCallback(attr, oldValue, newValue) {
        // called when an (observed) attribute is initialized (declaratively), added, changed or removed -- see observedAttributes to limit what attrs to observe
        console.log('custom-element-v1-es2015: attributeChangedCallback() of custom-element-v1-es2015', attr, oldValue, newValue);
    }

    adoptedCallback() {
        //# The custom element has been moved into a new document (e.g. someone called document.adoptNode(el)).
        console.log('custom-element-v1-es2015: adoptedCallback() of custom-element-v1-es2015');
    }

    // example of custom property
    get bucket() {
        return 'Bucket: ' + this._bucketSpan.innerHTML;
    }
    set bucket(newContent) {
        console.log('custom-element-v1-es2015: Setting bucket to \"' + newContent + '"!');
        this._bucketSpan.innerHTML = 'bucketSpan/ES2015 ' + newContent;
    }

    blink() {
        // example of custom method
        this._bucketSpan.style.color = this.getAttribute("blink-color");
    }
}

/*
 * To use this element we can:
 * - <custom-element-v1-es2015></custom-element-v1-es2015>
 * - document.body.appendChild(customElements.get('custom-element-v1-es2015'));
 * - document.body.appendChild(document.createElement('custom-element-v1-es2015'));
 *
 * Will not work:
 * - <div is="custom-element-v1-es2015"></div>
 */
customElements.define('custom-element-v1-es2015', BasicCustomElementV1 /*, {extends: 'parent-element'} */);
customElements.whenDefined('custom-element-v1-es2015').then(() => {
    console.log('custom-element-v1-es2015: -whenDefined- it was defined!');
});

window.BasicCustomElementV1__2 = customElements.get('custom-element-v1-es2015');