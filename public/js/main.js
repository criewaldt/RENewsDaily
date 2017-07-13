function form_submit() {
    var data = {
        email: document.getElementById("email").value
        };
    var r = confirm(data.email+": Are you sure you want to subscribe?");
    if (r === true) {
        $.ajax({
            type: "POST",
            url: '/subscribe',
            data: data,
            success: function(result) {
                console.log(result);
                alert("We've send you an email. Click the link to confirm your subscription.");
            },
            error: function(msg) {
                console.log(msg);
            }
        });
    }
}