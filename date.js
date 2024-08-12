exports.getDate= getDate;
function getDate(){
const today=new Date();
const currentday=today.getDay();
const option={
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
}
const day=today.toLocaleDateString("en-us",option);
return day;
}
exports.getDay=getDay;
function getDay(){
    const today=new Date();
    const currentday=today.getDay();
    const option={
        weekday:"long",
        
    }
    const day=today.toLocaleDateString("en-us",option);
    return day;
    }