import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'offer-detail',
  shadow: true,
})
export class OfferDetail {
  @Prop() offerId: string;
  @State() offer: any = null;

  private mockOffers = [
    { offerId: '1', name: 'Assinatura Mensal', description: 'Acesso por 30 dias', price: 'R$ 29,90' },
    { offerId: '2', name: 'Assinatura Trimestral', description: 'Acesso por 3 meses', price: 'R$ 79,90' },
    { offerId: '3', name: 'Assinatura Anual', description: 'Acesso por 12 meses', price: 'R$ 249,90' },
  ];

  componentWillLoad() {
    const id = this.offerId;
    this.offer = this.mockOffers.find(o => o.offerId === id);
  }

  render() {
    if (!this.offer) return <p>Oferta não encontrada.</p>;

    return (
      <div>
        <h2>{this.offer.name}</h2>
        <p>{this.offer.description}</p>
        <strong>{this.offer.price}</strong>
        <br />
        <button onClick={() => window.history.back()}>Voltar</button>
      </div>
    );
  }
}
