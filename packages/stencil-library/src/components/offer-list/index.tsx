import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'offer-list',
  shadow: true,
})
export class OfferList {
  // @Event() offerClick: EventEmitter<string>;
  @State() offers = [
    { offerId: '1', name: 'Assinatura Mensal', description: 'Acesso por 30 dias', price: 'R$ 29,90' },
    { offerId: '2', name: 'Assinatura Trimestral', description: 'Acesso por 3 meses', price: 'R$ 79,90' },
    { offerId: '3', name: 'Assinatura Anual', description: 'Acesso por 12 meses', price: 'R$ 249,90' },
  ];

  navigateToDetail = (offerId: string) => {
    window.location.href = '/offer-details/' + offerId;
  };

  render() {
    return (
      <div>
        <h2>Ofertas</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.offers.map(offer => (
            <offer-card offerId={offer.offerId} name={offer.name} description={offer.description} price={offer.price} onClick={() => this.navigateToDetail(offer.offerId)} />
          ))}
        </div>
      </div>
    );
  }
}
