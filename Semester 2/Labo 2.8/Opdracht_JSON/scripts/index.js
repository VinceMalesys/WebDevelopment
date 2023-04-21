const setup = () => {
    let student={
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"), adres : {
// een object
            straat : "Kerkstraat 13", postcode : "8500", gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array aantalAutos : 2
    }
    let string = JSON.stringify(student);
    console.log(string);
    let nieuweString = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"]}';
    let nieuweStudent = JSON.parse(nieuweString);
    console.log(nieuweStudent);
    console.log(nieuweStudent.adres.straat)
    if (student.familienaam === nieuweStudent.familienaam){
        console.log("TRUE");
    }else{
        console.log("FALSE");
    }
    if (student.adres === nieuweStudent.adres){
        console.log("TRUE");
    }else{
        console.log("FALSE omdat je objecten aan het vergelijken bent");
    }
    if (student.adres.straat === nieuweStudent.adres.straat){
        console.log("TRUE");
    }else{
        console.log("FALSE");
    }




}

window.addEventListener('load', setup);