var selectedRow = null;

function onFormSubmit(){
  let formData = readFormData();
  if(selectedRow == null){
    insertNewRecord(formData);
  }else{
    updateRecord(formData)
  }
  
  formReset();
}

function readFormData(){
  let formData = {}
  formData['fullName'] = document.getElementById('fullName').value;
  formData['empCode'] = document.querySelector('#empCode').value;
  formData['salary'] = document.querySelector('#salary').value;
  formData['city'] = document.querySelector('#city').value;

  return formData;
}

function insertNewRecord(data){
  let table = document.getElementById('employee-list').getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.length);

  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.empCode;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salary;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a onClick = "onEdit(this)">Edit</a>
                    <a onClick = "onDelete(this)">Delete</a>`;

}

function formReset(){
  document.getElementById('fullName').value = '';
  document.getElementById('empCode').value = '';
  document.getElementById('salary').value = '';
  document.getElementById('city').value = '';
}

function onEdit(td){
  selectedRow = td.parentElement.parentElement;
  document.querySelector('#fullName').value = selectedRow.cells[0].innerHTML;
  document.querySelector('#empCode').value = selectedRow.cells[1].innerHTML;
  document.querySelector('#salary').value = selectedRow.cells[2].innerHTML;
  document.querySelector('#city').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.empCode;
  selectedRow.cells[2].innerHTML = formData.salary;
  selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td){
  if(confirm('Confirm Delete')){
    row = td.parentElement.parentElement;
    document.getElementById('employee-list').deleteRow(row.rowIndex);
    formReset()
  }
}