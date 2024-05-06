/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;

  const suffix = Array(n).fill(1);
  const prefix = Array(n).fill(1);

  for (let i = 1; i < n; i++ ) {
      prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
      suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  const res = [];
  for (let i = 0; i < n; i++) {
      res.push(prefix[i] * suffix[i]);
  }

  return res;
};



function isValidSudoku(board) {
    const rows = Array(9).fill(0).map(() => new Set());
    const cols = Array(9).fill(0).map(() => new Set());
    const squares = Array(9).fill(0).map(() => new Set());

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            const num = board[r][c];
            if (num === ".") continue;

            const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (rows[r].has(num) || cols[c].has(num) || squares[boxIdx].has(num)) {
                return false;
            }

            rows[r].add(num);
            cols[c].add(num);
            squares[boxIdx].add(num);

        }
    }

    return true;
}
