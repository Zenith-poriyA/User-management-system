
$("#new_useR").submit(function (event) {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
})

$("#update_useR").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value']
    })
    var request = {
        "url": `http://localhost:5000/api/users/${data.id}?`,
        "method": "PUT",
        "data": data
    }
    $.ajax(request).done(function (response) {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    })
})

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody tr td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:5000/api/users/${id}?`,
            "method": "DELETE",
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax(request).done(function (response) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    location.reload();
                })
            }
        })
    })
}