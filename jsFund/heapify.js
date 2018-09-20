function heapify(arr) {
    arr.push(arr[0]);
    arr[0] = undefined;
    var holdCurrentIndex = Math.floor((arr.length - 1) / 2);
    var currentIndex = holdCurrentIndex;
    var left;
    var right;
    while (holdCurrentIndex > 0) {
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
                currentIndex = left;
                left = currentIndex * 2;
                right = currentIndex * 2 + 1;
            }
        }
        holdCurrentIndex -= 1;
    }
    console.log("final: ", arr);
}

heapify([20, 3, 8, 14, 9, 6, 2])