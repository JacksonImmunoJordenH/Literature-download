'use strict';

var topBtn = document.getElementById('to-top');

topBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.opacity = 1;
        topBtn.style.cursor = 'pointer';
    } else {
        topBtn.style.opacity = 0;
        topBtn.style.cursor = 'auto';
    };
});

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const viewBtn = document.querySelectorAll('.preview-btn');
// const pdfPreview = document.querySelectorAll('.pdf-preview');

// for (let i = 0; i < viewBtn.length; i++) {
//     viewBtn[i].addEventListener('click', () => {
//         // console.log(viewBtn[i]);
//         viewBtn[i].children[0].classList.toggle('fa-eye');
//         viewBtn[i].children[0].classList.toggle('fa-eye-slash');

//         // pdfPreview[i].classList.toggle('pdf-none');
//         pdfPreview[i].classList.toggle('pdf-hide');
//     });
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var dropContainer = document.querySelector('.jir-drop');
var dropBtn = document.querySelector('.dd-btn');
var listContainer = document.querySelector('.jir-drop-list');
var dropClose = document.querySelector('.dd-close');
var defItemContainer = document.querySelectorAll('.drop-block');
var dropItem = document.querySelectorAll('.drop-select');

function dropFunc() {
    dropContainer.classList.toggle('dd-active');
    dropClose.classList.toggle('dd-close-active');
}

dropBtn.addEventListener('click', dropFunc);
dropClose.addEventListener('click', dropFunc);

var _loop = function _loop(i) {
    // listen for click on each country listing
    dropItem[i].addEventListener('click', function () {
        dropBtn.innerText = this.innerText;
        dropFunc();
        for (var x = 0; x < defItemContainer.length; x++) {
            // hide all items that do not match the dropdown selection
            !defItemContainer[x].classList.contains(dropItem[i].name) ? defItemContainer[x].classList.add('js-hide') : defItemContainer[x].classList.remove('js-hide');
        }
    });
};

for (var i = 0; i < dropItem.length; i++) {
    _loop(i);
}