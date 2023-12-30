// gcd => greatest common divisor
// lcm => least common multiple

class Fraction {
    constructor(denominator, numerator) {
        this.denominator = denominator
        this.numerator = numerator
        this.divisor = this.gcd(denominator, numerator)
    }

    // to find the gcd of two given numbers
    gcd(a, b) {
        while (b > 0) {
            let temp = a
            a = b
            b = temp % b
        }
        return a
    }

    // given two integers, to put it in fraction format
    getFraction(denominator = this.denominator, numerator = this.numerator, divisor = this.divisor) {
        return `${denominator / divisor}/${numerator / divisor}`
    }

    // add two fractions
    addFraction(addition) {
        let lcm = this.numerator * addition.numerator / this.gcd(this.numerator, addition.numerator)
        let addedDenominator = this.denominator * lcm / this.numerator + addition.denominator * lcm / addition.numerator
        let addedNumerator = lcm
        let addGCD = this.gcd(addedDenominator, addedNumerator)
        return this.getFraction(addedDenominator, addedNumerator, addGCD)
    }
}

let num1 = new Fraction(15, 12)
console.log(num1.getFraction())
let num2 = new Fraction(3, 16)
console.log(num1.addFraction(num2))
