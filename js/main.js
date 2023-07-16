document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  var modals = document.querySelectorAll('.modal');
  var modalInstances = M.Modal.init(modals);

  var boxes = document.querySelectorAll('.materialboxed');
  var boxeaInstances = M.Materialbox.init(boxes);
});