function myName(name: string) {
    console.log(name);
}

myName('jack');

type Centimeter = number;
type Kilogram = number;
type Student = {
    name?: string;
    height: Centimeter;
    weight: Kilogram;
}

let studnet: Student = {
    name: 'oh',
    height: 178,
    weight: 72
}

let studnet2: {
    name: string,
    grade: number
};

studnet2 = {
    name: '학생',
    grade : 3
}