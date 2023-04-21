let personen = [];
let global ={
    index : null
}

// Event listener (btnBewaar click)


// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    let invalid = document.getElementsByClassName("invalid");
    if(invalid.length === 0){
        let txtVoornaam = document.getElementById("txtVoornaam");
        let txtFamilienaam = document.getElementById("txtFamilienaam");
        let txtEmail = document.getElementById("txtEmail");
        let txtAantalKinderen = document.getElementById("txtAantalKinderen");
        let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");

        let vnaam = txtVoornaam.value.trim();
        let fnaam = txtFamilienaam.value.trim();
        let gdatum = txtGeboorteDatum.value.trim();
        let mail = txtEmail.value.trim();
        let atlKinderen = parseInt(txtAantalKinderen.value.trim());
        if (global.index === null){

            let persoon = {
                voornaam: vnaam,
                familienaam : fnaam,
                geboorteDatum : gdatum,
                email : mail,
                aantalKinderen : atlKinderen
            }
            personen.push(persoon);
            let i = personen.indexOf(persoon);
            persoon.index = i;

            let option = document.createElement("option");
            option.setAttribute("value", i.toString(10));
            let text = document.createTextNode(`${vnaam} ${fnaam}`);
            option.appendChild(text);
            let select = document.getElementById("lstPersonen");
            select.appendChild(option);
            option.addEventListener("click", terugzetten)
        }
        else{
            let persoon = personen[global.index];
            persoon.voornaam = vnaam;
            persoon.familienaam = fnaam;
            persoon.email = mail;
            persoon.geboorteDatum = gdatum;
            persoon.aantalKinderen = atlKinderen;

            let options = document.getElementsByTagName("option");
            let newNode = document.createTextNode(`${vnaam} ${fnaam}`)
            for (let j = 0; j < options.length; j++) {
                if (options[j].value === global.index){
                    options[j].childNodes[0].remove();
                    options[j].appendChild(newNode);
                }
            }
        }


    }

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan


    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const bestaatDePersoon = () => {
    console.log(window.getSelection());

}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");

    txtVoornaam.value = "";
    txtFamilienaam.value = "";
    txtEmail.value = "";
    txtAantalKinderen.value = "";
    txtGeboorteDatum.value = "";

    global.index = null;

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const terugzetten = (event) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");

    let i = event.target.value;
    let persoon = personen[i];

    txtVoornaam.value = persoon.voornaam;
    txtFamilienaam.value = persoon.familienaam;
    txtEmail.value = persoon.email;
    txtAantalKinderen.value = persoon.aantalKinderen;
    txtGeboorteDatum.value = persoon.geboorteDatum;

    if (!(txtVoornaam.value === persoon.voornaam
        && txtFamilienaam.value === persoon.familienaam
        && txtEmail.value === persoon.email
        && txtAantalKinderen.value === persoon.aantalKinderen
        && txtGeboorteDatum.value === persoon.geboorteDatum)){
        global.index = i;

    }

}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);