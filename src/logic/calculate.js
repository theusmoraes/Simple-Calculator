export default function calculate(obj, buttoname) {
    if (isNumber(buttoname) || buttoname === "."){
        if (obj.next && obj.next !== "0"){
            return {next : obj.next + buttoname}
        }
        return {next: buttoname}
    }else{
        if (buttoname === "+" || buttoname === "-" || buttoname === "x" || buttoname === "÷"){
            if (!obj.total){
                return {
                    operacao : buttoname,
                    total : obj.next,
                    next : ""   
                }
            }
            return {operacao : buttoname}
        }else{
            if (buttoname === "="){
                return calculateFinal(obj.next,obj.total,obj.operacao)               
            }else if (buttoname === "AC"){
                return {next:null, operacao:null, total:null}
        }else if (buttoname === "%"){
            if (obj.next){
                return {next: obj.next / 100}
            }else if (obj.total){
                return {total: obj.total / 100}
            }
        }

        }

    }
}
function isNumber(number){
    return /^[0-9]+$/.test(number)
}
function calculateFinal (next, total, operation){
    next == ""? next = "0": next = next
    console.log (next, total, operation)


    switch(operation){
        case "+":
            return {
                total : parseFloat(total) + parseFloat(next),
                next : "",
            }
        case "-":
            return {
                total : parseFloat(total) - parseFloat(next),
                next : "",
            }
        case "x": 
        return {
            total : parseFloat(total) * parseFloat(next),
            next : "",
        }
        case "÷":
            return {
                total : parseFloat(total) / parseFloat(next),
                next : "",
            }
    }
}