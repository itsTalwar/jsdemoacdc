

var app = null;
var appHTML = null;
function init () {
    app =  document.getElementById('app')
    appHTML = app.innerHTML;
}

function headerComponent () {
    var template = `<div
        class="width-100 flex ac u-spacing-pl-l"
    >
    ${navLinks()}
    </div>`;
    return template;
}

function navLinks () {
    let links = [
        {
            displayValue: 'Home',
            link: 'home.html'
        },
        {
            displayValue: 'About us',
            link: 'aboutUS.html'
        },
        {
            displayValue: 'More info',
            link: 'moreInfo.html'
        },
        {
            displayValue: 'Login',
            link: 'login.html'
        }
    ];
    var rendered = ''
    for (var i = 0; i < links.length ; i++ ) {
        rendered += `
        <div 
            class="u-spacing-p-s"
        >
            <a href="${links[i].link}">${links[i].displayValue}</a>
        </div>
        `
    }
    return rendered
}

function appBodyComponent () {
    var template = `
    ${headerComponent()}
    `
    app.innerHTML = template
}

init();
appBodyComponent()
