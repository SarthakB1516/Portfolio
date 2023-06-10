function tE1() {
    const names = document.querySelector('.name1');
    names.style.top = '0px';
    names.style.opacity = 1;
}

function tE11() {
    const names = document.querySelector('.name1');
    names.style.top = '-10px';
    names.style.opacity = 0;
}
function tE2() {
    const names = document.querySelector('.name2');
    names.style.top = '0px';
    names.style.opacity = 1;
}

function tE21() {
    const names = document.querySelector('.name2');
    names.style.top = '-10px';
    names.style.opacity = 0;
}
function tE3() {
    const names = document.querySelector('.name3');
    names.style.top = '0px';
    names.style.opacity = 1;
}

function tE31() {
    const names = document.querySelector('.name3');
    names.style.top = '-10px';
    names.style.opacity = 0;
}

function imgRotate() {
    const me = document.getElementById("me");
    const info = document.getElementById('info');
    const projects = document.querySelector('.projects');
    window.onscroll = function () {
        if(window.innerWidth <= 1024 && window.outerWidth >= 769){
            scrollRotate1();
        }else if(window.innerWidth <= 768 && window.outerWidth >= 426){
            scrollRotate3();
        }else if(window.innerWidth <= 1440 && window.outerWidth >= 1025){
            scrollRotate2();
        }else if(window.innerWidth <= 425 && window.outerWidth >= 376){
            scrollRotate4();
        }else if(window.innerWidth <= 375 && window.outerWidth >= 321){
            scrollRotate4();
        }else if(window.innerWidth <= 320 && window.outerWidth >= 0){
            scrollRotate4();
        }
    };

    function scrollRotate2() {
        me.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
        if (window.scrollY / 2 >= 90) {
            me.style.opacity = 0;
            info.style.width = '1219px';
            projects.style.opacity = 1;
            projects.style.zIndex = 1;
        } else {
            me.style.opacity = 1;
            info.style.width = '700px';
            projects.style.opacity = 0;
            projects.style.zIndex = 0;
        }
    }
    function scrollRotate1() {
        me.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
        if (window.scrollY / 2 >= 90) {
            me.style.opacity = 0;
            info.style.width = '890px';
            projects.style.opacity = 1;
            projects.style.zIndex = 1;
        } else {
            me.style.opacity = 1;
            info.style.width = '400px';
            projects.style.opacity = 0;
            projects.style.zIndex = 0;
        }
    }
    function scrollRotate3() {
        me.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
        if (window.scrollY / 2 >= 90) {
            me.style.opacity = 0;
            info.style.width = '635px';
            projects.style.opacity = 1;
            projects.style.zIndex = 1;
        } else {
            me.style.opacity = 1;
            info.style.width = '300px';
            projects.style.opacity = 0;
            projects.style.zIndex = 0;
        }
    }
    function scrollRotate4() {
        me.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
        if (window.scrollY / 2 >= 90) {
            me.style.opacity = 0;
            info.style.top = '60px';
        } else {
            me.style.opacity = 1;
            info.style.top = '340px';
        }
    }
}

function project2Move() {
    const project2 = document.querySelector('.project2');
    project2.style.top = '525px';
    project2.classList.add('rotate1');
}

function project2Default() {
    const project2 = document.querySelector('.project2');
    if (project2.style.top == '210px') {
        project2.style.top = '525px'
    } else {
        project2.style.top = '210px'
        project2.classList.remove('rotate1')
    }
}

function project3Move() {
    const project3 = document.querySelector('.project3');
    project3.style.top = '575px';
    project3.classList.add('rotate2');
}

function project3Default() {
    const project3 = document.querySelector('.project3');
    if (project3.style.top == '280px') {
        project3.style.top = '575px'
    } else {
        project3.style.top = '280px'
        project3.classList.remove('rotate2')
    }
}

function lamp() {
    const win = open('https://sarthakb1516.github.io/Hanging-lamp/');
}
function torch() {
    const win = open('https://sarthakb1516.github.io/Fun-Torch/');
}
function githubP() {
    const win = open('https://github.com/SarthakB1516')
}

function test()
{
    if(window.innerWidth == 1024)
    {
        const info = document.getElementById('info');
        info.style.width = '400px';
    }
}
// test();