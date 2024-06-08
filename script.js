function pop1(){
    document.getElementById('multi-step-form-container').style.display = "block";
}
function popClose(){
    document.getElementById('multi-step-form-container').style.display = "none";
}

const navigateToFormStep = (stepNumber) => {
  document.querySelectorAll(".form-step").forEach((formStepElement) => {
      formStepElement.classList.add("d-none");
  });
  document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
      formStepHeader.classList.add("form-stepper-unfinished");
      formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
  });
  document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
  formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
  formStepCircle.classList.add("form-stepper-active");
  for (let index = 0; index < stepNumber; index++) {
      const formStepCircle = document.querySelector('li[step="' + index + '"]');
      if (formStepCircle) {
          formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
          formStepCircle.classList.add("form-stepper-completed");
      }
  }
};
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
  formNavigationBtn.addEventListener("click", () => {
      const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
      navigateToFormStep(stepNumber);
  });
});


// second pop up
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        closePopup();
    }
}

function img(url, index){
    document.getElementById("pImage").src = url;
    if(index==1){
        document.getElementById("rhead").innerHTML = "Outdoor Camera Pro";
        document.getElementById("rP").innerHTML = "With Smart Sentry™ AI, it's smarter exterior protection. <br> - Identifies and deters true threats. <br> - Doesn't record crime; it helps prevent it. <br> - Provides live and recorded video.";
    }
    else if(index==2){
        document.getElementById("rhead").innerHTML = "lorem ipsum";
        document.getElementById("rP").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta accusamus laudantium sequi eaque dolorum quaerat asperiores repellendus dicta quasi.";
    }
    else if(index==3){
        document.getElementById("rhead").innerHTML = "lorem ipsum";
        document.getElementById("rP").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta accusamus laudantium sequi eaque dolorum quaerat asperiores repellendus dicta quasi.";
    }
    else if(index==4){
        document.getElementById("rhead").innerHTML = "lorem ipsum";
        document.getElementById("rP").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta accusamus laudantium sequi eaque dolorum quaerat asperiores repellendus dicta quasi.";
    }
    else if(index==5){
        document.getElementById("rhead").innerHTML = "lorem ipsum";
        document.getElementById("rP").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta accusamus laudantium sequi eaque dolorum quaerat asperiores repellendus dicta quasi.";
    }
    else if(index==6){
        document.getElementById("rhead").innerHTML = "lorem ipsum";
        document.getElementById("rP").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta accusamus laudantium sequi eaque dolorum quaerat asperiores repellendus dicta quasi.";
    }
}
