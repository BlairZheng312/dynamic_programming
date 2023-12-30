// longest common subsequence => to find the longest common subsequence given two sequences

function lcs(str1, str2) {
    let str1Length = str1.length
    let str2Length = str2.length

    // to store the length of the common subsequence
    let lcsMatrix = Array.from({ length: str2Length + 1 }, () => Array.from({ length: str1Length + 1 }, () => 0))

    // to store the directions of the common subsequence
    // 1 => topleft, 2 => top, 3 => left
    let lcsIndex = Array.from({ length: str2Length + 1 }, () => Array.from({ length: str1Length + 1 }, () => 0))
    for (let i = 1; i < str2Length + 1; i++) {
        for (let j = 1; j < str1Length + 1; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                lcsMatrix[i][j] = lcsMatrix[i - 1][j - 1] + 1
                lcsIndex[i][j] = 1
            } else if (lcsMatrix[i][j - 1] > lcsMatrix[i - 1][j]) {
                lcsMatrix[i][j] = lcsMatrix[i][j - 1]
                lcsIndex[i][j] = 3
            } else {
                lcsMatrix[i][j] = lcsMatrix[i - 1][j]
                lcsIndex[i][j] = 2
            }
        }
    }

    // to trace back the longest common subsequence by the lcs index
    // only the subsequence coming from topleft is part of the lcs 
    let lcs = []
    let i = str2Length
    let j = str1Length
    while (i > 0 && j > 0) {
        if (lcsIndex[i][j] === 1) {
            lcs.push(str1[j - 1])
            i -= 1
            j -= 1
        } else if (lcsIndex[i][j] === 2) {
            i -= 1
        } else {
            j -= 1
        }
    }

    return {
        lcsStr: lcs.reverse().join(''),
        lcsLength: lcsMatrix[str2Length][str1Length]
    }
}

const { lcsStr, lcsLength } = lcs('bdcaba', 'abcbdab')
console.log(lcsStr)
console.log(lcsLength)