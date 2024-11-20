const facts = [
    "I am 19 years old and have a passion for exploring mountains.",
    "I love hiking and have visited several mountain ranges.",
    "I am currently learning about the geology of mountains.",
    "I enjoy capturing the beauty of mountains through photography.",
    "I am planning a trip to hike the tallest mountain in my region."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
