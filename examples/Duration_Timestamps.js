// Calculating: Duration beetwen Timestamp1(ms) and Epoch(ms) IN ms, seconds, minutes, hours, days and Converting to Readeble Duration.

let timeStampOne = 1700975324000; //Set nuber of Timestamp1 here IN ms
let nowTimeStampMss = Date.now();
let durationMss = nowTimeStampMss - timeStampOne;
let durationSecs = Math.floor(durationMss / 1000);
let durationDays = Math.floor(durationSecs / (3600*24));
let durationHours1 = Math.floor(durationSecs % (3600*24) / 3600);
let durationMinutes = Math.floor(durationSecs % 3600 / 60);
let durationSeconds = Math.floor(durationSecs % 60);
let durationHours2 = durationHours1 + (durationDays * 24);

console.log("Duration In  Days Hours:Minutes:Seconds: "+durationDays+"  "+durationHours1+":"+durationMinutes+":"+durationSeconds);
console.log("Duration In  Hours:Minutes:Seconds: " +durationHours2+":"+durationMinutes+":"+durationSeconds);