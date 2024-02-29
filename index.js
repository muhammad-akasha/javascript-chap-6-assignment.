//assignment 6 ;

let a = 100;

document.write("<h2 class =' headingcalcu '> result </h2>");

document.write("<h3 class = ' contentcalcu '> the value of a is : " + a + "</h3>");

document.write("<h3 class = ' contentcalcu '> the value of ++a is : " + ++a + "</h3>");

document.write("<h3 class = ' contentcalcu '> now the value of a is : " + a + "</h3>");

document.write("<h3 class = ' contentcalcu '> the value of a++ is : " + a++ + "</h3>");

document.write("<h3 class = ' contentcalcu '> now the value of a is : " + a + "</h3>");

document.write("<h3 class = ' contentcalcu '> the value of a-- is : " + a-- + "</h3>");

document.write("<h3 class = ' contentcalcu '> the value of a is : " + a + "</h3>");

document.write("<h3 class = ' contentcalcu '> the value of --a is : " + --a + "</h3>");

document.write("<h3 class = ' contentcalcu '> the value of a is : " + a + "</h3>");


let incre_decre = a = 2 , b = 1;

document.write("<h4 class = 'calculate'> a = " , a , "</h4>");

document.write(" <h4 class = 'calculate'> b = " , b , " </h4>")

--a;

--a - --b;

--a - --b + ++b;

--a - --b + ++b + --b;

document.write(" <h4 class = 'calculate'> result a = " , a , "</h4>");

document.write(" <h4 class = 'calculate'> result b = " , b , "</h4>");


// let input_name = prompt ("please input your correct name");{
//    alert(" welcome " + input_name + " to my webpage. ")
// }

let number = prompt("input any number i will give you a multiplication of a number");{

   if (isNaN(number) || !number) {
      number = 5;
  
  }


   multi = 1 ;

   document.write(" <h1>  table of " + number + " </h1> ");

   table_of_given_num = number * multi;

  document.write( "<h2>" + number + " *  " + multi + " = " + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;
   
     document.write( "<h2>" + number + " * " + multi + " = " + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;

    document.write( "<h2>" + number + " * " + multi + " = " + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;
   
    document.write( "<h2>" + number + " * " + multi + " = "  + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;
   
    document.write( "<h2>" + number + " * " + multi + " = " + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;
   
    document.write( "<h2>" + number + " * " + multi + " = " + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;
   
     document.write( "<h2>" + number +  " * " + multi + " = " + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;
   
     document.write( "<h2>" + number + " * " + multi + " = " + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;

     document.write( "<h2>" + number + " * " + multi + " = " + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;

    document.write( "<h2>" + number + " * " + multi + " = "  + table_of_given_num + "</h2>");

   table_of_given_num = number * multi++;
}



let sub_1 = prompt ("enter subject no 1");

let sub_2 = prompt ("enter subject no 2");

let sub_3 = prompt ("enter subject no 2");

let obt_mark_sub_1 = prompt ("enter obtained marks of subject 1");

let obt_mark_sub_2 = prompt ("enter obtained marks of subject 2");

document.getElementById("obt-m2").innerHTML = obt_mark_sub_2;

let obt_mark_sub_3 = prompt ("enter obtained marks of subject 3");

let subject1 = sub_1;

document.getElementById("sub-1").innerHTML = subject1;

let subject2 = sub_2;

document.getElementById("sub-2").innerHTML = subject2;

let subject3 = sub_3;

document.getElementById("sub-3").innerHTML = subject3;

let total_marks = 100;

let obtained_mark_1 = obt_mark_sub_1;

document.getElementById("obt-m1").innerHTML = obtained_mark_1;

let obtained_mark_2 = obt_mark_sub_2;

document.getElementById("obt-m2").innerHTML = obtained_mark_2;

let obtained_mark_3 = obt_mark_sub_3;

document.getElementById("obt-m3").innerHTML = obtained_mark_3

let your_result1 = ( obtained_mark_1 / total_marks ) * 100  ;

document.getElementById("percent1").innerHTML = your_result1 + "%";

let your_result2 = ( obtained_mark_2 / total_marks ) * 100  ;

document.getElementById("percent2").innerHTML = your_result2 + "%";

let your_result3 = ( obtained_mark_3 / total_marks ) * 100  ;

document.getElementById("percent3").innerHTML = your_result3 + "%";

total_subject_marks = your_result1 + your_result2 + your_result3 ;

document.getElementById("total1").innerHTML = total_subject_marks;

let total_percentage = (total_subject_marks / 300 ) * 100 ;

document.getElementById("total2").innerHTML = total_percentage +"%";