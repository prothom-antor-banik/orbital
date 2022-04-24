export const pi = Math.PI;

export const factorial = (n) => {
  if (n >= 0) {
    if (n === 0) return 1;
    else if (n === 1) return 1;
    else {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result = result * i;
      }
      return result;
    }
  }
};

export const radian = (degree) => {
  return (degree / 180) * Math.PI;
};

export const degree = (radian) => {
  let degree = (radian / pi) * 180;
  return degree;
};

export const spherToCart = (r, phi, theta) => {
  try {
    let x = r * Math.sin(theta) * Math.cos(phi);
    let y = r * Math.sin(theta) * Math.sin(phi);
    let z = r * Math.cos(theta);
    if (!isFinite(x)) x = 0;
    if (!isFinite(y)) y = 0;
    if (!isFinite(z)) z = 0;
    return [x, y, z];
  } catch (error) {
    return [0, 0, 0];
  }
};
