const inputLoadExcelFile = document.getElementById('loadExcel');
const parentTable = document.querySelector('.tableWrapper');
const fileName = document.querySelector('#loadExcel');
const newEl = document.createElement('div');

inputLoadExcelFile.addEventListener('change', addToHTML, false);


function addToHTML(e) {
    const reader = new FileReader();
    //console.log(reader);
    reader.readAsArrayBuffer(e.target.files[0]);


    reader.addEventListener("loadend", function () {
        const data = new Uint8Array(reader.result);
        //console.log(data);
        const workbook = XLSX.read(data, { type: 'array' });
        //console.log(workbook);
        process_wb(workbook);
        //console.log(fileName.value);
    });
}

function process_wb(wb) {                            
    const parentEl = document.querySelector('.tableBlock');
    parentTable.innerHTML = XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]], { editable: true }).replace("<table", '<table id="table" border="1"');
    const fileCaption = (fileName.value + '').substring(12);
    //console.log(fileCaption);
    newEl.innerHTML = fileCaption;
    parentEl.appendChild(newEl);
}

const downloadButton = document.querySelector('.controls__upload');
//console.log(downloadButton);
downloadButton.addEventListener("click", downloadExcel);



function downloadExcel(params) {
    const workb = XLSX.utils.table_to_book(document.querySelector('table'), { sheet: "Sheet JS" });
    const wbout = XLSX.write(workb, { booktype: "xlsx", bookSST: true, type: "binary" });
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'test.xlsx');
}


function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
/* $("#button-a").click(function () {
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'test.xlsx');
}); */