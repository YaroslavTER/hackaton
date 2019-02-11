const array = [1, 5, 1, 4, 5];
let prevItem = {
  value: null,
  index: null
};

function reset(item, index) {
  if (!prevItem.value) {
    prevItem.value = item;
    prevItem.index = index;
    return;
  }
}

function fillImages(array, fragment) {
  array.forEach(function(item, index) {
    var li = document.createElement("li");
    li.addEventListener("click", () => {
      if (prevItem.value === item && prevItem.index !== index) {
        console.log("match");
        prevItem = {};
      } else {
        console.log("reset");
        prevItem = {};
      }
      reset(item, index);
      /* item index prevItem {value index} */
    });
    li.innerHTML = `<img data-value=${item} data-index=${index} src="./src/img/${item}.jpg"/>`;
    fragment.appendChild(li);
  });
}

/* 

function createField(array) { */
let element = document.getElementById("ul");
let fragment = document.createDocumentFragment();
fillImages(array, fragment);
element.appendChild(fragment); /* 
} */
