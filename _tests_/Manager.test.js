const Manager = require('../lib/Manager');

test('Can set the office number using the constructor argument', () => {
    const officeNumberTest = 962;
    const manager = new Manager('Anthony', 6784, 'test@test.test', officeNumberTest);

    expect(manager.officeNumber).toBe(officeNumberTest);
});

test('Can get office number from getOfficeNumber()', () => {
    const officeNumberTest = 962;
    const manager = new Manager('Anthony', 6784, 'test@test.test', officeNumberTest);

    expect(manager.getOfficeNumber()).toBe(officeNumberTest);
});

test('getRole() will return "Manager"', () => {
    const role = 'Manager';
    const manager = new Manager('Anthony', 6784, 'test@test.test', 962);

    expect(manager.getRole()).toBe(role);
});
