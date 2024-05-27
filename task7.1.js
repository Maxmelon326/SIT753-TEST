function resetform()
{
  document.getElementById("Inputstring").value = "";
  document.getElementById("Search").value = "";
  document.getElementById("Position").value = "";
}

function processdata() 
{
  //get input string
  inputElement= document.getElementById("Inputstring");
  inputValue=inputElement.value;
  //set to other var to show in result output 1 and display content
  outputElement1=document.getElementById("output1");
  outputElement1.innerHTML = inputValue;
  
  //total number of characters
  outputElement2=document.getElementById("output2");
  outputElement2.innerHTML = inputValue.length;

  //String in uppercase
  outputElement3=document.getElementById("output3");
  outputElement3.innerHTML = inputValue.toUpperCase();

  //String in lowercase
  outputElement4=document.getElementById("output4");
  outputElement4.innerHTML = inputValue.toLocaleLowerCase();

  //define position
  inputElement2= document.getElementById("Position");
  inputValue2=inputElement2.value;
  
  //Character at position   
  outputElement5 = document.getElementById("output5");
  if (inputValue2 !== "") 
  {
    if (inputValue2 >= 0 && inputValue2 < inputValue.length) 
    {
      outputElement5.innerHTML = inputValue.charAt(inputValue2);
    } 
    else 
    {
      outputElement5.innerHTML = "&nbsp;"; // position is longer than input length,return empty
    }
  } 
  else 
  {
    outputElement5.innerHTML = "&nbsp;"; // position is null,return empty
  }


  //define sub-string
  inputElement3= document.getElementById("Search");
  inputValue3=inputElement3.value;

  //Location of Sub-string
  outputElement6=document.getElementById("output6");
  outputElement6.innerHTML = inputValue.indexOf(inputValue3);

  //Replace substring 'www'
  outputElement7=document.getElementById("output7");
  outputElement7.innerHTML = inputValue.replaceAll("www","world wide web");

  //Last'11'chars in string
  outputElement8=document.getElementById("output8");
  outputElement8.innerHTML = inputValue.slice(-11);

}