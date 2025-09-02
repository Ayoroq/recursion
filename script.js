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
