document.addEventListener("DOMContentLoaded", 
    function (event){

        document.querySelector("button")
        .addEventListener("click", function () {
            // call server to get thwe name
            $ajaxUtils.sendGetRequest("data/name.txt", 
            function (request) {
                var name = request.responseText;

                document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";;
            });
        });
    }
);


