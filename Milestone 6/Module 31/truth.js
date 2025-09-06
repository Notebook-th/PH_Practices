let data;
data = 0;
data = ''; // empty string,  false
data = ' '; // has a whitespace
data = '0';
data = false;
data = null;
data = [];
data = {};
data = true;
data = [];

console.log('value of data', data)

if(data){
    console.log('value of data is truthy')
}
else{
    console.log('value of data is falsy')
}

// if i need to capture the falsy value to go inside if block
//use logical not " ! "
if(!data){
    console.log('value of data is falsy found using !')
}
else{
     console.log('value of data is truthy finding using !')
}

//capture all positive value
//double not
// capture any value to boolean
if(!!data === true){
    console.log('only true inside the double not')
}