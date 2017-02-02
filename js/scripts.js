function showMe(id) {
document.getElementById(id).disabled = false;
}
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.className == 'warning')
      e.className = 'warningClicked';
   else
      e.className = 'warning';
}
