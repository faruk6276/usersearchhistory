function change() {
  var keywordsCbs = document.querySelectorAll(".keywords input[type='checkbox']");
  var usersCbs = document.querySelectorAll(".users input[type='checkbox']");
  var filters = {
    keywords: getClassOfCheckedCheckboxes(keywordsCbs),
    users: getClassOfCheckedCheckboxes(usersCbs)
  };

  filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
  var classes = [];

  if (checkboxes && checkboxes.length > 0) {
    for (var i = 0; i < checkboxes.length; i++) {
      var cb = checkboxes[i];

      if (cb.checked) {
        classes.push(cb.getAttribute("rel"));
      }
    }
  }

  return classes;
}

function filterResults(filters) {
  var rElems = document.querySelectorAll(".result div");
  var rElem = document.querySelectorAll(".result div .search_date");
  console.log(rElem)
  var hiddenElems = [];

  if (!rElems || rElems.length <= 0) {
    return;
  }

  for (var i = 0; i < rElems.length; i++) {
    var el = rElems[i];

    if (filters.keywords.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.keywords.length; j++) {
        var filter = filters.keywords[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }

    if (filters.users.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.users.length; j++) {
        var filter = filters.users[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }
  }

  for (var i = 0; i < rElems.length; i++) {
    rElems[i].style.display = "block";
  }

  if (hiddenElems.length <= 0) {
    return;
  }

  for (var i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].style.display = "none";
  }
}