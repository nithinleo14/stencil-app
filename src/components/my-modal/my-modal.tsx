import { Component, h, Method, Element, Prop, State, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: 'my-modal',
    styleUrl: "my-modal.css"
})
export class MyModal {

    buttons = ['Okay', 'Cancel']

    @Element() modalEl: HTMLElement;

    @Prop() titles: string;
    @Prop() content: string;

    @State() showOptions = true;

    @Event() close: EventEmitter;

    @Method() async open() {
        this.modalEl.style.
            display = 'block';
    }

    showOptionsHandler() {
        this.showOptions = true;

    }

    closeModalHandler() {
        // this.modalEl.style.display = 'none';
        this.showOptions = false;
        this.close.emit();
    }

    render() {
        let options = null;

        if (this.showOptions) {
            options = (
                this.buttons.map(btn => (
                    <button onClick={this.closeModalHandler.bind(this)}>{btn}</button>
                )));
        }
        return (
            <div>
                <h1>{this.titles}</h1>
                <p>{this.content}</p>
                <hr />
                <button onClick={this.showOptionsHandler.bind(this)}>Show Options</button>
                <hr />
                {options}
            </div>
        )

    }
}