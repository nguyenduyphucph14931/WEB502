export{}



// const a: number = 20;
// const b: number = 20;
// const name: string = "Nguyen Duy Phuc";
// const age: number=20;
// const status: boolean = true;
// const info: {id : number , name : string}={id: 1, name :"a"}
// const stringArr: string[] = ["a", "b", "c"];
// const numberArr: number[] = [1,2,3,4,5];
// const objectArr: object[] = [{id: 1}, {id: 2}]


// function sum(numA : number, numB: number): number{
//     return numA + numB;
//     // Return numA + numB;
// }
// sum(a,b);

function name<T,U,I> (a: T, b: U, c: I): [T,U,I]{
    return[a,b,c];
}

name(1,2,"Nam");
name("Hải", 20,30);



const product=[
    {id:1,name:"Phúc"},
    {id:2,name:"Nam"},
    {id:3,name:"Hải"},
    {id:4,name:"Hòa"},
]

