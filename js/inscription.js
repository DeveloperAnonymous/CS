$(document).ready(function () {
    $('#submit').on('click', function () {
        $('#form').jqxValidator('validate');
    });
    $('#form').on('validationSuccess', function (event) {
        window.location.href = "./success.html";
        window.reload();
    });
    $('#form').on('validationError', function (event) {
        alert('Error while validating!');
    });
    $("#form").jqxValidator({
        rules: [
            {
                input: '#nom',
                message: 'Ce champ est requis!',
                action: 'keyup, blur',
                rule: 'required'
            },
            {
                input: '#nom',
                message: 'Votre nom ne peut pas contenir de nombre!',
                action: 'keyup, blur',
                rule: 'notNumber'
            },
            {
                input: '#nom',
                message: 'Votre nom doit contenir de 2 a 32 characteres!',
                action: 'keyup, blur',
                rule: 'length=2,32'
            },
            {
                input: '#prenom',
                message: 'Votre prenom est requis!',
                action: 'keyup, blur',
                rule: 'required'
            },
            {
                input: '#prenom',
                message: 'Votre prenom ne peut pas contenir de nombre!',
                action: 'keyup',
                rule: 'notNumber'
            },
            {
                input: '#prenom',
                message: 'Votre prenom doit contenir de 2 a 32 charactères!',
                action: 'keyup',
                rule: 'length=2,32'
            },
            {
                input: '#pwd',
                message: 'Un mot de passe est requis!',
                action: 'keyup, blur',
                rule: 'required'
            },
            {
                input: '#pwd',
                message: 'Votre mot de passe doit contenir entre 4 et 32 charactères!',
                action: 'keyup, blur',
                rule: 'length=4,32'
            },
            {
                input: '#pwdConf',
                message: 'Les mots de passes de corresponds pas!',
                action: 'keyup, focus',
                rule: function (input, commit) {
                    return input.val() === $('#pwd').val();
                }
            },
            {
                input: '#email',
                message: 'Un email est requis!',
                action: 'keyup, blur',
                rule: 'required'
            },
            {
                input: '#email',
                message: 'Adresse email non valide!',
                action: 'keyup',
                rule: 'email'
            },
            {
                input: '#zip',
                message: 'Invalid zip code!',
                action: 'valuechanged, blur',
                rule: 'zipCode'
            }
        ]
    });
});