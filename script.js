let arr = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
  ];
  
  // 1. Print developers using the map function
  function PrintDeveloperbyMap() {
    arr.map((employee) => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  // 2. Print developers using the forEach function
  function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  // 3. Add a new employee to the array
  function addData() {
    const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  // 4. Remove the employee with the profession of admin
  function removeAdmin() {
    arr = arr.filter((employee) => employee.profession !== "admin");
    console.log(arr);
  }
  
  // 5. Concatenate another array of employees and log the new array
  function ConcatinateArray() {
    const newArr = [
      { id: 5, name: "Alice", age: "22", profession: "designer" },
      { id: 6, name: "Bob", age: "23", profession: "tester" },
      { id: 7, name: "Charlie", age: "21", profession: "developer" }
    ];
  
    const concatenatedArray = arr.concat(newArr);
    console.log(concatenatedArray);
  }
  