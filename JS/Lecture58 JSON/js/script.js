document.addEventListener("DOMContentLoaded", 
    function (event){

        document.querySelector("button")
        .addEventListener("click", function () {
            // call server to get thwe name
            $ajaxUtils.sendGetRequest("data/name.json", 
            function (res) {
                var message = 
                res.firstName + " " + res.lastName
                if (res.likesChineseFood) {
                    message += " likes Chinese food";
                }
                else {
                    message += " doesn't like Chinese food";
                }

                message += " and uses ";
                message += res.numberOfDisplays;
                message += " displays for coding.";

                document.querySelector("#content")
                .innerHTML = "<h2>Hello " + message + "!</h2>";;
            });
        });
    }
);


