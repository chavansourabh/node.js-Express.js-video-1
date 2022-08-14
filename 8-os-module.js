const os = require("os");

const user = os.userInfo();
const info = os.loadavg();

// console.log(info);

console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
