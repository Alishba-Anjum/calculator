let input = document.getElementById("input-val");

function display(num){
    input.value += num;
    input.style.color = "gray";
}

function clearInput(){
    input.value = "";
}

function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch{
        input.value = "ERROR";
        input.style.color = "red"
        //input.style.fontSize = "30px";

        setTimeout(() => {
         input.value = ""
        }, 1000)
    }
}

function del(){
    input.value = input.value.slice(0 , -1);
}


