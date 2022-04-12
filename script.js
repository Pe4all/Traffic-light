const button = document.getElementById("clickButton");

let i = 1;

button.addEventListener('click', function () {

    if (i === 1) {
        let elem2 = document.getElementById('secondCircle');

        elem2.style.background = 'yellow';
        elem2.style.boxShadow = '0 0 10px yellow';

        let elem1 = document.getElementById('firstCircle');
        elem1.style.background = 'grey';
        elem1.style.boxShadow= '0 0 10px gray';
        i++;
    } else if (i === 2) {
        let elem2 = document.getElementById('secondCircle');
        elem2.style.background = 'grey';
        elem2.style.boxShadow = '0 0 10px grey';

        let elem3 = document.getElementById('thirdCircle');
        elem3.style.background = 'green';
        elem3.style.boxShadow= '0 0 10px green';
        i++;
    } else if (i === 3) {
        let elem2 = document.getElementById('secondCircle');
        elem2.style.background = 'yellow';
        elem2.style.boxShadow = '0 0 10px yellow';

        let elem3 = document.getElementById('thirdCircle');
        elem3.style.background = 'grey'
        elem3.style.boxShadow= '0 0 10px gray';
        i++;
    } else if (i === 4) {
        let elem1 = document.getElementById('firstCircle');
        elem1.style.background = 'red';
        elem1.style.boxShadow= '0 0 10px red';

        let elem2 = document.getElementById('secondCircle');
        elem2.style.background = 'grey';
        elem2.style.boxShadow = '0 0 10px gray';
        i = 1;
    }

console.log(i);
});
