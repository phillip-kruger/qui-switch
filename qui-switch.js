import { LitElement, html, css} from 'lit';

/**
 * Switch UI Component 
 */
export class QuiSwitch extends LitElement {
    
    static styles = css`
        :host {
            --switch-width: 2.75rem; /* Default width */
            --switch-height: 1.65rem; /* Default height */
            --knob-size: calc(var(--switch-height) - 0.4rem);
        }
        input {
            appearance: none;
            position: relative;
            display: inline-block;
            background: var(--lumo-contrast-10pct, hsla(214, 57%, 24%, 0.1));
            height: var(--switch-height);
            width: var(--switch-width);
            vertical-align: middle;
            border-radius: 2rem;
            box-shadow: 0px 1px 3px var(--lumo-contrast-20pct, hsla(214, 53%, 23%, 0.16)) inset;
            transition: 0.25s linear background;
        }
        input::before {
            content: "";
            display: block;
            width: var(--knob-size);
            height: var(--knob-size);
            background: var(--lumo-base-color, hsla(0, 100%, 100%, 1.0));
            border-radius: 50%;
            position: absolute;
            top: 0.2rem;
            left: 0.2rem;
            box-shadow: 0px 1px 3px var(--lumo-contrast-20pct, hsla(214, 53%, 23%, 0.16));
            transition: 0.25s linear transform;
        }
        input:focus {
            outline: none;
        }
        input:checked {
            background: var(--lumo-success-color, hsla(145, 72%, 30%, 1.0));
        }
        input:checked::before {
            transform: translateX(calc(var(--switch-width) - var(--knob-size) - 0.4rem));
        }
        .label {
            color: var(--lumo-body-text-color, hsla(214, 40%, 16%, 0.94));
        }
    `;

    static properties = {
        label: {type: String},
        checked: {type: Boolean, reflect: true},
        size: {type: String}
    };

    constructor(){
        super();
        this.label = null;
        this.checked = false; // Default unchecked
        this.size = 'normal'; // Default size
    }

    connectedCallback() {
        super.connectedCallback();
    }
    
    updated(changedProperties) {
        if (changedProperties.has('size')) {
            this.updateSize();
        }
    }

    updateSize() {
        switch (this.size) {
            case 'tiny':
                this.style.setProperty('--switch-width', '1.75rem');
                this.style.setProperty('--switch-height', '1rem');
                break;
            case 'small':
                this.style.setProperty('--switch-width', '2.25rem');
                this.style.setProperty('--switch-height', '1.35rem');
                break;
            case 'normal':
                this.style.setProperty('--switch-width', '2.75rem');
                this.style.setProperty('--switch-height', '1.65rem');
                break;
            case 'large':
                this.style.setProperty('--switch-width', '3.5rem');
                this.style.setProperty('--switch-height', '2.1rem');
                break;
            default:
                // Check if the value is a valid custom size in pixels
                if (this.size.endsWith('px')) {
                    let sizeValues = this.size.split('x');
                    if (sizeValues.length === 2) {
                        this.style.setProperty('--switch-width', sizeValues[0]);
                        this.style.setProperty('--switch-height', sizeValues[1]);
                    }
                }
                break;
        }
    }

    render() {
        return html`<label>
                        <input type="checkbox" ?checked="${this.checked}" @click="${this._click}"/>
                        ${this._renderLabel()}
                    </label>`;
    }

    _renderLabel() {
        if (this.label) {
            return html`<span class="label">${this.label}</span>`;
        }
    }

    _click(e) {
        this.checked = !this.checked;

        // Dispatch the event with the new checked state
        this.dispatchEvent(new CustomEvent('valueChanged', {
            detail: { checked: this.checked },
            bubbles: true,
            composed: true
        }));
    }

}
customElements.define('qui-switch', QuiSwitch);