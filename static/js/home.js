function datechange(){
  var w_date=document.querySelectorAll(".time_range input[type='checkbox']");
  var selected=getClassOfCheckedCheckboxes(w_date);
  if (selected=='yesterday'){
    const t_date=new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()-1);
    filterdate(t_date,t_date);
  }
  else if (selected=='lst_week'){
    var d = new Date();
    var to = d.setTime(d.getTime() - (d.getDay() ? d.getDay() : 7) * 24 * 60 * 60 * 1000);
    var from = d.setTime(d.getTime() - 6 * 24 * 60 * 60 * 1000);
    var startdate=new Date(to);
    var enddate=new Date(from);
    filterdate(startdate,enddate);
  }
  else if (selected=='lst_month'){
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth()-1, 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
    filterdate(firstDay,lastDay);
  }
  
}
function custom_date(){
let start_Date = document.getElementById('start');
let end_date = document.getElementById('end');
let star_tdate = new Date(start_Date.value);
let en_ddate= new Date(end_date.value);
if (!isNaN(star_tdate.getTime()) && !isNaN(en_ddate.getTime())){
filterdate(star_tdate,en_ddate);
}

}
function filterdate(startdate,enddate){
  var rEl = document.querySelectorAll(".result div .search_date");
  var rElems = document.querySelectorAll(".result div");
  var hiddenElems = [];

  if (!rElems || rElems.length <= 0) {
    return;
  }

  for (var i = 0; i < rElems.length; i++) {
    var el = rElems[i];
    console.log(el);
    var g_date=new Date(rEl[i].innerHTML);
    var c_date=g_date.setHours(0,0,0,0);
    var st=startdate.setHours(0,0,0,0);
    var en=enddate.setHours(0,0,0,0);
    console.log(c_date>=st && c_date<=en);

    if (rEl) {
      var isHidden = true;
        if (c_date>=st && c_date<=en) {
          isHidden = false;
          break;
        }
      

      if (isHidden) {
        hiddenElems.push(el);
      }
    }
  }
  
  hid_show(rElems,hiddenElems);
}
function hid_show(rElems,hiddenElems){
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

  hid_show(rElems,hiddenElems);
}