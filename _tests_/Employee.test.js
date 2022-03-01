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

    describe('getName', () => {
        it('Can get name of Employee via getName()', () => {
            const name = 'Anthony';
            const employee = new Employee(name);

            expect(employee.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('Can get id of Employee via getId()', () => {
            const idValue = 6874;
            const employee = new Employee('Anthony', idValue);

            expect(employee.getId()).toBe(idValue);
        });
    });

    describe('getEmail', () => {
        it('Can get email of Employee via getEmail()', () => {
            const email = 'test@test.test';
            const employee = new Employee('Anthony', 6874, email);

            expect(employee.getEmail()).toBe(email);
        });
    });

    describe('getRole', () => {
        it('Can get the role of the Employee via getRole() -should return "Employee"', () => {
            const role = 'Employee';
            const employee = new Employee('Anthony', 6874, 'tesst@test.test');

            expect(employee.getRole()).toBe(role);
        });
    });
});