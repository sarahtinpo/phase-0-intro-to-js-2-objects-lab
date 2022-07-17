// Write your solution in this file!
const employee = {
  name: "Sarah",
  streetAddress: "1 McGhee Avenue",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
	const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
	delete obj[key];
	return obj;
}
