const fibo =(last=1000) => ({
    [Symbol.iterator](){
        num1 = 0, num2 = 1;
        return{
            next(){
                
                [num1, num2] = [num2, num1 + num2];
                return {
                    value: num1, num2,
                    done: num2 >= last
                }
                
            }
        }
    }
})

for( const i of fibo()){
    console.log(i);
}
