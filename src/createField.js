const array = [1, 5, 1, 4, 5];
let prevItem = null;

function fillImages(array, fragment) {
  array.forEach(function(item, index) {
    var li = document.createElement("li");
    li.addEventListener("click", () => {
      if (prevItem === item) {
        console.log("match");
      } else {
        prevItem = null;
      }
      if (!prevItem) {
        prevItem = item;
      }
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

console.log(array);
createField(array);
