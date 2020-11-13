function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  //it generates a random number between a range of our choice

const getSleepHours = day =>{
  if (day=== 'monday'){
    return Math.floor(Math.random()*11);
  }else if(day==='tuesday'){
    return Math.floor(Math.random()*11);
  }else if(day === 'wednesday'){
    return Math.floor(Math.random()*11);
  }else if(day === 'thursday'){
    return Math.floor(Math.random()*11);
  }else if(day === 'friday'){
    return Math.floor(Math.random()*11);
  }else if(day === 'saturday'){
    return randomNumber(7,14);
  }else if(day === 'sunday'){
    return randomNumber(7,14);
  }
} //giving random sleep hour in each day of the week

const getActualSleepHours = () => {
  const sum= getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return sum;
} //calculate the hours of sleep

const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours*7;
  } //it gives us the ideal hours of sleep per week


const calculateSleepDept= () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours>idealSleepHours) {
    console.log('You overslept this week!\nYou slept ' + actualSleepHours + ' hours.\nYou actually slept ' + (actualSleepHours - idealSleepHours) + ' hours more than your ideal goal per week!');
  }else if (actualSleepHours < idealSleepHours) {
    console.log('You need more sleep this week!\nYou only slept ' + actualSleepHours + ' hours.\nYou needed ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep to reach your ideal number!');
  }else if (actualSleepHours === idealSleepHours) {
    console.log('Wow! This week you slept ' + actualSleepHours + ' hours!\nThis the ideal number of hours you need!');
  }
} //calculate the actual sleep hours and gives us the data
calculateSleepDept();




