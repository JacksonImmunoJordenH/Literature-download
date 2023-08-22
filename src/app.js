const topBtn = document.getElementById('to-top');

topBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', () => {
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

const dropContainer = document.querySelector('.jir-drop');
const dropBtn = document.querySelector('.dd-btn');
const listContainer = document.querySelector('.jir-drop-list');
const dropClose = document.querySelector('.dd-close');
const defItemContainer = document.querySelectorAll('.drop-block');
const dropItem = document.querySelectorAll('.drop-select');

function dropFunc() {
    dropContainer.classList.toggle('dd-active');
    dropClose.classList.toggle('dd-close-active');
}

dropBtn.addEventListener('click', dropFunc);
dropClose.addEventListener('click', dropFunc);

for (let i = 0; i < dropItem.length; i++) {
    // listen for click on each country listing
    dropItem[i].addEventListener('click', function() {
        dropBtn.innerText = this.innerText;
        dropFunc();
        for (let x = 0; x < defItemContainer.length; x++) {
            // hide all items that do not match the dropdown selection
            !defItemContainer[x].classList.contains(dropItem[i].name) ? defItemContainer[x].classList.add('js-hide') : defItemContainer[x].classList.remove('js-hide');
        }
    });
}