const radios = document.querySelectorAll('input[name="color"]');


function changeBackgroundColor() {
  const selectedRadio = document.querySelector('input[name="color"]:checked');
  if (selectedRadio) {
    document.body.style.backgroundColor = selectedRadio.value;
  }
}


radios.forEach((radio) => {
  radio.addEventListener("change", changeBackgroundColor);
});


changeBackgroundColor();
