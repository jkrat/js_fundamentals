function heapSort(arr) {
    arr.push(arr[0]);
    arr[0] = undefined;
    var holdCurrentIndex = Math.floor((arr.length - 1) / 2);
    var currentIndex;
    var left;
    var right;
    while (holdCurrentIndex > 0) {
        currentIndex = holdCurrentIndex;
        left = currentIndex * 2;
        right = currentIndex * 2 + 1;
        while (arr[currentIndex] > arr[left] || arr[currentIndex] > arr[right]) {
            if (arr[left] && arr[left] > arr[right]) {
                temp = arr[currentIndex];
                arr[currentIndex] = arr[right];
                arr[right] = temp;
                currentIndex = right;
                left = currentIndex * 2;
                right = currentIndex * 2 + 1;
            } else {
                temp = arr[currentIndex];
                arr[currentIndex] = arr[left];
                arr[left] = temp;
                currentIndex = right;
                left = currentIndex * 2;
                right = currentIndex * 2 + 1;
            }
        }
        holdCurrentIndex -= 1;
    }
    console.log("final: ", arr);
    // console.log(isHeap(arr));
}







// function isHeap(array) {
//     var currentIndex = 1
//     var left = currentIndex * 2;
//     var right = currentIndex * 2 + 1;
//     while(array[left] && array[right]) {
//         left = currentIndex * 2;
//         right = currentIndex * 2 + 1;
//         if (array[currentIndex] > array[left] || array[currentIndex] > array[right] ) {
//             return array[currentIndex] > array[left]? `error at index: ${left}` : `error at index: ${right}`;
//         } else {
//             currentIndex ++;
//         }
//     }
//     if (array[left]) {
//         if (array[currentIndex] > array[left]) {
//             return `error at index: ${left}`;
//         }
//     }
//     return true;
// }




heapSort([20, 3, 18, 14, 9, 56, 2,45,13,8,63,24,80,7,5,3,54,65,35,78,22,11,1,90,30])