$(document).ready(function() {
	   
	   $('.dropdown-item').on('click', function(){
				console.log("Clicked");
			   console.log($(this));
			   $(this).find(".fa-plus").toggleClass('active');
			   $(this).find(".fa-minus").toggleClass('active');
		})
		console.log(window.location.href)
		$.urlParam = function(name){
			   var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
			   if(results){
			   return results[1] || 0;
			   }
		   }
	   
		const source = $.urlParam('source'); 
		const campaign = $.urlParam('campaign');
		const affid = $.urlParam('affid');
		const subid = $.urlParam('subid');
		const testCase = $.urlParam('testCase');
		if(source) {
			$('input[name=source]').val(source);
				console.log(source+' Added');
		}
		   if(campaign) {
			$('input[name=campaign]').val(campaign);
			console.log(campaign+' Added');
		}
		if(affid) {
			$('input[name=affid]').val(affid);
			console.log(affid+' Added');
		} else {
			$('input[name=affid]').val('6519');
		}
		if(subid) {
			$('input[name=subid]').val(subid);
			console.log(subid+' Added');
		}
		if(testCase) {
			$('input[name=testCase]').val(testCase);
			console.log(testCase+' Added');
		}
	   
		$('.btn-grouped input').on('click', function(){
			let q = $(this).closest('.question').attr('id');
			let thisQuestion = parseInt(q.substring(1));
			let nextQuestion = thisQuestion + 1;
		   
			if(thisQuestion == 1) {
				//let answer = $('#q'+thisQuestion+'Answer').val();
				//console.log(answer);
				let earDamage = $('[name=earDamage]:checked').val();
				if(!earDamage) {
					$('#q'+thisQuestion+' .error-message').append("<div class='alert alert-danger' role='alert'>Please select your Answer above</div>"); 
					event.preventDefault();
					return false
				}
				if(earDamage == "No") {
					$('#q'+thisQuestion+' .error-message').append("<div class='alert alert-danger' role='alert'>Unfortunately we can only help those who have worked in a noisy workplace after 1963</div>"); 
					event.preventDefault();
					return false
				}
			}
			if(thisQuestion == 2) {
			   	nextQuestion = 3;
			   	let hearingProblems = $('[name=hearingProblems]:checked').val();
			   	if(!hearingProblems) {
					$('#q'+thisQuestion+' .error-message').append("<div class='alert alert-danger' role='alert'>Please select your Answer above</div>"); 
					event.preventDefault();
					return false
				}
				if(hearingProblems == "No") {
					$('#q'+thisQuestion+' .error-message').append("<div class='alert alert-danger' role='alert'>Unfortunately we are only able to help those with damage to their hearing</div>"); 
					event.preventDefault();
					return false
				}
				$('#q'+thisQuestion+' .error-message').html("");

			}
			if(thisQuestion == 3) {
				let hadClaim = $('[name=hadClaim]:checked').val();
				if(!hadClaim) {
					$('#q'+thisQuestion+' .error-message').append("<div class='alert alert-danger' role='alert'>Please select your Answer above</div>"); 
					event.preventDefault();
					return false
				}
				if(hadClaim == "Yes") {
					$('#q'+thisQuestion+' .error-message').append("<div class='alert alert-danger' role='alert'>Unfortunately we are only able to help those who have not previously claimed</div>"); 
					event.preventDefault();
					return false
				}
			}
			   
			   
			$('#q'+thisQuestion+' .error-message').html("");
			$('#q'+thisQuestion).removeClass('active');
			$('#q'+nextQuestion).addClass('active');
	   });
		
	});