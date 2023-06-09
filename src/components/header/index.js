import { resetCss as css } from "../reset.js";

import {
  headerTemplateWithLoggedUser,
  headerTemplateWithoutLoggedUser,
} from "./constants.js";

import { getLoggedUser, redirectTo } from "../../utils/index.js";

class Header extends HTMLElement {
  #templateElement = document.createElement("template");

  constructor() {
    super();
  }

  handleLogOut() {
    localStorage.removeItem("@loggedUser");

    redirectTo();
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

      this.#templateElement.content
        .getElementById("header__greetind--username")
        .addEventListener("click", () => {
          redirectTo(`src/pages/profile-edit.html`);
        });
    }

    shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML += `<style media="screen">${css}</style>`;

    shadowRoot.appendChild(this.#templateElement.content);
  }
}

customElements.define("custom-header", Header);
