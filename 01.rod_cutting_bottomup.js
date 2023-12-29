// rod_cutting => to cut the rod in a way to meet the total length where the profits are the most
// bottom_up method: store the optimal cut for each sub set in array
// non-recursive => the sub set will be calculated only once
// time_complexity: n**2

let priceList = [0, 1, 5, 8, 9, 10, 17, 17, 20, 21, 23, 24, 26, 27, 27, 28, 30, 33, 36, 39, 40]

function rodCuttingBottomUp(priceList, length) {
    // to store the highest profts of given length
    let mostProfits = []

    // to store the left cut to reach the highest profit of given length
    // to trace back and restore the cuts of the highest profit
    let leftCuts = []

    if (length === 0) {
        mostProfits.push(priceList[0])
        cutLefts.push(0)
    } else {
        mostProfits.push(priceList[0])
        leftCuts.push(0)
        for (let i = 1; i <= length; i++) {
            let mostProfit = priceList[i]
            let leftCut = i
            for (let j = 1; j < i; j++) {
                if (priceList[j] + mostProfits[i - j] > mostProfit) {
                    mostProfit = priceList[j] + mostProfits[i - j]
                    leftCut = j
                }
            }
            mostProfits.push(mostProfit)
            leftCuts.push(leftCut)
        }
    }

    // to store the cuts to reach the highest profit of given length
    // restore the cuts by tracing back the left cuts of each given length
    let cuts = []
    let subLength = length
    while (leftCuts[subLength] > 0) {
        cuts.push(leftCuts[subLength])
        subLength = subLength - leftCuts[subLength]
    }

    return {
        profits: mostProfits[length],
        cuts
    }
}

const { profits, cuts } = rodCuttingBottomUp(priceList, 20)
console.log(profits)
console.log(cuts)