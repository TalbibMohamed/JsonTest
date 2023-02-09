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
        }
    });
});
// $(".delete-button").click(function (e) {
//     e.preventDefault();
//     let userId = $(this).data("id");
//     $.ajax({
//         url: "/users/" + userId,
//         type: "DELETE",
//         success: function (result) {
//             console.log("User deleted");
//             // Remove the user from the list
//             $("button[data-user-id='" + userId + "']").closest("tr").remove();
//         }
//     });


// });

$('.delete-button2').click(function (e) {
    e.preventDefault();
    let userId = $(this).data("user-id");
    alert(userId);
    alert(this);

});
function deleteUser() {
    alert(event);
    // e.preventDefault();
    let userId = $(event).data("user-id");
    alert(userId);
    // alert($("h1").data("id"))
    // let userId = $(this).data("user-id");
    // alert(userId);
    // $.ajax({
    //     url: "/users/" + userId,
    //     type: "DELETE",
    //     success: function (result) {
    //         console.log("User deleted");
    //         // Remove the user from the list
    //         $("button[data-user-id='" + userId + "']").closest("tr").remove();
    //     }
    // });

}
