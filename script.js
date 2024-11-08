function generateResume() {
    document.getElementById("output-name").textContent = document.getElementById("name").value;
    document.getElementById("output-email").textContent = document.getElementById("email").value;
    document.getElementById("output-phone").textContent = document.getElementById("phone").value;
    document.getElementById("output-linkedin").textContent = document.getElementById("linkedin").value;
    document.getElementById("output-github").textContent = document.getElementById("github").value;
    document.getElementById("output-experience").textContent = document.getElementById("experience").value;
    document.getElementById("output-education").textContent = document.getElementById("education").value;
    const photoInput = document.getElementById("photo");
    const outputPhoto = document.getElementById("output-photo");
    if (photoInput.files && photoInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        outputPhoto.src = e.target.result;
        outputPhoto.style.display = "block";
      };
      reader.readAsDataURL(photoInput.files[0]);
    } else {
      outputPhoto.style.display = "none";
    }


    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-output").style.display = "block";
  }

  function downloadResume() {
    const element = document.getElementById('resume-output');
    html2pdf().from(element).save('resume.pdf');
  }