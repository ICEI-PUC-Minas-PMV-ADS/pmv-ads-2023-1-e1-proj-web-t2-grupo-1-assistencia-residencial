import { resetCss as css } from "../reset.js";

class Footer extends HTMLElement {
  #templateCode = `
  <style>
  footer {
    width: 100%;
    background-color: black;
    background-color: var(--color-p10);
    font-family: var(--font-open-sans);
  }
  
  .uppercase {
    text-transform: uppercase;
  }
  
  .footer__container {
    margin: 0 auto;
    max-width: 1080px;
    color: var(--color-white);
  
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  
  .footer__logo {
    box-sizing: border-box;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    padding: 20px;
  }
  
  .footer__icon {
    width: 20px;
    height: 20px;
  }
  
  .footer__services,
  .footer__about,
  .footer__contact {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  
  .footer__services > ul,
  .footer__about > ul,
  .footer__contact > ul {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  
  .footer__contact-info {
    gap: 10px;
    display: flex;
    align-items: center;
  }
  
  .footer__contact-social > ul {
    display: flex;
    gap: 10px;
  }
  
  .footer__address {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 5;
    text-align: center;
    box-sizing: border-box;
    background-color: var(--color-p6);
    padding: 20px;
    margin-bottom: 10px;
  }
  
  @media screen and (max-width: 768px) {
    .footer {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, auto);
    }
  
    .footer__logo {
      grid-row-start: 1;
      grid-row-end: auto;
    }
  
    .footer__services {
      grid-row-start: 2;
      grid-row-end: auto;
    }
  
    .footer__about {
      grid-row-start: 3;
      grid-row-end: auto;
    }
  
    .footer__contact {
      grid-row-start: 4;
      grid-row-end: auto;
    }
  }
  </style>
  <footer class="footer">
  <div class="footer__container">
    <span class="footer__logo">Elas por Elas</span>

    <div class="footer__services">
      <span class="footer__services-title">Serviços</span>
      <ul>
        <li class="footer__service">Chaveiro</li>
        <li class="footer__service">Alenaria</li>
        <li class="footer__service">Gesso</li>
        <li class="footer__service">Elétrica</li>
        <li class="footer__service">Hidráulica</li>
        <li class="footer__service">Jardinagem</li>
        <li class="footer__service">Pintura</li>
        <li class="footer__service">Diversos</li>
      </ul>
    </div>

    <div class="footer__about">
      <span class="footer__about-title">About Us</span>
      <ul>
        <li class="footer__about-item">Who we are</li>
        <li class="footer__about-item">Terms and conditions</li>
        <li class="footer__about-item">Work with us</li>
      </ul>
    </div>

    <div class="footer__contact">
      <span class="footer__contact-title">Contact Us</span>
      <ul class="footer__contact-list">
        <li class="footer__contact-info">
          <img
          class="footer__icon" 
          src="./src/img/icons/Footer/facebook.svg" alt="" />
          <span>CONTACT@ELASPORELAS.COM.BR</span>
        </li>
        <li class="footer__contact-info">
          <img
          class="footer__icon" 
          src="./src/img/icons/Footer/facebook.svg" alt="" />
          <span>(31) 33333-3333</span>
        </li>
      </ul>
      <div class="footer__contact-social">
        <ul>
          <li class="footer__contact-icon">
            <img
            class="footer__icon"

            src="./src/img/icons/Footer/linkedin.svg"
              alt=""
              srcset=""
            />
          </li>
          <li class="footer__contact-icon">
            <img
            class="footer__icon"

            src="./src/img/icons/Footer/instagram.svg"
              alt=""
              srcset=""
            />
          </li>
          <li class="footer__contact-icon">
            <img
            class="footer__icon"

            src="./src/img/icons/Footer/facebook.svg"
              alt=""
              srcset=""
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__address">
      <span>
        2023, Elas por Elas - Residential Assistance. Logo Ali Avenue, 2333,
        4th floor, Centro, Belo Horizonte/MG - Brazil
      </span>
    </div>
  </div>
</footer>
`;

  #templateElement = document.createElement("template");

  constructor() {
    super();
  }

  connectedCallback() {
    this.#templateElement.innerHTML = this.#templateCode;

    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.innerHTML = `<style media="screen">${css}</style>`;
    shadowRoot.appendChild(this.#templateElement.content);
  }
}

customElements.define("custom-footer", Footer);
