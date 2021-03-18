   
// const empForm = document.forms["empForm"];
// empForm.addEventListener('submit', enroll);{
//     let enroll = getElementById('Fid');

//     enroll.addEventListener('blur', () => alert('Hello World'));
//     alert( `Hello, nameU, idU`);
// }
    let idU = empForm.id.value;
    console.log(`ID:`, idU);

    e.preventDefault();

    //let ccSelection = ccForm.ccselect.value;
    //console.log(ccSelection);

    //const idU = document.getElementById('id');
    const nameU = document.getElementById('name');
    const extU = document.getElementById('ext');
    const emailU = document.getElementById('email');
    const deptU = document.getElementById('dept');

let enroll = getElementById('id');
    enroll.addEventListener('blur', () => alert('Hello World'));
    alert( `Hello, nameU, idU`);


    console.log(`ID:`, idU);
    console.log(`Name:`, nameU);
    console.log(`Extension:`, extU);
    console.log(`Email:`, emailU);
    console.log(`Department:`, deptU);




