import { Component, h, Element, Prop, Method, State, Listen } from "@stencil/core";

@Component({
    tag: 'my-modal-bundle'
})
export class MyModalBundle {

    @Element() modalEl: HTMLElement;

    @Prop() titles: string;
    @Prop() content: string;

    @State() show = true;

    @Method() async open() {
        this.show = true;
    }

    @Listen('my-modal:close')
    closeModalHandler() {
        this.show = false;
    }

    render() {
        let content = null;
        if (this.show) {
            content = [<my-backdrop></my-backdrop>,
            <my-modal titles={this.titles} content={this.content}></my-modal>]
        }
        return content;
    }
}