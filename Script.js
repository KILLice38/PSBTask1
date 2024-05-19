"use strict"

let nums1 = [3, 4, 6, 8, 0, 0, 0],
    nums2 = [1, 3, 5],
    n = nums2.length,
    m = nums1.length - n;

let pointOfFirstArray = m - 1,
    pointOfSecondArray = n - 1,
    pointOfCommonArray = m + n - 1;

while (pointOfFirstArray >= 0 && pointOfSecondArray >= 0) {
    if (nums1[pointOfFirstArray] > nums2[pointOfSecondArray]) {
        nums1[pointOfCommonArray] = nums1[pointOfFirstArray];
        pointOfFirstArray--;
    } else {
        nums1[pointOfCommonArray] = nums2[pointOfSecondArray];
        pointOfSecondArray--;
    }
    pointOfCommonArray--;
};


console.log(nums1);
