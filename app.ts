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

function sayHello (firstName: string) {
    console.log('Hello ' + firstName);
}
let firstName: string = 'Sejin';
sayHello(firstName);
let age: number = 34;
// sayHello(age);

const array: string[] = [];
array.push('abc');
// array.push(1);
const mixedArr = ['foo', 1];
const mixedArr2: (string|number)[] = [1, 'fpp'];
const mixedArr3: [string, number] = ['foo', 1];

const user: { name: string; age: number } = {
    name: 'Sejin',
    age: 34
}

function sayHello2(name: string): string {
    return `Hello ${name}`;
}
sayHello2('Sjein');
function sayHello3(name: string, greeting: string = 'Hello'): string {
    return `${greeting} ${name}`;
}

function printName(firstName: string, formatter: (name: string) => string) {
    console.log(formatter(firstName));
}
function formatName(name: string): string {
    return `${name} 씨`
}
printName('홍길동', formatName);

let sayHello4 = (name: string): string => `Hello ${name}`;

function getBirdsInfo(name: string): string[] {
    return name.split(',');
}
function singBird(birdInfo: (x: string) => string[]): string {
    return birdInfo('오리, 비둘기')[0] + '꽥꽥';
}

// 타입 어서션
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

// 앨리어스
type point = {
    x: number;
    y: number;
}
function printPoint(point: point) {
    console.log(`x 좌표는 ${point.x}`);
}
printPoint({x: 100, y: 100});

type Label = {
    [key: string]: string
}
const labels: Label = {
    topTitle: '탑 타이틀',
    topSubTitle: '탑 서브타이틀'
}

// 인터페이스
interface Point {
    x: number;
    y: number;
}
function printPoint2(point: Point) {
    console.log(`x좌표 ${point.x}`);
}

interface Point {
    z: number;
}
printPoint({x:100, y:200});
printPoint({x: 100, y: 100, z: 200});

// 클래스
class Point2 {
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    moveX(n: number): void {
        this.x += n;
    }
    moveY(n:  number): void {
        this.y += n;
    }
}

// enum
enum Direction {
    Up = 'UP',
    Down = 'DOWN'
}

const value = 'DOWN';
const enumVal = value as Direction;

// 제네릭
class Queue<T> {
    private array: T[] = [];
    push(item: T) {
        this.array.push(item);
    }
    pop(): T | undefined {
        return this.array.shift();
    }
}
const queue = new Queue<number>();
queue.push(1);
queue.push(2);

// Union, Intersection
function printId(id: number | string) {
    console.log(id);
}

// 리터럴 타입
let postStatus: 'draft' | 'published' | 'deleted';
postStatus = 'draft';

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1: -1;
}

// never 
function error(message): never {
    throw new Error(message);
}

// 옵셔널 체이닝
interface User {
    name: string
    social?: {
        facebook: boolean
        twitter: boolean
    }
}
let user2: User;
user2 = { name: 'Sejin' };
console.log(user2.social?.facebook)

// 논-널 어서션
function processUser(user?: User) {
    let s = user!.name;
}

// 타입 가드
function addOne(value: number | string) {
    if (typeof value === 'string') {
        return Number(value) + 1;
    }
    return value + 1;
}

type User3 = {
    info?: {
        name: string;
        age: number;
    }
}
let response = {};
const user3 = (response as any) as User3;
if (user3.info) {
    console.log(user3.info.name);
}