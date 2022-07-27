const fiboGen = (first =0, next = 1, last = 100) => ({
    *[Symbol.iterator]()  { 
        for(let i = first; i <last; i ++){
            var temp = first;
            first = next;
            next+=temp;
            if(next < last) yield next;
        }
    }
})

for(const number of fiboGen()){
    console.log(number);
}
        