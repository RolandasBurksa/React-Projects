import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

//   return axios.get(REST_API_BASE_URL);  <- taip turi buti rasoma, bet trumpiname i tai kas tinka 5 eiluteje

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);
