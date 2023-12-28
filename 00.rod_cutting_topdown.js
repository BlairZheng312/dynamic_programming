// dynamic programming: to divide problem into smaller sub set
// each sub set reach the optimal result => the final solution will be optimal

// rod_cutting => to cut the rod in a way to meet the total length where the profits are the most
// top_down method: recursive => the sub set will be re-calculated
// time_complexity: 2**n

let priceList = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]

function rodCuttingTopDown(priceList, length) {
    if (length === 0) {
        return 0
    } else {
        let bestCut = priceList[length]
        for (let i = 1; i < length; i++) {
            bestCut = Math.max(bestCut, priceList[i] + rodCuttingTopDown(priceList, length - i))
        }
        return bestCut
    }
}

console.log(rodCuttingTopDown(priceList, 9))
