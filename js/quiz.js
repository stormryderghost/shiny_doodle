document.getElementById('energy').addEventListener('input', function() {
    const labels = ['Low', 'Moderate', 'High'];
    document.getElementById('energy-label').textContent = labels[this.value];
});

function submitQuiz() {
    // Gather quiz data
    const energy = document.querySelector('input[name="energy"]').value;
    const stress = document.querySelector('input[name="stress"]:checked')?.value;
    const age = document.querySelector('select[name="age"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subscribe = document.querySelector('input[name="subscribe"]').checked;

    if (!stress || !energy) {
        alert('Please answer all questions.');
        return;
    }

    // Determine dosha scores
    let doshaScores = { Vata: 0, Kapha: 0, Pitta: 0 };

    doshaScores = {
        Vata: calculateDoshaScore('Vata', energy, stress, age),
        Kapha: calculateDoshaScore('Kapha', energy, stress, age),
        Pitta: calculateDoshaScore('Pitta', energy, stress, age),
    };

    let dosha = Object.keys(doshaScores).reduce((a, b) => doshaScores[a] > doshaScores[b] ? a : b);

    displayResult(dosha);

    if (email) {
        handleSubscription(email, subscribe);
    }
}

function calculateDoshaScore(dosha, energy, stress, age) {
    let score = 0;
    // Example scoring logic with age and energy influence
    score += energy === '2' && dosha === 'Vata' ? 2 : 1;
    score += stress === 'irritable' && dosha === 'Pitta' ? 2 : 1;
    score += (age === '40-60' && dosha === 'Kapha') ? 2 : 1;
    return score;
}

function displayResult(dosha) {
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    let resultHtml = '';
    switch (dosha) {
        case 'Vata':
            resultHtml = `
                <h2>Your Dosha: Vata</h2>
                <p>Vata individuals are characterized by their light, dry, and cool qualities. Balancing Vata requires grounding and hydrating remedies.</p>
                <h3>Recommended Herbal Remedies:</h3>
                <ul>
                    <li><a href="/shiny_doodle/herbal-remedies/vata-herbs.html">Ashwagandha</a> - Balances Vata and supports vitality.</li>
                    <li><a href="/shiny_doodle/herbal-remedies/vata-herbs.html">Ginger</a> - Warms and aids digestion.</li>
                </ul>
                <h3>Additional Tips:</h3>
                <p>Focus on warm, nourishing foods and practices. Incorporate relaxation techniques and stay hydrated.</p>
            `;
            break;
        case 'Kapha':
            resultHtml = `
                <h2>Your Dosha: Kapha</h2>
                <p>Kapha individuals are characterized by their heavy, slow, and steady qualities. Balancing Kapha requires stimulating and invigorating remedies.</p>
                <h3>Recommended Herbal Remedies:</h3>
                <ul>
                    <li><a href="/shiny_doodle/herbal-remedies/kapha-herbs.html">Ginger</a> - Stimulates digestion and increases energy.</li>
                    <li><a href="/shiny_doodle/herbal-remedies/kapha-herbs.html">Turmeric</a> - Reduces inflammation and stimulates circulation.</li>
                </ul>
                <h3>Additional Tips:</h3>
                <p>Incorporate more movement and stimulating activities into your routine. Opt for light, warming foods.</p>
            `;
            break;
        case 'Pitta':
            resultHtml = `
                <h2>Your Dosha: Pitta</h2>
                <p>Pitta individuals are characterized by their fiery and intense qualities. Balancing Pitta requires cooling and soothing remedies.</p>
                <h3>Recommended Herbal Remedies:</h3>
                <ul>
                    <li><a href="/shiny_doodle/herbal-remedies/pitta-herbs.html">Peppermint</a> - Helps cool and soothe the digestive system.</li>
                    <li><a href="/shiny_doodle/herbal-remedies/pitta-herbs.html">Licorice</a> - Soothes the stomach lining and balances Pitta.</li>
                </ul>
                <h3>Additional Tips:</h3>
                <p>Include cooling and calming practices. Avoid spicy and heating foods.</p>
            `;
            break;
    }
    resultDiv.innerHTML = resultHtml;
}

function handleSubscription(email, subscribe) {
    if (subscribe) {
        // Simulate sending email to server or email service
        console.log(`Email: ${email} has subscribed to the newsletter.`);
    }
}
