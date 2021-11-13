let money: number = 5000;
let honey: string = 'lskfjlasf';
let koney: boolean = true;


// function add(first: number, second: number): number {
//     const result = first + second;
//     return result;
// }

// const output: number = add(3, 4);

//multi purpose
function add(first: number | string, second: number | string): number | string {
    const result: string | number = first + second;
    return result;
}
const output: string | number = add(3, 4);

function doubleConsole(number: number): void {
    console.log(2 * number);
}