const STORAGE_KEY = "english-lab-do-play-go-v1";
const REQUIRED_STREAK = 10;

const levels = [
  {
    id: 0,
    title: "Level 1",
    emoji: "🌱",
    focus: "База",
    description: "Самые понятные пары: sports, homework, shopping, yoga.",
    medal: "🥉",
    words: ["play football", "go shopping", "do homework"],
    questions: [
      { visual: "⚽", text: "We ___ football after school.", hint: "Спорт с правилами.", answer: "play" },
      { visual: "🛍️", text: "They ___ shopping on Saturdays.", hint: "Activity на -ing.", answer: "go" },
      { visual: "📘", text: "I ___ homework in the evening.", hint: "Домашка: мы это делаем.", answer: "do" },
      { visual: "🎾", text: "She ___ tennis every Sunday.", hint: "Игра или спорт с правилами.", answer: "play" },
      { visual: "🏊", text: "My friends ___ swimming in summer.", hint: "Форма на -ing.", answer: "go" },
      { visual: "🧘", text: "We ___ yoga in the morning.", hint: "Практика, не игра.", answer: "do" },
      { visual: "♟️", text: "He ___ chess with his brother.", hint: "Настольная игра.", answer: "play" },
      { visual: "🛼", text: "The children ___ skating in winter.", hint: "Активность на -ing.", answer: "go" },
      { visual: "🏠", text: "I ___ housework on Fridays.", hint: "Работа по дому.", answer: "do" },
      { visual: "🏀", text: "They ___ basketball at school.", hint: "Командный спорт.", answer: "play" },
      { visual: "💃", text: "We ___ dancing at parties.", hint: "Activity на -ing.", answer: "go" },
      { visual: "💪", text: "You should ___ exercise every day.", hint: "Упражнения мы делаем.", answer: "do" },
      { visual: "🃏", text: "They ___ cards after dinner.", hint: "Карточная игра.", answer: "play" },
      { visual: "⛷️", text: "My parents ___ skiing in January.", hint: "Форма на -ing.", answer: "go" },
      { visual: "🥋", text: "He ___ karate after school.", hint: "Занятие, практика.", answer: "do" },
    ],
  },
  {
    id: 1,
    title: "Level 2",
    emoji: "🚶",
    focus: "Everyday Activities",
    description: "Смешиваем привычные действия, спорт и бытовые активности.",
    medal: "🥈",
    words: ["go jogging", "do exercise", "play cards"],
    questions: [
      { visual: "🏃", text: "I ___ jogging before work.", hint: "Activity на -ing.", answer: "go" },
      { visual: "🎸", text: "She ___ the guitar very well.", hint: "Музыкальный инструмент.", answer: "play" },
      { visual: "🧹", text: "They ___ the cleaning together.", hint: "Действие по дому.", answer: "do" },
      { visual: "🎹", text: "We ___ the piano in music class.", hint: "Инструмент.", answer: "play" },
      { visual: "🛒", text: "He ___ shopping after work.", hint: "Activity на -ing.", answer: "go" },
      { visual: "📝", text: "The students ___ their homework at night.", hint: "Homework всегда с do.", answer: "do" },
      { visual: "🏓", text: "My friends ___ table tennis on Fridays.", hint: "Спорт с правилами.", answer: "play" },
      { visual: "🚴", text: "We ___ cycling near the river.", hint: "Activity на -ing.", answer: "go" },
      { visual: "🧠", text: "She ___ training every morning.", hint: "Тренировку мы делаем.", answer: "do" },
      { visual: "🥁", text: "He ___ the drums in a band.", hint: "Инструмент.", answer: "play" },
      { visual: "🕺", text: "They ___ dancing every weekend.", hint: "Форма на -ing.", answer: "go" },
      { visual: "📚", text: "I ___ extra practice after class.", hint: "Практика = do.", answer: "do" },
      { visual: "🏐", text: "The girls ___ volleyball at school.", hint: "Командная игра.", answer: "play" },
      { visual: "🏂", text: "We ___ snowboarding in the mountains.", hint: "Activity на -ing.", answer: "go" },
      { visual: "🧩", text: "You ___ a lot of work every day.", hint: "Work идет с do.", answer: "do" },
    ],
  },
  {
    id: 2,
    title: "Level 3",
    emoji: "🎯",
    focus: "Sports & Hobbies",
    description: "Больше спорта, хобби, инструментов и микса из разных паттернов.",
    medal: "🥇",
    words: ["play the drums", "go surfing", "do yoga"],
    questions: [
      { visual: "🏄", text: "They ___ surfing in summer.", hint: "Activity на -ing.", answer: "go" },
      { visual: "🎻", text: "She ___ the violin after school.", hint: "Инструмент.", answer: "play" },
      { visual: "🧘", text: "My mother ___ yoga every morning.", hint: "Практика.", answer: "do" },
      { visual: "⚾", text: "The boys ___ baseball in the yard.", hint: "Игра по правилам.", answer: "play" },
      { visual: "🏊", text: "We ___ swimming after lunch.", hint: "Форма на -ing.", answer: "go" },
      { visual: "🥊", text: "He ___ boxing twice a week.", hint: "Тренировка, не игра.", answer: "do" },
      { visual: "🎮", text: "The kids ___ video games after dinner.", hint: "Game = play.", answer: "play" },
      { visual: "🧗", text: "They ___ climbing at the weekend.", hint: "Activity на -ing.", answer: "go" },
      { visual: "📖", text: "I ___ my exercises in class.", hint: "Exercises делаем.", answer: "do" },
      { visual: "♣️", text: "We ___ cards on the train.", hint: "Карточная игра.", answer: "play" },
      { visual: "🏇", text: "She ___ horse riding in spring.", hint: "Форма на -ing.", answer: "go" },
      { visual: "🥋", text: "They ___ judo after school.", hint: "Боевые практики идут с do.", answer: "do" },
      { visual: "🏸", text: "I ___ badminton with my cousin.", hint: "Спорт с правилами.", answer: "play" },
      { visual: "🛶", text: "We ___ kayaking in August.", hint: "Activity на -ing.", answer: "go" },
      { visual: "📋", text: "She ___ the work very carefully.", hint: "Work = do.", answer: "do" },
    ],
  },
  {
    id: 3,
    title: "Level 4",
    emoji: "🧠",
    focus: "Tricky Cases",
    description: "Смешанный финальный блок с частыми ловушками и похожими случаями.",
    medal: "🏆",
    words: ["go to the gym", "play the piano", "do karate"],
    questions: [
      { visual: "🏋️", text: "We ___ to the gym after work.", hint: "Здесь нужен go.", answer: "go" },
      { visual: "🎹", text: "He ___ the piano every evening.", hint: "Инструмент: play.", answer: "play" },
      { visual: "🥋", text: "She ___ karate on Mondays.", hint: "Боевые искусства часто с do.", answer: "do" },
      { visual: "🛍️", text: "My parents ___ shopping on Sundays.", hint: "Activity на -ing.", answer: "go" },
      { visual: "🎲", text: "The children ___ board games at home.", hint: "Games = play.", answer: "play" },
      { visual: "📘", text: "I ___ my homework before dinner.", hint: "Homework всегда с do.", answer: "do" },
      { visual: "🛹", text: "They ___ skateboarding in the park.", hint: "Activity на -ing.", answer: "go" },
      { visual: "🥁", text: "She ___ the drums in a school band.", hint: "Инструменты идут с play.", answer: "play" },
      { visual: "💪", text: "He ___ exercise every morning.", hint: "Exercise с do.", answer: "do" },
      { visual: "🏐", text: "We ___ volleyball on the beach.", hint: "Спорт по правилам.", answer: "play" },
      { visual: "⛸️", text: "My friends ___ skating in winter.", hint: "Форма на -ing.", answer: "go" },
      { visual: "🧺", text: "I ___ the washing on Saturday.", hint: "Домашнее действие.", answer: "do" },
      { visual: "🎸", text: "They ___ the guitar after class.", hint: "Музыкальный инструмент.", answer: "play" },
      { visual: "🌊", text: "We ___ diving on holiday.", hint: "Activity на -ing.", answer: "go" },
      { visual: "🧘", text: "You can ___ yoga at home.", hint: "Практика, не игра.", answer: "do" },
    ],
  },
];

const levelGridEl = document.getElementById("levelGrid");
const trainerTitleEl = document.getElementById("trainerTitle");
const trainerDescriptionEl = document.getElementById("trainerDescription");
const levelNameEl = document.getElementById("levelName");
const streakEl = document.getElementById("streak");
const medalCountEl = document.getElementById("medalCount");
const promptVisualEl = document.getElementById("promptVisual");
const promptTextEl = document.getElementById("promptText");
const promptHintEl = document.getElementById("promptHint");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const nextButtonFill = document.getElementById("nextButtonFill");
const nextButtonLabel = document.getElementById("nextButtonLabel");
const restartLevelButton = document.getElementById("restartLevelButton");
const resetButton = document.getElementById("resetButton");
const confettiLayerEl = document.getElementById("confettiLayer");

const defaultProgress = () => ({
  activeLevel: 0,
  completed: [],
  streaks: {},
});

let progress = loadProgress();
let currentQuestion = null;
let locked = false;
let statusMessage = "Нажми на правильный вариант.";
let questionQueuesByLevel = {};
let autoNextTimeout = null;
let autoNextAction = null;

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return defaultProgress();
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      activeLevel: typeof parsed.activeLevel === "number" ? parsed.activeLevel : 0,
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      streaks: parsed.streaks && typeof parsed.streaks === "object" ? parsed.streaks : {},
    };
  } catch (error) {
    return defaultProgress();
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function clearAutoNext() {
  if (autoNextTimeout) {
    clearTimeout(autoNextTimeout);
    autoNextTimeout = null;
  }

  autoNextAction = null;
  nextButton.classList.remove("auto-progress");
  nextButtonLabel.textContent = "Следующий вопрос";
  nextButtonFill.style.width = "0";
}

function launchConfetti() {
  confettiLayerEl.innerHTML = "";
  const palette = ["#ea6b2d", "#1c8d78", "#ffcf5a", "#3e78d4", "#f39f76", "#ffffff"];

  for (let index = 0; index < 28; index += 1) {
    const piece = document.createElement("span");
    piece.className = `confetti ${Math.random() > 0.65 ? "round" : ""}`;
    piece.style.left = `${18 + Math.random() * 64}%`;
    piece.style.background = palette[index % palette.length];
    piece.style.animationDelay = `${Math.random() * 180}ms`;
    piece.style.setProperty("--drift-x", `${Math.random() * 320 - 160}px`);
    piece.style.setProperty("--drift-y", `${220 + Math.random() * 120}px`);
    piece.style.setProperty("--spin", `${Math.random() * 540 - 270}deg`);
    confettiLayerEl.appendChild(piece);
  }

  window.setTimeout(() => {
    confettiLayerEl.innerHTML = "";
  }, 1600);
}

function isLevelUnlocked(levelId) {
  return levelId === 0 || progress.completed.includes(levelId - 1);
}

function getLevelStreak(levelId) {
  return progress.streaks[levelId] || 0;
}

function setLevelStreak(levelId, value) {
  progress.streaks[levelId] = value;
}

function getRandomQuestion(levelId) {
  const questions = levels[levelId].questions;
  const existingQueue = questionQueuesByLevel[levelId];

  if (!existingQueue || existingQueue.length === 0) {
    questionQueuesByLevel[levelId] = shuffle(questions.map((_, index) => index));
  }

  if (questions.length > 1) {
    const queue = questionQueuesByLevel[levelId];
    const lastQuestionText = currentQuestion && progress.activeLevel === levelId
      ? currentQuestion.text
      : null;

    if (queue.length === questions.length && questions[queue[0]].text === lastQuestionText) {
      queue.push(queue.shift());
    }
  }

  const nextIndex = questionQueuesByLevel[levelId].shift();
  return questions[nextIndex];
}

function renderLevels() {
  levelGridEl.innerHTML = levels
    .map((level) => {
      const unlocked = isLevelUnlocked(level.id);
      const active = progress.activeLevel === level.id;
      const completed = progress.completed.includes(level.id);
      const streak = getLevelStreak(level.id);

      return `
        <button
          class="level-card ${active ? "active" : ""} ${unlocked ? "" : "locked"}"
          data-level-id="${level.id}"
          type="button"
          ${unlocked ? "" : "disabled"}
        >
          <div class="level-head">
            <div>
              <h3>${level.title}</h3>
              <p>${level.focus}</p>
            </div>
            <div class="medal-slot ${completed ? "earned" : ""}">
              ${completed ? level.medal : "•"}
            </div>
          </div>
          <p>${level.description}</p>
          <div class="word-strip">
            ${level.words.map((word) => `<span class="word-chip">${word}</span>`).join("")}
          </div>
          <div class="level-foot">
            <span class="streak-mini">Серия: ${streak}/${REQUIRED_STREAK}</span>
            <span>${level.emoji}</span>
          </div>
        </button>
      `;
    })
    .join("");

  Array.from(levelGridEl.querySelectorAll(".level-card")).forEach((card) => {
    card.addEventListener("click", () => {
      const levelId = Number(card.dataset.levelId);
      if (!isLevelUnlocked(levelId)) {
        return;
      }

      progress.activeLevel = levelId;
      currentQuestion = getRandomQuestion(levelId);
      statusMessage = "Нажми на правильный вариант.";
      saveProgress();
      renderLevels();
      renderTrainer();
      window.location.hash = "trainer";
    });
  });
}

function renderTrainer() {
  clearAutoNext();

  const activeLevel = levels[progress.activeLevel];
  const streak = getLevelStreak(activeLevel.id);

  if (!currentQuestion) {
    currentQuestion = getRandomQuestion(activeLevel.id);
  }

  trainerTitleEl.textContent = activeLevel.title;
  trainerDescriptionEl.textContent =
    activeLevel.description + ` Нужно ${REQUIRED_STREAK} правильных подряд, чтобы пройти дальше.`;
  levelNameEl.textContent = String(activeLevel.id + 1);
  streakEl.textContent = String(streak);
  medalCountEl.textContent = String(progress.completed.length);
  promptVisualEl.textContent = currentQuestion.visual;
  promptTextEl.textContent = currentQuestion.text;
  promptHintEl.textContent = currentQuestion.hint;
  feedbackEl.textContent = statusMessage;
  choicesEl.innerHTML = "";
  locked = false;

  shuffle(["do", "play", "go"]).forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => chooseOption(option, button));
    choicesEl.appendChild(button);
  });
}

function lockChoices() {
  Array.from(choicesEl.children).forEach((choice) => {
    choice.disabled = true;
    if (choice.textContent === currentQuestion.answer) {
      choice.classList.add("correct");
    }
  });
}

function completeLevel(levelId) {
  clearAutoNext();

  if (!progress.completed.includes(levelId)) {
    progress.completed.push(levelId);
  }

  const nextLevelId = levelId + 1;

  if (nextLevelId < levels.length) {
    progress.activeLevel = nextLevelId;
    currentQuestion = getRandomQuestion(nextLevelId);
    statusMessage =
      `Уровень пройден! Медаль ${levels[levelId].medal} получена. Открылся ${levels[nextLevelId].title}.`;
    saveProgress();
    renderLevels();
    renderTrainer();
    window.setTimeout(() => {
      launchConfetti();
    }, 60);
    return;
  }

  progress.activeLevel = levelId;
  currentQuestion = getRandomQuestion(levelId);
  statusMessage = `Финал пройден. Медаль ${levels[levelId].medal} получена. Можно повторять любой уровень.`;
  saveProgress();
  renderLevels();
  renderTrainer();
  window.setTimeout(() => {
    launchConfetti();
  }, 60);
}

function startAutoNext(action, label) {
  clearAutoNext();
  autoNextAction = action;
  nextButton.classList.add("auto-progress");
  nextButtonLabel.textContent = label;
  autoNextTimeout = window.setTimeout(() => {
    autoNextTimeout = null;
    const pendingAction = autoNextAction;
    autoNextAction = null;
    if (pendingAction) {
      pendingAction();
    }
  }, 1000);
}

function chooseOption(option, button) {
  if (locked) {
    return;
  }

  locked = true;
  clearAutoNext();
  lockChoices();

  const levelId = progress.activeLevel;
  const currentStreak = getLevelStreak(levelId);
  const isCorrect = option === currentQuestion.answer;

  if (isCorrect) {
    const nextStreak = currentStreak + 1;
    setLevelStreak(levelId, nextStreak);
    button.classList.add("correct");
    saveProgress();
    streakEl.textContent = String(nextStreak);

    if (nextStreak >= REQUIRED_STREAK) {
      statusMessage = `Верно. ${REQUIRED_STREAK} из ${REQUIRED_STREAK} подряд. Сейчас будет переход по уровню.`;
      feedbackEl.textContent = statusMessage;
      startAutoNext(() => completeLevel(levelId), "Следующий уровень через 1 сек");
      return;
    }

    statusMessage = `Верно. Уже ${nextStreak} из ${REQUIRED_STREAK} подряд.`;
    feedbackEl.textContent = statusMessage;
    startAutoNext(nextQuestion, "Следующий вопрос через 1 сек");
    return;
  }

  setLevelStreak(levelId, 0);
  button.classList.add("wrong");
  saveProgress();
  streakEl.textContent = "0";
  statusMessage = `Неверно. Правильный ответ: ${currentQuestion.answer}. Серия сброшена, но уровень продолжается.`;
  feedbackEl.textContent = statusMessage;
  renderLevels();
}

function nextQuestion() {
  clearAutoNext();
  currentQuestion = getRandomQuestion(progress.activeLevel);
  statusMessage = "Нажми на правильный вариант.";
  renderTrainer();
}

function restartLevel() {
  clearAutoNext();
  setLevelStreak(progress.activeLevel, 0);
  currentQuestion = getRandomQuestion(progress.activeLevel);
  statusMessage = "Серия уровня сброшена. Начинаем заново.";
  saveProgress();
  renderLevels();
  renderTrainer();
}

function resetProgress() {
  clearAutoNext();
  progress = defaultProgress();
  currentQuestion = getRandomQuestion(0);
  statusMessage = "Весь прогресс очищен. Можно начинать сначала.";
  saveProgress();
  renderLevels();
  renderTrainer();
}

nextButton.addEventListener("click", () => {
  if (autoNextAction) {
    const pendingAction = autoNextAction;
    clearAutoNext();
    pendingAction();
    return;
  }

  nextQuestion();
});

restartLevelButton.addEventListener("click", restartLevel);
resetButton.addEventListener("click", resetProgress);

currentQuestion = getRandomQuestion(progress.activeLevel);
renderLevels();
renderTrainer();
