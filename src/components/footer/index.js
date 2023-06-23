import { resetCss as css } from "../reset.js";

class Footer extends HTMLElement {
  #templateCode = `
  <style>
  footer {
    width: 100%;
    background-color: black;
    background-color: var(--color-p10);
    font-family: var(--font-open-sans);
    clear: both;
    position: relative;
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
    color: var(--color-white);
    background-color: var(--color-p6);
    padding: 20px;
  }
  
  @media screen and (max-width: 768px) {
    .footer {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, auto);
    }
    .footer__container{
      grid-template-columns: 1fr; 
      grid-template-rows: repeat(4, auto);
      justify-items: center;
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
      align-items: center;
      text-align: center;
    }
  
    .footer__contact {
      grid-row-start: 4;
      grid-row-end: auto;
      align-items: center;
      text-align: center;
    }
    .footer__contact-info {
      justify-items: center;
    }
  }
  </style>
  <footer class="footer">
  <div class="footer__container">
    <span class="footer__logo">Elas por Elas</span>

    <div class="footer__services">
      <span class="footer__services-title">Serviços</span>
      <ul>
        <li class="footer__service">Alvenaria</li>
        <li class="footer__service">Pintura</li>
        <li class="footer__service">Elétrica</li>
        <li class="footer__service">Hidráulica</li>
        <li class="footer__service">Gesso</li>
        <li class="footer__service">Chaveira</li>
        <li class="footer__service">Jardineira</li>
      </ul>
    </div>

    <div class="footer__about">
      <span class="footer__about-title">Quem somos</span>
      <ul>
        <li class="footer__about-item">Sobre nós</li>
        <li class="footer__about-item">Termos e Condições</li>
        <li class="footer__about-item">Trabalhe Conosco</li>
      </ul>
    </div>

    <div class="footer__contact">
      <span class="footer__contact-title">Fale com a gente</span>
      <ul class="footer__contact-list">
        <li class="footer__contact-info">
          <img
          data-src="email.svg"
          class="footer__icon" 
          src="../img/icons/social/email.svg" />
          <span>contato@elasporelas.com.br</span>
        </li>
        <li class="footer__contact-info">
          <img
          data-src="telefone.svg"
          class="footer__icon" 
          src="../img/icons/social/telefone.svg" />
          <span>(31) 33333-3333</span>
        </li>
      </ul>
      <div class="footer__contact-social">
        <ul>
          <li class="footer__contact-icon">
          <a href="https://br.linkedin.com/">
            <img
            class="footer__icon"
            data-src="linkedin.svg"
            src="../img/icons/social/linkedin.svg"
            />
          </a>
          </li>
          <li class="footer__contact-icon">
          <a href="https://www.instagram.com/">
            <img
            class="footer__icon"
            data-src="instagram.svg"
            />
          </a>
          </li>
          <li class="footer__contact-icon">
          <a href="https://www.facebook.com/">
            <img
            class="footer__icon"
            data-src="facebook.svg"
            />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer__address">
  <span>
  2023, Elas por Elas - Assistência Residencial. Avenida Logo Ali, 2333,
   4º Andar, Centro, Belo Horizonte/MG - Brasil
  </span>
</div>
</footer>
`;

  #templateElement = document.createElement("template");
  #shadowRoot;

  constructor() {
    super();
  }

  fixImagePaths() {
    if (this.#shadowRoot) {
      const images = this.#shadowRoot.querySelectorAll("img");

      images &&
        images.forEach((image) => {
          let imagePath = "";

          if (window.location.pathname.includes("src")) {
            imagePath = "../img/icons/social/" + image.dataset.src;
            image.src = imagePath;

            return;
          }

          imagePath = "../img/icons/social/" + image.dataset.src;
          image.src = imagePath;
        });
    }
  }

  connectedCallback() {
    this.#shadowRoot = this.attachShadow({ mode: "closed" });
    this.#templateElement.innerHTML = this.#templateCode;

    this.#shadowRoot.innerHTML += `<style media="screen">${css}</style>`;
    this.#shadowRoot.appendChild(this.#templateElement.content);

    this.fixImagePaths();
  }
}

customElements.define("custom-footer", Footer);
