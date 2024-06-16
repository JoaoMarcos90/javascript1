
const sr= ScrollReveal({
    distance :'10%',
    duration: 2000,
    delay: 5,
    reset:true
  });
  
  
  sr.reveal('.linha1',{delay:200, origin:'top'});
  sr.reveal('.linha2',{delay:200, origin:'top'});
  sr.reveal('.img3',{delay:100, origin:'top'});
  sr.reveal('.botao',{delay:100, origin:'top'});
  sr.reveal('.botao2',{delay:-400, origin:'top'});
  sr.reveal('.h4',{delay:-200, origin:'top'});
  sr.reveal('.h5',{delay:-200, origin:'top'});

/*---------------------------------TOPO -----------------------------------------*/

  $(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});


/* ------- FUNCAO ANCORA -----------------------
var $doc = $('html, body');
$('.galeria').click(function() {
  $doc.animate({
      scrollTop: $( $.attr(this,'href')).offset().top
  },500);
  return false;
});
*/