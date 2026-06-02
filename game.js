let cooked = 0;
let currentScene = 0;

const scenarios = [
  "You forgot your homework, coach benched you, and your crush saw you trip.",
  "You waved back at someone who wasn't waving at you.",
  "Your mom started yelling your full government name in public.",
  "You posted something cringe and realized 4 teachers liked it.",
  "You accidentally opened your front camera.",
  "You slipped in the hallway and someone said 'you good?'",
  "Your alarm didn't ring and now you're late for school.",
  "You texted 'love you' to the wrong person.",
  "Your friend roasted you in front of everyone and it was lowkey funny."
];

const reactions = [
  "Seek prayer and snacks immediately.",
  "You may recover in 3-5 business days.",
  "Pack it up lil bro.",
  "Character development arc unlocked.",
  "Honestly... this is tragic.",
  "You'll survive, but the embarrassment lives forever.",
  "Praying for your comeback.",
  "This level of cooked deserves a documentary."
];

const scenarioText =
  document.getElementById("scenarioText");

const resultText =
  document.getElementById("resultText");

const scenarioBtn =
  document.getElementById("scenarioBtn");

const cookBtn =
  document.getElementById("cookBtn");

let currentScenario = "";

function showCookedResult() {
  const cookedPercent =
    Math.floor(Math.random() * 101);

  const survivability =
    Math.floor(Math.random() * 10) + 1;

  const reaction =
    reactions[
      Math.floor(Math.random() * reactions.length)
    ];

  resultText.innerHTML = `
    <strong>${cookedPercent}% COOKED</strong><br>
    Survivability: ${survivability}/10<br><br>
    ${reaction}
  `;
}

scenarioBtn.addEventListener("click", () => {
  const randomIndex =
    Math.floor(Math.random() * scenarios.length);

  currentScenario =
    scenarios[randomIndex];

  scenarioText.textContent =
    currentScenario;

  resultText.textContent =
    "Scenario loaded. Time to find out.";
});

cookBtn.addEventListener("click", () => {
  if (currentScenario === "") {
    resultText.textContent =
      "Bro generate a scenario first smh.";
    return;
  }

  showCookedResult();
});
