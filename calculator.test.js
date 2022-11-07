const {sum, subtract, multiply, divide} = require('./calculator.js');

test("Add", ()=>{
    expect(sum(12,4)).toBe(16)
})

test("Subtract", ()=>{
    expect(subtract(12,4)).toBe(8)
})

test("Multiply", ()=>{
    expect(multiply(2,4)).toBe(8)
})

test("Divide", ()=>{
    expect(divide(12,2)).toBe(6)
})