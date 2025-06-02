import { Component, EventEmitter, Prop, h, Event } from '@stencil/core';

@Component({
  tag: 'offer-card',
  styleUrl: 'styles.css',
  shadow: true,
})
export class OfferCard {
  @Prop() offerId: string;
  @Prop() name: string;
  @Prop() description: string;
  @Prop() price: string;
  @Event() offerClick: EventEmitter<string>;

  navigateToDetail = () => {
    this.offerClick.emit(this.offerId);
  };

  render() {
    return (
      <div class="card" onClick={this.navigateToDetail}>
        <h3>{this.name}</h3>
        <p>{this.description}</p>
        <strong>{this.price}</strong>
      </div>
    );
  }
}
