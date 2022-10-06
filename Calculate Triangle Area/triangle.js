function area(base, height){
    let triangle_area = 0.5 * base * height;
    return `Area of Triangle with base : ${base} and height : ${height} is ${triangle_area}`
}

let base = 5
let height = 10
console.log(area(base, height))