/**
 * Copyright 2025 michaelnipper3
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDPulseEffectSuper(I18NMixin(DDD)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "#";
    this.link = "#"; 
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
      image: { type: String },
      link: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        border: 2px solid var(--ddd-theme-accent);
        box-shadow: var(--ddd-boxShadow-xl);
        width: 400px;
      }
      h3 span {
        font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
      }
      img {
        width: 400px;
        height: 300px;
      }
      .image_head {
        background-color: var(--ddd-theme-primary);
        height: 310px;
      }
      .btn-container {
        display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
      }
      .btn {
        width: 100%;
        background-color: #005FA9;
        color: var(--ddd-theme-accent);
        padding: 12px 20px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 15px;
      }
      .btn:hover {
        background-color: var(--ddd-theme-primary);
      }
      .desc {
        height: 125px;
      }
      a {
        width: 100%;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <div class="image_head">
        <img src="${this.image}" alt="${this.title}">
      </div>
      <h3><span>${this.title}</span></h3>
      <div class="desc">
        <slot></slot>
      </div>
      <div class="btn-container">
        <a href="${this.link}" target = "__blank">
          <button class="btn">Explore ></button>
        </a>
      </div>
    </div>`;
  }

  static get haxProperties() {
    return {
      type: "element",
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Call to action",
        description: "A simple button with a link to take action.",
        icon: "image:crop-16-9",
        color: "orange",
        tags: ["Layout", "marketing", "button", "link", "url", "design", "cta"],
        handles: [
          {
            type: "link",
            source: "link",
            title: "label",
          },
        ],
        meta: {
          author: "HAXTheWeb core team",
        },
      },
      settings: {
        configure: [
          {
            property: "label",
            title: "Label",
            description: "Link label",
            inputMethod: "textfield",
            required: true,
          },
          {
            property: "link",
            title: "Link",
            description: "Enter a link to any resource",
            inputMethod: "haxupload",
            noVoiceRecord: true,
            noCamera: true,
            required: true,
          },
          {
            property: "accentColor",
            title: "Accent Color",
            description: "An optional accent color.",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill",
          },
          {
            property: "hideIcon",
            title: "Hide icon",
            description: "Hide the icon used to accent text",
            inputMethod: "boolean",
          },
        ],
        advanced: [
          {
            property: "icon",
            title: "Icon",
            description: "Action link icon",
            inputMethod: "iconpicker",
          },
        ],
      },
      saveOptions: {
        unsetAttributes: ["colors", "element-visible"],
      },
      demoSchema: [
        {
          tag: "simple-cta",
          properties: {
            label: "Click to learn more",
            link: "https://haxtheweb.org/",
          },
          content: "",
        },
      ],
    };
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);