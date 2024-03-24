// Concatenate
document.getElementById("conca").onclick = function(){
    let a = "500";
    let b = 10;
    let sum = a + b;
    document.getElementById("statement").innerHTML = "a = '500' <br> b = 10 <br> sum = a + b"
    document.getElementById("out").innerHTML = sum;
}
// Ask Name from User
document.getElementById("askname").onclick = function(){
    let firstName = prompt("Enter Your First Name")
    let lastName = prompt("Enter Your Last Name")
    let fullName = firstName + " " + lastName
    document.getElementById("statement").innerHTML = "First Name ="+firstName + " " + "<br>" + "Last Name ="+lastName
    document.getElementById("out").innerHTML = "Full Name ="+ fullName
}
// Comparison 
document.getElementById("comparison").onclick = function(){
let number1 = +prompt("Enter your 1st Number")
let number2 = +prompt("Enter your 2nd Number")
if(number1===number2){
     document.getElementById("statement").innerHTML = "1st number== 2nd number"
     document.getElementById("out").innerHTML =  "<span class=' text-success'> Condition is true &#128522 </span>"
}
else{
    document.getElementById("statement").innerHTML = "1st number!== 2nd number"
    document.getElementById("out").innerHTML =     "<span class='text-danger'>Condition is false &#128554;</span>"
}
}
// if else if statement 
document.getElementById("if else if").onclick = function(){
    let marks= prompt("Enter your marks")
    if(marks>=90){
        document.getElementById("out").innerHTML="Congratulations You are pass....!!!<br> you got A+ Grade"
    }
    else if(marks>=80){
        document.getElementById("out").innerHTML="Congratulations You are pass....!!!<br> you got A Grade"
    }
    else if(marks>=70){
        document.getElementById("out").innerHTML="Congratulations You are pass....!!!<br> you got B Grade"
    }
    
    else if(marks>=60){
        document.getElementById("out").innerHTML="Congratulations You are pass....!!!<br> you got C Grade"
    }
    else if (marks>=50){
        document.getElementById("out").innerHTML="You are so week!!! <br> Please work hard on your study." 
    }
    else {
        document.getElementById("out").innerHTML="<span class='text-danger'>You are Fail ....!!! <br> Better luck next time </span>"
    }
}
// Testing set of conditions 
document.getElementById("test").onclick = function(){
    let age = prompt("Enter Your Age")
    let weight = prompt("Enter Your Weight")
    if(age<=10 && weight<=30){
     document.getElementById("out").innerHTML = "You are a healthy baby"
    }
    else if(age<=20 && weight<=45){
        document.getElementById("out").innerHTML = "You are a Young and healthy boy"
    }
    else if(age<=40 && weight<=80){
        document.getElementById("out").innerHTML = "You are a Young and fatty man"
    }
    else if(age<=70 && weight<=80){
        document.getElementById("out").innerHTML = "You are a old and fatty man"
    }
    else{
        document.getElementById("out").innerHTML = "You are a senior citizen"
    }
}
document.getElementById("nested").onclick=function(){
    let userName = prompt("Enter your userName")
    if(userName==="Mani786"){
        let password = prompt("Enter Your password")
        if(password === "123456"){
            document.getElementById("out").innerHTML= "You are successfully logged in"
           
        }
        else{
            document.getElementById("out").innerHTML="<span class='text-danger'>Wrong Password</span>"
        }
    }
    else{
        document.getElementById("out").innerHTML="Wrong userNAme <br> Correct user name is Mani786"
    }
}
document.getElementById("login").onclick = function(){
    let Username = prompt("Enter Your username ")
    let Password = prompt("Enter your password")
    if(Username ==="Mani21"){
        if(Password==="mani786"){
            document.getElementById("out").innerHTML="You are successfully logged in"
            
        }
        else{
            document.getElementById("out").innerHTML="incorrect password or username <br> use Mani21 as username or mani786 as password "
        }
    }
    else{
        document.getElementById("out").innerHTML=" invailed username or password"
    }

}
document.getElementById("clear").onclick = function(){
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clearout").onclick = function(){
    document.getElementById("out").innerHTML = ""
}
