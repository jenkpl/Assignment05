   
const empForm = document.form["empForm"];
empForm.addEventListener('submit', addEmployee);{

   
    let idU = empForm.id.value;
    console.log(`ID:`, idU);
}
    e.preventDefault();

  

    const idU = document.getElementById('id');
    const nameU = document.getElementById('name');
    const extU = document.getElementById('ext');
    const emailU = document.getElementById('email');
    const deptU = document.getElementById('dept');

    console.log(`ID:`, idU);
    console.log(`Name:`, nameU);
    console.log(`Extension:`, extU);
    console.log(`Email:`, emailU);
    console.log(`Department:`, deptU);




