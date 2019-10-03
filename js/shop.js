$(document).ready(function () {
    $(".img-shop").magnificPopup({type:'image'})
        .magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        },
        midClick: true
    });

    $.ajax({
        type: "get",
        url: "data.json",
        beforeSend: function () {
            $("#items").html("Chargement...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            $("#items").html("Une erreur est survenue lors du chargement du magasin!");
        },
        dataType: "json",
        success: function (data) {
            let balise = $("#items");
            balise.html("");
            $.each(data["shop"], function (key, value) {
                balise.append(
                    "<td><div class=\"shop-item\">" +
                    "<a title='" + value.description + "' class='img-shop' href='assets/shop/" + value.photo + "'><img alt='' title='" + value.description + "' src=\"assets/shop/" + value.photo + "\"></a>" +
                    "<form action='#'>" +
                    "<label><strong>Nom:</strong> " + value.nom + "</label>" +
                    "<label><strong>Prix:</strong> " + value.prix + "</label>" +
                    "<label for='qty'><strong>Quantité</strong> <input required type=\"number\" min='1' max='10' placeholder=\"0\" name='qty'></label>" +
                    "<button class='btn btn-dark' type='submit'>Acheter!</button></form>" +
                    "</div></td>"
                );
            });

            // Affiche un rabais s'il y en a un d'actif
            let rabais = $("#rabais");
            $.each(data["promotions"], function(key, value) {
                if (value["active"]) {
                    let date = new Date(value["endDate"]).getTime();
                    var x = setInterval(function() {
                        let today = new Date().getTime();
                        let diff = date - today;
                        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
                        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

                        let formatedDate = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                        rabais.html("<code class=\"date\">" + formatedDate + "</code> " + value["desc"] + " <code>" + value["code"] + "</code>");
                        rabais.css("display", "block");
                        if (diff < 0) {
                            clearInterval(x);
                            rabais.css("display", "none");
                            rabais.html("EXPIRÉ");
                        }
                    }, 1000);
                }
            });
        }
    });
});