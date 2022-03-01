const Engineer = require('../lib/Engineer');

test('Can set the github username using the constructor argument', () => {
    const githubTest = 'aditore';
    const engineer = new Engineer('Anthony', 6784, 'test@test.test', githubTest);

    expect(engineer.github).toBe(githubTest);
});

test('Can get github from getGithub()', () => {
    const githubTest = 'aditore';
    const engineer = new Engineer('Anthony', 6784, 'test@test.test', githubTest);

    expect(engineer.getGithub()).toBe(githubTest);
});

test('getRole() will return "Intern"', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Anthony', 6784, 'test@test.test', 'aditore');

    expect(engineer.getRole()).toBe(role);
});