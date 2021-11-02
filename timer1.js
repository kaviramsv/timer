// node timer1.js 10 3 5 15 9 
//test data:node timer1.js 5 bad 3 g 7 0 -9

const times = process.argv.slice(2);
if (!times) {
  return null;
}
console.log(times.sort((a, b) => a - b));
console.log("===============");
for (const t of times) {
  if ((t==0) ||Number(t)) {
    console.log(t, typeof (t));
    if (t >= 0) {
      setTimeout(() => { console.log(`beep at ${t}`) }, Number(t) * 1000)
    }
  }
}

// process.stdout.write('\x07');
// process.stderr.on("\007");
// process.stderr.write("\007");
// console.log('\u0007')
// var beep = require('beepbeep');
// beep();
// const { exec }= require('child_process') 
// exec(`rundll32 user32.dll,MessageBeep`)

// process.stdout.write('.\n');