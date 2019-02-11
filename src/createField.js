const array = [new Array(25)].map((el, i) => (el = i));

function createField(array) {
  let element = document.getElementById("ul");
  let fragment = document.createDocumentFragment();

  array.forEach(function(item) {
    var li = document.createElement("li");
    li.textContent = ``;
    fragment.appendChild(li);
  });

  element.appendChild(fragment);
}

li.textContent = item;
