

function validUname(input){
    return (input.length==8 && /[a-z]/i.exec(input) ? true : false);
}
// check username
validUname('username');

function validPassword(input){
    return (input.length>=8 && /[^+/W+w+$]/.exec(input) ? true : false);
}
//check strings
validPassword('s~m#p4ssw0rd');
