// Masks
function inputHandler(masks, max, event) {
  var c = event.target;
  var v = c.value.replace(/\D/g, '');
  var m = c.value.length > max ? 1 : 0;
  VMasker(c).unMask();
  VMasker(c).maskPattern(masks[m]);
  c.value = VMasker.toPattern(v, masks[m]);
}

document.addEventListener("DOMContentLoaded", function(event) {
  const telMask = ['(99) 9999-9999', '(99) 99999-9999'];
  const tel = document.querySelector('input[name="tel"]');
  const whats = document.querySelector('input[name="whats"]');

  if (tel) {
    VMasker(tel).maskPattern(telMask[0]);
    tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);
  }

  if (whats) {
    VMasker(whats).maskPattern(telMask[0]);
    whats.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);
  }

  birthday = document.getElementById('birthday');

  if (birthday) {
    VMasker(birthday).maskPattern("99/99/9999");
  }
});
