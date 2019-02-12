import APIfunctions from "./api"
APIfunctions.getEmployees()
  .then(parsedEmployees => {
    console.log(parsedEmployees)
    parsedEmployees.forEach(employee => {
      document.getElementById("employeeList").innerHTML += `
        <article class="employee">
          <header class="employee__name">
          <h1>${employee.firstName} ${employee.lastName}</h1>
          </header>
          <section class="employee__department">
          Works in the ${employee.department.departmentName} department.
          </section>
          <section class="employee__computer">
          Uses a ${employee.computer.make} ${employee.computer.model}
          </section>
        </article>
    `
    });

  })

