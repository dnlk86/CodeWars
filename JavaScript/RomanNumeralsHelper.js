// Roman Numerals Helper

class RomanNumerals {
    static romanNums = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"],
    ];

    static toRoman(num) {
        let res = [];
        let numArr = num.toString(10).split("").reverse();
        res = numArr.map((v, i) => this.romanNums[i][Number(v)]);
        return res.reverse().join("");
    }

    static fromRoman(num) {
        let res = [];
        for (let i = this.romanNums.length - 1; i >= 0; i--) {
            for (let j = this.romanNums[i].length; j >= 0; j--) {
                if (num.startsWith(this.romanNums[i][j])) {
                    res.push(j);
                    num = num.replace(this.romanNums[i][j], "");
                    break;
                }
                j === 0 && res.push(0);
            }
        }
        return Number(res.join(""));
    }
}

module.exports = RomanNumerals;
