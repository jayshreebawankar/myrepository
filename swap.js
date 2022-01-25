const a = 15
const b  = 22

console.log('value of a :'+a)
console.log('value of b :'+b)

function swap(x,y){ 
       temp = x,
        x = y,
        y = temp

        console.log('After swap the value of a is :'+x);
        console.log('After swap the vlaue of b is :'+y);
}

swap(a,b);