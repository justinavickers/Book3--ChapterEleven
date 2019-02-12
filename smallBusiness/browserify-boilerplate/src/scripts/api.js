const APIfunctions = {
  getEmployees(){
   return fetch("http://localhost:3000/employees?_expand=department&_expand=computer")
    .then(employees => employees.json())
  },

}
export default APIfunctions