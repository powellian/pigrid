console.log('pi-modules');

export default (btn, el) => {
  const clicker = document.getElementById(btn);
  clicker.addEventListener('click', function(){
    document.getElementById(el).innerHTML = 'export default';
    console.log(`clicked: default - added to: "${el}" by: "${btn}"`);
  });
};

export const addContent = (btn, el) => {
  const clicker = document.getElementById(btn);
  clicker.addEventListener('click', function(){
    document.getElementById(el).innerHTML = 'export const addContent';
    console.log(`clicked: addContent - added to: "${el}" by: "${btn}"`);
  });
};