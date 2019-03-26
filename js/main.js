$(document).ready(function () {

	var array = [];
	var count = 0;
	var count2 = 0;
	const noteBox = $('.note__box-items');

	//get input and add to list
	$('button[type="submit"]').click(function () {


		//get input value
		const inputVal = $('input[type="text"]').val();

		//check if input value already exist
		if (array.length > 0 && array.indexOf(inputVal) > -1) {

			$('.message').css('opacity', '1');

			setTimeout(function () {

				$('.message').css('opacity', '0');

			}, 1600)

			//increment to keep stop input value from going to my lists
			count2++;

		} else {

			count2 = 0;

		}



		//if input value is not empty && count2 is zero
		if (inputVal !== '' && count2 == 0) {

			//push input value into array
			array.push(inputVal);
		
			//create new div element
			const div = $('<div>').addClass('list-container');

			//create input(checkbox) element
			const checkbox = $('<input type="checkbox">').attr('id', 'checkbox' + count);

			//create label for input;
			const label = $('<label>').attr('for', 'checkbox' + count);

			//create spans
			const parentSpan = $('<span class="checkbox-icon">');

			const childSpan1 = $('<span class="vertical">');

			const childSpan2 = $('<span class="diagonal">');

			//push children spans into label
			parentSpan.append(childSpan1, childSpan2);

			//create p element and add textContent
			const p = $('<p class="list">').text(inputVal);

			//create a element and add textContent
			const a = $('<a class="remove badge badge-danger">').attr('href', '#').text('X');

			//push parentSpan into label
			label.append(parentSpan);

			//push checkbox,label , p & a into div
			div.append(checkbox, label, p, a);

			noteBox.append(div);

			//increment to keep track of label for
			count++;

		}


	});

	//remove list
	$('.note__box-items').on('click', 'a', function (e) {

		e.preventDefault();

		//delete list if remove(X) is clicked
		$(this).parent().remove();

		//decrement count to make labelfor last index consistent
		count--;
		
		//get label for last index
		var labelForLastNum =
				
			Number($(this).prev().prev().attr('for').substring(8));

		//remove from array when X is clicked
		array.splice(labelForLastNum, 1);




	});


	$('.note__box-items').on('click', 'input', function (e) {

		if (e.target.checked) {

			//apply style(add class)
			$(this).next().next().addClass('checked');


		} else {

			//remove style(remove class)
			$(this).next().next().removeClass('checked');

		}


	});


	//change background
	$('.bg-colors').on('click', 'div', function () {

		if ($(this).hasClass('white')) {

			$(this).parent().prev().css('background-color', 'white');

		} else if ($(this).hasClass('lightblue')) {

			$(this).parent().prev().css('background-color', '#c1e1ec');

		} else if ($(this).hasClass('lightgreen')) {

			$(this).parent().prev().css('background-color', '#c2ffc2');

		} else {

			$(this).parent().prev().css('background-color', '#ffd7ff');

		}

	});

});