var tourActuel = 'X';
var resultat = [
    ['','',''],
    ['','',''],
    ['','','']
];

//mot clé function pour définir une fonction
//parametres entres parantheses
function onButtonClick(btn,i,j) {
    btn.disabled = true;
    btn.value = tourActuel;

    //resultat[i][j]
    //valeur maximale de i : 2
    //valeur maximale de j : 2

    //Pour remplier la 9eme cellule
    //resultat[2][2] = tourActuel
    resultat[i][j] = tourActuel

    //Verification si il y a un gagnant
    //Plusieurs combinaison possibles
    //Horizontale, verticale, diagonales

    //Horizontale: 1,2,3 | 4,5,6 | 7,8,9
    //Verticale: 1,4,7 | 2,5,8 | 3,6,9
    //Diagonale: 1,5,9 | 3,5,7

    //&& : Et
    //|| : Ou
    if (
        (resultat[0][0] == tourActuel && resultat[0][1] == tourActuel && resultat[0][2] == tourActuel) || 
        (resultat[1][0] == tourActuel && resultat[1][1] == tourActuel && resultat[1][2] == tourActuel)
    ) {
       document.getElementById("alert").innerText = 'Joueur ' + tourActuel + ' a gagné !';
    }

    if(tourActuel == 'X') {
        tourActuel = '0';
    }
    else {
        tourActuel ='X';
    }
}