let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/aaeea4ce6d96025869ecd70915bf8d5b/untitledSpreadsheet/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load all rows from Sheety API
            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].from;
                let gEmail = json.bookings[i].to;
                let gPax = json.bookings[i].pax;
                let gRemarks = json.bookings[i].onward date;
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].returndate;
                let gRemarks = json.bookings[i].remarks;
                let gId = json.bookings[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gEmail
                row.insertCell(3).innerHTML = gFrom
                row.insertCell(4).innerHTML = gTo
                row.insertCell(5).innerHTML = gOnwardDate
                row.insertCell(6).innerHTML = gReturnDtare
                row.insertCell(7).innerHTML = gPax
                row.insertCell(8).innerHTML = gRemarks 
                row.insertCell(9).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)
            }
            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Onward Date</th>
                            <th scope="col">Return Date</th>
                            <th scope="col">Pax</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Task</th>

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteBooking(theId)
                })
            }


        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/aaeea4ce6d96025869ecd70915bf8d5b/untitledSpreadsheet/bookings' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}