// This is the fibonacci sequence using the iterative method
function fibs(n) {
  let sequence = [0, 1];
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return sequence;

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// This is the fibonacci sequence using the recursive method
function fibsRec(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    let sequence = fibsRec(n - 1);
    return sequence.concat([sequence[sequence.length - 1] + sequence[sequence.length - 2]]);
}



// This is the merge sort function that is using recursive methods
function mergeSort(arr) {
    function merge(left, right) {
        let sorted = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sorted.push(left.shift());
            } else {
                sorted.push(right.shift());
            }
        }
        return [...sorted, ...left, ...right];
    }
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(right), mergeSort(left));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))