let names = document.getElementById("sujal");
let hellow = prompt("Enter Name to reverse").split("");

let length = hellow.length;
let namesk = " ";

for (let i = length - 1; i >= 0; i--) {
  // document.write(hellow[i]);

  namesk = namesk + hellow[i];
}

names.textContent = namesk;
