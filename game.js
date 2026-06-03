const scenarioText = document.getElementById("scenarioText");
const resultText = document.getElementById("resultText");
const scenarioBtn = document.getElementById("scenarioBtn");
const choicesDiv = document.getElementById("choices");
const progressText = document.getElementById("progressText");

const story = [
  {
    scenario: "You forgot your homework, coach benched you, and your crush saw you trip.",
    choices: [
      { text: "Accept defeat", effect: 20 },
      { text: "Act like nothing happened", effect: 35 }
    ]
  },
  {
    scenario: "You called the teacher 'mom'.",
    choices: [
      { text: "Pretend nobody heard", effect: 15 },
      { text: "Laugh awkwardly", effect: 10 }
    ]
  },
  {
    scenario: "You confidently answered in class and got everything wrong.",
    choices: [
      { text: "Double down anyway", effect: 30 },
      { text: "Admit defeat", effect: 10 }
    ]
  },
  {
    scenario: "Coach said 'good hustle' (you played 14 seconds).",
    choices: [
      { text: "Act grateful", effect: 10 },
      { text: "Crash out internally", effect: 25 }
    ]
  },
  {
    scenario: "You posted a story and deleted it after 11 views.",
    choices: [
      { text: "Pretend it never happened", effect: 10 },
      { text: "Repost it confidently", effect: 20 }
    ]
  },
  {
    scenario: "You slipped in public then pretended to check your shoe.",
    choices: [
      { text: "Keep walking", effect: 15 },
      { text: "Blame the floor", effect: 25 }
    ]
  },
  {
    scenario: "You waved at someone who wasn't waving at you.",
    choices: [
      { text: "Play it cool", effect: 15 },
      { text: "Leave immediately", effect: 35 }
    ]
  },
  {
    scenario: "Your alarm didn't ring and first period started 40 mins ago.",
    choices: [
      { text: "Rush to school", effect: 10 },
      { text: "Accept fate and sleep", effect: 30 }
    ]
  },
  {
    scenario: "You got crossed in basketball and people started barking.",
    choices: [
      { text: "Lock in next play", effect: 15 },
      { text: "Sub yourself out", effect: 35 }
    ]
  },
  {
    scenario: "Your friend said 'be honest' and then got mad.",
    choices: [
      { text: "Apologize", effect: 10 },
      { text: "Stand on business", effect: 25 }
    ]
  },
  {
    scenario: "You opened Snapchat and accidentally called someone.",
    choices: [
      { text: "Hang up instantly", effect: 15 },
      { text: "Act like it was intentional", effect: 20 }
    ]
  },
  {
    scenario: "You laughed too hard and snorted.",
    choices: [
      { text: "Laugh harder", effect: 5 },
      { text: "Disappear forever", effect: 30 }
    ]
  },
  {
    scenario: "Your teacher started reading your answer out loud.",
    choices: [
      { text: "Pray it's correct", effect: 20 },
      { text: "Avoid eye contact", effect: 15 }
    ]
  },
  {
    scenario: "You sent a risky text and saw 'Seen 2h ago.'",
    choices: [
      { text: "Delete the chat mentally", effect: 30 },
      { text: "Act unbothered", effect: 20 }
    ]
  },
  {
    scenario: "Someone said 'who invited bro?'",
    choices: [
      { text: "Laugh it off", effect: 15 },
      { text: "Leave dramatically", effect: 35 }
    ]
  }
];

let cooked = 0;
let currentScene = 0;

function loadScene() {
  if (currentScene >= story.length) {
    showEnding();
    return;
  }

  const scene = story[currentScene];

  progressText.textContent = `Scenario ${currentScene + 1} of ${story.length}`;
  scenarioText.textContent = scene.scenario;
  choicesDiv.innerHTML = "";

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;

    button.addEventListener("click", () => chooseOption(choice.effect));

    choicesDiv.appendChild(button);
  });
}

function chooseOption(effect) {
  cooked += effect;
  currentScene += 1;
  loadScene();
}

function getEnding() {
  if (cooked < 30) {
    return "BARELY COOKED You somehow survived.";
  }

  if (cooked < 60) {
    return "MEDIUM COOKED Reputation slightly damaged.";
  }

  return "ABSOLUTELY FINISHED Seek prayer and snacks.";
}

function showEnding() {
  scenarioText.textContent = "Game Over";
  choicesDiv.innerHTML = "";
  resultText.innerHTML = `
    <strong>${cooked}% COOKED</strong><br>
    ${getEnding()}
  `;

  scenarioBtn.textContent = "Play Again";
  scenarioBtn.style.display = "block";
}

function startGame() {
  cooked = 0;
  currentScene = 0;

  scenarioBtn.style.display = "none";
  resultText.textContent = "Choose wisely...";
  loadScene();
}

scenarioBtn.addEventListener("click", startGame);
