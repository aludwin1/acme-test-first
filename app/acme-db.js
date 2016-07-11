var AcmeDb = function() {
	this.employees = [];
};

var Employee = function(name, id) {
	this.name = name;
	this.id = id;
};

AcmeDb.prototype.getEmployees = function(){
	this.employees.sort(function(a, b) {
		var nameA = a.name.toUpperCase(); // ignore upper and lowercase
		var nameB = b.name.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
			return -1;
		} else if (nameA > nameB) {
			return 1;
		} else {
			return 0;
		}
	});
	
	return this.employees;
};

AcmeDb.prototype.addEmployee = function(name, id) {
	var newEmployee = new Employee(name, id);
	this.employees.push(newEmployee);
};

AcmeDb.prototype.getEmployee = function(id) {
	for(i = 0; i < this.employees.length; i++) {
		if(this.employees[i].id === id) {
			return this.employees[i];
		}
	}
};

AcmeDb.prototype.deleteEmployee = function(name){
	for(i = 0; i < this.employees.length; i++) {
		if(this.employees[i] === name) {
			this.employees.splice(i, 1);
		}
	}
	return this.employees;
};

AcmeDb.prototype.groupedEmployees = function() {
	for(i = 0; i < this.employees.length; i++) {
		if(!this.hasOwnProperty(this.employees[i].name[0])) {
			this[this.employees[i].name[0]] = [];
			this[this.employees[i].name[0]].push(this.employees[i]);
		} else if (this[this.employees[i].name[0]].indexOf(this.employees[i]) === -1){
			this[this.employees[i].name[0]].push(this.employees[i]);
		}
	}
	return this;
};
