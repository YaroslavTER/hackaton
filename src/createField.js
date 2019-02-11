const array = [1, 5, 1, 4, 5];
let prevItem = null;

function save(value, index) {
  prevItem = { value, index };
  console.log("save", index);
}

function match(prevIndex, currentIndex) {
  console.log("match", prevIndex, currentIndex);
}

function reset(prevIndex, currentIndex) {
  console.log("reset", prevIndex, currentIndex);
}

function changeState(id, isOpen) {
  const element = document.getElementById(id);

  return element;
}

function fillImages(array, fragment) {
  array.forEach(function(item, index) {
    var li = document.createElement("li");
    li.addEventListener("click", () => {
      if (prevItem) {
        if (prevItem.value === item && prevItem.index !== index) {
          //console.log("match");
          match(prevItem.index, index);
          prevItem = null;
        } else {
          /* console.log("reset"); */
          reset(prevItem.index, index);
          prevItem = null;
        }
      } else if (!prevItem) {
        save(item, index);
      }
    });
    li.innerHTML = `<img data-value=${item} data-index=${index} id=${index} src="./src/img/${item}.jpg"/>`;
    fragment.appendChild(li);
  });
}

let element = document.getElementById("ul");
let fragment = document.createDocumentFragment();
fillImages(array, fragment);
element.appendChild(fragment);
