import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return{
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      class: { type: String },
    };
  }

    static get styles() {
      return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
        text-transform: uppercase;
        font-style: italic;
        padding: 12px 16px 12px 24px;
        font-weight: bold;
      }
      
              /*
                    .link:hover,
                    :host([active]) .link {
                      background-color: #e4e5e7;
                      border: 2px solid #e4e5e7;
                      border-radius: 2px;
                      color: #005fa9;
                      cursor: pointer;
                      text-decoration: underline;
                    }
                    */
                    /*
                    .link {
                      text-decoration: none;
                      padding: 8px 4px;
                      border: 2px solid #444;
                      color: #444;
                      font-size: 16px;
                    }
              */
                    
      .primaryOutlined {
        border: 2px solid #005fa9;
        background-color: #fff;
        color: #005fa9;
        padding: 12px 16px 12px 24px;
        border-radius: 4px;
      }

      .primaryOutlined:hover,
      :host([active]) .primaryOutlined {
        background-color: #005fa9;
        border: 2px solid #005fa9;
        border-radius: 2px;
        color: #fff;
        cursor: pointer;
        text-decoration: underline;
        border-radius: 4px;
      }

      .primaryFilled {
        background-color: #005fa9;
        border: 2px solid #005fa9;
        padding: 12px 16px 12px 24px;
        color: #fff;
        border: 2px solid #005fa9;
        border-radius: 4px;
      }

      .primaryFilled:hover,
      :host([active]) .primaryFilled {
        background-color: #fff;
        border: 2px solid #005fa9;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
        border-radius: 4px;
      }

      .tinted {
        background-color: #005fa9;
        border: 2px solid #fff;
        padding: 12px 16px 12px 24px;
        color: #fff;
        border: 2px solid #005fa9;
        opacity: 0.5;
        border-radius: 4px;
      }

      .tinted:hover,
      :host([active]) .tinted {
        background-color: #fff;
        border: 2px solid #005fa9;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
        border-radius: 4px;
      }

      .lightOutlined {
        border: 2px solid #fff;
        color: #fff;
        padding: 12px 16px 12px 24px;
        border-radius: 4px;
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = "https://www.psu.edu/news/research/";
    this.class = '';
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}
