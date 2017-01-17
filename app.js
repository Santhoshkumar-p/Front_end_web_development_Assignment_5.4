var employee_1 = { 
	name: "Sathya", 
	age: 25,
	salary: 40000, 
	address: { 
		city: "TamilNadu", 
		state: "Chennai", 
		pin: 600028 },
	}
var employee_2 = { 
	name: "Bhuvaneshwari", 
	age: 29,
	salary: 63000, 
	address: { 
		city: "Maharastra", 
		state: "Dharavi", 
		pin: 723000 },
	}

var employee_3 = { 
	name: "Arjit", 
	age: 36,
	salary: 150000, 
	address: { 
		city: "Villupuram", 
		state: "TamilNadu", 
		pin: 606206 },
	}

var employee_4 = { 
	name: "Vijay", 
	age: 26,
	salary: 44920, 
	address: { 
		city: "Madurai", 
		state: "TamilNadu", 
		pin: 621006 },
	}

var employee_5 = { 
	name: "ArunKumar", 
	age: 37,
	salary: 79000, 
	address: { 
		city: "Karur", 
		state: "TamilNadu", 
		pin: 684048 },
	}

var employees = [employee_1, employee_2, employee_3, employee_4, employee_5];

console.log("Name : "+ employees[2]['name'] + ", Age : "+ employees[2]['age'] +", Salary : " + employees[2]['salary'] );
console.log("Address:: " );
console.log("City : " + employees[2].address.city);
console.log("State : " + employees[2].address.state);
console.log("Pincode : " + employees[2].address.pin);