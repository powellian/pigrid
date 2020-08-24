export default () => {
  let gradElements = document.querySelectorAll('.gradient-block .pigr__pod');
  for (let i = 0; i < gradElements.length; i++) {
    gradElements[i].classList.add(`gradient-block__inner--0${i}`);
  }
};