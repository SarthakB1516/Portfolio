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

function up1()
{
    const project1 = document.querySelector('.project1');
    project1.style.top = '0px';
    project1.style.opacity = '1';
}
function up2()
{
    const project2 = document.querySelector('.project2');
    project2.style.top = '0px';
    project2.style.opacity = '1';
    project2.classList.add('delay2');
    setTimeout(() => {
        project2.classList.remove('delay2');
    }, 2000);
}
function up3()
{
    const project3 = document.querySelector('.project3');
    project3.style.top = '0px';
    project3.style.opacity = '1';
    project3.classList.add('delay3');
    setTimeout(() => {
        project3.classList.remove('delay3');
    }, 3000);
}