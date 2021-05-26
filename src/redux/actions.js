import { dohvatiUser, dohvatiRepos } from "../services/GitHubAPI";

export const RESET = "RESET";
export const POSTAVI_USER = "POSTAVI_USER";
export const POSTAVI_REPOS = "POSTAVI_REPOS";

export function user(uneseno) {
  return (dispatch) =>
  dohvatiUser(uneseno).then((data) => {

      if (data.length === 0)
        throw new Error("Ne postoji traženi user");

      console.log("stringify=" + JSON.stringify(data));

      console.log("dohvatiUser data.login=" + data.login);

      dispatch({
        type: POSTAVI_USER,
        payload: data,
      });
    });
}

export function repos(dobiveno) {
  return (dispatch) =>
    dohvatiRepos(dobiveno).then((data) => {
      if (data.length === 0)
        throw new Error("User nema repozitorija");

      dispatch({
        type: POSTAVI_REPOS,
        payload: data,
      });
    });
}

export function reset() {
  return { type: RESET };
}
