const alphabetA = [
    ['a','c','b','e','d'] ,
    ['g','e','f']
]

const alphabetB = [  
    ['g','h','i','j'],
    ['a','c','b','e','d'] ,
    ['g','e','f']
]

function sorting() {
    let emp= [];
  
    let dataA = alphabetA[].sort(function(a,b){
        if (a<b) return -1;
        else if (a>b) return 1;
        return 0;
    })
    console.log(dataA);
}