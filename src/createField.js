const array = [1, 5, 1, 4, 5];
let prevItem = null;

function save(value, index) {
  prevItem = { value, index };

}

function match(prevIndex, currentIndex) {
  console.log("match", prevIndex, currentIndex);
  const elemArr = [...document.querySelectorAll(`.main__card--active`)];
  elemArr.forEach(element => {
    element.onclick = () => {};
    element.classList.add("main__card--match");
    element.classList.remove("main__card--active");

  })
  const matchArray = document.getElementsByClassName('main__card--match');
  if (matchArray.length == 4) {
    alert('you won');
    const main = document.getElementsByClassName('main')[0];
    main.style.display = "none";
    const wrapper = document.getElementsByClassName('animation-wrapper--hide')[0];
    wrapper.classList.remove('animation-wrapper--hide');
  }

}

function reset(prevIndex, currentIndex) {
  console.log("reset", prevIndex, currentIndex);
  const elemArr = [...document.querySelectorAll(`.main__card--active`)];
  elemArr.forEach(element => {
    element.classList.remove("main__card--active");
  })
}

function changeState(id, isOpen) {
  const element = document.getElementById(id);

  return element;
}

function open(index) {
  const elem = document.querySelector(`li[data-index="${index}"]`);
  elem.classList.add("main__card--active");
}

function fillImages(array, fragment) {
  array.forEach(function(item, index) {
    var li = document.createElement("li");

    li.dataset.index = index;
    li.dataset.value = item;

    li.classList.add('main__card');
    li.onclick = () => {
      open(index);
      if (prevItem) {
        if (prevItem.value === item && prevItem.index !== index) {
          //console.log("match")
          match(prevItem.index, index);
          prevItem = null;
        } else {
          /* console.log("reset"); */
          //setTimeout(() => {reset(prevItem.index, index);}, 1000);
          reset(prevItem.index, index);
          prevItem = null;
        }
      } else if (!prevItem) {
        save(item, index);
      }
    };
    li.innerHTML = `<img class="main__image" src="./src/img/${item}.jpg"/>`;
    fragment.appendChild(li);
  });
}

let element = document.getElementById("ul");
let fragment = document.createDocumentFragment();

fillImages(array, fragment);
element.appendChild(fragment);
