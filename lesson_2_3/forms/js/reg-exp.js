let but = document.querySelector("#but")

/*Функция проверки корректности Имени*/

function testName() {
    let regExpName = /[a-zа-яё]{4,14}/ig;
    let name = document.querySelector("#name");
    let tooltipName = document.querySelector("#div-name");
    if (regExpName.test(name.value)) {
        name.style.borderColor = "green";
        tooltipName.removeAttribute("tooltip");
    } else {
        name.style.borderColor = "red";
        tooltipName.setAttribute("tooltip", "Вы ввели некорректное имя.")
    } 
}

/*Функция проверки корректности номера телефона*/

function testTelephone() {
    let tel = document.querySelector("#telephone");
    let tooltipTel = document.querySelector("#div-tel")
    let regExpTel = /^(\+)?([ ()]?\d[- _()]?){11}$/g;
    if (regExpTel.test(tel.value)) {
        tel.style.borderColor = "green";
        tooltipTel.removeAttribute("tooltip");
    } else {
        tel.style.borderColor = "red";
        tooltipTel.setAttribute("tooltip", "Вы ввели некорректный номер телефона")
    }
}

/*Функция проверки корректности email-a*/

function testEmail() {
    let regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
    let email = document.querySelector("#email");
    let tooltipEmail = document.querySelector("#div-email");
    if (regExpEmail.test(email.value)) {
        email.style.borderColor = "green";
        tooltipEmail.removeAttribute("tooltip");
    } else {
        email.style.borderColor = "red";
        tooltipEmail.setAttribute("tooltip", "Вы ввели некорректный адресс электронной почты.")
    }
}

but.addEventListener("click", () => {
    testName();
    testTelephone();
    testEmail();
})
