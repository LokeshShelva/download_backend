function handlecheck(checkbox) {
    if (checkbox.checked) {
        document.getElementById("submit_button").disabled = false;
    } else {
        document.getElementById("submit_button").disabled = true;
    }
}

function handleclick(e) {
    e.preventDefault();

    Sname = document.getElementById("student_name").value
    Fname = document.getElementById("father_name").value

    document.querySelector("form").reset()

    Sname = Sname.toLowerCase().trim().replace(/\s+/g, '').replace(/\./g, '')
    Fname = Fname.toLowerCase().trim().replace(/\s+/g, '').replace(/\./g, '')

    console.log(Sname, Fname)
}