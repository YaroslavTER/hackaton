const array = [1, 2, 3, 4, 5];

function createField(array) {
  let element = document.getElementById("ul");
  let fragment = document.createDocumentFragment();

  array.forEach(function(item) {
    var li = document.createElement("li");
    console.log(item);
    li.innerHTML = `<img src="./src/img/${item}.jpg"/>`;
    fragment.appendChild(li);
  });

  element.appendChild(fragment);
}

console.log(array);
createField(array);
