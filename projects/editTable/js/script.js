let table = $('#table');
let button = $('#export-btn');
let exports = $('#export');

$('.table-add').click(function () {
    let clone = table.find('tr.hide').clone(true).removeClass('hide');
    table.find('table').append(clone);
});

$('.table-remove').click(function () {
    $(this).parents('tr').detach();
});

$('.table-up').click(function () {
    let row = $(this).parents('tr');
    if (row.index() === 1) return;
    row.prev().before(row.get(0));
});

$('.table-down').click(function () {
    let row = $(this).parents('tr');
    row.next().after(row.get(0));
});
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;
button.click(function () {
    let rows = table.find('tr:not(:hidden)');
    let headers = [];
    let data = [];
    $(rows.shift()).find('th:not(:empty)').each(function () {
        headers.push($(this).text().toLowerCase());
    });

    rows.each(function () {
        let td = $(this).find('td');
        let h = {};

        headers.forEach(function (header, i) {
            h[header] = td.eq(i).text();
        });

        data.push(h);

    });

    exports.text(JSON.stringify(data));
});