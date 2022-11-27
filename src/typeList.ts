/** @format */

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "A";

// Array
let arr1: Array<number> = [0, 1];
let arr2: number[] = [0, 1];

// tuple
let tuple: [number, string] = [0, "A"];

// any なるべく使うな
let any1: any = false;

// void (何も返り値が無いことを表す)
const funcA = (): void => {
	const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let object: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };

export {};
