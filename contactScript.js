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

function iconsAnimate(){
    if(window.outerWidth >= 426){

        const icon1 = document.querySelector('.icon1');
        const icon2 = document.querySelector('.icon2');
        const mail = document.querySelector('.mail');
        icon1.style.top = '-320px';
        icon2.style.top = '-320px';
        mail.style.top = '632px';
        icon1.style.transform = 'scale(8)';
        icon2.style.transform = 'scale(8)';
        icon1.style.margin = '0px 150px';
        icon2.style.margin = '0px 150px';
    }else{
        
        const icon1 = document.querySelector('.icon1');
        const icon2 = document.querySelector('.icon2');
        const mail = document.querySelector('.mail');
        icon1.style.top = '-320px';
        icon2.style.top = '-320px';
        mail.style.top = '632px';
        icon1.style.transform = 'scale(4)';
        icon2.style.transform = 'scale(4)';
        icon1.style.margin = '0px 80px';
        icon2.style.margin = '0px 90px';
    }

}