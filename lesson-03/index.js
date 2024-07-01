// Cú pháp khởi tạo biến
// [const, let, var] <tên_biến> = [giá_trị_khởi_tạo];
const PI = 3.14;
// PI = 5;
console.log("PI = " + PI);
let a = 100;
a = 10;
console.log("a = " + a);

// Kiểu boolean
const isLoading = true;
console.log("isLoading = " + isLoading);
// Chú ý: 0, "", null, undefined, NaN bị coi là false
console.log("Boolean(0) = " + Boolean(0));
console.log("Boolean('') = " + Boolean(""));
console.log("Boolean(null) = " + Boolean(null));
console.log("Boolean(undefined) = " + Boolean(undefined));
console.log("Boolean(NaN) = " + Boolean(NaN));

// Kiểu number
const c = 9;
const d = 8.5;
console.log("c = " + c);
console.log("d = " + d);
// NaN: Not a Number
const nan = 100 / "apple";
console.log("nan = " + nan);
// Sử dụng isNaN để kiểm tra NaN
console.log("nan == NaN = " + (nan == NaN));
console.log("nan === NaN = " + (nan === NaN));
console.log("isNaN(nan) = " + isNaN(nan));
// Infinity
const max = 1 / 0;
console.log("max = " + max);

// Kiểu string
const phone = "S24 Ultra";
const s1 = "Tôi mới mua " + phone + " vào ngày hôm qua";
console.log("s1 = " + s1);
// String template
const s2 = `Tôi mới mua ${phone} vào ngày hôm qua`;
console.log("s2 = " + s2);

// undefined
let b;
console.log("b = " + b);

// Kiểu array
const fruits = ["Cam", "Táo", "Đào", "Ổi"];
console.log("fruits = " + fruits);
console.log("fruits.length = " + fruits.length);
// Thêm phần tử vào cuối
fruits.push("Thanh Long");
console.log("fruits = " + fruits);
// Xóa phần tử ở cuối
fruits.pop();
console.log("fruits = " + fruits);
// Thêm phần tử vào đầu
fruits.unshift("Lê");
console.log("fruits = " + fruits);
// Xóa phần tử ở đầu
fruits.shift();
console.log("fruits = " + fruits);

// Kiểu object
const dog = {
	name: "Milu",
	age: 2,
	showInfo: function () {
		console.log(`dog[name=${this.name},age=${this.age}]`);
	}
};
console.log(dog);
dog.showInfo();
// Truy cập thuộc tính: <tên_object>.<tên_thuộc_tính>
console.log("dog.name = " + dog.name);
// Truy cập thuộc tính: <tên_object>["tên_thuộc_tính"]
const property = "name";
console.log("dog[property] = " + dog[property]);

// For index
for (let i = 0; i < fruits.length; i++) {
	const fruit = fruits[i];
	console.log("🍏 fruit = " + fruit);
}
// For of
for (const fruit of fruits) {
	console.log("🍒 fruit = " + fruit);
}
// For in
for (const key in dog) {
	console.log(`key = ${key}, value = ${dog[key]}`);
}

// typeof
console.log("typeof isLoading = " + typeof isLoading);
console.log("typeof PI = " + typeof PI);
console.log("typeof phone = " + typeof phone);
console.log("typeof fruits = " + typeof fruits);
console.log("typeof dog = " + typeof dog);
// Chú ý:
console.log("typeof Infinity = " + typeof Infinity);
console.log("typeof NaN = " + typeof NaN);
console.log("typeof null = " + typeof null);
console.log("typeof undefined = " + typeof undefined);

// == vs ===
console.log("null == undefined = " + (null == undefined));
console.log("null === undefined = " + (null === undefined));
console.log('"" == false = ' + ("" == false));
console.log('"" === false = ' + ("" === false));

// Normal function
function sum(a, b) {
	return a + b;
}
console.log("sum(1, 10) = " + sum(1, 10));
// Anonymous function
const hello = function (name) {
	console.log("Chào bạn: " + name);
};
hello("Khoa");
// Arrow function
const square = x => x * x;
console.log("square(5) = " + square(5));
// Ứng dụng
fruits.map(fruit => fruit.length).forEach(length => console.log("🌲 fruit length = " + length));

// Try catch finally
try {
	throw "Bạn chưa đủ 18 tuổi";
} catch (e) {
	console.log("exception = " + e);
} finally {
	console.log("finally luôn được gọi");
}

// Scope: Phạm vi sử dụng của biến
// Local scope, Global scope
let k = 0;
{
	let k = 10;
	console.log("k = " + k);
}
console.log("k = " + k);
var m = 0;
{
	var m = 10;
	console.log("m = " + m);
}
console.log("m = " + m);
// Loop scope
for (let i = 0; i < 2; i++) {}
console.log("i = " + i);
for (var i = 0; i < 2; i++) {}
console.log("i = " + i);
