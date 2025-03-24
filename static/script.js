var x, y, z;
x = 5;
y = 7;
z = x + y;
console.log(z);

var A, B, C;
A = "Hello ";
B = "world!";
C = A+B;
console.log(C)

function sumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

sumNPrint(x, y);
sumNPrint(A, B);

if (C.length > z) {
    console.log(C); 
} else {
    console.log("good job!")
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] == "Banana") {
            alert("Banana found in " + i);
            break;
        }
    }
}

/*
findTheBanana(L1);
findTheBanana(L2);


L1.forEach(function(element, index) {
    if (element == "Banana") {
        alert("we found a banana at index " + index);
    }
});

L2.forEach(function(element, index) {
    if (element == "Banana") {
        alert("we found a banana at index " + index);
    }
});

<script>
        $(document).ready(function(){
            $("#readMore").click(function() {
                $("#readMore").hide();
                $("#readLess").show();
            });
        });

        $(document).ready(function(){
            $("#readLess").click(function() {
                $("#readMore").hide();
                $("#readLess").show();
            });
        });
 </script>
*/
 
function greetingFunc() {
    const d = new Date();
    let h = d.getHours();
    var msg;
    if (5 <= h && h < 12) {
        msg = "Good morning";
    } else if (12 < h && h < 18) {
        msg = "Good afternoon";
    } else if (18 <= h && h < 20) {
        msg = "Good evening";
    } else if ((20 <= h && h < 24) || (0 <= h && h < 5)){
        msg = "Good night";
    }
    console.log(msg);
    document.getElementById("time").innerHTML = msg + ", I am Woody";
}

greetingFunc();

function addYear() {
    const d = new Date();
    let y = d.getFullYear();
    document.getElementById("copyYear").innerHTML += y;
}

/*
function showList() {
    document.getElementById("funList").style.display = "block";
    document.getElementById("funButton").style.display = "none";
}
*/

function showMore() {
    $("#readMore").hide();
    $("#intro2").show();
    $("#readLess").show();
}

function showLess() {
    $("#readMore").show();
    $("#intro2").hide();
    $("#readLess").hide();
}

function validate() {
    var userName =  document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    var msg = document.getElementById("validateMsg");

    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form completely";
        msg.style.color ="red";
    }
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText=data.slip.advice;
    })
    .catch(error => {
        // If something goes wrong (like no internet), log the error in the console
        console.error("Error fetching advice:", error);
        // Display a user-friendly error message on the webpage
        document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again.";
    });
}

function toggle() {
    console.log("yes");
    var elements = document.getElementsByClassName("top");
    for (var i = 0; i < elements.length; i++) {
        var display = window.getComputedStyle(elements[i]).display;
        elements[i].style.display = (display === "none") ? "flex" : "none";
    }
}
