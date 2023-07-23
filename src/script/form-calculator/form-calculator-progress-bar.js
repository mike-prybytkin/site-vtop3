const formCalculatorProgressBar = (currentActive = 1) => {
  const progress = document.getElementById('progress-line');
  const stepCircles = document.querySelectorAll('.circle');

  stepCircles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const activeCircles = document.querySelectorAll('.active');
  progress.style.width = `${((activeCircles.length - 1) / (stepCircles.length - 1)) * 100}%`;
};

export default formCalculatorProgressBar;
