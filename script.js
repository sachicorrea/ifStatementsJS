/* 1st Activity */

function numbers(){
    let number1 = parseFloat(document.getElementById('firstNumb').value);

    let number2 = parseFloat(document.getElementById('secondNumb').value);

    if (Number.isFinite(number1) && Number.isFinite(number2)) {

        if(number1 > number2){
            txt = "First number is higher";
        }

        else if(number1 < number2) {
            txt = "Second number is higher";
        }

        else if (number1 === number2){
            txt = "Both numbers are equal";
        }

        document.getElementById("demo1").innerHTML = "<h4>" + txt + "</h4>"; 
    }
    else {
        document.getElementById('demo1').innerHTML = "<h4>Please enter two finite digits</h4>";
    }
}

/* 2nd Activity */

function compra(){
    var compra = parseInt(prompt("Ingrese el valor de la compra"));
    var desc;

    if(compra >= 0 && (compra != null || compra != "")){
        if(compra > 20000){
            desc = compra - compra * 0.20;
        }

        else if(compra > 5000 && compra <= 10000) {
            desc = compra - compra * 0.10;
        }

        else {
            desc = compra;
        } 
    } 
    else{
        alert("Ingrese un valor de compra mayor o igual a cero");
    }
    
    document.getElementById("demo2").innerHTML = "El valor total de la compra es: " + desc;
}

/* 3rd Activity */
function zapatos(){
    
    var cant = parseInt(prompt("Escriba la cantidad de pares de zapatos a comprar"));
    var val;
    var par1;
    var par2;
    var par3;
    var total = 0;

    if(cant >= 0 && (cant != null || cant != ""))
    {
        if(cant > 3){
            
            for (i=1; i<=cant; i++)
            {
                var msg = prompt("Escriba el valor del par: " + i);

                val = parseInt(msg);

                total = total + val;
            }
        }

        else if (cant == 2){
    
            par1 = parseInt(prompt("Ingrese el valor del primer par 1:"));
            
            par2 = parseInt(prompt("Ingrese el valor del segundo par 2:"));
            
            if(par1 > par2){
                total = par1 + (par2/2);
            }
            
            else {      
                total = par2 + (par1/2);
            }
        } 
        
        else if (cant == 3) {
    
            par1 = parseInt(prompt("Ingrese el valor del primer par 1:"));
            
            par2 = parseInt(prompt("Ingrese el valor del segundo par 2:"));
    
            par3 = parseInt(prompt("Ingrese el valor del tercer par 3:"));
            
            if(par1 > par2 && par1 > par3 && par2 > par3)
            {
                total = par1 + par2;          
            } 
            
            else if (par2 > par1 && par2 > par3 && par1 > par3)
            {
                total = par1 + par2;
            } 
    
            else if (par3 > par1 && par3 > par2 && par1 > par2)
            {
                total = par1 + par2;
            } 
            
            else 
            {
                total = par1 + par2 + par3;
            }
        }
    }
    
    else
    {
        alert("Ingrese una cantidad de zapatos mayor o igual a cero");
        return false;
    }   
    
    document.getElementById("demo3").innerHTML = total;    
}

/* 4th Activity */

function multiplo(){
    var num = prompt("Ingrese el n??mero a analizar");

    if(num == null || num == "")
    {
        
        alert("Ingrese un n??mero");
        return false;
    }

    else
    {
        if(num % 2 == 0){
            var mult = "El n??mero es par";
        }

        else if(num % 3 == 0){
            mult = "El n??mero es m??ltiplo de 3";
        }

        else if(num % 5 == 0){
            mult = "El n??mero es m??ltiplo de 5";
        }

        else{
            
            mult = "El n??mero no se ni par, ni m??ltiplo de 3 ni m??ltiplo de 5";
        }
    }   

    document.getElementById("demo4").innerHTML = mult;
}

/* 5th Activity */

function bill(){
    
    var bill = parseInt(prompt("Ingrese el valor de la factura"));
    var total;

    if(bill < 0 || (bill == null || bill == ""))
    {
        alert("Ingrese de nuevo el valor de la factura");
        return false;
    }

    else
    {
        if(bill >= 0 && bill < 50000){
            total = bill + bill * (12/100);
        }

        else{
            
            total = bill + bill * (12/100) - bill * (5/100);
        }
    }   

    document.getElementById("demo5").innerHTML = total;
}

/* 6th Activity */

function cuadrRect(){
    
    var large = parseInt(prompt("Ingrese el valor del largo de la figura"));
    var width = parseInt(prompt("Ingrese el valor del ancho de la figura"));
    var shape;

    if((large == null || large == "") &&  (width == null || width == ""))
    {
        alert("Ingresar valores enteros positivo para cada lado solicitado");
        return false;
    }

    else if(large >= 0 || width >= 0)
    {
        if(large > width || width > large){
            shape = "La figura es un rect??ngulo";
        }

        else{
            shape = "La figura es un cuadrado";
        }
    }
    
    else
    {
        alert("los valores a ingresar deben ser positivos");
    }

    document.getElementById("demo6").innerHTML = shape;
}

/* 7th Activity */

function calificaciones(){
    var name = prompt("Ingrese el nombre del estudiante");

    var score1 = parseInt(prompt("Ingrese el resultado de la nota 1 rango 0 a 10"));

    var score2 = parseInt(prompt("Ingrese el resultado de la nota 2 rango 0 a 10"));

    var score3 = parseInt(prompt("Ingrese el resultado de la nota 3 rango 0 a 10"));

    var average = (score1 + score2 + score3) / 3;

    if((name !== null || name !== "") || (score1 !== null || score1 !== "") || (score2 !== null || score2 !== "") || (score3 !== null || score3 !== ""))
    {
        if(average >= 0){
            
            if(average >= 9 && average <=10){
            
                nivel = "Desempe??o Superior";
            }
    
            else if(average >= 8 && average < 9){
                
                nivel = "Desempe??o Alto";
            }
    
            else if(average >= 6 && average < 8){
                
                nivel = "Desempe??o B??sico";
            }
    
            else {
                
                nivel = "Desempe??o Bajo";
            }
        }

        else
        {
            alert("Se debe ingresar un nombre o resultados de ex??menes entre 0 y 10");
        }
        
    }

    document.getElementById("demo7").innerHTML = "El estudiante " + name + " con un promedio " + average + " tiene un " + nivel;
}

/* 8th Activity */

function test(){
    var nombre = prompt("Ingrese el nombre del candidato");

    var preguntas = prompt("Ingrese la cantidad de preguntas realizadas");

    var correctas = prompt("Ingrese la cantidad de preguntas correctamente respondidas");

    var calif = (correctas/preguntas) * 100;

    if(calif >= 90){
        
        nivel = "m??ximo";
    }

    else if(calif >= 75 && calif < 90){
        nivel = "medio";
    }

    else if(calif >= 50 && calif < 75){
        nivel = "regular";
    }

    else {
        nivel = "de fuera de nivel";
    }

    document.getElementById("demo8").innerHTML = "El candidato " + nombre + " con el total de preguntas acertadas en " + calif + "% tiene un nivel " + nivel;
}

/* 9th Activity */

function jubilacion(){
    var edad = prompt("Ingrese la edad del empleado");

    var antiguedad = prompt("Ingrese la antig??edad del empleado");

    if(edad >= 60 || antiguedad >= 25){
        txt = "El empleado se jubilara este a??o";
    }

    else {
        txt = "El empleado a??n no tiene la antig??edad ni la edad para jubilarse";
    }

    document.getElementById("demo9").innerHTML = txt;
}

