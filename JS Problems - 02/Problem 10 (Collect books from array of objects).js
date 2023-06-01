/* 10. Collect books from array of objects and return collection of books as an array */

let friends = 
[
    {
      name: 'Anna',
      books: ['Bible', 'Geeta', 'Harry Potter'],
      age: 20
    },
    {
      name: 'Bob',
      books: ['War and Peace', 'Geeta', 'Quran'],
      age: 22
    },
    {
      name: 'Alice',
      books: ['The Monk', 'Pride and Prejudice', 'Good Morning'],
      age: 21
    }
 ]


let arr = []
for(let i in friends){
   arr.push(...friends[i].books)
}
arr.splice(0,arr.length,...new Set(arr))
console.log(arr)
