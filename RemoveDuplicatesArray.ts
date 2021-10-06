// This function will remove duplicates data in an array using their key 
export function removeDuplicatesArrayObjects<T>(
  array: Array<T>,
  key: (key: T) => string
): Array<T> {
  return [...new Map(array.map((item) => [key(item), item])).values()];
}

// How To
type Category = {
  name: string;
  isActive: boolean;
}

const categories: Category[] = [
 {
   name: "Developer",
   isActive: true,
 },
 {
   name: "Designer",
   isActive: true,
 },
 {
   name: "Programmer",
   isActive: true,
 },
 {
   name: "Developer",
   isActive: true,
 },
]

const result = removeDuplicatesArrayObjects<Category>(categories, (val) => val.name);
console.log(result);
// Result: [{name:"Developer",isActive: true,},{name:"Designer",isActive:false,},{name:"Programmer",isActive:true,}]
