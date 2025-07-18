function volume_sphere(event) {
  event.preventDefault(); // Prevent form from submitting

  const radiusInput = document.getElementById('radius').value;
  const volumeField = document.getElementById('volume');

  const radius = parseFloat(radiusInput);

  if (isNaN(radius) || radius < 0) {
    volumeField.value = 'NaN';
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeField.value = volume.toFixed(4);
}

window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
