interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClub?: string[]
}
const messy: Player = {
    name: 'L Messi',
    club: 'Abahoni',
    salary: 12000,
    wife: 'Antolina'
}

const hannan: Player = {
    name: 'A. Hannan',
    club: 'Kolabagan',
    salary: 2000
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}
interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}
const zuku: Developer = {
    name: 'Zukerberg',
    salary: 11000,
    designation: 'fabebooker',
    age: 31,
    language: 'js',
    codeEditor: 'VS code',
    typingSpeed: 65
}