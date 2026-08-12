"use strict";

/*
  ALL THE BEST — SARALI SWARAS PRACTICE

  Sarali 1–12
  3 speeds
  Independent Tanpura
  Fixed 60 BPM Tala
  4-second preparation gap

  IMPORTANT:
  "." is a timing position.
  It is rendered as an empty space and is NOT highlighted.
*/


// ============================================================
// ELEMENTS
// ============================================================

const $ = (id) => document.getElementById(id);

const notationDiv = $("notation");
const previewNotation = $("previewNotation");

const lessonSelect = $("lessonSelect");
const speedSelect = $("speedSelect");

const playBtn = $("playBtn");
const restartBtn = $("restartBtn");

const audioPlayer = $("audioPlayer");
const tanpuraPlayer = $("tanpuraPlayer");

const tanpuraBtn = $("tanpuraBtn");
const shrutiSelect = $("shrutiSelect");

const tanpuraVolume = $("tanpuraVolume");
const volumeValue = $("volumeValue");

const progressBar = $("progressBar");
const audioMessage = $("audioMessage");

const lessonTitle = $("lessonTitle");
const speedHint = $("speedHint");

const beats = [
  ...document.querySelectorAll(".beat")
];
const bpmMinus = $("bpmMinus");
const bpmPlus = $("bpmPlus");
const bpmSlider = $("bpmSlider");
const bpmValue = $("bpmValue");
const metronomeBtn = $("metronomeBtn");


// ============================================================
// SARALI NOTATION
// ============================================================

const saraliData = {

  1: {
    notation: [
      ["S", "R", "G", "M", "P", "D", "N", "S′"],
      ["S′", "N", "D", "P", "M", "G", "R", "S"]
    ]
  },

  2: {
    notation: [
      ["S", "R", "S", "R", "S", "R", "G", "M"],
      ["S", "R", "G", "M", "P", "D", "N", "S′"],
      ["S′", "N", "S′", "N", "S′", "N", "D", "P"],
      ["S′", "N", "D", "P", "M", "G", "R", "S"]
    ]
  },

  3: {
    notation: [
      ["S", "R", "G", "S", "R", "G", "S", "R"],
      ["S", "R", "G", "M", "P", "D", "N", "S′"],
      ["S′", "N", "D", "S′", "N", "D", "S′", "R"],
      ["S′", "N", "D", "P", "M", "G", "R", "S"]
    ]
  },

  4: {
    notation: [
      ["S", "R", "G", "M", "S", "R", "G", "M"],
      ["S", "R", "G", "M", "P", "D", "N", "S′"],
      ["S′", "N", "D", "P", "S′", "N", "D", "P"],
      ["S′", "N", "D", "P", "M", "G", "R", "S"]
    ]
  },

  5: {
    notation: [
      ["S", "R", "G", "M", "P", ".", "S", "R"],
      ["S", "R", "G", "M", "P", "D", "N", "S′"],
      ["S′", "N", "D", "P", "M", ".", "S′", "N"],
      ["S′", "N", "D", "P", "M", "G", "R", "S"]
    ]
  },

  6: {
    notation: [
      ["S", "R", "G", "M", "P", "D", "S", "R"],
      ["S", "R", "G", "M", "P", "D", "N", "S′"],
      ["S′", "N", "D", "P", "M", "G", "R", "S"],
      ["S′", "N", "D", "P", "M", "G", "R", "S"]
    ]
  },

  7: {
    notation: [
      ["S", "R", "G", "M", "P", "D", "N", "."],
      ["S", "R", "G", "M", "P", "D", "N", "S′"],
      ["S′", "N", "D", "P", "M", "G", "R", "."],
      ["S′", "N", "D", "P", "M", "G", "R", "S"]
    ]
  },

  8: {
    notation: [
      ["S", "R", "G", "M", "P", "M", "G", "R"],
      ["S", "R", "G", "M", "P", "D", "N", "S′"],
      ["S′", "N", "D", "P", "M", "P", "D", "N"],
      ["S′", "N", "D", "P", "M", "G", "R", "S"]
    ]
  },

  9: {
    notation: [
      ["S", "R", "G", "M", "P", "M", "D", "P"],
      ["S", "R", "G", "M", "P", "D", "N", "S′"],
      ["S′", "N", "D", "P", "M", "P", "G", "M"],
      ["S′", "N", "D", "P", "M", "G", "R", "S"]
    ]
  },

  10: {
    notation: [
      ["S", "R", "G", "M", "P", ".", "G", "M"],
      ["P", ".", ".", ".", "P", ".", ".", "."],
      ["G", "M", "P", "D", "N", "D", "P", "M"],
      ["G", "M", "P", "G", "M", "G", "R", "S"]
    ]
  },

  11: {
    notation: [
      ["S′", ".", "N", "D", "N", ".", "D", "P"],
      ["D", ".", "P", "M", "P", ".", ".", "."],
      ["G", "M", "P", "D", "N", "D", "P", "M"],
      ["G", "M", "P", "G", "M", "G", "R", "S"]
    ]
  },

  12: {
    notation: [
      ["S′", "S′", "N", "D", "N", "N", "D", "P"],
      ["D", "D", "P", "M", "P", ".", ".", "."],
      ["G", "M", "P", "D", "N", "D", "P", "M"],
      ["G", "M", "P", "G", "M", "G", "R", "S"]
    ]
  }

};


// ============================================================
// AUDIO FILES
// ============================================================

function audioFiles(number) {

  return {
    1: `audio/sarali${number}_speed1.mp3`,
    2: `audio/sarali${number}_speed2.mp3`,
    3: `audio/sarali${number}_speed3.mp3`
  };

}


for (let i = 1; i <= 12; i++) {

  saraliData[i].audio =
    audioFiles(i);

}


// ============================================================
// TANPURA FILES
// ============================================================

const tanpuraFiles = Object.fromEntries(

  [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
  ].map((note) => [

    note,
    `tanpura/${encodeURIComponent(note)}_scale.mp3`

  ])

);


// ============================================================
// CONSTANTS
// ============================================================

const BPM = 60;

const BEAT_DURATION = 60 / BPM;

// Four-second audio preparation gap.
const PREPARATION_TIME = 4;


// ============================================================
// STATE
// ============================================================

let currentLesson = 1;

let currentSpeed = 1;

let swaraBlocks = [];

let currentSwara = -1;

let currentBeat = -1;

let tanpuraPlaying = false;

let animationFrame = null;


// ============================================================
// SPEED SETTINGS
// ============================================================

function getSwarasPerBeat() {

  if (currentSpeed === 1) {
    return 1;
  }

  if (currentSpeed === 2) {
    return 2;
  }

  return 4;

}


function getSwaraDuration() {

  return (
    BEAT_DURATION /
    getSwarasPerBeat()
  );

}


function getSpeedName() {

  if (currentSpeed === 1) {
    return "1st speed";
  }

  if (currentSpeed === 2) {
    return "2nd speed";
  }

  return "3rd speed";

}


// ============================================================
// SWARA CLASS
// ============================================================

function swaraClass(note) {

  if (!note || note === ".") {
    return "";
  }

  const first =
    note.charAt(0).toUpperCase();

  const classes = {
    S: "s-note",
    R: "r-note",
    G: "g-note",
    M: "m-note",
    P: "p-note",
    D: "d-note",
    N: "n-note"
  };

  return classes[first] || "";

}


// ============================================================
// RENDER NOTATION
// ============================================================

function renderRows(container, rows) {

  container.replaceChildren();

  return rows.flatMap((row) => {

    const rowElement =
      document.createElement("div");

    rowElement.className =
      "swara-row";


    return row.map((note) => {

      const span =
        document.createElement("span");

      span.className =
        `swara ${swaraClass(note)}`;

      span.textContent =
        note === "."
          ? ""
          : note;


      /*
        Every position gets a data index.

        This is important because "." is still
        counted as a timing position.
      */

      span.dataset.timingSlot =
        "true";

      span.dataset.rest =
        note === "."
          ? "true"
          : "false";


      rowElement.appendChild(span);


      container.appendChild(
        rowElement
      );


      return span;

    });

  });

}


// ============================================================
// GET TIMING BLOCKS
// ============================================================

function getTimingBlocks(rows) {

  return rows.flatMap((row) => {

    return row.map((note) => {

      return {
        note,
        isRest: note === "."
      };

    });

  });

}


// ============================================================
// RESET VISUALS
// ============================================================

function resetVisuals() {

  swaraBlocks.forEach(
    (block) => {

      block.classList.remove(
        "active"
      );

    }
  );


  beats.forEach(
    (beat) => {

      beat.classList.remove(
        "active"
      );

    }
  );


  progressBar.style.width =
    "0%";


  currentSwara = -1;

  currentBeat = -1;

}


// ============================================================
// LOAD LESSON
// ============================================================

function loadLesson() {

  currentLesson =
    Number(
      lessonSelect.value
    );


  const lesson =
    saraliData[currentLesson];


  if (!lesson) {

    console.error(
      `Sarali ${currentLesson} not found.`
    );

    return;

  }


  const rows =
    lesson.notation;


  /*
    Split the notation into two visual columns,
    like your Daatu/Janta practice template.
  */

  const split =
    Math.ceil(
      rows.length / 2
    );


  const leftRows =
    rows.slice(
      0,
      split
    );


  const rightRows =
    rows.slice(
      split
    );


  swaraBlocks = [

    ...renderRows(
      notationDiv,
      leftRows
    ),

    ...renderRows(
      previewNotation,
      rightRows
    )

  ];


  lessonTitle.textContent =
    `Sarali ${currentLesson}`;


  loadLessonAudio();

  resetVisuals();

}


// ============================================================
// LOAD AUDIO
// ============================================================

function loadLessonAudio() {

  stopAnimation();

  audioPlayer.pause();


  const lesson =
    saraliData[currentLesson];


  audioPlayer.src =
    lesson.audio[currentSpeed];


  audioPlayer.load();


  playBtn.textContent =
    "▶ Play";


  audioMessage.textContent =
    "";

}


// ============================================================
// SPEED HINT
// ============================================================

function updateSpeedHint() {

  const count =
    getSwarasPerBeat();


  speedHint.textContent =
    `${getSpeedName()} · ${count} ${
      count === 1
        ? "swara"
        : "swaras"
    } per beat`;

}


// ============================================================
// FIND TIMING SLOT
// ============================================================

function getTimingSlotIndex() {

  const practiceTime =
    audioPlayer.currentTime -
    PREPARATION_TIME;


  if (practiceTime < 0) {
    return -1;
  }


  return Math.floor(
    practiceTime /
    getSwaraDuration()
  );

}


// ============================================================
// UPDATE VISUALS
// ============================================================

function updateVisuals() {

  if (audioPlayer.paused) {
    return;
  }


  const time =
    audioPlayer.currentTime;


  // ----------------------------------------------------------
  // PREPARATION GAP
  // ----------------------------------------------------------

  if (
    time < PREPARATION_TIME
  ) {

    swaraBlocks.forEach(
      (block) => {

        block.classList.remove(
          "active"
        );

      }
    );


    beats.forEach(
      (beat) => {

        beat.classList.remove(
          "active"
        );

      }
    );


    currentSwara = -1;

    currentBeat = -1;


    updateProgress();

    return;

  }


  // ----------------------------------------------------------
  // SWARA
  // ----------------------------------------------------------

  const swaraIndex =
    getTimingSlotIndex();


  if (
    swaraIndex !==
    currentSwara
  ) {

    swaraBlocks.forEach(
      (block) => {

        block.classList.remove(
          "active"
        );

      }
    );


    const currentBlock =
      swaraBlocks[
        swaraIndex
      ];


    /*
      If the current position is ".",
      nothing is highlighted.

      The timing still moves forward.
    */

    if (
      currentBlock &&
      currentBlock.dataset.rest !== "true"
    ) {

      currentBlock.classList.add(
        "active"
      );

    }


    currentSwara =
      swaraIndex;

  }


  // ----------------------------------------------------------
  // TALA
  // ----------------------------------------------------------

  const practiceTime =
    time -
    PREPARATION_TIME;


  const beatIndex =
    Math.floor(
      practiceTime /
      BEAT_DURATION
    ) % 8;


  if (
    beatIndex !==
    currentBeat
  ) {

    beats.forEach(
      (beat) => {

        beat.classList.remove(
          "active"
        );

      }
    );


    if (
      beats[beatIndex]
    ) {

      beats[
        beatIndex
      ].classList.add(
        "active"
      );

    }


    currentBeat =
      beatIndex;

  }


  updateProgress();

}


// ============================================================
// PROGRESS
// ============================================================

function updateProgress() {

  if (
    Number.isFinite(
      audioPlayer.duration
    ) &&
    audioPlayer.duration > 0
  ) {

    const percentage =
      (
        audioPlayer.currentTime /
        audioPlayer.duration
      ) * 100;


    progressBar.style.width =
      `${percentage}%`;

  }

}


// ============================================================
// ANIMATION LOOP
// ============================================================

function animate() {

  updateVisuals();


  if (
    !audioPlayer.paused
  ) {

    animationFrame =
      requestAnimationFrame(
        animate
      );

  }

}


// ============================================================
// STOP ANIMATION
// ============================================================

function stopAnimation() {

  if (animationFrame) {

    cancelAnimationFrame(
      animationFrame
    );

  }


  animationFrame = null;

}


// ============================================================
// PLAY / PAUSE
// ============================================================

playBtn.addEventListener(
  "click",
  async () => {

    if (
      audioPlayer.paused
    ) {

      try {

        await audioPlayer.play();


        playBtn.textContent =
          "⏸ Pause";


        animate();

      }

      catch (error) {

        console.error(error);


        audioMessage.textContent =
          "Lesson audio could not be played. Check the audio folder and filename.";

      }

    }

    else {

      audioPlayer.pause();

    }

  }
);


// ============================================================
// RESTART
// ============================================================

restartBtn.addEventListener(
  "click",
  () => {

    audioPlayer.pause();


    audioPlayer.currentTime =
      0;


    resetVisuals();


    playBtn.textContent =
      "▶ Play";

  }
);


// ============================================================
// AUDIO PAUSE
// ============================================================

audioPlayer.addEventListener(
  "pause",
  () => {

    stopAnimation();


    if (
      !audioPlayer.ended
    ) {

      playBtn.textContent =
        "▶ Play";

    }

  }
);


// ============================================================
// AUDIO ENDED
// ============================================================

audioPlayer.addEventListener(
  "ended",
  () => {

    stopAnimation();


    resetVisuals();


    playBtn.textContent =
      "▶ Play";

  }
);


// ============================================================
// AUDIO ERROR
// ============================================================

audioPlayer.addEventListener(
  "error",
  () => {

    audioMessage.textContent =
      "Lesson audio could not be found. Check the audio folder.";

  }
);


// ============================================================
// LESSON SELECT
// ============================================================

lessonSelect.addEventListener(
  "change",
  () => {

    loadLesson();

  }
);


// ============================================================
// SPEED SELECT
// ============================================================

speedSelect.addEventListener(
  "change",
  () => {

    currentSpeed =
      Number(
        speedSelect.value
      );


    updateSpeedHint();


    loadLessonAudio();


    resetVisuals();

  }
);


// ============================================================
// TANPURA
// ============================================================

function loadTanpura() {

  const selectedShruti =
    shrutiSelect.value;


  tanpuraPlayer.src =
    tanpuraFiles[
      selectedShruti
    ];


  tanpuraPlayer.loop =
    true;


  tanpuraPlayer.volume =
    Number(
      tanpuraVolume.value
    ) / 100;


  tanpuraPlayer.load();

}


// ============================================================
// TANPURA BUTTON
// ============================================================

function setTanpuraButton() {

  tanpuraBtn.textContent =
    tanpuraPlaying
      ? "■ Stop Tanpura"
      : "▶ Start Tanpura";

}


// ============================================================
// TANPURA PLAY / STOP
// ============================================================

tanpuraBtn.addEventListener(
  "click",
  async () => {

    if (
      tanpuraPlaying
    ) {

      tanpuraPlayer.pause();

      tanpuraPlayer.currentTime =
        0;

      tanpuraPlaying =
        false;

    }

    else {

      try {

        await tanpuraPlayer.play();

        tanpuraPlaying =
          true;

      }

      catch (error) {

        console.error(error);

        tanpuraPlaying =
          false;


        audioMessage.textContent =
          "Tanpura audio could not be played. Check the tanpura folder.";

      }

    }


    setTanpuraButton();

  }
);


// ============================================================
// SHRUTI CHANGE
// ============================================================

shrutiSelect.addEventListener(
  "change",
  async () => {

    const wasPlaying =
      tanpuraPlaying;


    localStorage.setItem(
      "mp_shruti",
      shrutiSelect.value
    );


    loadTanpura();


    if (wasPlaying) {

      try {

        await tanpuraPlayer.play();

        tanpuraPlaying =
          true;

      }

      catch (error) {

        console.error(error);

        tanpuraPlaying =
          false;

      }

    }


    setTanpuraButton();

  }
);


// ============================================================
// TANPURA VOLUME
// ============================================================

tanpuraVolume.addEventListener(
  "input",
  () => {

    tanpuraPlayer.volume =
      Number(
        tanpuraVolume.value
      ) / 100;


    volumeValue.textContent =
      `${tanpuraVolume.value}%`;


    localStorage.setItem(
      "mp_tanpura_volume",
      tanpuraVolume.value
    );

  }
);


// ============================================================
// TANPURA ERROR
// ============================================================

tanpuraPlayer.addEventListener(
  "error",
  () => {

    audioMessage.textContent =
      "Tanpura audio could not be found. Check the tanpura folder.";

  }
);


// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================

document.addEventListener(
  "keydown",
  (event) => {

    if (
      [
        "INPUT",
        "SELECT",
        "TEXTAREA"
      ].includes(
        document.activeElement.tagName
      )
    ) {

      return;

    }


    // SPACE = PLAY / PAUSE

    if (
      event.code === "Space"
    ) {

      event.preventDefault();

      playBtn.click();

    }


    // R = RESTART

    if (
      event.key.toLowerCase() === "r"
    ) {

      restartBtn.click();

    }


    // T = TANPURA

    if (
      event.key.toLowerCase() === "t"
    ) {

      tanpuraBtn.click();

    }

  }
);


// ============================================================
// RESTORE SAVED TANPURA SETTINGS
// ============================================================

const savedShruti =
  localStorage.getItem(
    "mp_shruti"
  );


const savedVolume =
  localStorage.getItem(
    "mp_tanpura_volume"
  );


if (
  savedShruti &&
  tanpuraFiles[savedShruti]
) {

  shrutiSelect.value =
    savedShruti;

}


if (
  savedVolume !== null
) {

  tanpuraVolume.value =
    savedVolume;

}


volumeValue.textContent =
  `${tanpuraVolume.value}%`;

  // ============================================================
// METRONOME
// ============================================================

let metronomeBPM = 60;

let metronomePlaying = false;

let metronomeTimer = null;

let metronomeBeat = 0;

let metronomeAudioContext = null;


// ------------------------------------------------------------
// UPDATE BPM DISPLAY
// ------------------------------------------------------------

function updateBPMDisplay() {

  bpmValue.textContent =
    metronomeBPM;

  bpmSlider.value =
    metronomeBPM;

}


// ------------------------------------------------------------
// METRONOME CLICK
// ------------------------------------------------------------

function playMetronomeClick(beat) {

  if (!metronomeAudioContext) {

    metronomeAudioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();

  }


  const context =
    metronomeAudioContext;


  if (
    context.state === "suspended"
  ) {

    context.resume();

  }


  const oscillator =
    context.createOscillator();


  const gain =
    context.createGain();


  oscillator.connect(gain);

  gain.connect(
    context.destination
  );


  /*
    Beat 1 gets a slightly higher
    pitch so it is easy to identify
    the beginning of the Aadi tala.
  */

  if (beat === 0) {

    oscillator.frequency.value =
      1100;

  }

  else {

    oscillator.frequency.value =
      750;

  }


  const now =
    context.currentTime;


  gain.gain.setValueAtTime(
    0.0001,
    now
  );


  gain.gain.exponentialRampToValueAtTime(
    0.35,
    now + 0.005
  );


  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.08
  );


  oscillator.start(now);

  oscillator.stop(
    now + 0.09
  );

}


// ------------------------------------------------------------
// METRONOME BEAT
// ------------------------------------------------------------

function metronomeTick() {

  if (!metronomePlaying) {
    return;
  }


  playMetronomeClick(
    metronomeBeat
  );


  /*
    8 beats = one complete
    Aadi tala cycle.
  */

  metronomeBeat =
    (metronomeBeat + 1) % 8;


  const interval =
    60000 / metronomeBPM;


  metronomeTimer =
    setTimeout(
      metronomeTick,
      interval
    );

}


// ------------------------------------------------------------
// START METRONOME
// ------------------------------------------------------------

async function startMetronome() {

  if (!metronomeAudioContext) {

    metronomeAudioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();

  }


  if (
    metronomeAudioContext.state ===
    "suspended"
  ) {

    await metronomeAudioContext.resume();

  }


  metronomePlaying =
    true;


  metronomeBeat = 0;


  metronomeBtn.textContent =
    "■ Stop Metronome";


  metronomeTick();

}


// ------------------------------------------------------------
// STOP METRONOME
// ------------------------------------------------------------

function stopMetronome() {

  metronomePlaying =
    false;


  if (metronomeTimer) {

    clearTimeout(
      metronomeTimer
    );

  }


  metronomeTimer =
    null;


  metronomeBeat =
    0;


  metronomeBtn.textContent =
    "▶ Start Metronome";

}


// ------------------------------------------------------------
// PLAY / STOP BUTTON
// ------------------------------------------------------------

metronomeBtn.addEventListener(
  "click",
  async () => {

    if (
      metronomePlaying
    ) {

      stopMetronome();

    }

    else {

      await startMetronome();

    }

  }
);


// ------------------------------------------------------------
// BPM SLIDER
// ------------------------------------------------------------

bpmSlider.addEventListener(
  "input",
  () => {

    metronomeBPM =
      Number(
        bpmSlider.value
      );


    updateBPMDisplay();

  }
);


// ------------------------------------------------------------
// MINUS
// ------------------------------------------------------------

bpmMinus.addEventListener(
  "click",
  () => {

    metronomeBPM =
      Math.max(
        40,
        metronomeBPM - 1
      );


    updateBPMDisplay();

  }
);


// ------------------------------------------------------------
// PLUS
// ------------------------------------------------------------

bpmPlus.addEventListener(
  "click",
  () => {

    metronomeBPM =
      Math.min(
        160,
        metronomeBPM + 1
      );


    updateBPMDisplay();

  }
);


// ------------------------------------------------------------
// INITIAL BPM
// ------------------------------------------------------------

updateBPMDisplay();


// ============================================================
// INITIALISE
// ============================================================

currentSpeed =
  Number(
    speedSelect.value
  );


updateSpeedHint();

loadTanpura();

loadLesson();

setTanpuraButton();
