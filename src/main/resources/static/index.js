
$(document).ready(function () {
    $.ajax({
        url: "/users",
        type: "GET",
        success: function (users) {
            users.forEach(function (user) {
                $("#users-table tbody").append(
                    "<tr>" +
                    "<td>" + user.id + "</td>" +
                    "<td>" + user.name + "</td>" +
                    "<td><button class='delete-button' data-user-id='" + user.id + "' onclick='deleteUser()'>Delete</button></td>" +
                    "</tr>"
                );

            });
        }

    });
});

$("#add-user-form").submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: "/AddUser",
        type: "POST",
        contentType: "application/json",
        timeout: 1000,
        data: JSON.stringify({
            name: $("#name").val()

        }),
        success: function (user) {
            $("#users-table tbody").append(
                "<tr>" +
                "<td>" + user.id + "</td>" +
                "<td>" + user.name + "</td>" +
                "<td><button class='delete-button' data-user-id='" + user.id + "' onclick='deleteUser()' >Delete</button></td>" +
                "</tr>"
            );
            Swal.fire({
                icon: 'success',
                title: 'noice',
                text: 'Cool!',
              })
        },

        
        error : function (xhr, status, error) {
            Swal.fire({
                icon: 'info',
                title: 'noice',
                text: 'Cool!',
              })
        }
    });
});



function deleteUser() {   
    var userid = event.target.getAttribute("data-user-id");
    $.ajax({
        url: "/users/"+userid,
        type: "DELETE",
        contentType: "application/json",
       
        success: function (user) {
            
            Swal.fire({
                icon: 'success',
                title: 'noice',
                text: 'Cool!',
              })
        },
    });
}
