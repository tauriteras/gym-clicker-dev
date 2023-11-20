let money = 0;
let idleMoney = 0;

const clicker = () => {
        money++;
        updateMoneyCounter();
}

const idleIncome = () => {
    new Promise(() => {
        money += idleMoney;
        updateMoneyCounter();
    });
}

const updateIdleMoneyCounter = () => {
    new Promise(() => {
    let counter = document.getElementById('idle-money');
    counter.innerHTML = idleMoney + ' reps / s';
    });
}

const updateMoneyCounter = () => {
    new Promise(() => {
    let counter = document.getElementById('money-text');
    counter.innerHTML = money + ' reps';
    });
}
