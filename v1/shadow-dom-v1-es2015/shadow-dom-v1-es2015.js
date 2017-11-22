console.log('loaded');

class ShadowDomElementV1 extends HTMLElement {
    constructor() {
        super(); // mandatory

        console.log('constructed');

        // 'this' below is the current component
        const thisComponent = this;

        // now, instead of appending the children elements to the 'thisComponent', we create a Shadow DOM and append them to it, instead
        let thisShadowDom = thisComponent.attachShadow({mode: 'open'});


        // get the template from this document
        let templateButton = `Here's the template button: <button id="shadow-dom-button">CLICK ME</button>`;
        // clone it (deep cloning)
        // let documentFragment = document.createElement();
        // documentFragment.innerHTML = templateButton;


        // append to this component
        // since we are appending to the Shadow DOM, the <button> will not be affected by global styles (unless they contain "/deep/" or "::shadow")
        thisShadowDom.innerHTML += templateButton;


        // we are selecting the button inside the template we just appended
        let clickMeButton = thisShadowDom.querySelector("#shadow-dom-button");

        clickMeButton.addEventListener('click', function () {
            let templateText = `
                <style> 
                    button {
                        background-color: orange;
                        border: 3px dashed red;
                    }
                    /* this style will only have effect when added to the DOM and, if added directly to the DOM, will
                     affect every button! (If added to the Shadow DOM of a component, will only affect that component.) */
                 </style>
            `;

            let newDiv = document.createElement('div');
            newDiv.innerHTML = templateText;

            // at this point the <style> declared at #shadow-dom-template-text will take effect, but since it
            // is in the Shadow DOM, it will only be applied this component (and style the #shadow-dom-button, not all buttons)
            thisShadowDom.appendChild(newDiv);
        });
    }
}

customElements.define('shadow-dom-v1-es2015', ShadowDomElementV1);