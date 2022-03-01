const Intern = require('../lib/Intern');

test('Can set the school using the constructor argument', () => {
    const schoolTest = 'UW';
    const intern = new Intern('Anthony', 6784, 'test@test.test', schoolTest);

    expect(intern.school).toBe(schoolTest);
});

test('Can get school from getSchool()', () => {
    const schoolTest = 'UW';
    const intern = new Intern('Anthony', 6784, 'test@test.test', schoolTest);

    expect(intern.getSchool()).toBe(schoolTest);
});

test('getRole() will return "Intern"', () => {
    const role = 'Intern';
    const intern = new Intern('Anthony', 6784, 'test@test.test', 'UW');

    expect(intern.getRole()).toBe(role);
});