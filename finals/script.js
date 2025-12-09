
function showPage(pageId) {
    document.querySelectorAll('.card').forEach(div => div.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

const tips = [
    "Take shorter showers and turn off the tap while brushing your teeth.",
    "Repair leaking faucets, toilets, or pipes immediately.",
    "Collect rainwater for gardening or outdoor cleaning.",
    "Run dishwashers and washing machines only when full.",
    "Water plants early morning or late evening to reduce evaporation.",
    "Use buckets instead of hoses when cleaning outdoor areas.",
    "Switch to water-efficient appliances when possible.",
    "Reuse water when safe, such as laundry rinse water for cleaning floors."
];

let lastFew = [];

function generateTip() {
    let available = tips.filter(t => !lastFew.includes(t));

    if (available.length === 0) {
        lastFew = [];
        available = [...tips];
    }

    const randomTip = available[Math.floor(Math.random() * available.length)];

    document.getElementById("tipText").textContent = randomTip;

    lastFew.push(randomTip);
    if (lastFew.length > 3) lastFew.shift();
}
