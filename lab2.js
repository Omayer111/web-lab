function magic() {
    var condition = document.getElementById("para");

    if (condition.innerHTML === "first script using") {
        condition.innerHTML = "cng hoye geso";
    } else {
        condition.innerHTML = "first script using";
    }
}

var a = 1; let b = 2;

let val = multi(a, b);

function multi(ab, cd) {
    return ab * cd;
}


let z = a + b;

let x = 5;
x = 1;

var y = 1;
var y = 2;


const android = { 1: m31, camera: 64, processor: exynos, para: function () { return 4 * 5 } };

android.model = 12;

print(android.camera)
print(android[1])
print(android["para"])


const f = [1, 2, 3, 4];
var list = "<ul>";
let len = f.length;

for (let i = 0; i < len; i++) {
    list += "<li>" + f[i] + "</li>";
}



list += "</ul>";

document.getElementById("hi").innerHTML = list;


class car {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
}