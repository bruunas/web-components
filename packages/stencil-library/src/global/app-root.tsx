import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  @State() route: string = '';

  componentWillLoad() {
    window.addEventListener('hashchange', () => this.setRoute());
    this.setRoute();
  }

  setRoute() {
    this.route = window.location.hash || '#/';
  }

  render() {
    const match = this.route.match(/^#\/offer\/(\d+)/);
    if (match) {
      const id = match[1];
      return <offer-detail offerId={id} />;
    }

    return <offer-list />;
  }
}
