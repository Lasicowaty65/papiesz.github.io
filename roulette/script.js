const container = document.querySelector('.container');
const btn = document.getElementById('spin');
const winScore = document.querySelector('.win-score');

// wszystkie pola koła (kolejność zgodna z HTML)
const fields = [
    { value: 150 },
    { value: 25 },
    { value: 16 },
    { value: 32 },
    { value: 50 },
    { value: 45 },
    { value: 70 },
    { value: 85 }
];

const fieldAngle = 360 / fields.length;
let currentRotation = 0;
let totalWin = 0;

btn.onclick = function () {
    // losowy obrót (kilka pełnych obrotów + losowy kąt)
    const spinRotation = Math.floor(Math.random() * 360) + 360 * 5;
    currentRotation += spinRotation;

    container.style.transition = "transform 4s ease-out";
    container.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        // normalizujemy kąt do 0–360
        const normalizedRotation = currentRotation % 360;

        // ponieważ strzałka jest u góry
        const index = Math.floor(
            ((360 - normalizedRotation + fieldAngle / 2) % 360) / fieldAngle
        );

        const win = fields[index].value;

        totalWin += win;

        // zapis wygranej
        alert(`WYGRAŁEŚ ${win}`);
    }, 4000);
};
