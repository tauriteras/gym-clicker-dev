//TODO: Add a landing page with a start button

document.addEventListener('DOMContentLoaded', () => {
    body = document.getElementById('game-body');

    document.getElementById('loading-bar-fill').style.animationName = 'loading';

    generateGameLayout().then((onResolve) => {
        body.appendChild(onResolve[0]);
        body.appendChild(onResolve[1]);
        }).then(() => {
            console.log('1')
            }).then(() => {
                startGame().then((onResolve) => {
                setInterval(gameLoop, 1000)
                console.log(onResolve);
            }

)})});


const gameLoop = () => {
    idleIncome();
}

const generateGameLayout = () => {
    return new Promise((resolve) => {
        const building = createBuilding();
        const clickerArea = createClickerArea();
        const shop = createShop();
        const menubarContainer = createMenubarContainer();

        building.appendChild(clickerArea);
        building.appendChild(shop);
        document.getElementById('game-body').appendChild(menubarContainer);

        resolve([building, clickerArea]);
    });
};

const createBuilding = () => {
    const building = document.createElement('div');
    building.setAttribute('id', 'building-game');

    const buildingCanvas = document.createElement('div');
    buildingCanvas.setAttribute('id', 'building-canvas');
    building.appendChild(buildingCanvas);

    const buildingFooter = document.createElement('div');
    buildingFooter.setAttribute('id', 'building-footer');

    return building;
};

const createClickerArea = () => {
    const clickerArea = document.createElement('div');
    clickerArea.setAttribute('id', 'clicker-area');

    const clickerHeader = createClickerHeader();
    const clickerContainer = createClickerContainer();
    const clickerFooter = createClickerFooter();

    clickerArea.appendChild(clickerHeader);
    clickerArea.appendChild(clickerContainer);
    clickerArea.appendChild(clickerFooter);

    return clickerArea;
};

const createClickerHeader = () => {
    const clickerHeader = document.createElement('div');
    clickerHeader.setAttribute('id', 'clicker-header');

    const moneyContainer = createMoneyContainer();
    const idleMoneyContainer = createIdleMoneyContainer();

    clickerHeader.appendChild(moneyContainer);
    clickerHeader.appendChild(idleMoneyContainer);

    return clickerHeader;
};

const createMoneyContainer = () => {
    const moneyContainer = document.createElement('div');
    moneyContainer.setAttribute('id', 'money-container');

    const moneyIcon = document.createElement('img');
    moneyIcon.setAttribute('id', 'money-icon');
    moneyIcon.setAttribute('src', '');
    moneyContainer.appendChild(moneyIcon);

    const moneyText = document.createElement('p');
    moneyText.setAttribute('id', 'money-text');
    moneyText.innerHTML = '0' + ' reps';
    moneyContainer.appendChild(moneyText);

    return moneyContainer;
};

const createIdleMoneyContainer = () => {
    const idleMoneyContainer = document.createElement('p');
    idleMoneyContainer.setAttribute('id', 'idle-money');
    idleMoneyContainer.innerHTML = '0 reps / s';

    return idleMoneyContainer;
};

const createClickerContainer = () => {
    const clickerContainer = document.createElement('div');
    clickerContainer.setAttribute('id', 'clicker-container');

    const clickerButton = createClickerButton();

    clickerContainer.appendChild(clickerButton);

    return clickerContainer;
};

const createClickerButton = () => {
    const clickerButton = document.createElement('div');
    clickerButton.setAttribute('id', 'clicker-button');
    clickerButton.setAttribute('onclick', 'clicker()');

    const clickerButtonIcon = document.createElement('img');
    clickerButtonIcon.setAttribute('id', 'clicker-button-icon');
    clickerButtonIcon.setAttribute('src', './MEDIA/logo.png');
    clickerButton.appendChild(clickerButtonIcon);

    return clickerButton;
};

const createClickerFooter = () => {
    const clickerFooter = document.createElement('div');
    clickerFooter.setAttribute('id', 'clicker-footer');

    return clickerFooter;
};

const createShop = () => {
    const shop = document.createElement('div');
    shop.setAttribute('id', 'shop');
    shop.dataset.open = 'false';

    const shopButton = document.createElement('div');
    shopButton.setAttribute('id', 'shop-button');
    shopButton.setAttribute('onclick', 'toggleShop()');
    shop.appendChild(shopButton);

    return shop;
};

const createMenubarContainer = () => {
    const menubarContainer = document.createElement('div');
    menubarContainer.setAttribute('id', 'menubar-container');

    const settingsButton = createSettingsButton();
    const pauseButton = createPauseButton();
    const saveButton = createSaveButton();

    menubarContainer.appendChild(settingsButton);
    menubarContainer.appendChild(pauseButton);
    menubarContainer.appendChild(saveButton);

    return menubarContainer;
};

const createSettingsButton = () => {
    const settingsButton = document.createElement('div');
    settingsButton.setAttribute('id', 'settings-button');
    settingsButton.setAttribute('class', 'menubar-button');
    settingsButton.setAttribute('onclick', 'toggleSettingsOverlay()');

    const settingsButtonIcon = document.createElement('img');
    settingsButtonIcon.setAttribute('id', 'settings-button-icon');
    settingsButtonIcon.setAttribute('src', '');
    settingsButton.appendChild(settingsButtonIcon);

    return settingsButton;
};

const createPauseButton = () => {
    const pauseButton = document.createElement('div');
    pauseButton.setAttribute('id', 'pause-button');
    pauseButton.setAttribute('class', 'menubar-button');
    pauseButton.setAttribute('onclick', 'togglePause()');

    const pauseButtonIcon = document.createElement('img');
    pauseButtonIcon.setAttribute('id', 'pause-button-icon');
    pauseButtonIcon.setAttribute('src', '');
    pauseButton.appendChild(pauseButtonIcon);

    return pauseButton;
};

const createSaveButton = () => {
    const saveButton = document.createElement('div');
    saveButton.setAttribute('id', 'save-button');
    saveButton.setAttribute('class', 'menubar-button');
    saveButton.setAttribute('onclick', 'saveGame()');

    const saveButtonIcon = document.createElement('img');
    saveButtonIcon.setAttribute('id', 'save-button-icon');
    saveButtonIcon.setAttribute('src', '');
    saveButton.appendChild(saveButtonIcon);

    return saveButton;
};

const startGame = () => {
    return new Promise(() => {
        let loadingScreen = document.getElementById('loading-screen');
        loadingScreen.remove();
    });
};