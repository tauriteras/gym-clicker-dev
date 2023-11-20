const toggleShop = () => {
    if (document.getElementById('shop').dataset.open === 'true') {
        document.getElementById('shop').dataset.open = 'false';
    } else {
        document.getElementById('shop').dataset.open = 'true';
    }
}

const populateStore = () => {
    for(let itemNum = 0; itemNum < itemsArr.length; itemNum++) {
        console.log(itemsArr[itemNum].name)
    }
}

