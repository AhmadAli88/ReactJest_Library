import sum from "./sum";

test("testing for sum", ()=>{
   expect(sum(10,10)).toBe(20)
})

test("testing for sum", ()=>{
    let a=20;
    let b=30;
    let output =50;
    expect(sum(a,b)).toBe(output)
})