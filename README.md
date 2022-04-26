Electron is spooky and filled with uncertainty.
But Erwin Rudolf Josef Alexander Schrödinger the Austrian-Irish physicist brought the uncertain behaviour to certainity through his highly intuitive wave equation.

Schrödinger's equation has many forms.
The spherical Harmonic function of the Schrödinger Equation for the hydrogen atom is Y(r, θ, φ).
θ and φ is point in spherical coordinate system which describes the position of a point in 3d space similar to Cartesian coordinates.

Y(r, θ, φ) is further split into two parts.
Where, 
    Y(r, θ, φ) = R(r) x Y(θ, φ).
Here, 
    R(r) is the Radial Probability Distribution function which depends on the radius r.
    Y(θ, φ) is the Angular Probability Distribution function and it depends on the 
Azimuthal (l) and Magnetic(m) quantum numbers.

  The Spherical Harmonic function Y(θ,φ) provide information about the shape of the 
orbital or in other words the path taken by the electron to travel around the nucleus, and the radial function R(r) describes how far the electron is away from the proton.

  In my code I have worked with the Angular part of the function.
Because for a certain orbital the value of Radial function is just a 
constant which describes the distance between the electron and the 
nucleus which is irrelevant for my purpose as I just want to draw the 
shape of the orbital.

Calculation :

Y(θ, φ) = N(l, m) x P <sup> m</sup><sub>l</sub>(cosθ) x e<sup>imφ</sup>

Here,
N(l, m) stands for Normalisation Constant which depends on l, m.
P<sup>m</sup><sub>l</sub>(cosθ) stands for Associated Legendre Polynomial which depends on l, m and cosθ.
e<sup>imφ</sup> is Euler's equation, e raised to the power of (i x m x φ).

• Legendre Polynomial
https://en.m.wikipedia.org/wiki/Legendre_polynomials

• Associated Legendre Polynomial
https://en.m.wikipedia.org/wiki/Associated_Legendre_polynomials

• How to calculate Legendre Polynomial
https://youtu.be/17AaRCeejh8

  These above links provide all the mathematical formula to calculate
the Polynomial part.The other two parts are constants so easy to calculate, just putting value in the formula.

This functions are calculated in function.js file.

  After calculating Y the square of Y gives the probability to find the 
electron at θ, φ spherical coordinate. Then the θ, φ is converted into 
3d Cartesian coordinate(x, y, z) with spherToCart function in utils.js file. Plotting the (x, y, z) gives the desired shape.

  The plotting is done by Plotly.js library which is really good for 
plotting but not responsive at all.I had to put some additional styling to make it responsive which is in the plot.js file looking redundant but important.

• To know about Hydrogen Wave Function

https://youtube.com/playlist?list=PLrUDBH2CfIykFmjq0b_fBPKj-3qqicI7f

https://youtu.be/V-RPM3e8Ws0

Plotting the orbitals with Plotly.js library was easy.
But the physicists worked so hard to discover this equation so full respect towards their hardship.
