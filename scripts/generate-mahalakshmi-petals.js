function generateOgeePetals(n, rBase, rTip, cx = 500, cy = 500) {
  const petals = [];
  const toRad = deg => deg * Math.PI / 180;
  const step = 360 / n;
  const halfStep = step / 2;
  
  for (let i = 0; i < n; i++) {
    const midDeg = i * step;
    const startDeg = midDeg - halfStep;
    const endDeg = midDeg + halfStep;
    
    // Valley points
    const v1x = cx + rBase * Math.sin(toRad(startDeg));
    const v1y = cy - rBase * Math.cos(toRad(startDeg));
    const v2x = cx + rBase * Math.sin(toRad(endDeg));
    const v2y = cy - rBase * Math.cos(toRad(endDeg));
    
    // Tip
    const tx = cx + rTip * Math.sin(toRad(midDeg));
    const ty = cy - rTip * Math.cos(toRad(midDeg));
    
    // Ogee control points
    const rCp1 = rBase + (rTip - rBase) * 0.45;
    const cp1Deg = midDeg - halfStep * 0.92;
    const cp1x = cx + rCp1 * Math.sin(toRad(cp1Deg));
    const cp1y = cy - rCp1 * Math.cos(toRad(cp1Deg));
    
    const rCp2 = rTip - (rTip - rBase) * 0.30;
    const cp2Deg = midDeg - halfStep * 0.25;
    const cp2x = cx + rCp2 * Math.sin(toRad(cp2Deg));
    const cp2y = cy - rCp2 * Math.cos(toRad(cp2Deg));
    
    const cp3x = cx + rCp2 * Math.sin(toRad(midDeg + halfStep * 0.25));
    const cp3y = cy - rCp2 * Math.cos(toRad(midDeg + halfStep * 0.25));
    
    const cp4x = cx + rCp1 * Math.sin(toRad(midDeg + halfStep * 0.92));
    const cp4y = cy - rCp1 * Math.cos(toRad(midDeg + halfStep * 0.92));
    
    const pathD = `M ${v1x.toFixed(2)} ${v1y.toFixed(2)} C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${tx.toFixed(2)} ${ty.toFixed(2)} C ${cp3x.toFixed(2)} ${cp3y.toFixed(2)}, ${cp4x.toFixed(2)} ${cp4y.toFixed(2)}, ${v2x.toFixed(2)} ${v2y.toFixed(2)}`;
    
    // Spine
    const baseSpineX = cx + rBase * Math.sin(toRad(midDeg));
    const baseSpineY = cy - rBase * Math.cos(toRad(midDeg));
    const spineD = `M ${baseSpineX.toFixed(2)} ${baseSpineY.toFixed(2)} L ${tx.toFixed(2)} ${ty.toFixed(2)}`;
    
    petals.push({ i, midDeg, pathD, spineD });
  }
  return petals;
}

const outer16 = generateOgeePetals(16, 300, 382);
const inner8 = generateOgeePetals(8, 210, 300);

console.log('// 16 Petals SVG');
outer16.forEach(p => console.log(`<path d="${p.pathD}" stroke-width="2.4" />`));

console.log('// 8 Petals SVG');
inner8.forEach(p => console.log(`<path d="${p.pathD}" stroke-width="2.6" />\n<path d="${p.spineD}" stroke-width="1.6" opacity="0.75" />`));
