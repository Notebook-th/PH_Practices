function pakhi(callMe, patro, patri){

    // console.log('Value of patro', patro)
    // // console.log('Value of patri', patri)
    // console.log('call me back', callMe)
    if(patri){
        // console.log(callMe)
        callMe(patro)
    }
    else{
        console.log('tor kopale biya nai')
    }
}

function call(person){
    console.log('calling' , person)
}
// call('ýlajs')
pakhi(call, 'jodu', 'modu')