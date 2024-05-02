//  Question no 1
document.getElementById("showalert").onclick = function () {
    alert("Assalam-o-alaikum")
}
// Question no 2 // in index.html
function buymob(elem) {
    alert("Thanks for purchasing infinix")    //i am using event method one time in js other in index.html
};

//  Question no 3      
let studentform = [
    { Name: "Ahmed", Rollno: 2211 },
    { Name: "umair", Rollno: 1122 },
    { Name: "akasha", Rollno: 3212 },
    { Name: "rehman", Rollno: 3432 },
    { Name: "saylani", Rollno: 8877 },
    { Name: "faraz", Rollno: 9988 },
    { Name: "yahudi", Rollno: 1234 },
    { Name: "sahil", Rollno: 2134 },
]
studentform.forEach(function (student, index) {
    let row = input.insertRow();      //insert.row sa row banagi //table define nhi horha //but id ka attribute lagana sa html ma to phr chal rha hai
    let cell0 = row.insertCell(0);      //and uska andar cell bnanga
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    cell0.innerHTML = index;              //content cells ka andar
    cell1.innerHTML = student.Name;
    cell2.innerHTML = student.Rollno;
    cell3.innerHTML = "<button onclick='deleteRow(" + index + ")'>Delete</button>"
})
function deleteRow(index) {
    input.deleteRow(index)
}


// Question no 04
function swap_image(elem, image) {      //elem jo this ki jagha lagaya hai yahan
    if (image === 1) {
        elem.src = "./2.jpg"
    } else {
        elem.src = "./1.jpg"
    }
}
function swap_image1(elem, image) {      //elem jo this ki jagha lagaya hai yahan
    if (image === 1) {
        elem.src = "./4.jpg"
    } else {
        elem.src = "./3.jpg"
    }
}
function swap_image2(elem, image) {      //elem jo this ki jagha lagaya hai yahan
    if (image === 1) {
        elem.src = "./8.jpg"
    } else {
        elem.src = "./7.jpg"
    }
}
function swap_image3(elem, image) {      //elem jo this ki jagha lagaya hai yahan
    if (image === 1) {
        elem.src = "./10.jpg"
    } else {
        elem.src = "./9.jpg"
    }
}


// Question no 5
let counter_plus = document.getElementById("inc");
let counter_minus = document.getElementById("dec");
let counter_print = document.getElementById("counter");
let counter = 0;
counter_plus.addEventListener("click", function () {
    counter++
    if (counter > 0) {
        counter_print.innerHTML = counter;
    }
}
)
counter_minus.addEventListener("click", function () {
    counter_print.innerHTML = counter;
    if (counter > 0) {
        --counter
    }
    else {
        alert("number less than zero not allowed")
    }
})

