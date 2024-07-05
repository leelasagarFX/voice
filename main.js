const text = document.querySelector('.text');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interinResults =true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    
    const texts = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');

    p.innerText = texts;
    text.appendChild(p);


    if(e.results[0].isFinal){
        if(texts.includes('hello') || texts.includes('hi'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Hi';
            text.appendChild(p);
        }


        if(texts.includes('open YouTube'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening YouTube';
            text.appendChild(p);
            window.open('https://www.youtube.com/')
        }

        if(texts.includes('open Google'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Google';
            text.appendChild(p);
            window.open('https://www.google.com/')
        }  

        if(texts.includes('open Gmail'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Gmail';
            text.appendChild(p);
            window.open('https://mail.google.com/')
        }  

        if(texts.includes('open GitHub'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Github';
            text.appendChild(p);
            window.open('https://github.com/')
        }

        if(texts.includes('open Amazon'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Amazon Shopping';
            text.appendChild(p);
            window.open('https://www.amazon.in/')
        }

        if(texts.includes('open Sathyabama website'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Sathyabama Website';
            text.appendChild(p);
            window.open('https://www.sathyabama.ac.in/')
        }

        let findIndex = texts.indexOf('find');
        if (findIndex !== -1) {
            // Extract the keyword after 'find'
            let keyword = texts.substring(findIndex + 5).trim(); // 5 to skip past "find "
            if (keyword) {
                let p = document.createElement('p');
                p.classList.add('reply');
                p.innerText = 'Opening search for: ' + keyword;
                text.appendChild(p);
                window.open('https://www.google.com/search?q=' + encodeURIComponent(keyword));
            }
        }
        let webIndex = (texts.indexOf('website') || texts.indexOf('please'));
        if (webIndex !== -1) {
            // Extract the keyword after 'find'
            let words = texts.substring(0, webIndex).trim().split(' ');
            let keywords = words[words.length - 1]; // Get the last word before 'find'
            if (keywords) {
                let p = document.createElement('p');
                p.classList.add('reply');
                p.innerText = 'Opening ' + keywords + ' website';
                text.appendChild(p);
                window.open('https://www.' + encodeURIComponent(keywords)+ '.com/');
            }
        }
        
        if(texts.includes('what is your name') || texts.includes("what's your name"))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'My name is TARS';
            text.appendChild(p);
        }

        p = document.createElement('p');
        }

    console.log(e);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})
recognition.start();