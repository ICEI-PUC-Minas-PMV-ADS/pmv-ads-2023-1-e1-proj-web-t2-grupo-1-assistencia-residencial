const defaultPath =
  "pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial";

function redirectTo(path) {
  const localDomains = ["localhost", "127.0.0.1", "192.168.x.x", "10.x.x.x"];
  const localDomain = window.location.hostname;

  if (localDomains.some((domain) => domain.includes(localDomain))) {
    window.location.href = `/${path || ""}`;
  } else {
    window.location.href = `/${defaultPath}/${path || ""}`;
  }
}

function redirectIfNotLogged() {
  const user = JSON.parse(localStorage.getItem("@loggedUser"));

  if (!user) {
    redirectTo("src/pages/login.html");
  }
}

function redirectIfLogged() {
  const user = JSON.parse(localStorage.getItem("@loggedUser"));

  if (user) {
    redirectTo();
  }
}

export { redirectIfLogged, redirectIfNotLogged, redirectTo };
