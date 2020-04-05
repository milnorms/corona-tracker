// Getting rid of the recovered for time being. Source data does not support

let latest;
let country;
let countryLatest = {
    "countryName" : "",
    "confirmed" : "",
    "deaths" : "",
    // "recovered" : ""
};
let selector;
let countryNames = new Set();
let option;
let selectedCountry;
// Default country when page loads is US
let country_code = "US";

const country_name_and_code = [{"name":"Afghanistan","countryCode":"AF"},{"name":"Albania","countryCode":"AL"},{"name":"Algeria","countryCode":"DZ"},{"name":"Andorra","countryCode":"AD"},{"name":"Angola","countryCode":"AO"},{"name":"Antigua and Barbuda","countryCode":"AG"},{"name":"Argentina","countryCode":"AR"},{"name":"Armenia","countryCode":"AM"},{"name":"Australia","countryCode":"AU"},{"name":"Australia","countryCode":"AU"},{"name":"Australia","countryCode":"AU"},{"name":"Australia","countryCode":"AU"},{"name":"Australia","countryCode":"AU"},{"name":"Australia","countryCode":"AU"},{"name":"Australia","countryCode":"AU"},{"name":"Australia","countryCode":"AU"},{"name":"Austria","countryCode":"AT"},{"name":"Azerbaijan","countryCode":"AZ"},{"name":"Bahamas","countryCode":"BS"},{"name":"Bahrain","countryCode":"BH"},{"name":"Bangladesh","countryCode":"BD"},{"name":"Barbados","countryCode":"BB"},{"name":"Belarus","countryCode":"BY"},{"name":"Belgium","countryCode":"BE"},{"name":"Benin","countryCode":"BJ"},{"name":"Bhutan","countryCode":"BT"},{"name":"Bolivia","countryCode":"BO"},{"name":"Bosnia and Herzegovina","countryCode":"BA"},{"name":"Brazil","countryCode":"BR"},{"name":"Brunei","countryCode":"BN"},{"name":"Bulgaria","countryCode":"BG"},{"name":"Burkina Faso","countryCode":"BF"},{"name":"Cabo Verde","countryCode":"CV"},{"name":"Cambodia","countryCode":"KH"},{"name":"Cameroon","countryCode":"CM"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Central African Republic","countryCode":"CF"},{"name":"Chad","countryCode":"TD"},{"name":"Chile","countryCode":"CL"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"China","countryCode":"CN"},{"name":"Colombia","countryCode":"CO"},{"name":"Congo (Brazzaville)","countryCode":"CG"},{"name":"Congo (Kinshasa)","countryCode":"CD"},{"name":"Costa Rica","countryCode":"CR"},{"name":"Cote d'Ivoire","countryCode":"CI"},{"name":"Croatia","countryCode":"HR"},{"name":"Diamond Princess","countryCode":"XX"},{"name":"Cuba","countryCode":"CU"},{"name":"Cyprus","countryCode":"CY"},{"name":"Czechia","countryCode":"CZ"},{"name":"Denmark","countryCode":"DK"},{"name":"Denmark","countryCode":"DK"},{"name":"Denmark","countryCode":"DK"},{"name":"Djibouti","countryCode":"DJ"},{"name":"Dominican Republic","countryCode":"DO"},{"name":"Ecuador","countryCode":"EC"},{"name":"Egypt","countryCode":"EG"},{"name":"El Salvador","countryCode":"SV"},{"name":"Equatorial Guinea","countryCode":"GQ"},{"name":"Eritrea","countryCode":"ER"},{"name":"Estonia","countryCode":"EE"},{"name":"Eswatini","countryCode":"SZ"},{"name":"Ethiopia","countryCode":"ET"},{"name":"Fiji","countryCode":"FJ"},{"name":"Finland","countryCode":"FI"},{"name":"France","countryCode":"FR"},{"name":"France","countryCode":"FR"},{"name":"France","countryCode":"FR"},{"name":"France","countryCode":"FR"},{"name":"France","countryCode":"FR"},{"name":"France","countryCode":"FR"},{"name":"France","countryCode":"FR"},{"name":"France","countryCode":"FR"},{"name":"France","countryCode":"FR"},{"name":"France","countryCode":"FR"},{"name":"Gabon","countryCode":"GA"},{"name":"Gambia","countryCode":"GM"},{"name":"Georgia","countryCode":"GE"},{"name":"Germany","countryCode":"DE"},{"name":"Ghana","countryCode":"GH"},{"name":"Greece","countryCode":"GR"},{"name":"Guatemala","countryCode":"GT"},{"name":"Guinea","countryCode":"GN"},{"name":"Guyana","countryCode":"GY"},{"name":"Haiti","countryCode":"HT"},{"name":"Holy See","countryCode":"VA"},{"name":"Honduras","countryCode":"HN"},{"name":"Hungary","countryCode":"HU"},{"name":"Iceland","countryCode":"IS"},{"name":"India","countryCode":"IN"},{"name":"Indonesia","countryCode":"ID"},{"name":"Iran","countryCode":"IR"},{"name":"Iraq","countryCode":"IQ"},{"name":"Ireland","countryCode":"IE"},{"name":"Israel","countryCode":"IL"},{"name":"Italy","countryCode":"IT"},{"name":"Jamaica","countryCode":"JM"},{"name":"Japan","countryCode":"JP"},{"name":"Jordan","countryCode":"JO"},{"name":"Kazakhstan","countryCode":"KZ"},{"name":"Kenya","countryCode":"KE"},{"name":"Korea, South","countryCode":"KR"},{"name":"Kuwait","countryCode":"KW"},{"name":"Kyrgyzstan","countryCode":"KG"},{"name":"Latvia","countryCode":"LV"},{"name":"Lebanon","countryCode":"LB"},{"name":"Liberia","countryCode":"LR"},{"name":"Liechtenstein","countryCode":"LI"},{"name":"Lithuania","countryCode":"LT"},{"name":"Luxembourg","countryCode":"LU"},{"name":"Madagascar","countryCode":"MG"},{"name":"Malaysia","countryCode":"MY"},{"name":"Maldives","countryCode":"MV"},{"name":"Malta","countryCode":"MT"},{"name":"Mauritania","countryCode":"MR"},{"name":"Mauritius","countryCode":"MU"},{"name":"Mexico","countryCode":"MX"},{"name":"Moldova","countryCode":"MD"},{"name":"Monaco","countryCode":"MC"},{"name":"Mongolia","countryCode":"MN"},{"name":"Montenegro","countryCode":"ME"},{"name":"Morocco","countryCode":"MA"},{"name":"Namibia","countryCode":"NA"},{"name":"Nepal","countryCode":"NP"},{"name":"Netherlands","countryCode":"NL"},{"name":"Netherlands","countryCode":"NL"},{"name":"Netherlands","countryCode":"NL"},{"name":"Netherlands","countryCode":"NL"},{"name":"New Zealand","countryCode":"NZ"},{"name":"Nicaragua","countryCode":"NI"},{"name":"Niger","countryCode":"NE"},{"name":"Nigeria","countryCode":"NG"},{"name":"North Macedonia","countryCode":"MK"},{"name":"Norway","countryCode":"NO"},{"name":"Oman","countryCode":"OM"},{"name":"Pakistan","countryCode":"PK"},{"name":"Panama","countryCode":"PA"},{"name":"Papua New Guinea","countryCode":"PG"},{"name":"Paraguay","countryCode":"PY"},{"name":"Peru","countryCode":"PE"},{"name":"Philippines","countryCode":"PH"},{"name":"Poland","countryCode":"PL"},{"name":"Portugal","countryCode":"PT"},{"name":"Qatar","countryCode":"QA"},{"name":"Romania","countryCode":"RO"},{"name":"Russia","countryCode":"RU"},{"name":"Rwanda","countryCode":"RW"},{"name":"Saint Lucia","countryCode":"LC"},{"name":"Saint Vincent and the Grenadines","countryCode":"VC"},{"name":"San Marino","countryCode":"SM"},{"name":"Saudi Arabia","countryCode":"SA"},{"name":"Senegal","countryCode":"SN"},{"name":"Serbia","countryCode":"RS"},{"name":"Seychelles","countryCode":"SC"},{"name":"Singapore","countryCode":"SG"},{"name":"Slovakia","countryCode":"SK"},{"name":"Slovenia","countryCode":"SI"},{"name":"Somalia","countryCode":"SO"},{"name":"South Africa","countryCode":"ZA"},{"name":"Spain","countryCode":"ES"},{"name":"Sri Lanka","countryCode":"LK"},{"name":"Sudan","countryCode":"SD"},{"name":"Suriname","countryCode":"SR"},{"name":"Sweden","countryCode":"SE"},{"name":"Switzerland","countryCode":"CH"},{"name":"Taiwan*","countryCode":"TW"},{"name":"Tanzania","countryCode":"TZ"},{"name":"Thailand","countryCode":"TH"},{"name":"Togo","countryCode":"TG"},{"name":"Trinidad and Tobago","countryCode":"TT"},{"name":"Tunisia","countryCode":"TN"},{"name":"Turkey","countryCode":"TR"},{"name":"Uganda","countryCode":"UG"},{"name":"Ukraine","countryCode":"UA"},{"name":"United Arab Emirates","countryCode":"AE"},{"name":"United Kingdom","countryCode":"GB"},{"name":"United Kingdom","countryCode":"GB"},{"name":"United Kingdom","countryCode":"GB"},{"name":"United Kingdom","countryCode":"GB"},{"name":"United Kingdom","countryCode":"GB"},{"name":"United Kingdom","countryCode":"GB"},{"name":"United Kingdom","countryCode":"GB"},{"name":"Uruguay","countryCode":"UY"},{"name":"US","countryCode":"US"},{"name":"Uzbekistan","countryCode":"UZ"},{"name":"Venezuela","countryCode":"VE"},{"name":"Vietnam","countryCode":"VN"},{"name":"Zambia","countryCode":"ZM"},{"name":"Zimbabwe","countryCode":"ZW"},{"name":"Canada","countryCode":"CA"},{"name":"Dominica","countryCode":"DM"},{"name":"Grenada","countryCode":"GD"},{"name":"Mozambique","countryCode":"MZ"},{"name":"Syria","countryCode":"SY"},{"name":"Timor-Leste","countryCode":"TL"},{"name":"Belize","countryCode":"BZ"},{"name":"Canada","countryCode":"CA"},{"name":"Laos","countryCode":"LA"},{"name":"Libya","countryCode":"LY"},{"name":"West Bank and Gaza","countryCode":"PS"},{"name":"Guinea-Bissau","countryCode":"GW"},{"name":"Mali","countryCode":"ML"},{"name":"Saint Kitts and Nevis","countryCode":"KN"},{"name":"Canada","countryCode":"CA"},{"name":"Canada","countryCode":"CA"},{"name":"Kosovo","countryCode":"XK"},{"name":"Burma","countryCode":"MM"},{"name":"United Kingdom","countryCode":"GB"},{"name":"United Kingdom","countryCode":"GB"},{"name":"United Kingdom","countryCode":"GB"},{"name":"MS Zaandam","countryCode":"XX"},{"name":"Botswana","countryCode":"BW"},{"name":"Burundi","countryCode":"BI"},{"name":"Sierra Leone","countryCode":"SL"},{"name":"Netherlands","countryCode":"NL"},{"name":"Malawi","countryCode":"MW"},{"name":"United Kingdom","countryCode":"GB"}]

function getAllCountries() {
    for (let i = 0; i < country_name_and_code.length; i++) {
        // Adding unique country names to set countryNames
        countryNames.add(country_name_and_code[i].name);
    }
    countryNames = Array.from(countryNames);
}

function addCountryOptions(countryNames) {
    // Alt get al; country options
    selector = document.getElementsByTagName("select")[0];
    let o;
    for (let i = 0; i < countryNames.length; i++) {
        o = document.createElement("option");
        o.value = countryNames[i]
        o.text = countryNames[i];
        selector.add(o);
    }
}
// Display country in a h2
let showCountry = () => {
    let c = document.getElementById("current-country");
    c.innerHTML = country_name_and_code.find(element => element.countryCode == country_code).name;
}

// How far the canvas is from the window
let canvasOffset = 400;


// Adding country options when data loads
window.onload = (event) => {
    getAllCountries();
    addCountryOptions(countryNames);
    selector.addEventListener('change', (event) => {
       country_code = getCountryCode(selector, country_name_and_code);
       console.log(country_code);
       let xmlhttp3 = new XMLHttpRequest();
       xmlhttp3.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           let myObj = JSON.parse(this.responseText);
           gotCountry(myObj);
       }
       };
       xmlhttp3.open("GET", "https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=" + country_code, true);
       xmlhttp3.withCredentials = false;
       xmlhttp3.send();

       showCountry();
      });

      
    
  };


function setup() {

    // Making two requests to api for latest overall data and data by country
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        gotLatest(myObj);
    }
    };
    xmlhttp.open("GET", "https://coronavirus-tracker-api.herokuapp.com/v2/latest", true);
    // Use to bypass cross-site Access-Control error
    xmlhttp.withCredentials = false;
    xmlhttp.send();

    let xmlhttp1 = new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        gotCountry(myObj);
    }
    };
    xmlhttp1.open("GET", "https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=" + country_code, true);
    xmlhttp1.withCredentials = false;
    xmlhttp1.send();

    let canvas = createCanvas(windowWidth-canvasOffset, windowHeight-canvasOffset);
    canvas.parent('sketch-holder');
    showCountry();
  }

  function windowResized() {
    resizeCanvas(windowWidth-canvasOffset, windowHeight-canvasOffset);
  }


function gotLatest(data) {
    latest = data.latest;
}

function gotCountry(data){
    country = data.locations;
    // If country has multiple province data eg. us states, add all the latest info together. If not, put it into one 
    if (country.length == 1) {
        countryLatest.confirmed = country[0].latest.confirmed;
        countryLatest.deaths = country[0].latest.deaths;
        // countryLatest.recovered = country[0].latest.recovered.toLocaleString();
        countryLatest.countryName = country[0].country;
        console.log(countryLatest);
    }
    else {
        totalc = 0;
        totald = 0;
        // totalr = 0;
        country.forEach((element) => {
            totalc += element.latest.confirmed;
            totald += element.latest.deaths;
            // totalr += element.latest.recovered;

        });
        countryLatest.confirmed = totalc;
        countryLatest.deaths = totald;
        // countryLatest.recovered = totalr.toString();
        countryLatest.countryName = country[0].country;
        // console.log(countryLatest);
    }

    
}

let getCountryCode = (countrySelector, country_name_and_code) => {
    selectedCountry = countrySelector.selectedOptions[0].textContent;
    return country_name_and_code.find(element => element.name == selectedCountry).countryCode;
}


const toDeg = (val, total) => (val / total) * 360;

let showCountryInfo = () => {
    document.getElementById("country-confirmed").innerHTML = "Confirmed: " + countryLatest.confirmed.toLocaleString();;
    document.getElementById("country-deaths").innerHTML = "Deaths: " + countryLatest.deaths.toLocaleString();;
}

function draw() {
    // waits until latest data loads
    if (latest){
        document.getElementById("confirmed").innerHTML = "Confirmed: " + latest.confirmed.toLocaleString();
        document.getElementById("deaths").innerHTML = "Deaths: " + latest.deaths.toLocaleString();
        // document.getElementById("recovered").innerHTML = "recovered: " + latest.recovered;
    }

    // waits until country latest data loads
    if (countryLatest && latest){
        showCountryInfo();
        // background(220);
        let max = 350;
        let circleSpace = 90;
        let arcStart = -90
        let deathAngle = toDeg(countryLatest.deaths, countryLatest.confirmed);
        // If death angle is 0, it shows up as a complete circle. This value has it show up as a small dot instead
        if (deathAngle == 0) {
            deathAngle = -359;
        }
        noFill();
        strokeWeight(12);
        // Arc of total cases (circle) has a green color
        stroke(0, 189, 0);
        arc(width/2, height/2, max, max, 0, 0);
        // Arc of total deaths has a red color
        stroke(189, 31, 0);
        arc(width/2, height/2, max-circleSpace, max-circleSpace, radians(arcStart), radians(arcStart + deathAngle), OPEN);


        
    }
    


}

