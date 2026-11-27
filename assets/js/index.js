const bouton = document.querySelector("#mon-bouton");

function construireTableau() {
  // Retourne un nouveau tableau à chaque appel
  return ["clic", Date.now(), Math.random()];
}

function gererClic() {
  const tableau = construireTableau();
  console.log(tableau);
  // Tu peux passer `tableau` à une autre fonction ici
}

bouton.addEventListener("click", gererClic);
