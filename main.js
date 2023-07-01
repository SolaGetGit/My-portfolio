let dateElement = document.querySelector('.date'),
    cityElement = document.querySelectorAll('.city'),
    weatherElement = document.querySelectorAll('.weather'),
    clockElement = document.querySelectorAll('.clock');
    
let monthInNumber = new Date().getMonth();
let date = new Date().getDate();
let year = new Date().getFullYear();
let city = 'ET';
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let session;


if(hour >= 18 || hour < 6){
    session = 'PM'
}else{
    session = 'AM'
};

let month;
switch (monthInNumber){
    case 0:
        month = 'January'
        break;
    case 1:
        month = 'February'
        break;
    case 2:
        month = 'March'
        break;
    case 3:
        month = 'April'
        break;
    case 4:
        month = 'May'
        break;
    case 5:
        month = 'June'
        break;
    case 6:
        month = 'July'
        break;
    case 7:
        month = 'August'
        break;
    case 8:
        month = 'September'
        break;
    case 9:
        month = 'October'
        break;
    case 10:
        month = 'November'
        break;
    case 11:
        month = 'December'
        break;
};

dateElement.innerHTML = month+',' + ' ' + date + ' ' + year

let clock = hour + ':' + minute + ' '+ session;
for(let i = 0; i < 2; i++){
     cityElement[i].innerHTML = 'ET';
     clockElement[i].innerHTML = clock
};

const pageTitle = document.title;
const blurTitle = 'Please come back 🙁';

window.addEventListener('focus', () => {
    document.title = pageTitle;
})
window.addEventListener('blur', () => {
    setTimeout(function(){
        document.title = blurTitle;
    }, 1000);
});



let mouseAnimationElement = document.querySelector('.mouse-animation');
let homeContainer = document.querySelector('#home-container');

homeContainer.addEventListener('mousemove', e => {
    mouseAnimationElement.style.top = `${e.pageY + 20}px`
    mouseAnimationElement.style.left = `${e.pageX + 20}px`
});

homeContainer.addEventListener('dblclick', e => {
    mouseAnimationElement.classList.toggle('active');
});

window.addEventListener('scroll', e => {
    if(window.scrollY > 50){
        document.querySelector('.home-page').classList.add('active');
    }else{
        document.querySelector('.home-page').classList.remove('active');
    };

});



//+++++++++++Making toggle to change to dark mode and for light mode+++++++++

let themeSwitch = document.querySelector('#theme-switch');

themeSwitch.addEventListener('change', e => {
    if(themeSwitch.checked){
        darkTheme();
    }else{
        lightTheme();
    };
});

const darkTheme = () => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
}
const lightTheme = () => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.setItem('theme', 'light');
}

let theme = window.localStorage.getItem('theme');

if(theme === 'dark'){
    themeSwitch.checked = true;
    darkTheme();
}else if(theme === 'light'){
    lightTheme();
    themeSwitch.checked = !true;
};

//----------------- Finish Dark mode system --------------------

// Making Socail modal for mobile devices;

let socialModalBtn = document.querySelector('.social-modal-btn');
let socailLinkModal = document.querySelector('.social-link-modal');

socialModalBtn.addEventListener('click', (e) => {
    socailLinkModal.classList.toggle('active');
    socialModalBtn.classList.toggle('active');
})


//+++++++++++ Staritng Back to top btn and scrollindicator+++++++++

let backToTopBtn = document.querySelector('.back-to-top');
let scrollProgress = backToTopBtn.lastElementChild;
backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 100) {
        backToTopBtn.classList.add('active');
        
    }else{
        backToTopBtn.classList.remove('active')
    }


    let height = document.body.scrollHeight - window.innerHeight;
    let scrollPosition = document.documentElement.scrollTop;
    let width = (scrollPosition / height ) * 100;
    

    scrollProgress.style.height = `${width + 4}%`
});

//----------------- Finish Back to top btn and scroll indicator --------------------



//+++++++++++ MAking Projects and appending in to Project container ++++++++++

let projecWrapper = document.querySelector('.project-wrapper');

const projects = [
    {
        projectName: 'Portfolio',
        projectImg: 'images/project-images/project-6.jpg',
        releasedDate: '2023',
        description: 'Hello this is my portfolio',
        links: {
            liveLink: 'https://github.com',
            gitHubLinks: 'github.com/myproject'
        },
        language: { 
            lang1: {name: 'html', line: 235, color: '#fc6238'},
            lang2: {name: 'css', line: 1498, color: '#00b0ba'},
            lang3: {name: 'javascript', line: 508, color: '#ffec59'},
            lang5: {name: 'Bootstrap', line: 0, color: '#74737a'},
            lang4: {name: 'React js', line: 0, color: '#e77577'},
            lang6: {name: 'Typescript', line: 0, color: 'magenta'},
        },
    },
    {
        projectName: 'School website ',
        projectImg: 'images/project-images/project-8.jpg',
        releasedDate: '2020',
        description: 'Hello this is school website that i made for school',
        links: {
            liveLink: 'https://github.com',
            gitHubLinks: 'github.com/myproject'
        },
        language: { 
            lang1: {name: 'html', line: 50, color: '#fc6238'},
            lang2: {name: 'css', line: 19, color: '#00b0ba'},
            lang3: {name: 'javascript', line: 31, color: '#ffec59'},
            lang5: {name: 'Bootstrap', line: 0, color: '#74737a'},
            lang4: {name: 'React js', line: 0, color: '#e77577'},
            lang6: {name: 'Typescript', line: 0, color: 'magenta'},
        },
    },

    {
        projectName: 'Ecommerce website ',
        projectImg: 'images/project-images/project-11.png',
        releasedDate: '2023',
        description: 'Hello this is apple clone website',
        links: {
            liveLink: 'https://github.com',
            gitHubLinks: 'github.com/myproject'
        },
        language: { 
            lang1: {name: 'html', line: 0, color: '#fc6238'},
            lang2: {name: 'css', line: 19, color: '#00b0ba'},
            lang3: {name: 'javascript', line: 20, color: '#ffec59'},
            lang5: {name: 'Bootstrap', line: 0, color: '#74737a'},
            lang4: {name: 'React js', line: 51, color: '#e77577'},
            lang6: {name: 'Typescript', line: 10, color: 'magenta'},
        },
    },

    {
        projectName: 'Weather App ',
        projectImg: 'images/project-images/project-8.webp',
        releasedDate: '2022',
        description: 'Hello this is apple clone website',
        links: {
            liveLink: 'https://github.com',
            gitHubLinks: 'github.com/myproject'
        },
        language: { 
            lang1: {name: 'html', line: 1000, color: '#fc6238'},
            lang2: {name: 'css', line: 200, color: '#00b0ba'},
            lang3: {name: 'javascript', line: 550, color: '#ffec59'},
            lang5: {name: 'Bootstrap', line: 0, color: '#74737a'},
            lang4: {name: 'React js', line: 0, color: '#e77577'},
            lang6: {name: 'Typescript', line: 106, color: 'magenta'},
        },
    },

    {
        projectName: 'Weather App ',
        projectImg: 'images/project-images/project-1.jpg',
        releasedDate: '2022',
        description: 'Hello this is apple clone website',
        links: {
            liveLink: 'https://github.com',
            gitHubLinks: 'github.com/myproject'
        },
        language: { 
            lang1: {name: 'html', line: 1000, color: '#fc6238'},
            lang2: {name: 'css', line: 200, color: '#00b0ba'},
            lang3: {name: 'javascript', line: 550, color: '#ffec59'},
            lang5: {name: 'Bootstrap', line: 0, color: '#74737a'},
            lang4: {name: 'React js', line: 0, color: '#e77577'},
            lang6: {name: 'Typescript', line: 106, color: 'magenta'},
        },
    },
];

projecWrapper.innerHTML = projects.map(item => {
    let {projectName, projectImg, language, releasedDate, description, links} = item;
    let {lang1, lang2, lang3, lang4, lang5, lang6} = language;
    let {gitHubLinks, liveLink} = links;

    let totalLine = lang1.line + lang2.line + lang3.line + lang4.line + lang5.line + lang6.line;
    let lang1Percent = lang1.line / totalLine * 100;
    let lang2Percent = lang2.line / totalLine * 100;
    let lang3Percent = lang3.line / totalLine * 100;
    let lang4Percent = lang4.line / totalLine * 100;
    let lang5Percent = lang5.line / totalLine * 100;
    let lang6Percent = lang6.line / totalLine * 100;

    return( 
   `
    <div class="project">
        <div class="detail">
           <div class="realse-date">
              <h2>${releasedDate}</h2>
              <span></span>
           </div>
           <div class="language-wrap">
                <h2>Most used languages</h2>
               <div class="progress-bar">
                  <span style='width:${lang1Percent}%; background:${lang1.color};'></span>
                  <span style='width:${lang2Percent}%; background:${lang2.color};'></span>
                  <span style='width:${lang3Percent}%; background:${lang3.color};'></span>
                  <span style='width:${lang4Percent}%; background:${lang4.color};'></span>
                  <span style='width:${lang5Percent}%; background:${lang5.color};'></span>
                  <span style='width:${lang6Percent}%; background:${lang6.color};'></span>
               </div>
            <ul class="language-list">
               <li><span style="background: ${lang1.color};"></span> <h2>${lang1.name}</h2> <sapn> ${lang1Percent.toFixed(1)}%</sapn></li>
               <li><span style="background: ${lang2.color};"></span> <h2>${lang2.name}</h2> <span>${lang2Percent.toFixed(1)}%</span></li>
               <li><span style="background: ${lang3.color};"></span> <h2>${lang3.name}</h2> <span>${lang3Percent.toFixed(1)}%</span></li>
               <li><span style="background: ${lang4.color};"></span> <h2>${lang4.name}</h2> <sapn> ${lang4Percent.toFixed(1)}%</sapn></li>
               <li><span style="background: ${lang5.color};"></span> <h2>${lang5.name}</h2> <span>${lang5Percent.toFixed(1)}%</span></li>
               <li><span style="background: ${lang6.color};"></span> <h2>${lang6.name}</h2> <span>${lang6Percent.toFixed(1)}%</span></li>
            </ul>
           </div>

            <div class="text-content">
                <h2> ${projectName}</h2>
                <p>${description}</p>
            </div>

            <div class="action-btns">
                 <a href="${liveLink}"><i class="fa fa-eye"></i> <span>View Live</span></a>
                 <a href="${gitHubLinks}"}><i class="fa-brands fa-github"></i> <span>View code on github</span></a>
            </div>
           </div>
           <img src=" ${projectImg}">
    </div>
    `
    )
}).join('');

let projectBox = document.querySelectorAll('.project');
(function(){
    let languageProgress = document.querySelectorAll('.language-wrap .progress-bar span');
    languageProgress.forEach(item => {
        if(item.clientWidth == 0){
            item.style.display = 'none';
        }else{
            item.style.display = 'flex';
        };
    });
    
    let languageList = document.querySelectorAll('.language-list li');
    for(let item of languageList){
        if(item.lastElementChild.innerText == '0.0%'){
            item.style.display = 'none'
        }else{
            item.style.display = 'flex';
        };
    };
})();

//----------------- Finsh Project COntainer -------------------

// About section 
let aboutCursor = document.querySelector('.about-wrapper .cursor');
let aboutWrapper = document.querySelector('.about-wrapper');

aboutWrapper.addEventListener("mousemove", (e) => {
    aboutCursor.classList.add('active');
        aboutCursor.style.left = `${e.clientX}px`;
        aboutCursor.style.top = `${e.clientY}px`

})
aboutWrapper.addEventListener("mouseover", (e) => {
    aboutCursor.classList.add('active');
        aboutCursor.style.left = `${e.clientX}px`;
        aboutCursor.style.top = `${e.clientY}px`

})
aboutWrapper.addEventListener("mouseout", (e) => {
    aboutCursor.classList.remove('active');
});

//Making skill bars 
let skillBoxWrapper = document.querySelector('.skill-wrapper main');

const skills = [
    {
        skillName: 'Html',
        skillLevel: '95',
    },
    {
        skillName: 'Css',
        skillLevel: '90',
    },
    {
        skillName: 'Bootstrap',
        skillLevel: '80',
    },
    {
        skillName: 'Javascript',
        skillLevel: '75',
    },
    {
        skillName: 'React Js',
        skillLevel: '80',
    },
    {
        skillName: 'Git & Github',
        skillLevel: '85',
    },
    {
        skillName: 'Figma &  Photoshop',
        skillLevel: '96',
    },
];

skillBoxWrapper.innerHTML = skills.map(item => {
    let {skillName, skillLevel} = item;
    let width = parseFloat(skillLevel);
    
    return(
        `<div class='skill-box'>
            <div class="detail">
               <span>${skillName}</span>
               <span>${skillLevel}%</span>
            </div>

            <div class="progress-bar">
               <span style='width: ${width}%;' class="skill-level-indicator"></span>
            </div>
        </div>
        `
    )
}).join('');


// make about modal

let closeAboutModal = document.querySelector('.close-about-modal');
let openAboutModal = document.querySelector('#open-about-modal');
let aboutModal = document.querySelector('.about-modal');

openAboutModal.addEventListener('click', () => {
    aboutModal.classList.add('active');
});

closeAboutModal.addEventListener('click', () => {
    aboutModal.classList.remove('active');
});

window.addEventListener('click', e => {
    if(e.target == aboutModal){
        aboutModal.classList.remove('active');
    };
});
window.addEventListener('scroll', () => {
    if(aboutModal.classList.contains('active') == true){
        aboutModal.classList.remove('active');
    };
});



//Making contact form 
let messageForm = document.querySelector('#message-form');
let messageInputs = document.querySelectorAll('#message-form input');
let messageTextarea = document.querySelector('#message-form textarea');

messageForm.addEventListener('submit', e => {
    e.preventDefault();
    let messageToast = document.createElement('div');
    messageToast.innerHTML = '<span>Message sent</span>';
    messageToast.className = 'message-toast';
    document.body.append(messageToast);

    setTimeout(() => {
        messageToast.remove();
    }, 4000);

    for(let i = 0; i < messageInputs.length; i++){
        messageInputs[i].value = '';
    };
    messageTextarea.value = '';
});

messageInputs.forEach(item => {
    item.addEventListener('keyup', (e) => {
        if(e.key == 'Backspace'){
            if(item.value == '' || item.value == null){
                item.parentElement.previousElementSibling.firstElementChild.focus();
            };
        };
    });
});

//Making main loader;

let mainLoader = document.querySelector('.main-loader');
let loaderSlider = document.querySelector('.loader-slider');
let loaderCounter = 0;
setInterval(() => {
    loaderCounter++
    if(loaderCounter >= 3){
        loaderCounter = 0
    }
    loaderSlider.style.transform = `translateY(-${loaderCounter *  90}px )`;

}, 500);

setTimeout(() => {
    mainLoader.classList.add('active');
}, 1500);
setTimeout(() => {
    mainLoader.remove();
},3000);
window.addEventListener('load', e => {
    console.log(e);
});


//When user scrool the navlink will be indicator
const sections = document.querySelectorAll('section'),
      navLinks = document.querySelectorAll('.nav-links .links li');


window.addEventListener('scroll', () => {
    handleScroll();
});

const resetLinks = () => 
    navLinks.forEach(link => 
        link.classList.remove('active')
);

const handleScroll = () => {
    const{ pageYoffset } = window;
    sections.forEach( section => { 
        const{id, offsetTop, clientHeight} = section;
        const offset = offsetTop - 1;

        if(pageYOffset >= offset && pageYOffset < offset + clientHeight){
            resetLinks();
            navLinks.forEach(link => {
                if(link.dataset.scroll === id){
                    link.classList.add('active')
                };
            });
        };
    });
};
