var carFleet = function(target, position, speed) {
  const cars = position.map((pos, i) => [pos, speed[i]]);
  cars.sort((a, b) => a[0] - b[0]);

  const stack = [];
  for (let i = 0; i < cars.length; i++) {
      const time = (target - cars[i][0]) / cars[i][1];
      while (stack.length && time >= stack[stack.length - 1]) {
          stack.pop();
      }
      stack.push(time);
  }

  return stack.length;
};

// Test case 1
let target = 12;
let position = [10, 8, 0, 5, 3];
let speed = [2, 4, 1, 1, 3];
console.log(carFleet(target, position, speed)); // Expected output: 3

// Test case 2
target = 10;
position = [3, 5, 7];
speed = [3, 2, 1];
console.log(carFleet(target, position, speed)); // Expected output: 1

// Test case 3
target = 15;
position = [5, 10, 2, 7];
speed = [3, 4, 1, 2];
console.log(carFleet(target, position, speed)); // Expected output: 2

// Test case 4
target = 20;
position = [6, 2, 17];
speed = [3, 9, 2];
console.log(carFleet(target, position, speed)); // Expected output: 2

// Test case 5
target = 100;
position = [0, 2, 4];
speed = [4, 2, 1];
console.log(carFleet(target, position, speed)); // Expected output: 1
