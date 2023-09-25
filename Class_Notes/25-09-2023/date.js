dt = new Date();
firstDayMonth = new Date(dt.getFullYear(), dt.getMonth(), 1);
difference = (dt-firstDayMonth);
console.log('Today\'s date in ISD format is ${dt.toISOString}');
console.log('First date of the current month is is ${firstDayMonth}');
console.log("Difference between those two days is "+(dt-firstDayMonth));
console.log("Difference in hours is "+difference/(1000*3600))
console.log("Difference in hours is "+difference/(1000*3600*24))