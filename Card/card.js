document.getElementById("img-plus").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("centre").innerText =
    Number(document.getElementById("centre").innerText) + 1;
}

document.getElementById("img-minus").addEventListener("click", minus);

function minus() {
  if (Number(document.getElementById("centre").innerText) > 0)
    document.getElementById("centre").innerText =
      Number(document.getElementById("centre").innerText) - 1;
}
