$(document).ready(function () {
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
                    "<div class='shop-item col-10 col-sm-8 col-md-5 col-lg-3 col-xl-2'>" +
                    "<a title='" + value.description + "' class='img-shop'><img alt='' title='" + value.description + "' src=\"assets/shop/" + value.photo + "\"></a>" +
                    "<form action='success.html'>" +
                    "<label><strong>Nom:</strong> " + value.nom + "</label><br>" +
                    "<label><strong>Prix:</strong> " + value.prix + "</label><br>" +
                    "<label for='qty'><strong>Quantité</strong> <input required type=\"number\" min='1' max='10' placeholder=\"0\" name='qty'></label><br>" +
                    "<button class='btn btn-dark'>Acheter!</button></form>" +
                    "</div>"
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