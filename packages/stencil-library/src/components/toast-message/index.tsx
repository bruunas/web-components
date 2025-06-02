import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'toast-message',
  styleUrl: 'styles.css',
  shadow: true,
})
export class ToastMessage {
  @Prop() variant: 'success' | 'error' | 'info' = 'info';
  @Prop() message: string;
  @State() visible = false;

  @Method()
  async showToast() {
    this.visible = true;
    setTimeout(() => (this.visible = false), 3000); // Toast desaparece após 3s
  }

  render() {
    return <div class={{ toast: true, visible: this.visible, [this.variant]: true }}>{this.message}</div>;
  }
}
