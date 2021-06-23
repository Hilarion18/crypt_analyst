function factorialH(h) {
    let l = 1;
    let arr = [];

    while (l <= h) {
        let x = l;
        let i = 1;

        console.log(`The factors of the ${x} are: `);
        let tempArr = [];
        while (i <= x) {
            if (x%i == 0) {
                console.log(`${i} `);
                tempArr = i;
            }
            ++i;
        }
        if (tempArr.length == 6) {
            arr.push(l);
        }
        ++l;
    }

    let result = arr.join(",");
    console.log(`The factor number of ${h} where is counted 6 is: ${result}`);
    console.log(`so the total is: ${arr.length}`);
}

// factorialH(128);
factorialH(262144);