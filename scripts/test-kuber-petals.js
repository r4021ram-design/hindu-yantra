const fs = require('fs');

function generateVedicAshtadala(rBase = 265, rTip = 380, rBulge = 345, cx = 500, cy = 500) {
  const petals = [];
  const toRad = deg => deg * Math.PI / 180;
  
  for (let i = 0; i < 8; i++) {
    const midDeg = i * 45; // 0, 45, 90, 135, 180, 225, 270, 315 (North centered)
    const startDeg = midDeg - 22.5;
    const endDeg = midDeg + 22.5;
    
    // Base points on base circle
    const xA = cx + rBase * Math.sin(toRad(startDeg));
    const yA = cy - rBase * Math.cos(toRad(startDeg));
    const xB = cx + rBase * Math.sin(toRad(endDeg));
    const yB = cy - rBase * Math.cos(toRad(endDeg));
    
    // Tip point on outer circle
    const xT = cx + rTip * Math.sin(toRad(midDeg));
    const yT = cy - rTip * Math.cos(toRad(midDeg));
    
    // Control points for the authentic lotus flank curvature
    const c1Deg = midDeg - 14;
    const c2Deg = midDeg + 14;
    const c1x = cx + rBulge * Math.sin(toRad(c1Deg));
    const c1y = cy - rBulge * Math.cos(toRad(c1Deg));
    const c2x = cx + rBulge * Math.sin(toRad(c2Deg));
    const c2y = cy - rBulge * Math.cos(toRad(c2Deg));
    
    // Petal path: from A via c1 to Tip, then via c2 to B
    const pathD = `M ${xA.toFixed(2)} ${yA.toFixed(2)} Q ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${xT.toFixed(2)} ${yT.toFixed(2)} Q ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${xB.toFixed(2)} ${yB.toFixed(2)}`;
    
    // Subtle central spine (vein) from base mid to tip * 0.75
    const midBaseX = cx + rBase * Math.sin(toRad(midDeg));
    const midBaseY = cy - rBase * Math.cos(toRad(midDeg));
    const veinTipX = cx + (rBase + (rTip - rBase) * 0.70) * Math.sin(toRad(midDeg));
    const veinTipY = cy - (rBase + (rTip - rBase) * 0.70) * Math.cos(toRad(midDeg));
    const veinD = `M ${midBaseX.toFixed(2)} ${midBaseY.toFixed(2)} L ${veinTipX.toFixed(2)} ${veinTipY.toFixed(2)}`;
    
    petals.push({ i, pathD, veinD, midDeg, xT, yT });
  }
  return petals;
}

const petals = generateVedicAshtadala();
console.log('Generated 8 petals successfully:');
petals.forEach(p => console.log(`Petal ${p.i} (angle ${p.midDeg}°): tip=(${p.xT.toFixed(1)}, ${p.yT.toFixed(1)})`));
