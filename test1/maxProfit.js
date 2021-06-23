const axios = require('axios');
var fs = require('fs')

// If connected to internet
try {
  axios.get('https://gist.githubusercontent.com/Jekiwijaya/c72c2de532203965bf818e5a4e5e43e3/raw/2631344d08b044a4b833caeab8a42486b87cc19a/gistfile1.txt',)
  .then(function (response) {
    let maxVar = 0,
    minVar = 0,
    maxGap = 0,
    targetMax = 0,
    targetMin = 0;

    let data = response.data;
    let newData = data.toString().split(" ");
    let startProfit, startProfitIndex;

    for (let i = 0; i < newData.length; ++i) {
      if (newData[maxVar] <= newData[i]) {
        maxVar = i;
      }
      if (newData[maxVar] > newData[i]) {
        minVar = i;
        maxVar = i;
      }
      if ((newData[maxVar] - newData[minVar] >= maxGap)) {
        maxGap = newData[maxVar] - newData[minVar];
        targetMax = maxVar;
        targetMin = minVar;
      }
    }
    newData.map((val, i) => {
      if (i < targetMin) {
        if (val <= newData[targetMin]) {
          startProfit = val;
          startProfitIndex = i;
          maxGap = newData[targetMax] - startProfit;
        }
      }
    })
    console.log("The maximum profit for Jacky can get is " + maxGap);
    console.log("Buy at: " + targetMin + ", and sell at :" + targetMax);
  })
  .catch(function (error) {
    console.log(error.message);
  })
} catch (e) {
  console.log('Error:', e.stack);
}

// If NOT connected to internet
try {
  let maxVar = 0,
  minVar = 0,
  maxGap = 0,
  targetMax = 0,
  targetMin = 0;

  let data = fs.readFileSync('data.txt', 'utf8');
  let newData = data.toString().split(" ");
  let startProfit, startProfitIndex;

  for (let i = 0; i < newData.length; ++i) {
    if (newData[maxVar] <= newData[i]) {
      maxVar = i;
    }
    if (newData[maxVar] > newData[i]) {
      minVar = i;
      maxVar = i;
    }
    if ((newData[maxVar] - newData[minVar] >= maxGap)) {
      maxGap = newData[maxVar] - newData[minVar];
      targetMax = maxVar;
      targetMin = minVar;
    }
  }
  newData.map((val, i) => {
    if (i < targetMin) {
      if (val <= newData[targetMin]) {
        startProfit = val;
        startProfitIndex = i;
        maxGap = newData[targetMax] - startProfit;
      }
    }
  })
  targetMin = startProfitIndex ? startProfitIndex : targetMin;
  console.log("The maximum profit for Jacky can get is " + maxGap);
  console.log("Buy at: " + targetMin + ", and sell at :" + targetMax);
} catch (e) {
    console.log('Error:', e.stack);
}

