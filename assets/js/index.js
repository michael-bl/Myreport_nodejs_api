
$("#add_bottleneck").submit(function (event) {
    alert("Data inserted seccessfully!");
})

$("#update_bottleneck").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value']
    })
    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/bottleneck/${data.code}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert("Report updated successfully!");
        location.reload()
    })
})

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var code = $(this).attr("data-code")

        var request = {
            "url": `http://localhost:3000/api/bottleneck/${code}`,
            "method": "DELETE"
        }
        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert("Report deleted successfully!");
                location.reload()
            })
        }
    })
}