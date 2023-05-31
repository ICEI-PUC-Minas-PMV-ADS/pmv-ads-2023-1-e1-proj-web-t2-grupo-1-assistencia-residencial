const defaultHeaderStyles = `<style>
.header {
    width: 100%;
    color: var(--color-white);
    background-color: var(--color-p10);
  }
  
  .header__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  
    padding: 30px;
    margin: 0 auto;
    max-width: 1080px;
    font-family: var(--font-montserrat);
  }
  
  .header__logo {
    font-weight: bold;
  }
  
  .header__menu {
    display: flex;
    gap: 40px;
  }
  
  .header__menu-item--button {
    padding: 12px 18px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: var(--color-p5);
    background: var(--color-white);
  }

  .header__greeting {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }


  
  @media screen and (max-width: 576px) {
    .header__container {
      flex-direction: column;
      justify-content: center;
    }
  
    .header__menu {
      flex-direction: column;
      margin-top: 20px;
      gap: 20px;
    }
  
    .header__menu-item {
      display: block;
      text-align: center;
    }
  
    .header__menu-item--button {
      padding: 8px 12px;
      font-size: 14px;
    }

    .header__greeting {
        flex-direction: column;
        gap: 10px;
      }
  }  
</style>
`;

const headerTemplateWithoutLoggedUser = `
  ${defaultHeaderStyles}
<header class="header">
<div class="header__container">
  <a href="/index.html" class="header__logo">Elas por Elas</a>
  <nav>
    <ul class="header__menu">
      <li><a href="./" class="header__menu-item">Sobre</a></li>
      <li><a href="/src/pages/login.html" class="header__menu-item">Login</a></li>
      <li>
        <a href="/src/pages/user__signin.html" class="header__menu-item header__menu-item--button"
          >Cadastre-se</a
        >
      </li>
    </ul>
  </nav>
</div>
</header>`;

const headerTemplateWithLoggedUser = `
${defaultHeaderStyles}
<header class="header">
<div class="header__container">
  <a href="/index.html" class="header__logo">Elas por Elas</a>
  <div class="header__greeting">
      <span>Olá, fulana</span>
      <button class="header__menu-item--button" >Sair</button>
  </div>
</div>
</header>`;

export { headerTemplateWithoutLoggedUser, headerTemplateWithLoggedUser };
