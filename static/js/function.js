import { factorial, pi } from "./utils.js";

//normalization constant 
export const normalizationConst = (l, m) => {
  return Math.sqrt(
    ((2 * l + 1) * factorial(l - m)) / (4 * pi) / factorial(l + m)
  );
};

//legendre polynomial
export const legendrePoly = (l, x) => {
  if (l == 0) return 1;
  else if (l == 1) return x;
  else
    return (
      (1 / l) *
      ((2 * l - 1) * x * legendrePoly(l - 1, x) -
        (l - 1) * legendrePoly(l - 2, x))
    );
};

//associated legendre ploynomial
export const associatedLeg = (l, m, x) => {
  try {
    if (m == 0) return legendrePoly(l, x);
    else if (m > 0)
      return (
        (1 / Math.sqrt(1 - x ** 2)) *
        ((l - m + 1) * x * associatedLeg(l, m - 1, x) -
          (l + m - 1) * associatedLeg(l - 1, m - 1, x))
      );
    else {
      m = Math.abs(m);
      return (
        (-1) ** m *
        (factorial(l - m) / factorial(l + m)) *
        associatedLeg(l, m, x)
      );
    }
  } catch (error) {
    return 0;
  }
};

//calculating the wave equation
export const calculate = (l, m, x, phi) => {
  if (m >= 0)
    return (
      Math.cos(m * phi) * associatedLeg(l, m, x) * normalizationConst(l, m)
    );
  else {
    m = Math.abs(m);
    return (
      Math.sin(m * phi) * associatedLeg(l, m, x) * normalizationConst(l, m)
    );
  }
};