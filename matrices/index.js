class Matrix {
  constructor(size) {
    this.A = new Array(size * (size + 1) / 2).fill(0);
    this.n = size;
  }

  set(i, j, x) {
    if (i >= j) {
      this.A[this.n * (j - 1) + (j - 2) * (j - 1) / 2 + i - j] = x;
    }
  }

  get(i, j) {
    if (i >= j) {
      return this.A[this.n * (j - 1) + (j - 2) * (j - 1) / 2 + i - j];
    } else {
      return 0;
    }
  }

  display() {
    for (let i = 1; i <= this.n; i++) {
      let row = '';
      for (let j = 1; j <= this.n; j++) {
        if (i >= j) {
          row += this.A[this.n * (j - 1) + (j - 2) * (j - 1) / 2 + i - j] + ' ';
        } else {
          row += '0 ';
        }
      }
      console.log(row);
    }
  }
}

function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Enter Dimension: ', (n) => {
    const m = new Matrix(parseInt(n));
    console.log('Enter all elements for the lower triangle:');

    const fillMatrix = (i, j) => {
      if (i > m.n) {
        console.log('\nMatrix:');
        m.display();
        readline.close();
        return;
      }

      if (i >= j) {
        readline.question(`Element [${i},${j}]: `, (x) => {
          m.set(i, j, parseInt(x));
          fillMatrix(i, j + 1);
        });
      } else {
        fillMatrix(i + 1, 1);
      }
    };

    fillMatrix(1, 1);
  });
}

main();
