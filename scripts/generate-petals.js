function getPetalsPath(n, rBase, rTip, rBulge, cx = 500, cy = 500) {
  const d = [];
  const toRad = deg => (deg - 90) * Math.PI / 180;
  const step = 360 / n;

  for (let i = 0; i < n; i++) {
    const a1 = i * step;
    const a2 = (i + 1) * step;
    const aMid = i * step + step / 2;

    const x1 = cx + rBase * Math.cos(toRad(a1));
    const y1 = cy + rBase * Math.sin(toRad(a1));
    const x2 = cx + rBase * Math.cos(toRad(a2));
    const y2 = cy + rBase * Math.sin(toRad(a2));

    const xTip = cx + rTip * Math.cos(toRad(aMid));
    const yTip = cy + rTip * Math.sin(toRad(aMid));

    // Flared control points for natural lotus curve
    const ctrlAngle1 = a1 + step * 0.15;
    const ctrlAngle2 = a2 - step * 0.15;
    const c1x = cx + rBulge * Math.cos(toRad(ctrlAngle1));
    const c1y = cy + rBulge * Math.sin(toRad(ctrlAngle1));
    const c2x = cx + rBulge * Math.cos(toRad(ctrlAngle2));
    const c2y = cy + rBulge * Math.sin(toRad(ctrlAngle2));

    if (i === 0) {
      d.push(`M ${x1.toFixed(1)} ${y1.toFixed(1)}`);
    }
    d.push(`Q ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${xTip.toFixed(1)} ${yTip.toFixed(1)}`);
    d.push(`Q ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }
  return d.join(' ') + ' Z';
}

console.log('8-petal path:');
console.log(getPetalsPath(8, 260, 380, 340));
console.log('\n16-petal path:');
console.log(getPetalsPath(16, 310, 382, 360));
