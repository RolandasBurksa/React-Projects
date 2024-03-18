// eslint-disable-next-line no-unused-vars
import React from 'react';

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: 'Vardenis',
      lastName: 'Pavardenis',
      email: 'kazkas@gmail.com',
    },
    {
      id: 2,
      firstName: 'Petras',
      lastName: 'Pavardenis',
      email: 'petras@gmail.com',
    },
    {
      id: 3,
      firstName: 'Saulius',
      lastName: 'Pavardenis',
      email: 'saulius@gmail.com',
    },
  ];

  return (
    <div className="container">
      <h2>List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
