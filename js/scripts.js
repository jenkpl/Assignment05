
const $ = (id) => {
    return document.getElementById(id);
};

window.addEventListener('load', init);

function init() {
   
    let idU     = $('Fid');
    let nameU   = $('name');
    let emailU  = $('email');
    let extU    = $('ext');
    let deptU   = $('dept');

    const form = document.getElementById('empForm');
    form.addEventListener('submit', () => {
        console.log(`ID:`, idU);
        console.log(`Name:`, nameU);
        console.log(`Extension:`, extU);
        console.log(`Email:`, emailU);
        console.log(`Department:`, deptU);
    });
}