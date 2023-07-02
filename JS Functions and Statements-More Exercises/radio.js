function radioCrystals(arr) {
    for (let i = 1; i < arr.length; i++) {
        let target = arr[0];
        let segment = arr[i];
        let counter = 0;
        let operation = "";
        console.log(`Processing chunk ${segment} microns`);

        cut();
        if (isTargetReached()) continue;

        lap();
        if (isTargetReached()) continue;

        grind();
        if (isTargetReached()) continue;

        etch();
        if (isTargetReached()) continue;

        xRay();
        if (isTargetReached()) continue;

        function xRay() {
            console.log("X-ray x1");
            return segment += 1;
        }

        function etch() {
            if (segment - 2 < target - 1) {
                return segment = checkCounter(counter, operation = "Etch");
            }
            segment = segment - 2;
            counter++;
            return etch();
        }

        function grind() {
            if (segment - 20 < target) {
                return segment = checkCounter(counter, operation = "Grind");
            }
            segment = segment - 20;
            counter++;
            return grind();
        }

        function lap() {
            if (segment * 0.80 < target) {
                return segment = checkCounter(counter, operation = "Lap");
            }
            segment = segment * 0.80;
            counter++;
            return lap();
        }

        function cut() {
            if (segment / 4 < target) {
                return segment = checkCounter(counter, operation = "Cut");
            }
            segment = segment / 4;
            counter++;
            return cut();
        }

        function transportingAndWashing() {
            console.log("Transporting and washing");
            counter = 0;
            return Math.floor(segment);
        }

        function checkCounter(counter, operation) {
            if (counter > 0) {
                console.log(`${operation} x${counter}`);
                segment = transportingAndWashing();
            }
            return segment;
        }

        function isTargetReached() {
            if (segment === target) {
                console.log(`Finished crystal ${target} microns`);
                return true;
            }
            return false;
        }
    }
}