import { html, css, LitElement } from 'lit';

class MyCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: var(--card-width, 300px);
      padding: 16px;
      border: 1px solid var(--card-border-color, #ddd);
      border-radius: 8px;
      background-color: var(--card-bg, #fff);
      text-align: center;
      margin: 10px auto;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 100%;
      height: var(--card-img-height, 200px);
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 8px;
    }

    h2 {
      font-size: var(--card-title-size, 1.25rem);
      color: var(--card-title-color, #333);
    }

    p {
      font-size: var(--card-text-size, 1rem);
      color: var(--card-text-color, #666);
    }

    a {
      display: inline-block;
      padding: 8px 16px;
      background-color: var(--card-btn-bg, #007bff);
      color: var(--card-btn-color, #fff);
      text-decoration: none;
      border-radius: 4px;
      margin-top: 10px;
    }
  `;

  static properties = {
    title: { type: String },
    image: { type: String },
    description: { type: String },
    link: { type: String },
  };

  constructor() {
    super();
    this.title = 'Default Title';
    this.image = 'https://via.placeholder.com/300x200';
    this.description = 'Default description.';
    this.link = '#';
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.image}" alt="Card Image">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <a href="${this.link}">Details</a>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);


globalThis.customElements.define(MyCard.tag, MyCard);
