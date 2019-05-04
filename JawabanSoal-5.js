function genString(total){
    let str = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    for(let i=0;i<total;i++){
        
        for(let i=0; i<38;i++){
            str += chars.charAt(Math.floor(Math.random()* chars.length));
            } 
         str = str +'\n';
    }
   return str;
}
// generate 
console.log(genString(7));