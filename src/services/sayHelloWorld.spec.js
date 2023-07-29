const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Thomas', () => {
        const response = sayHelloWorld.sayHello('Thomas');

        expect(response).toBe('Hello Thomas!');
    })
});