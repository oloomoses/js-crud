function onFormSubmit(){
  let formData = readFormData();
  insertNewRecord(formData);
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
  cell5.innerHTML = `<a>Edit</a>
                      <a>Delete</a>`;

}