$(document).ready(function () {

	var count = 0;
	const noteBox = $('.note__box-items');

	//get input and add to list
	$('button[type="submit"]').click(function () {

		//get input value
		const inputVal = $('input[type="text"]').val();

		//check if input value is not empty
		if (inputVal !== '') {

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

			count++;

		}
	});

	//remove list
	$('.note__box-items').on('click', 'a', function (e) {

		e.preventDefault();

		//delete list if remove(X) is clicked
		$(this).parent().remove();

	});

	
	$('.note__box-items').on('click', 'input', function (e) {

		if (e.target.checked) {
			
			//apply style(add class)
			$(this).next().next().addClass('checked');

		} else {
			
			//remove style(remove class)
			$(this).next().next().removeClass('checked');

		}

	})

})