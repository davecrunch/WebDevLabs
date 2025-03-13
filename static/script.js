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