// alert("window.location.href");

const x = document.getElementById("demo");
const demos = document.getElementsByClassName("demo");
const spans = document.getElementsByTagName("span");

const btn = document.getElementById("btn");

const arr = ["Nairobi", "Kisumu", "Mombasa"];

x.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < demos.length; i++) {
  demos[i].innerHTML = "This is demo " + i;
}

for (let i = 0; i < spans.length; i++) {
  const el = spans[i];
  el.innerHTML = "This is span " + i;
  el.addEventListener("click", function () {
    alert(this.innerHTML);
  })
}

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

arr.forEach(element => {
  console.log(`element ${element}`);
});


btn.addEventListener('click', () => {
  console.log('clicked');
})