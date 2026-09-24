function generateOptionBPetals(rBase = 265, rTip = 358, cx = 500, cy = 500) {
  const petals = [];
  const toRad = deg => deg * Math.PI / 180;
  
  for (let i = 0; i < 8; i++) {
    const midDeg = i * 45; // 0, 45, 90, 135, 180, 225, 270, 315
    const startDeg = midDeg - 22.5;
    const endDeg = midDeg + 22.5;
    
    // 1. Base points on inner circle
    const xA = cx + rBase * Math.sin(toRad(startDeg));
    const yA = cy - rBase * Math.cos(toRad(startDeg));
    const xB = cx + rBase * Math.sin(toRad(endDeg));
    const yB = cy - rBase * Math.cos(toRad(endDeg));
    
    // 2. Tip point at outer boundary
    const xT = cx + rTip * Math.sin(toRad(midDeg));
    const yT = cy - rTip * Math.cos(toRad(midDeg));
    
    // 3. Flared, plump shoulder control points (Cubic Bezier)
    // Left flank: from A to Tip
    // cp1 flares outward near base
    const rCp1 = rBase + 35;
    const cp1Deg = midDeg - 21;
    const cp1x = cx + rCp1 * Math.sin(toRad(cp1Deg));
    const cp1y = cy - rCp1 * Math.cos(toRad(cp1Deg));
    
    // cp2 gives the full rounded cheek near shoulder
    const rCp2 = rTip + 4;
    const cp2Deg = midDeg - 9.5;
    const cp2x = cx + rCp2 * Math.sin(toRad(cp2Deg));
    const cp2y = cy - rCp2 * Math.cos(toRad(cp2Deg));
    
    // Right flank: from Tip to B
    // cp3 gives the right shoulder
    const cp3x = cx + rCp2 * Math.sin(toRad(midDeg + 9.5));
    const cp3y = cy - rCp2 * Math.cos(toRad(midDeg + 9.5));
    
    // cp4 flares near base
    const cp4x = cx + rCp1 * Math.sin(toRad(midDeg + 21));
    const cp4y = cy - rCp1 * Math.cos(toRad(midDeg + 21));
    
    // Path: M xA yA C cp1x cp1y, cp2x cp2y, xT yT C cp3x cp3y, cp4x cp4y, xB yB
    const pathD = `M ${xA.toFixed(2)} ${yA.toFixed(2)} C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${xT.toFixed(2)} ${yT.toFixed(2)} C ${cp3x.toFixed(2)} ${cp3y.toFixed(2)}, ${cp4x.toFixed(2)} ${cp4y.toFixed(2)}, ${xB.toFixed(2)} ${yB.toFixed(2)}`;
    
    // Inner contour / double line for rich sacred depth
    const innerRBase = rBase + 12;
    const innerRTip = rTip - 14;
    const inXA = cx + innerRBase * Math.sin(toRad(startDeg + 3));
    const inYA = cy - innerRBase * Math.cos(toRad(startDeg + 3));
    const inXB = cx + innerRBase * Math.sin(toRad(endDeg - 3));
    const inYB = cy - innerRBase * Math.cos(toRad(endDeg - 3));
    const inXT = cx + innerRTip * Math.sin(toRad(midDeg));
    const inYT = cy - innerRTip * Math.cos(toRad(midDeg));
    
    const inCp1x = cx + (innerRBase + 25) * Math.sin(toRad(midDeg - 17));
    const inCp1y = cy - (innerRBase + 25) * Math.cos(toRad(midDeg - 17));
    const inCp2x = cx + (innerRTip - 2) * Math.sin(toRad(midDeg - 7.5));
    const inCp2y = cy - (innerRTip - 2) * Math.cos(toRad(midDeg - 7.5));
    
    const inCp3x = cx + (innerRTip - 2) * Math.sin(toRad(midDeg + 7.5));
    const inCp3y = cy - (innerRTip - 2) * Math.cos(toRad(midDeg + 7.5));
    const inCp4x = cx + (innerRBase + 25) * Math.sin(toRad(midDeg + 17));
    const inCp4y = cy - (innerRBase + 25) * Math.cos(toRad(midDeg + 17));
    
    const innerPathD = `M ${inXA.toFixed(2)} ${inYA.toFixed(2)} C ${inCp1x.toFixed(2)} ${inCp1y.toFixed(2)}, ${inCp2x.toFixed(2)} ${inCp2y.toFixed(2)}, ${inXT.toFixed(2)} ${inYT.toFixed(2)} C ${inCp3x.toFixed(2)} ${inCp3y.toFixed(2)}, ${inCp4x.toFixed(2)} ${inCp4y.toFixed(2)}, ${inXB.toFixed(2)} ${inYB.toFixed(2)}`;
    
    petals.push({ i, pathD, innerPathD, midDeg });
  }
  return petals;
}

const petals = generateOptionBPetals();
petals.forEach(p => {
  console.log(`<!-- Petal ${p.i} (${p.midDeg}°) -->`);
  console.log(`<path d="${p.pathD}" />`);
});
