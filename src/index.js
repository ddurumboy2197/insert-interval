function insertInterval(intervals, newInterval) {
    let result = [];
    let i = 0;

    // Yangi intervaldan oldin barcha intervalni qo'shish
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Yangi interval bilan birlashgan intervalni qo'shish
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    result.push(newInterval);

    // Qolgan intervalni qo'shish
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// Test qo'llanishi
let intervals = [[1, 3], [6, 9]];
let newInterval = [2, 5];
console.log(insertInterval(intervals, newInterval));
// Output: [[1, 5], [6, 9]]

intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
newInterval = [4, 8];
console.log(insertInterval(intervals, newInterval));
// Output: [[1, 2], [3, 10], [12, 16]]
