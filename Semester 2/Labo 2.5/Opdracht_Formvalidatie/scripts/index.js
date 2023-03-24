const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAtlKinderen();
    proficiat();
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let voornaam = txtVoornaam.value.trim();
    // We gebruiken de kennis van onze naming conventions om autom. de
    // bijbehorende error span op te zoeken
    if (voornaam.length > 30) {
        reportError(txtVoornaam, "max. 30 karakters");
    } else {
        clearError(txtVoornaam);
    }
};

const valideerFamilienaam = () =>{
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    // We gebruiken de kennis van onze naming conventions om autom. de
    // bijbehorende error span op te zoeken
    if (familienaam.length > 50) {
        reportError(txtFamilienaam, "max. 50 karakters");
    }
    else if (familienaam.length === 0){
        reportError(txtFamilienaam, "verplicht veld");
    }
    else {
        clearError(txtFamilienaam);
    }
};

const valideerGeboortedatum = () =>{
    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();
    // We gebruiken de kennis van onze naming conventions om autom. de
    // bijbehorende error span op te zoeken
    if (geboortedatum.length === 0) {
        reportError(txtGeboortedatum, "verplicht veld")
    }
    else {
        if (geboortedatum.includes("-")){
            let gesplitst = geboortedatum.split("-");
            if(gesplitst.length === 3){
                if(gesplitst[0].length === 4 && gesplitst[1].length === 2 && gesplitst[2].length === 2) {
                    if(isGetal(gesplitst[0]) && isGetal(gesplitst[1]) && isGetal(gesplitst[2])){
                        clearError(txtGeboortedatum);
                    }
                    else{
                        reportError(txtGeboortedatum, "formaat is niet jjjj-mm-dd");
                    }
                }
                else{
                    reportError(txtGeboortedatum, "formaat is niet jjjj-mm-dd");
                }
            }else{
                reportError(txtGeboortedatum, "formaat is niet jjjj-mm-dd");
            }
        }else{
            reportError(txtGeboortedatum, "formaat is niet jjjj-mm-dd");
        }

        clearError(txtGeboortedatum);
    }
};

const valideerEmail = () =>{
    let txtEmail = document.getElementById("txtEmail");
    let email = txtEmail.value.trim();
    // We gebruiken de kennis van onze naming conventions om autom. de
    // bijbehorende error span op te zoeken
    if (email.length === 0){
        reportError(txtEmail, "verplicht veld");
    }
    else {
        if (email.includes("@")){
            if(email.length > 2 ){
                let gesplitst = email.split("@");
                if(gesplitst.length === 2){
                    clearError(txtEmail);
                }
                else{
                    reportError(txtEmail, "geen geldig email adres");
                }

            }else{
                reportError(txtEmail, "geen geldig email adres");
            }
        }
        else{
            reportError(txtEmail, "geen geldig email adres");
        }
    }


};

const valideerAtlKinderen = () =>{
    let txtAtlKinderen = document.getElementById("txtAtlKinderen");
    let atlKinderen = txtAtlKinderen.value.trim();
    // We gebruiken de kennis van onze naming conventions om autom. de
    // bijbehorende error span op te zoeken
     if (atlKinderen.length === 0){
        reportError(txtAtlKinderen, "verplicht veld");
    }
    else {
        if (isGetal(atlKinderen)){
            let getal = parseInt(atlKinderen)
            if (getal >= 0){
                if (getal < 99){
                    clearError(txtAtlKinderen);
                }
                else{
                    reportError(txtAtlKinderen, "is te vruchtbaar");
                }
            }
            else{
                reportError(txtAtlKinderen, "is geen positief getal");
            }
        }
        else{
            reportError(txtAtlKinderen, "is geen positief getal");
        }

    }
};

const reportError = (element, message) => {
    let elementId=element.getAttribute("id"); // bv. txtVoornaam
    let errElementId="err"+elementId.substring(3, elementId.length); // bv. errVoornaam
    let errElement=document.getElementById(errElementId);
    element.className="invalid";
    errElement.innerHTML = message;
};

const clearError = (element) => {
    let elementId=element.getAttribute("id"); // bv. txtVoornaam
    let errElementId="err"+elementId.substring(3, elementId.length); // bv. errVoornaam
    let errElement=document.getElementById(errElementId);
    element.className="";
    errElement.innerHTML = "";
};

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const proficiat = () =>{
    let errVoornaam = document.getElementById("errVoornaam");
    let errFamilienaaam = document.getElementById("errFamilienaam");
    let errEmail = document.getElementById("errEmail");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let errAtlKinderen = document.getElementById("errAtlKinderen");
    if (errVoornaam.innerHTML === "" &&
        errFamilienaaam.innerHTML === "" &&
        errEmail.innerHTML === "" &&
        errGeboortedatum.innerHTML === "" &&
        errAtlKinderen.innerHTML === "")
    {
        window.prompt("proficiat")
    }
};


window.addEventListener("load", setup);