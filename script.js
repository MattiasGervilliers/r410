import {Capteur} from "./capteur.js";

const affichage = document.getElementById("affichage");
const temperatureSection = document.getElementById("temperature");
const historiqueSection = document.getElementById("historique");
const historique = document.getElementsByClassName("historique-section")[0];
const temperatureTab = document.getElementById("temperatureTab");
const historiqueTab = document.getElementById("historiqueTab");

const brrrrrrr = document.createElement("p");
brrrrrrr.appendChild(document.createTextNode("Brrrrrrr, un peu froid ce matin, mets ta cagoule !"));
const caliente = document.createElement("p");
caliente.appendChild(document.createTextNode("Caliente ! Vamos a la playa, ho hoho hoho !!"));

export function displayTemperature() {
    temperatureTab.className = "selected";
    historiqueTab.removeAttribute("class");
    historique.setAttribute("hidden", "");
    historique.style.display = "none";
    temperatureSection.removeAttribute("hidden");
    temperatureSection.style.display = "block";
}

export function displayHistorique() {
    historiqueTab.className = "selected";
    temperatureTab.removeAttribute("class");
    temperatureSection.setAttribute("hidden", "");
    temperatureSection.style.display = "none";
    historique.removeAttribute("hidden");
    historique.style.display = "block";
}

function setNewTemperature(temperature) {
    affichage.innerHTML = temperature + ' °C';
    if (temperatureSection.contains(brrrrrrr)) {
        temperatureSection.removeChild(brrrrrrr);
    }
    if (temperatureSection.contains(caliente)) {
        temperatureSection.removeChild(caliente);
    }
    if (temperature < 0) {
        affichage.className = "cold";
        temperatureSection.insertBefore(brrrrrrr, affichage);
    } else if (temperature >= 0 && temperature < 20) {
        affichage.className = "cool";
    } else if (temperature >= 20 && temperature < 30) {
        affichage.className = "warm";
    } else if (temperature >= 30) {
        affichage.className = "hot";
        temperatureSection.insertBefore(caliente, affichage);
    }

    const newTempHistorique = document.createElement("p");
    newTempHistorique.appendChild(document.createTextNode(temperature + ' °C'));
    historiqueSection.appendChild(newTempHistorique);
}

async function checkTemperature() {
    const newTemperature = await Capteur.getCurrentTemperature();
    setNewTemperature(newTemperature);
}

setInterval(async () => {
    await checkTemperature();
}, 3000);


document.getElementById("historiqueTab").addEventListener("click", displayHistorique);
document.getElementById("temperatureTab").addEventListener("click", displayTemperature);