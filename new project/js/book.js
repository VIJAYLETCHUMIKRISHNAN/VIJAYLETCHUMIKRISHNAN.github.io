let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let busType = document.getElementById("busType")
    let busTypeVal = busType.value

    let aDate = document.getElementById("aDate")
    let aDateVal = aDate.value

    let rDate = document.getElementById("rDate")
    let rDateVal = rDate.value

    let sRemarks = document.getElementById("sRemarks")
    let sRemarksVal = sRemarks.value

    let sTo = document.getElementById("sTo")
    let sToVal = sTo.value

    let sFrom = document.getElementById("sFrom")
    let sFromVal = sFrom.value

    BookNow(userNameVal, userEmailVal, busTypeVal, aDateVal, rDateVal, sRemarksVal, sFromVal, sToVal)
})

function BookNow(userName, userEmail, busType, aDate, rDate, sRemarks, sTo, sFrom) {
    let url = 'https://api.sheety.co/aaeea4ce6d96025869ecd70915bf8d5b/untitledSpreadsheet/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            roomtype: roomType,
            onwarddate: aDate,
            returndate: rDate,
            remarks: sRemarks,
            to: sTo,
            from: sFrom,
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            console.log(json.booking);
            alert(json.booking.name + " added in the list!")
        });
}