function pointsValidation(arr) {
    let distance = Math.sqrt(Math.pow((arr[0] - 0), 2) + Math.pow((arr[1] - 0), 2));
    if (Number.isInteger(distance)) {
        console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is valid`);
    } else {
        console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is invalid`);
    }

    distance = Math.sqrt(Math.pow((arr[2] - 0), 2) + Math.pow((arr[3] - 0), 2));
    if (Number.isInteger(distance)) {
        console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is valid`);
    } else {
        console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is invalid`);
    }

    distance = Math.sqrt(Math.pow((arr[2] - arr[0]), 2) + Math.pow((arr[3] - arr[1]), 2));
    if (Number.isInteger(distance)) {
        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`);
    } else {
        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`);
    }
}