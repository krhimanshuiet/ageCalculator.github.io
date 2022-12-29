function ageInDays(){
    var name = prompt("What is your name.")
    var birthYear = prompt("What year were you born... Good freind");
    var ageInDayss = 0;
    ageInDayss = (2022-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode( ' Result:' + name + ' You are ' + ageInDayss + ' days old ');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}


function reset(){
    document.getElementById('ageInDays').remove();
}