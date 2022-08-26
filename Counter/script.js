let value = document.querySelector ('span');
const btns = document.querySelectorAll ('.btn');

let count = 0;

btns.forEach (function (btn) {
  btn.addEventListener ('click', function (e) {
    let styles = e.currentTarget.classList;

    if (styles.contains ('increase')) {
      count++;
    } else if (styles.contains ('decrease')) {
      count--;
    } else if (styles.contains ('reset')) {
      count = 0;
    }
    value.innerText = count;
    if (count < 0) {
      value.style.color = 'red';
    } else if (count > 0) {
      value.style.color = 'green';
    } else if (count === 0) {
      value.style.color = 'inherit';
    }
  });
});
