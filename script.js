$(function () {
    console.log("ready!");
    $("#CntctformFm").validate({
        rules:
            {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: "required",
            },
        messages: {
            name: "Please enter your full name.",
            email: "Please enter a valid email.",
            phone: "Phone number must be 10 characters (include area code).",
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "pickup_time")
                error.appendTo($('.error_pickuptime'));
            else if (element.is(":radio"))
                error.appendTo($('.error_radio'));
            else if (element.is(":checkbox"))
                error.appendTo(element.next());
            else
                error.appendTo(element.parent());
        },
        submitHandler: function (form) {
            var returnedData = ""
            var postData = $("#CntctformFm").serializeArray();
            var formURL = $("#CntctformFm").attr("action");
            $.ajax({
                type: "POST",
                url: formURL,
                data: postData,
                dataType: 'json',
                success: function (data) {
                    console.log("!!!!!!!!!!!!!!!");
                    if (data.status == 'success') {
                        window.location.href = "/confirm.html";
                    }
                }
            });
        }
    });
    return false; // avoid to execute the actual submit of the form.
});


