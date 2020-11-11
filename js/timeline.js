const birthDate = new Date('06-28-1990');
const lifetimeDate = new Date('06-28-2060');
const workDate = new Date('11-10-2017');
const familyDate = new Date('02-28-2018');
const currentDate = new Date();

function amountMonth(start, end) {
    let amount = Math.floor(Math.abs(end.getTime() - start.getTime()) / (1000 * 3600 * 24 * 7));
    return amount;
}

for (let i = 0; i <= amountMonth(birthDate, lifetimeDate); i++) {
    life(i);
    family(i);
    job(i);
}

function life(i) {
    let timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline__month');
    if (i <= amountMonth(birthDate, currentDate)) {
        timelineItem.classList.add('red');
    }
    document.querySelector('.timeline--life').appendChild(timelineItem);
}

function family(i) {
    let timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline__month');
    if (i >= amountMonth(birthDate, familyDate) && i <= amountMonth(birthDate, currentDate)) {
        timelineItem.classList.add('yellow');
    }
    document.querySelector('.timeline--family').appendChild(timelineItem);
}

function job(i) {
    let timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline__month');
    if (i >= amountMonth(birthDate, workDate) && i <= amountMonth(birthDate, currentDate)) {
        timelineItem.classList.add('green');
    }
    document.querySelector('.timeline--job').appendChild(timelineItem);
}