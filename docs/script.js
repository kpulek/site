function readCSV() {
	let files = document.querySelector('#file').files;
	
	if(files.length > 0) {
		let file = files[0];
		let reader = new FileReader();
		reader.readAsText(file);
		
		reader.onload = function(event) {
			let csv_data = event.target.result;
			let row_data = csv_data.split('\n');
			let el = document.getElemtnById('tblcsvdata').getElementsByTagName('tbody')[0];
			el.innerHTML = '';
		
			for(let row of row_data) {
				let new_row = el.insertRow();
				let col_data = row.split(',');
				
				for(let col of col_data) {
					let cell = new_row.insertCell();
					cell.innertHTML = row[col]
				}
			}
		}
	} else { alert('please choose a file') }
}