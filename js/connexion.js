$(document).ready(function () {
    $('.submit').on('click', function () {
        $('#form').jqxValidator('validate', form);
    });
    $("#form").jqxValidator({
        rules: [
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
            }
        ]
    });
});