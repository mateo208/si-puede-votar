const userName = document.getElementById("text-username");
const userAge = document.getElementById("text-age");
const result = document.getElementById("p-result");
const calculet = document.getElementById("calculet");
const date = document.getElementById("date");

calculet.addEventListener("click", (event) => {
    event.preventDefault();
    let username = userName.value;
    // if (userAge.value > 18) {
    //     result.textContent = ` usted puede votar ${username}`;
    //     result.style.color = "green";
    // } else {
    //     result.textContent = `usted no puede votar ${username}`;
    //     result.style.color = "red";
    // }

    date.addEventListener("change", function() {
        if (this.value) {
            result.textContent = `${username} Su edad es :${calcularEdad(this.value)}`;
            result.style.color = "green";
        }
        else {
            result.textContent = `Se me va ${calcularEdad(this.value)}`;
        }
    });
  
});
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

// function calcularedad (bithDate) {
//     const datact = new Date();
//     const YearAct = parseInt(datact.getFullYear());
//     const MonthAct = parseInt(datact.getMonth()) + 1;
//     const dateAct = parseInt(datact.getDate());


//     const yearBirth = parseInt(String(datact).substring(0,4));
//     const monthBirth = parseInt(String(datact).substring(5,7));
//     const dateBirth = parseInt(String(datact).substring(8,10));

//     let old = YearAct - yearBirth;
//     if (MonthAct < monthBirth) {
//         old--;
//        
//     }
//     else if (MonthAct === monthBirth) {
//         if (dateAct < dateBirth) {
//             old--;
//    
//         }
//     }
//     return old;
// }
