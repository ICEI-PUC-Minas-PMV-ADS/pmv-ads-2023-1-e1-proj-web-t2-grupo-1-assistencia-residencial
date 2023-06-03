import { resetCss as css } from "../reset.js";

import {
  headerTemplateWithLoggedUser,
  headerTemplateWithoutLoggedUser,
} from "./constants.js";

import { getLoggedUser } from "../../utils/index.js";

class Header extends HTMLElement {
  #templateElement = document.createElement("template");

  constructor() {
    super();
  }

  handleLogOut() {
    localStorage.removeItem("@loggedUser");
    window.location.reload();
  }

  connectedCallback() {
    const loggedUser = getLoggedUser();
    let shadowRoot;

    this.#templateElement.innerHTML = !loggedUser
      ? headerTemplateWithoutLoggedUser
      : headerTemplateWithLoggedUser;

    if (loggedUser) {
      this.#templateElement.content
        .querySelector(".header__menu-item--button")
        .addEventListener("click", this.handleLogOut);

      this.#templateElement.content.getElementById(
        "header__greetind--username"
      ).textContent = `Olá, ${loggedUser.name}!`;
    }

    shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML += `<style media="screen">${css}</style>`;

    shadowRoot.appendChild(this.#templateElement.content);
  }
}

customElements.define("custom-header", Header);
