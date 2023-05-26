let temperatures = [];
for (let i = 0; i < 20; i++) {
    temperatures.push(Math.floor(Math.random() * 50) - 10);
}

const affichage = document.getElementById("affichage");
const temperatureSection = document.getElementById("temperature");
const historiqueSection = document.getElementById("historique");

const brrrrrrr = document.createElement("p");
brrrrrrr.appendChild(document.createTextNode("Brrrrrrr, un peu froid ce matin, mets ta cagoule !"));
const caliente = document.createElement("p");
caliente.appendChild(document.createTextNode("Caliente ! Vamos a la playa, ho hoho hoho !!"));

for (let i = 0; i < temperatures.length; i++) {
    setTimeout(() => {
        affichage.innerHTML = temperatures[i] + ' °C';
        if (temperatureSection.contains(brrrrrrr)) {
            temperatureSection.removeChild(brrrrrrr);
        }
        if (temperatureSection.contains(caliente)) {
            temperatureSection.removeChild(caliente);
        }
        const temperature = temperatures[i];
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
        newTempHistorique.appendChild(document.createTextNode(temperatures[i] + ' °C'));
        historiqueSection.appendChild(newTempHistorique);
    }, 2000 * i);
}