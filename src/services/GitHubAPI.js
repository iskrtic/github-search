// https://api.github.com/users/iskrtic
// https://api.github.com/users/iskrtic/repos

function resolveResponse(response) {

    if (response.status === 200) {
        return response.json();
    }

    if (response.status === 403) {
      throw new Error("Forbidden while accessing - too much requests");
    }

    if (response.status === 404) {
      throw new Error("No such GitHub user!");
    }

    throw new Error("Other errors");
  }

  export function dohvatiUser(uneseno) {
    console.log("dohvatiUser uneseno=" + uneseno);
    const url = `https://api.github.com/users/${uneseno}`;
    return fetch(url).then((response) => resolveResponse(response));
  }

  export function dohvatiRepos(dobiveno) {
    const url = `https://api.github.com/users/${dobiveno}/repos`;
    return fetch(url).then((response) => resolveResponse(response));
  }
