const STORAGE_KEY = "english-lab-confusing-forms-v2";
const COLLAPSE_STORAGE_KEY = "english-lab-confusing-forms-collapsed-v1";
const WORD_REQUIRED_STREAK = 20;
const SENTENCE_REQUIRED_STREAK = 10;

function vocab(word, ipa, ru, role, note) {
  return { word, ipa, ru, role, note };
}

function sentence(prompt, translation, answers, options, roles, explanation) {
  return {
    prompt,
    translation,
    answers: Array.isArray(answers) ? answers : [answers],
    options,
    roles: Array.isArray(roles) ? roles : [roles],
    explanation,
  };
}

const levels = [
  {
    id: "they-family",
    title: "they / them / their / there",
    description: "Они, их/им, их + предмет, там и they are.",
    vocabulary: [
      vocab("they", "[ðeɪ]", "они, кто делает", "кто делает?", "They = они. Это люди, которые делают действие."),
      vocab("them", "[ðem]", "их / им, кого / кому", "кого? кому?", "Them = их / им. Это объект: I see them, I help them."),
      vocab("their", "[ðeə]", "их + предмет", "чей + предмет", "Their почти всегда стоит перед предметом: their house."),
      vocab("theirs", "[ðeəz]", "их, но без предмета", "чей без предмета", "Theirs стоит один: This house is theirs."),
      vocab("there", "[ðeə]", "там / туда / существует", "место", "There показывает место или конструкцию there is / there are."),
      vocab("they’re", "[ðeər]", "they are", "сокращение", "They’re = they are. Можно раскрыть в they are."),
    ],
    cards: [
      sentence("___ are happy.", "Они счастливы.", "they", ["they", "them", "their", "there", "they’re"], "кто делает?", "they = они, кто делает действие."),
      sentence("I can see ___ from here.", "Я вижу их отсюда.", "them", ["they", "them", "their", "there"], "кого?", "them = их / им, объект действия."),
      sentence("___ house is big.", "Их дом большой.", "their", ["they", "them", "their", "there", "they’re"], "чей + предмет", "their + house = их дом. После their стоит предмет."),
      sentence("This house is ___.", "Этот дом их.", "theirs", ["they", "their", "theirs", "there"], "чей без предмета", "theirs заменяет their house и стоит без предмета."),
      sentence("They are ___ now.", "Они сейчас там.", "there", ["they", "them", "their", "there", "they’re"], "место", "there = там / туда / в том месте."),
      sentence("___ ready.", "Они готовы.", "they’re", ["they", "them", "their", "there", "they’re"], "they are", "they’re = they are. Можно раскрыть: They are ready."),
      sentence("I know ___ friends.", "Я знаю их друзей.", "their", ["they", "them", "their", "there"], "чей + предмет", "their friends = их друзья."),
      sentence("Are ___ any questions?", "Есть какие-нибудь вопросы?", "there", ["they", "them", "their", "there"], "существует", "there are = есть / существует."),
      sentence("___ waiting over ___.", "Они ждут вон там.", ["they", "there"], ["they", "them", "their", "there", "they’re"], ["кто делает?", "место"], "They = они. There = там."),
      sentence("___ car is over ___.", "Их машина вон там.", ["their", "there"], ["they", "them", "their", "there", "they’re"], ["чей + предмет", "место"], "their car = их машина. over there = вон там."),
      sentence("I gave ___ ___ tickets.", "Я дал им их билеты.", ["them", "their"], ["they", "them", "their", "there"], ["кому?", "чей + предмет"], "them = им. their tickets = их билеты."),
      sentence("___ not at home. ___ at work.", "Они не дома. Они на работе.", ["they’re", "they’re"], ["they", "them", "their", "there", "they’re"], ["they are", "they are"], "they’re = they are в обеих частях."),
    ],
  },
  {
    id: "contractions",
    title: "your / you’re, its / it’s",
    description: "Чье слово против сокращения с be.",
    vocabulary: [
      vocab("your", "[jɔːr]", "твой / ваш + предмет", "чей + предмет", "Your стоит перед предметом: your phone."),
      vocab("yours", "[jɔːrz]", "твой / ваш, но без предмета", "чей без предмета", "Yours стоит один: This seat is yours."),
      vocab("you’re", "[jʊər]", "you are", "сокращение", "You’re = you are."),
      vocab("its", "[ɪts]", "его / ее + предмет для it", "чей + предмет", "Its используется для животного, вещи, компании: its logo."),
      vocab("it’s", "[ɪts]", "it is / it has", "сокращение", "It’s = it is или it has."),
    ],
    cards: [
      sentence("___ phone is ringing.", "Твой телефон звонит.", "your", ["your", "you’re", "yours", "you"], "чей + предмет", "your + phone = твой телефон."),
      sentence("___ late again.", "Ты снова опоздал.", "you’re", ["your", "you’re", "yours", "you"], "you are", "you’re = you are."),
      sentence("Is this book ___?", "Эта книга твоя?", "yours", ["your", "you’re", "yours", "you"], "чей без предмета", "yours стоит один, без предмета после него."),
      sentence("I like ___ idea.", "Мне нравится твоя идея.", "your", ["your", "you’re", "yours", "you"], "чей + предмет", "your idea = твоя идея."),
      sentence("The dog is wagging ___ tail.", "Собака виляет своим хвостом.", "its", ["its", "it’s", "it", "itself"], "чей + предмет", "its + tail = его/ее хвост."),
      sentence("___ very cold today.", "Сегодня очень холодно.", "it’s", ["its", "it’s", "it", "itself"], "it is", "it’s = it is."),
      sentence("The company changed ___ logo.", "Компания изменила свой логотип.", "its", ["its", "it’s", "it", "itself"], "чей + предмет", "its logo = ее логотип."),
      sentence("___ my best friend.", "Ты мой лучший друг.", "you’re", ["your", "you’re", "yours", "you"], "you are", "you’re = you are."),
      sentence("I think ___ right, but this idea is not ___.", "Я думаю, ты прав, но эта идея не твоя.", ["you’re", "yours"], ["your", "you’re", "yours", "you"], ["you are", "чей без предмета"], "you’re right = you are right. yours стоит один."),
      sentence("___ raining, but the dog is in ___ house.", "Идет дождь, но собака в своей будке.", ["it’s", "its"], ["its", "it’s", "it", "itself"], ["it is", "чей + предмет"], "it’s = it is. its house = его/ее домик."),
    ],
  },
  {
    id: "possessives",
    title: "my / mine, her / hers, their / theirs",
    description: "Чей + предмет и чей без предмета.",
    vocabulary: [
      vocab("my", "[maɪ]", "мой + предмет", "чей + предмет", "My стоит перед предметом: my bag."),
      vocab("mine", "[maɪn]", "мой, но без предмета", "чей без предмета", "Mine стоит один: This bag is mine."),
      vocab("her", "[hɜːr]", "ее / ей или ее + предмет", "объект или чей", "Her может быть объектом или стоять перед предметом: her phone."),
      vocab("hers", "[hɜːrz]", "ее, но без предмета", "чей без предмета", "Hers стоит один: This phone is hers."),
      vocab("our", "[aʊər]", "наш + предмет", "чей + предмет", "Our стоит перед предметом: our project."),
      vocab("ours", "[aʊərz]", "наш, но без предмета", "чей без предмета", "Ours стоит один: This project is ours."),
      vocab("his", "[hɪz]", "его / его + предмет", "чей", "His может стоять перед предметом и без предмета."),
      vocab("him", "[hɪm]", "его / ему, кого / кому", "кого? кому?", "Him = объект: I saw him."),
    ],
    cards: [
      sentence("This is ___ bag.", "Это моя сумка.", "my", ["my", "mine", "me", "I"], "чей + предмет", "my + bag. После my стоит предмет."),
      sentence("This bag is ___.", "Эта сумка моя.", "mine", ["my", "mine", "me", "I"], "чей без предмета", "mine заменяет my bag."),
      sentence("I called ___.", "Я позвонил ей.", "her", ["she", "her", "hers", "his"], "кому?", "her = ее / ей как объект."),
      sentence("This is ___ phone.", "Это ее телефон.", "her", ["she", "her", "hers", "his"], "чей + предмет", "her + phone = ее телефон."),
      sentence("This phone is ___.", "Этот телефон ее.", "hers", ["she", "her", "hers", "his"], "чей без предмета", "hers стоит без предмета после него."),
      sentence("___ room is clean.", "Их комната чистая.", "their", ["they", "their", "theirs", "there"], "чей + предмет", "their + room = их комната."),
      sentence("This room is ___.", "Эта комната их.", "theirs", ["they", "their", "theirs", "there"], "чей без предмета", "theirs заменяет their room."),
      sentence("This project is ___.", "Этот проект наш.", "ours", ["we", "us", "our", "ours"], "чей без предмета", "ours стоит один."),
      sentence("This is ___ book, and that one is ___.", "Это моя книга, а та моя.", ["my", "mine"], ["my", "mine", "me", "I"], ["чей + предмет", "чей без предмета"], "my book = моя книга. mine = моя без предмета."),
      sentence("She knows ___, but she doesn't know ___ brother.", "Она знает его, но не знает его брата.", ["him", "his"], ["he", "him", "his", "her"], ["кого?", "чей + предмет"], "him = его как объект. his brother = его брат."),
    ],
  },
  {
    id: "whos-whose",
    title: "who’s / whose",
    description: "Кто есть и чей.",
    vocabulary: [
      vocab("who’s", "[huːz]", "who is / who has", "сокращение", "Who’s = who is или who has."),
      vocab("whose", "[huːz]", "чей", "чей?", "Whose спрашивает, кому принадлежит предмет."),
      vocab("who", "[huː]", "кто", "кто?", "Who = кто."),
    ],
    cards: [
      sentence("___ bag is this?", "Чья это сумка?", "whose", ["who’s", "whose", "who", "whom"], "чей?", "whose = чей."),
      sentence("___ calling me?", "Кто мне звонит?", "who’s", ["who’s", "whose", "who", "whom"], "who is", "who’s = who is."),
      sentence("Do you know ___ phone this is?", "Ты знаешь, чей это телефон?", "whose", ["who’s", "whose", "who", "whom"], "чей?", "whose phone = чей телефон."),
      sentence("___ your teacher?", "Кто твой преподаватель?", "who’s", ["who’s", "whose", "who", "whom"], "who is", "who’s your teacher = who is your teacher."),
      sentence("___ turn is it?", "Чья очередь?", "whose", ["who’s", "whose", "who", "whom"], "чей?", "whose turn = чья очередь."),
      sentence("___ ready to start?", "Кто готов начать?", "who’s", ["who’s", "whose", "who", "whom"], "who is", "who’s ready = who is ready."),
      sentence("___ car is over ___?", "Чья машина вон там?", ["whose", "there"], ["who’s", "whose", "who", "there"], ["чей?", "место"], "whose car = чья машина. there = там."),
      sentence("___ book is this? Is it ___?", "Чья это книга? Она твоя?", ["whose", "yours"], ["who’s", "whose", "your", "yours"], ["чей?", "чей без предмета"], "whose book = чья книга. yours = твоя без предмета."),
    ],
  },
  {
    id: "this-these",
    title: "this / these / that / those",
    description: "Это, эти, то и те: рядом/далеко и один/много.",
    vocabulary: [
      vocab("this", "[ðɪs]", "это / этот, рядом, один", "рядом + один", "This = рядом и один предмет."),
      vocab("these", "[ðiːz]", "эти, рядом, много", "рядом + много", "These = рядом и несколько предметов."),
      vocab("that", "[ðæt]", "то / тот, далеко, один", "далеко + один", "That = дальше от нас и один предмет."),
      vocab("those", "[ðəʊz]", "те, далеко, много", "далеко + много", "Those = дальше от нас и несколько предметов."),
    ],
    cards: [
      sentence("___ book is mine.", "Эта книга моя.", "this", ["this", "these", "that", "those"], "рядом + один", "this = это рядом и в единственном числе."),
      sentence("___ books are mine.", "Эти книги мои.", "these", ["this", "these", "that", "those"], "рядом + много", "these = эти рядом и во множественном числе."),
      sentence("___ car is expensive.", "Та машина дорогая.", "that", ["this", "these", "that", "those"], "далеко + один", "that = то/та/тот, один предмет дальше от нас."),
      sentence("___ cars are expensive.", "Те машины дорогие.", "those", ["this", "these", "that", "those"], "далеко + много", "those = те, несколько предметов дальше от нас."),
      sentence("I like ___ idea.", "Мне нравится эта идея.", "this", ["this", "these", "that", "those"], "рядом + один", "this idea = эта идея."),
      sentence("I like ___ ideas.", "Мне нравятся эти идеи.", "these", ["this", "these", "that", "those"], "рядом + много", "these ideas = эти идеи."),
      sentence("Do you see ___ man?", "Ты видишь того мужчину?", "that", ["this", "these", "that", "those"], "далеко + один", "that man = тот мужчина."),
      sentence("Do you see ___ people?", "Ты видишь тех людей?", "those", ["this", "these", "that", "those"], "далеко + много", "those people = те люди."),
      sentence("___ is my phone, and ___ are my keys.", "Это мой телефон, а это мои ключи.", ["this", "these"], ["this", "these", "that", "those"], ["рядом + один", "рядом + много"], "this is для одного предмета, these are для нескольких."),
      sentence("___ was a good day, but ___ were difficult questions.", "То был хороший день, но то были сложные вопросы.", ["that", "those"], ["this", "these", "that", "those"], ["одна ситуация", "много"], "that для одной ситуации, those для нескольких вещей/идей."),
    ],
  },
];

const el = {
  levels: document.getElementById("levels"),
  modeLabel: document.getElementById("modeLabel"),
  levelTitle: document.getElementById("levelTitle"),
  levelDescription: document.getElementById("levelDescription"),
  streak: document.getElementById("streak"),
  stageProgress: document.getElementById("stageProgress"),
  errorCount: document.getElementById("errorCount"),
  roleChip: document.getElementById("roleChip"),
  hintChip: document.getElementById("hintChip"),
  taskLabel: document.getElementById("taskLabel"),
  promptText: document.getElementById("promptText"),
  transcriptionText: document.getElementById("transcriptionText"),
  translationText: document.getElementById("translationText"),
  choices: document.getElementById("choices"),
  feedback: document.getElementById("feedback"),
  feedbackStatus: document.getElementById("feedbackStatus"),
  correctLine: document.getElementById("correctLine"),
  explanationText: document.getElementById("explanationText"),
  nextButton: document.getElementById("nextButton"),
  reviewErrorsButton: document.getElementById("reviewErrorsButton"),
  resetButton: document.getElementById("resetButton"),
  stageButtons: Array.from(document.querySelectorAll(".stage-button")),
};

const defaultProgress = () => ({
  activeLevelId: "they-family",
  stage: "words",
  unlockedLevelIds: ["they-family"],
  completedLevelIds: [],
  wordStreaks: {},
  sentenceStreaks: {},
  errorIds: [],
});

let progress = loadProgress();
let activeCard = null;
let queue = [];
let reviewMode = false;
let answered = false;
let sentenceHadMistake = false;
let collapsedSections = loadCollapsedSections();

const allSentenceCards = levels.flatMap((level) =>
  level.cards.map((card, index) => makeSentenceCard(card, level.id, index))
);
const allWordCards = levels.flatMap((level) => makeWordCards(level));

function makeSentenceCard(card, levelId, index) {
  return {
    id: `sentence-${levelId}-${index}`,
    kind: "sentence",
    levelId,
    step: 0,
    prompt: card.prompt,
    translation: card.translation,
    answers: card.answers,
    options: card.options,
    roles: card.roles,
    explanation: card.explanation,
  };
}

function pickOptions(values, correct, count = 4) {
  const unique = [...new Set(values)];
  const rest = unique.filter((value) => value !== correct);
  return shuffle([correct, ...shuffle(rest).slice(0, count - 1)]);
}

function makeWordCards(level) {
  const meanings = level.vocabulary.map((item) => item.ru);
  const words = level.vocabulary.map((item) => item.word);

  return level.vocabulary.flatMap((item) => [
    {
      id: `word-${level.id}-${item.word}-meaning`,
      kind: "word",
      levelId: level.id,
      direction: "enToRu",
      prompt: item.word,
      transcription: item.ipa,
      translation: "Что значит это слово?",
      answer: item.ru,
      options: pickOptions(meanings, item.ru),
      role: item.role,
      explanation: `${item.word} ${item.ipa}: ${item.note}`,
      choiceMeta: null,
    },
    {
      id: `word-${level.id}-${item.word}-word`,
      kind: "word",
      levelId: level.id,
      direction: "ruToEn",
      prompt: item.ru,
      transcription: "",
      translation: "Как это будет по-английски?",
      answer: item.word,
      options: pickOptions(words, item.word),
      role: item.role,
      explanation: `${item.word} ${item.ipa}: ${item.note}`,
      choiceMeta: Object.fromEntries(level.vocabulary.map((entry) => [entry.word, entry.ipa])),
    },
  ]);
}

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return defaultProgress();
  }

  try {
    return { ...defaultProgress(), ...JSON.parse(saved) };
  } catch (error) {
    return defaultProgress();
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function loadCollapsedSections() {
  const saved = localStorage.getItem(COLLAPSE_STORAGE_KEY);
  if (!saved) {
    return {};
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    return {};
  }
}

function saveCollapsedSections() {
  localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(collapsedSections));
}

function setupCollapsibleSections() {
  document.querySelectorAll("[data-collapse-id]").forEach((section) => {
    const sectionId = section.dataset.collapseId;
    const button = section.querySelector(".collapse-toggle");

    if (!button) {
      return;
    }

    const applyState = () => {
      const isCollapsed = Boolean(collapsedSections[sectionId]);
      section.classList.toggle("is-collapsed", isCollapsed);
      button.setAttribute("aria-expanded", String(!isCollapsed));
      button.setAttribute("aria-label", isCollapsed ? "Развернуть блок" : "Свернуть блок");
    };

    button.addEventListener("click", () => {
      collapsedSections[sectionId] = !collapsedSections[sectionId];
      saveCollapsedSections();
      applyState();
    });

    applyState();
  });
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function getActiveLevel() {
  return levels.find((level) => level.id === progress.activeLevelId) || levels[0];
}

function getActiveStage() {
  if (reviewMode && activeCard) {
    return activeCard.kind === "word" ? "words" : "sentences";
  }

  return progress.stage;
}

function getRequiredStreak() {
  return getActiveStage() === "words" ? WORD_REQUIRED_STREAK : SENTENCE_REQUIRED_STREAK;
}

function getStageStreak(levelId = getActiveLevel().id) {
  return getActiveStage() === "words"
    ? progress.wordStreaks[levelId] || 0
    : progress.sentenceStreaks[levelId] || 0;
}

function setStageStreak(levelId, value) {
  if (getActiveStage() === "words") {
    progress.wordStreaks[levelId] = value;
    return;
  }

  progress.sentenceStreaks[levelId] = value;
}

function getCardsForMode() {
  if (reviewMode) {
    const errorSet = new Set(progress.errorIds);
    return [...allWordCards, ...allSentenceCards].filter((card) => errorSet.has(card.id));
  }

  const level = getActiveLevel();
  const source = progress.stage === "words" ? allWordCards : allSentenceCards;
  return source.filter((card) => card.levelId === level.id);
}

function refillQueue() {
  queue = shuffle(getCardsForMode()).map((card) => ({ ...card, step: 0 }));
}

function getNextCard() {
  if (queue.length === 0) {
    refillQueue();
  }

  if (queue.length === 0) {
    reviewMode = false;
    refillQueue();
  }

  return queue.shift();
}

function renderLevels() {
  el.levels.innerHTML = levels
    .map((level) => {
      const active = level.id === progress.activeLevelId && !reviewMode;
      const unlocked = progress.unlockedLevelIds.includes(level.id);
      const completed = progress.completedLevelIds.includes(level.id);
      const wordStreak = progress.wordStreaks[level.id] || 0;
      const sentenceStreak = progress.sentenceStreaks[level.id] || 0;

      return `
        <button class="level-card ${active ? "active" : ""} ${unlocked ? "" : "locked"}" data-level-id="${level.id}" type="button" ${unlocked ? "" : "disabled"}>
          <strong>${completed ? "✓ " : ""}${level.title}</strong>
          <span>${level.description}</span>
          <div class="level-meta">Слова ${wordStreak}/${WORD_REQUIRED_STREAK} · Фразы ${sentenceStreak}/${SENTENCE_REQUIRED_STREAK}</div>
        </button>
      `;
    })
    .join("");

  Array.from(el.levels.querySelectorAll(".level-card")).forEach((button) => {
    button.addEventListener("click", () => {
      progress.activeLevelId = button.dataset.levelId;
      reviewMode = false;
      queue = [];
      saveProgress();
      startCard();
    });
  });
}

function renderStageButtons() {
  el.stageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.stage === progress.stage && !reviewMode);
  });
}

function renderCard() {
  const level = getActiveLevel();
  const stage = getActiveStage();
  const streak = getStageStreak(level.id);
  const requiredStreak = getRequiredStreak();

  el.modeLabel.textContent = reviewMode ? "повтор ошибок" : stage === "words" ? "этап 1: слова" : "этап 2: предложения";
  el.levelTitle.textContent = reviewMode ? "Повтор ошибок" : level.title;
  el.levelDescription.textContent = reviewMode
    ? "Показываю карточки, где раньше была ошибка."
    : stage === "words"
      ? "Сначала закрепляем сами слова и значения. Нужно 20 правильных подряд."
      : level.description;
  el.stageProgress.innerHTML = `${stage === "words" ? "Слова" : "Фразы"} <strong id="streak">${streak}</strong>/${requiredStreak}`;
  el.streak = document.getElementById("streak");
  el.errorCount.textContent = String(progress.errorIds.length);
  el.feedback.hidden = true;
  el.feedback.className = "feedback";
  el.nextButton.disabled = false;
  answered = false;
  sentenceHadMistake = false;
  renderStageButtons();

  if (activeCard.kind === "word") {
    renderWordCard();
    return;
  }

  renderSentenceCard();
}

function renderWordCard() {
  el.roleChip.textContent = activeCard.role;
  el.hintChip.textContent = activeCard.direction === "enToRu" ? "слово → смысл" : "смысл → слово";
  el.taskLabel.textContent = activeCard.direction === "enToRu" ? "Что значит это слово?" : "Как это будет по-английски?";
  el.promptText.textContent = activeCard.prompt;
  el.transcriptionText.hidden = activeCard.direction !== "enToRu" || !activeCard.transcription;
  el.transcriptionText.textContent = activeCard.transcription;
  el.translationText.textContent = activeCard.translation;
  renderChoices(activeCard.options, activeCard.choiceMeta);
}

function promptWithFilledAnswers(card) {
  let blankIndex = 0;
  return card.prompt.replace(/___/g, () => {
    if (blankIndex < card.step) {
      const answer = card.answers[blankIndex];
      blankIndex += 1;
      return answer;
    }

    blankIndex += 1;
    return "___";
  });
}

function renderSentenceCard(keepFeedback = false) {
  const currentAnswer = activeCard.answers[activeCard.step];
  el.roleChip.textContent = activeCard.roles[activeCard.step] || activeCard.roles[0];
  el.hintChip.textContent = activeCard.answers.length > 1
    ? `слово ${activeCard.step + 1} из ${activeCard.answers.length}`
    : "один пропуск";
  el.taskLabel.textContent = "Вставь правильную форму";
  el.promptText.textContent = promptWithFilledAnswers(activeCard);
  el.transcriptionText.hidden = true;
  el.translationText.textContent = activeCard.translation;
  if (!keepFeedback) {
    el.feedback.hidden = true;
    el.feedback.className = "feedback";
  }
  renderChoices(activeCard.options, null, currentAnswer);
}

function renderChoices(options, meta = null) {
  el.choices.innerHTML = "";
  shuffle(options).forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = meta && meta[option]
      ? `<span>${option}</span><small>${meta[option]}</small>`
      : `<span>${option}</span>`;
    button.addEventListener("click", () => choose(option, button));
    el.choices.appendChild(button);
  });
}

function startCard() {
  activeCard = getNextCard();
  renderLevels();
  renderCard();
}

function unlockNextLevel(levelId) {
  const currentIndex = levels.findIndex((level) => level.id === levelId);
  const nextLevel = levels[currentIndex + 1];
  if (nextLevel && !progress.unlockedLevelIds.includes(nextLevel.id)) {
    progress.unlockedLevelIds.push(nextLevel.id);
  }
}

function completeCurrentAttempt(isCorrect) {
  const levelId = activeCard.levelId;

  if (isCorrect) {
    const nextStreak = getStageStreak(levelId) + 1;
    setStageStreak(levelId, nextStreak);
    progress.errorIds = progress.errorIds.filter((id) => id !== activeCard.id);
    el.feedback.classList.add("success");
    el.feedbackStatus.textContent = "Верно";

    if (activeCard.kind === "sentence" && nextStreak >= SENTENCE_REQUIRED_STREAK) {
      if (!progress.completedLevelIds.includes(levelId)) {
        progress.completedLevelIds.push(levelId);
      }
      unlockNextLevel(levelId);
    }
  } else {
    setStageStreak(levelId, 0);
    if (!progress.errorIds.includes(activeCard.id)) {
      progress.errorIds.push(activeCard.id);
    }
    queue.splice(Math.min(2, queue.length), 0, { ...activeCard, step: 0 });
    el.feedback.classList.add("error");
    el.feedbackStatus.textContent = "Почти";
  }

  answered = true;
  el.correctLine.textContent = `Правильный вариант: ${activeCard.answer || activeCard.answers.join(" / ")}`;
  el.explanationText.textContent = activeCard.explanation;
  el.feedback.hidden = false;
  saveProgress();
  renderLevels();
  renderStageButtons();
  const stage = getActiveStage();
  const required = getRequiredStreak();
  el.stageProgress.innerHTML = `${stage === "words" ? "Слова" : "Фразы"} <strong id="streak">${getStageStreak(levelId)}</strong>/${required}`;
  el.streak = document.getElementById("streak");
  el.errorCount.textContent = String(progress.errorIds.length);
}

function choose(option, selectedButton) {
  if (answered) {
    return;
  }

  if (activeCard.kind === "word") {
    chooseWord(option, selectedButton);
    return;
  }

  chooseSentence(option, selectedButton);
}

function markChoiceButtons(correctAnswer, selectedButton, isCorrect) {
  Array.from(el.choices.children).forEach((button) => {
    button.disabled = true;
    if (button.textContent.trim().startsWith(correctAnswer)) {
      button.classList.add("correct");
    }
  });

  if (!isCorrect) {
    selectedButton.classList.add("wrong");
  }
}

function chooseWord(option, selectedButton) {
  const isCorrect = option === activeCard.answer;
  markChoiceButtons(activeCard.answer, selectedButton, isCorrect);
  completeCurrentAttempt(isCorrect);
}

function chooseSentence(option, selectedButton) {
  const expected = activeCard.answers[activeCard.step];
  const isStepCorrect = option === expected;

  Array.from(el.choices.children).forEach((button) => {
    button.disabled = true;
    if (button.textContent.trim().startsWith(expected)) {
      button.classList.add("correct");
    }
  });

  if (!isStepCorrect) {
    selectedButton.classList.add("wrong");
    sentenceHadMistake = true;
  }

  const isLastStep = activeCard.step >= activeCard.answers.length - 1;

  if (!isLastStep) {
    el.feedback.className = `feedback ${isStepCorrect ? "success" : "error"}`;
    el.feedbackStatus.textContent = isStepCorrect ? "Верно, идем дальше" : "Не это слово";
    el.correctLine.textContent = `Слово ${activeCard.step + 1}: ${expected}`;
    el.explanationText.textContent = "Продолжаем: теперь выбери следующее слово в этой же фразе.";
    el.feedback.hidden = false;
    activeCard.step += 1;
    window.setTimeout(() => renderSentenceCard(true), 250);
    return;
  }

  completeCurrentAttempt(isStepCorrect && !sentenceHadMistake);
}

el.nextButton.addEventListener("click", startCard);

el.stageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    progress.stage = button.dataset.stage;
    reviewMode = false;
    queue = [];
    saveProgress();
    startCard();
  });
});

el.reviewErrorsButton.addEventListener("click", () => {
  if (progress.errorIds.length === 0) {
    return;
  }
  reviewMode = true;
  queue = [];
  startCard();
});

el.resetButton.addEventListener("click", () => {
  progress = defaultProgress();
  reviewMode = false;
  queue = [];
  saveProgress();
  startCard();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startCard();
  }
});

setupCollapsibleSections();
startCard();
