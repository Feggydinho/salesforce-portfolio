import { LightningElement, api } from 'lwc';

export default class ClockDropDown extends LightningElement {
    @api label = '';
    @api options = [];
    @api uniqueId = '';

    changeHandler(event) {
        this.callParent(event.target.value);
    }

    callParent(value) {
        this.dispatchEvent(new CustomEvent('optionhandler', {
            detail: {
                label: this.label,
                value: value
            }
        }))
    }

    @api
    reset(value) {
        this.template.querySelector('selector').value = value
        this.callParent(value)
    }
}