import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'toast-wrapper',
  shadow: true,
})
export class ToastWrapper {
  @Element() el: HTMLElement;

  @Prop() variant: 'success' | 'error' | 'info' = 'info';
  @Prop() message: string;

  handleClick = () => {
    const toast = this.el.shadowRoot?.querySelector('toast-message') as HTMLToastMessageElement;
    if (toast) {
      toast.showToast();
    }
  };

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          <slot name="trigger" />
        </div>
        <toast-message variant={this.variant} message={this.message}></toast-message>
      </div>
    );
  }
}
