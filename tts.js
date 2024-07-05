let voice = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voice.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    voice.voice = voices[voiceSelect.value];
})





document.querySelector("button").addEventListener("click", () =>{
    voice.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(voice);
})