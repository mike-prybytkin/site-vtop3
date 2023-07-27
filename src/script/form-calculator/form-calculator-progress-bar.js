const formCalculatorProgressBar = (currentActive = 1) => {
  const progress = document.getElementById('progress-line');
  const stepCircles = document.querySelectorAll('.circle');

  stepCircles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active-circle');
    } else {
      circle.classList.remove('active-circle');
    }
  });

  const activeCircles = document.querySelectorAll('.active-circle');
  progress.style.width = `${((activeCircles.length - 1) / (stepCircles.length - 1)) * 100}%`;
};

export default formCalculatorProgressBar;
