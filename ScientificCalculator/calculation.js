let decimalLen = 8
function calculator(calc){
    let val = calc.display.value
   
    if(val.includes("^")){
        let tempArr = val.split("^")
        if(!tempArr[1]){
            calc.display.value = 1
        }
        else{
            let f=1
            for(let i=0; i<tempArr[1]; i++){
                f = f* tempArr[0]
            }
            calc.display.value = f
        }
    }
    else{
        let result = eval(val)
        result = ""+result
        if(result.includes(".")){
            calc.display.value = decimal(result,decimalLen)
        }
        else{
            calc.display.value = result
        }
    }
}

function calSqrt(calc){
    let result = Math.sqrt(calc.display.value)
    calc.display.value = decimal(result,decimalLen)
}
function calFact(calc){
    let n = calc.display.value
    let f=1;
    for(let i=1; i<=n; i++){
        f= f *i
    }
    calc.display.value = f
}
function calLog10(calc){
    let result = Math.log10(calc.display.value)
    calc.display.value = decimal(result,decimalLen)
}

function calLog(calc){
    calc.display.value = Math.log(calc.display.value)
    calc.display.value = decimal(result,decimalLen)
}
function calExp(calc){
    let result = Math.exp(calc.display.value)
    calc.display.value = decimal(result,decimalLen)
}
function calSin(calc){
    let result = Math.sin(calc.display.value)
    calc.display.value = decimal(result,decimalLen)
}
function calCos(calc){
    let result = Math.cos(calc.display.value)
    calc.display.value = decimal(result,decimalLen)
}
function calTan(calc){
    let result = Math.tan(calc.display.value)
    calc.display.value = decimal(result,decimalLen)
}


function decimal(val,n){
    val = ""+val
    let tempArr = val.split(".")
    console.log(tempArr)
    if(!tempArr[1]){
        return tempArr    
    }
    else{
        return tempArr[0]+"."+tempArr[1].substring(0,n)
    }
}