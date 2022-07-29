var nameNode = document.getElementById('userna1')
var errorNode1 = document.getElementById('error1')
var passNode = document.getElementById('userpass1')
var errorNode2 = document.getElementById('error2')

function validate1(){
    errorNode1.innerHTML = '';
    console.log(errorNode1);
    let fame = nameNode.value;
    console.log(fame)
    
    if(fame!=='zaidmak'){
        errorNode1.innerHTML='<small>THe username enterd is incorrect</small>'
        nameNode.style.border='2px solid red '
        return false;
    }
    else if(fame === ''){
        errorNode1.innerHTML='<small>THe username enterd is incorrect</small>'
        nameNode.style.border='2px solid red '
        return false
    }

    else if(fame==='zaidmak')
    {
        nameNode.style.border = "2px solid green"
        return true
    }

function validateForm(){
    let v1 = validate1()
    let v2 = validate2()
    return(v1&&v2)
}
}
function validate2(){
    errorNode2.innerHTML = '';
    console.log(errorNode2)
    let pass= passNode.value;
    console.log(pass)
    
    if(pass!=='14092000'){
        errorNode2.innerHTML='<p>The username enterd is incorrect</p>'
        passNode.style.border='2px solid red   '
        return false;
    }
    else if(pass === ''){
        errorNode2.innerHTML='<p>The password enterd is incorrect</p>'
        passNode.style.border='2px solid red '
        return false
    }
    else if(pass==='14092000')
    {
        passNode.style.border = "2px solid green"
        return true
    }


}