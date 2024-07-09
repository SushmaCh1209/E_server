const add=require('./index');
test('add 1+2 to 3',()=>{
    expect (add(1,2)).toBe(3)
})
test('add -1+-1 to -2',()=>{
    expect (add(-1,-1)).toBe(-2)
})