//1. imagemap plugin betoltese
$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();
});

//2. ha a telepulesre kattintunk a terkepen, akkor megjelenjenek az emlekek
$(document).ready(function(e) {
	$('#nograd').on('click', function() {
		alert($(this).attr('alt') + ' helyszínünk emlékei következnek!'); // ez valószínűleg kimarad majd a kész térképből
		$(".elmenyek").toggle(2000);
	});
});

//3. a feluleten is lehessen hozzaadni emleket
$(document).ready(function () {
	$("button").click(function () {
		let elmeny = prompt('Mi jut még eszedbe? Írd az élményekhez:');
  		if (elmeny != null) {
			$("li:last").after('<li>'+ elmeny +'</li>');
  		}
	}); 
	$("ul").on("click", "li",  function(event) {
    		$(this).hide();
	});
});

//4. ha a telepulesre kattintunk a terkepen, akkor megjelenjen a fenykep nezegeto carousel

