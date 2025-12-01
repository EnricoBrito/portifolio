const text = [
  "Desenvolvimento.",
  "Automações.",
  "Full Stack.",
  "APIs.",
  "Inteligência Artificial.",
  "Software."
];

let index = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 80;
let typingElement = document.getElementById("typing");
let typingTimeout = null;

function clearTyping() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
}

function type() {
    clearTyping();
    if (charIndex < text[index].length) {
        typingElement.textContent += text[index][charIndex];
        charIndex++;
        typingTimeout = setTimeout(type, typingSpeed);
    } else {
        typingTimeout = setTimeout(erase, 1200);
    }
}

function erase() {
    clearTyping();
    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        typingTimeout = setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % text.length;
        typingTimeout = setTimeout(type, 300);
    }
}

document.addEventListener("DOMContentLoaded", type);

const translations = {
    pt: {
        t1: "Prazer, sou <span>Enrico</span>",
        t2: "Trabalho com",
        t3: "Desenvolvo automações inteligentes, sites modernos e softwares sob medida para necessidades empresariais.",
        t4: "Entre em contato",
        typing: [
            "Desenvolvimento.",
            "Automações.",
            "Full Stack.",
            "APIs.",
            "Inteligência Artificial.",
            "Software."
        ]
    },
    en: {
        t1: "Nice to meet you, I'm <span>Enrico</span>",
        t2: "I work with",
        t3: "I develop intelligent automations, modern websites and custom software for business needs.",
        t4: "Contact me",
        typing: [
            "Development.",
            "Automation.",
            "Full Stack.",
            "APIs.",
            "Artificial Intelligence.",
            "Software."
        ]
    }
};

let currentLang = "pt";

function switchLanguage() {
    currentLang = currentLang === "pt" ? "en" : "pt";

    document.querySelector(".t1").innerHTML = translations[currentLang].t1;
    document.querySelector(".t2").innerHTML = translations[currentLang].t2 + " <span id='typing'></span><span id='cursor'></span>";
    document.querySelector(".t3").textContent = translations[currentLang].t3;
    document.querySelector(".t4").textContent = translations[currentLang].t4;

    text.splice(0, text.length, ...translations[currentLang].typing);

    typingElement = document.getElementById("typing");
    index = 0;
    charIndex = 0;
    typingElement.textContent = "";

    clearTyping();
    type();

    translateBtn.textContent = currentLang === "pt" ? "EN" : "PT";
}

const translateBtn = document.getElementById("translateBtn");
translateBtn.addEventListener("click", switchLanguage);


