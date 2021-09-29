var profil =  {prenom : "jojo",
                profil : "joueur"
            }

var profil2 =  {
        nom : "toto",
        profil : "sérieux"
}

//const fusionProfil = (...objets) => {...objets}

// var nouvelObjet = fusion(profil,profil2)

var nouvelObjet = {...profil, ...profil2}

console.log(nouvelObjet)

const monComposant = (arg1, arg2, ...args) => {
    console.log(arg1)
    console.log(arg2)
    console.log(args)
}

monComposant("un", "deux", "trois", "quatre", "cinq")

const composant1 = (...args) => {
    //console.log("valeur : ", args[1][0])
    console.log(args.sort())
}

//composant1([10,3], [56,23])

composant1(10,3,6,12,9)