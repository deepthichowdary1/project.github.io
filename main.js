/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const selectElelment=function(element)
{
    return document.querySelector(element);
};
let maintoggler=selectElement('.maintoggler');
let body=selectElement('body');
maintoggler.addEventListener('click',function()
{
  body.classList.toggle('open');  
});
function scrollToTop() {
  window.scrollTo({
    top: 1000,
    behavior: 'smooth'
  });
}
