// rod_cutting => to cut the rod in a way to meet the total length where the profits are the most
// bottom_up method: store the optimal cut for each sub set in array
// non-recursive => the sub set will be calculated only once
// time_complexity: n**2

let priceList = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]

function rodCuttingBottomUp(priceList, length) {
    let bestCuts = []
    if (length === 0) {
        bestCuts.push(priceList[0])
    } else {
        bestCuts.push(...priceList.slice(0, 2))
        for (let i = 2; i <= length; i++) {
            let bestCut = priceList[i]
            for (let j = 1; j < i; j++) {
                bestCut = Math.max(bestCut, priceList[j] + bestCuts[i - j])
            }
            bestCuts.push(bestCut)
        }
    }
    return bestCuts[length]
}

console.log(rodCuttingBottomUp(priceList, 9))