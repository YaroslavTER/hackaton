let inputForm = document.getElementsByClassName('form')[0];
let wrapper = document.getElementsByClassName('main')[0];
wrapper.innerHTML = '';

inputForm.button.onclick = () => {
    let level = inputForm.form__select.value;
    wrapper.innerHTML = '';
    fillImages(sortItems(level), wrapper);
    console.log(sortItems(level).length);
    return false;
};

function sortItems(level) {
    const levels = {
        1: {
            1 : 18,
            2 : 18,
        },
        2: {
            1 : 12,
            2 : 10,
            3 : 14,
        },
        3: {
            1 : 6,
            2 : 10,
            3 : 8,
            4 : 12,
        },
        4: {
            1 : 6,
            2 : 8,
            3 : 6,
            4 : 10,
            5 : 6,
        },
    };
    const fields = levels[level];

    return Object.keys(fields).reduce((acc, item ) => [...acc, ...new Array(fields[item]).fill(item)], []).sort(compareRandom);

    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

}
