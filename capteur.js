export class Capteur {
    static getCurrentTemperature() {
        return fetch('https://hothothot.dog/api/capteurs/exterieur',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                    if (res.ok) {
                        return res.json().then(data => {
                            return data?.capteurs?.[0]?.Valeur;
                        });
                    }
                }
            )
    }
}