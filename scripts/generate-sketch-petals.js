function generateSketchOgeePetals(rBase = 260, rTip = 382, cx = 500, cy = 500) {
  const petals = [];
  const toRad = deg => deg * Math.PI / 180;
  
  for (let i = 0; i < 8; i++) {
    const midDeg = i * 45; // 0, 45, 90, 135, 180, 225, 270, 315
    const startDeg = midDeg - 22.5;
    const endDeg = midDeg + 22.5;
    
    // 1. Valley endpoints on inner circle
    const v1x = cx + rBase * Math.sin(toRad(startDeg));
    const v1y = cy - rBase * Math.cos(toRad(startDeg));
    const v2x = cx + rBase * Math.sin(toRad(endDeg));
    const v2y = cy - rBase * Math.cos(toRad(endDeg));
    
    // 2. Tip point touching outer circle
    const tx = cx + rTip * Math.sin(toRad(midDeg));
    const ty = cy - rTip * Math.cos(toRad(midDeg));
    
    // 3. Ogee Cubic Bezier Control Points
    // Left Flank (from v1 to tip):
    // cp1: pushes out at the lower belly (convex)
    const rCp1 = rBase + 55;
    const cp1Deg = midDeg - 21.0;
    const cp1x = cx + rCp1 * Math.sin(toRad(cp1Deg));
    const cp1y = cy - rCp1 * Math.cos(toRad(cp1Deg));
    
    // cp2: curves inwards near the tip (concave sweep creating the lotus beak)
    const rCp2 = rTip - 38;
    const cp2Deg = midDeg - 5.5;
    const cp2x = cx + rCp2 * Math.sin(toRad(cp2Deg));
    const cp2y = cy - rCp2 * Math.cos(toRad(cp2Deg));
    
    // Right Flank (from tip to v2):
    // cp3: curves inwards from the tip (concave)
    const cp3x = cx + rCp2 * Math.sin(toRad(midDeg + 5.5));
    const cp3y = cy - rCp2 * Math.cos(toRad(midDeg + 5.5));
    
    // cp4: pushes out at the lower belly (convex)
    const cp4x = cx + rCp1 * Math.sin(toRad(midDeg + 21.0));
    const cp4y = cy - rCp1 * Math.cos(toRad(midDeg + 21.0));
    
    const pathD = `M ${v1x.toFixed(2)} ${v1y.toFixed(2)} C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${tx.toFixed(2)} ${ty.toFixed(2)} C ${cp3x.toFixed(2)} ${cp3y.toFixed(2)}, ${cp4x.toFixed(2)} ${cp4y.toFixed(2)}, ${v2x.toFixed(2)} ${v2y.toFixed(2)}`;
    
    // Central Spine (from base to tip) as in the sketch
    const baseSpineX = cx + rBase * Math.sin(toRad(midDeg));
    const baseSpineY = cy - rBase * Math.cos(toRad(midDeg));
    const spineD = `M ${baseSpineX.toFixed(2)} ${baseSpineY.toFixed(2)} L ${tx.toFixed(2)} ${ty.toFixed(2)}`;
    
    petals.push({ i, midDeg, pathD, spineD });
  }
  return petals;
}

const petals = generateSketchOgeePetals();
petals.forEach(p => {
  console.log(`<!-- Petal ${p.i} (${p.midDeg}°) -->`);
  console.log(`<path d="${p.pathD}" />`);
  console.log(`<path d="${p.spineD}" stroke-width="1.8" />`);
});
