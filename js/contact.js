const date = new Date();
const today = date.getDay();
const daysOfWeek = document.querySelector('#days-of-week').children;

switch(today){
    case 1:
        daysOfWeek[0].style.fontWeight = "bold";
        break;
    case 2:
        daysOfWeek[1].style.fontWeight = "bold";
        break;
    case 3:
        daysOfWeek[2].style.fontWeight = "bold";
        break;    
    case 4:
        daysOfWeek[3].style.fontWeight = "bold";
        break;     
    case 5:
        daysOfWeek[4].style.fontWeight = "bold";
        break;
    case 6:
        daysOfWeek[5].style.fontWeight = "bold";
        break;
    case 0:
        daysOfWeek[6].style.fontWeight = "bold";
        break;
}
