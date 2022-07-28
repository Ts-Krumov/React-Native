const fiboGen = (number = 1000) => ({
    *[Symbol.iterator]()  { 
        let first = 0, next =1;
        for(let i = 0; i < number; i ++){
            let temp = first;
            first = next;
            next+=temp;
            if(next < number) yield next;
        }
    }
})

for(const n of fiboGen()){
    console.log(n);
}