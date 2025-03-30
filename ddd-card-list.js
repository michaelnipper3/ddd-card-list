/**
 * Copyright 2025 michaelnipper3
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./ddd-card.js";
/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: flex;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        display: flex;
        flex-wrap: wrap;
      }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <ddd-card 
      title = "Abington Campus"
      image = "https://images.ctfassets.net/ni9rh5nu0d99/1paFaX2Dc7iHh9Z6K7mIim/1427b9970ff21dd9c8a770067638efc1/abington-02.jpg?fm=webp&w=1080&q=75"
      link = "https://www.psu.edu/academics/campuses/abington">
      <p>Close to Philadelphia, Penn State Abington's suburban campus offers bachelor's degrees, athletics, and a diverse student community.</p>  
      </ddd-card>
      <ddd-card
        title = "Altoona Campus"
        image = "https://images.ctfassets.net/ni9rh5nu0d99/6oBUNrVTNPJaoE9ahnVX2E/2c655bdcf28befdf81d5a24248a9dca5/altoona-01.jpg?fm=webp&w=1080&q=75"
        link = "https://www.psu.edu/academics/campuses/altoona">
        <p>In central Pennsylvania close to University Park, Penn State Altoona offers the appeal of a small college with the prestige of a major research university.</p>
      </ddd-card>
      <ddd-card
        title = "Beaver Campus"
        image = "https://images.ctfassets.net/ni9rh5nu0d99/C6YPZMqHyRaPeRrVTun8k/1ca61866afa1b3d903944a38ea34cecc/beaver-01.jpg?fm=webp&w=1080&q=75"
        link = "https://www.psu.edu/academics/campuses/beaver">
        <p>Situated on one hundred acres, Penn State Beaver offers several bachelor's degrees, on-campus housing, and varsity sports, all within easy reach of Pittsburgh.</p>
      </ddd-card>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);