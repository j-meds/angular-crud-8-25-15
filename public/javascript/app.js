angular.module("app",[])
.controller("MyController", [function(){
	var vm = this;
	vm.people = ["Jimmy"];
	vm.person = ""
	vm.editPerson = {};
	vm.create = function(){
		vm.person;
		vm.people.push(vm.person);
		console.log(vm.people);
	}
	vm.deletes = function(idx){
		vm.people.splice(idx,1);
	}
	vm.startEdit = function(idx){
		vm.editing = true;
		vm.editPerson.persons = vm.people[idx];
		vm.editPerson.idx = idx;
	}
	vm.finishEdit = function(){
		vm.people[vm.editPerson.idx] = vm.editPerson.persons
		vm.editing = false;
	}
}])