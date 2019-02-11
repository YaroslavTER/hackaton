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
    switch (level) {
        case '1': return [1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2];
        case '2': return [2, 2, 1, 3, 1, 2, 1, 3, 3, 2, 3, 2, 1, 2, 1, 2, 3, 2, 1, 3, 3, 1, 2, 2, 2, 1, 2, 1, 2, 3, 2, 1, 1, 2, 2, 1];
        case '3': return [2, 4, 1, 3, 1, 4, 1, 3, 3, 2, 3, 2, 1, 4, 3, 2, 1, 2, 1, 3, 4, 1, 4, 2, 2, 4, 2, 1, 4, 3, 2, 4, 1, 4, 2, 1];
        case '4': return [2, 4, 5, 3, 1, 4, 5, 3, 3, 2, 3, 5, 1, 4, 3, 5, 1, 2, 1, 3, 4, 1, 5, 2, 2, 4, 5, 1, 4, 3, 2, 5, 1, 4, 2, 1];
    }
}


