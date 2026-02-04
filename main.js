const colors = ['peachpuff','firebrick', 'aquamarine', 'chartreuse', 'blueviolet', 'lightpink'];
const colors2 = [...colors].reverse();
let colorI = 0;

console.log(colors);
console.log(colors2);

const middle = document.getElementById("centered");
const link = middle.querySelectorAll('a');
const h2s = middle.querySelectorAll('h2');
const ps = middle.querySelectorAll('p');
const lis = middle.querySelectorAll('li');

console.log(middle);

middle.addEventListener('click', () => {
    colorI = (colorI + 1) % colors.length;
    
    ps.forEach((p, i) =>{
        p.style.color = colors[colorI];
    });

    lis.forEach((li, i) =>{
        li.style.color = colors[colorI];
    });

    h2s.forEach((h, i) =>{
        h.style.color = colors2[colorI];
    });
    
    link.forEach(a => {
        a.style.color = colors2[colorI];
    });
});

/*
const colors3 = ['#401F71', '#824D74', '#BE7B72', '#FDAF7B'];
let colorI2 = 0;

window.addEventListener('click', () => {
    colorI2 = (colorI2 + 1) % colors3.length;
    document.body.style.background = colors3[colorI2];
})
*/