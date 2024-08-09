// selecting user input

const nameInput=(document.getElementById("name_input"));
const ageInput=(document.getElementById("age_input"));
const emailInput=(document.getElementById("email_input"));
const genderInput=(document.getElementById("gender_input"));
const courseInput=(document.getElementById("course_input"));
const outputTable=(document.getElementById("output_table"));


// creating function for output table

function savename(){
  
//   creating and appanding a table row
  var tr =(document.createElement("tr"));
  outputTable.appendChild(tr);
  
  // creating table column and appanding on table row
  
  var tdOne=(document.createElement("td"));
  tdOne.innerHTML=(nameInput.value);
  tr.appendChild(tdOne);
  
  var tdTwo=(document.createElement("td"));
  tdTwo.innerHTML=(ageInput.value);
  tr.appendChild(tdTwo);
  
  var tdThree=(document.createElement("td"));
  tdThree.innerHTML=(genderInput.value);
  tr.appendChild(tdThree);
  
  var tdFoure=(document.createElement("td"));
  tdFoure.innerHTML=(courseInput.value);
  tr.appendChild(tdFoure);
  
  var tdFive=(document.createElement("td"));
  tdFive.innerHTML=(emailInput.value);
  tr.append(tdFive);
  
  // creating remove button and appanding on table row
  
  var tdsix=(document.createElement("td"));
  tdsix.innerHTML=("<button onclick='deleteinput(event);'>REMOVE</button>");
  tr.append(tdsix);
}

// onclick function

function deleteinput(event){
  event.target.parentElement.parentElement.remove();
}
