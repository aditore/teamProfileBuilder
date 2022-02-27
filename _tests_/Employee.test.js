const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    it('Can create an instance of an employee', () => {
        const employee = new Employee();

        expect(typeof(employee)).toBe('object');
    });

    it('Will set name within the constructor argument', () => {
        const name = 'Anthony';
        const employee = new Employee(name);

        expect(employee.name).toBe(name);
    });

    it('Will set the ID within the constructor argument', () => {
        const idValue = 6874;
        const employee = new Employee('Anthony', idValue);

        expect(employee.id).toBe(idValue);
    });

    it('Will set the email within the constructor argument', () => {
        const testEmail = 'test@test.test';
        const employee = new Employee('Anthony', 323, testEmail);

        expect(employee.email).toBe(testEmail);
    });
})