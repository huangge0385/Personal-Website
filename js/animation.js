$(document).ready(function(){
	$('li.fields').addClass('hide');

	$('li.title').on('click','li.title',function(){
		$(this).next().slideDown(200);
	})
});