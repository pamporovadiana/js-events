// Get elements
const addSubjectBtn = $('button.add-subject');
const removeEmpthyRowsBtn = $('button.remove-empthy-rows');
const printDataBtn = $('button.print-data');
const tbody = $('tbody');

// Add Subject
addSubjectBtn.on('click', () => {
    // create row
    const row = $('<div class="row pb-3 subject-row">');
    const col = $('<div class="col">');
    const label = $('<label for="input" class="font-weight-bold pl-5 subject-label">Subject</label>');
    const inputGroup = $('<div class="input-group mb-3"><div class="font-weight-bold px-3 number"></div></div>');
    const input = $('<input id="input" type="text" class="form-control rounded subject-input">');
    const deleteButton = $('<button type="button" class="btn btn-danger rounded ml-5 delete-row-btn">X</button>');

    // add event listener for input change
    input.on('input', () => label.text(`Subject: ${input.val()}`));
    // Add event listener for row deleting
    deleteButton.on('click', (e) => row.hide('slow', () => row.remove()));

    // apend elements to row
    inputGroup.append(input);
    inputGroup.append(deleteButton);
    col.append(label);
    col.append(inputGroup);
    row.append(col);

    // apend elements to main input field
    row.appendTo('div.subjects-field')
});

// Remove Empthy Rows
removeEmpthyRowsBtn.on('click', () => {
    const inputs = $('input.subject-input');
    inputs.each((i, input) => {
        if (!$(input).val()) {
            const row = $(input).closest('.subject-row');
            row.hide('slow', () => row.remove());
        }
    });
});

// Print Data
printDataBtn.on('click', () => {
    const rows = $('div.subject-row');
    const inputs = $('input.subject-input');
    const labels = $('label');

    rows.each((i, row) => {
        const value = inputs[i].value;
        if (value) {
            $(`<tr><th></th><td>${value}</td></tr>`).appendTo(tbody);
        }

        // empthy and remove rows
        $(inputs[i]).val('');
        $(labels[i]).text('Subject');

        // removeEmpthyRowsBtn.click();
    });
});
