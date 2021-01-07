function doubleCheck (h, r) {
  if (r.length !== h.length) {
    throw new Error('Wrong length!');
  }
}

function makeTable (h = [], d = [], capitalize = false) {
  const s = '|';
  let t = '|';
  let under = '';

  for (const header in h) {
    const h2 = capitalize ? h[header].charAt(0).toUpperCase() + h[header].slice(1) : h[header];

    t += ' ' + h2 + ' ' + s;
    under += ' ' + '-'.repeat(h2.length) + ' ' + s;
  }

  t += '\n' + s + under;

  for (let i = 0; i < d.length; i++) {
    t += '\n' + s;

    for (let j = 0; j < d[i].length; j++) {
      // Write each cell
      t += ' ' + d[i][j] + ' |';
    }
  }

  for (const row in d) {
    doubleCheck(h, d[row]);
  }

  return t;
}

module.exports = makeTable;
