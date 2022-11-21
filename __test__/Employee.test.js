// // using Employee constructor 
// const Employee = require('../lib/Employee');

// // creates employee object 
// test('creates an employee object', () => {
//     const employee = new Employee('Name', 12, 'name@test.com');

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));
// });

// // gets id from getId() 
// test('gets employee name', () => {
//     const employee = new Employee('Name', 12, 'name@test.com');

//     expect(employee.getName()).toEqual(expect.any(String));
// });

// // gets id from getId() 
// test('gets employee ID', () => {
//     const employee = new Employee('Name', 12, 'name@test.com');

//     expect(employee.getId()).toEqual(expect.any(Number));
// });

// // gets emails from getEmail()
// test('gets employee email', () => {
//     const employee = new Employee('Name', 12, 'name@test.com');

//     expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
// });

// // gets role from getRole()
// test('gets role of employee', () => {
//     const employee = new Employee('Name', 12, 'name@test.com');

//     expect(employee.getRole()).toEqual("Employee");
// }); 


const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Alice";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "test@test.com";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Alice";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Foo", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const e = new Employee("Foo", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Alice", 1, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});