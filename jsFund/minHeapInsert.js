class Heap {
    constructor() {
        this.heap = [];
        this.heap[0] = undefined;
    }
    insert(val) {
        if (!this.heap[1]) {
            this.heap[1] = val;
        } else {
            this.heap.push(val);
            var currentIndex = this.heap.length - 1;
            var parentIndex = Math.floor(currentIndex / 2);
            while (currentIndex > 1  && val < this.heap[parentIndex]) {
                var temp = this.heap[parentIndex];
                this.heap[parentIndex] = val;
                this.heap[currentIndex] = temp;
                currentIndex = parentIndex;
                parentIndex = Math.floor(currentIndex / 2);  
            }
        }
        this.display();
        return this;
    }
    remove() {
        var min;
        var temp;
        if (this.heap) {
            if (this.heap.length === 2) {
                min = this.heap.pop();
            } else {
                min = this.heap[1];
                this.heap[1] = this.heap.pop();
                var currentIndex = 1;
                var left = currentIndex * 2;
                var right = currentIndex * 2 + 1;
                while (this.heap[currentIndex] > this.heap[left] || this.heap.currentIndex > this.heap[right]) {
                    if (this.heap[left] && this.heap[left] > this.heap[right]) {
                        temp = this.heap[currentIndex];
                        this.heap[currentIndex] = this.heap[right];
                        this.heap[right] = temp;
                        currentIndex = right;
                        left = currentIndex * 2;
                        right = currentIndex * 2 + 1;
                    } else {
                        temp = this.heap[currentIndex];
                        this.heap[currentIndex] = this.heap[left];
                        this.heap[left] = temp;
                        currentIndex = left;
                        left = currentIndex * 2;
                        right = currentIndex * 2 + 1;
                    }
                }
            }
        }
        this.display();
        console.log(min);
        return this;
    }
    
    display() {
        console.log(this.heap);
    }
}


var heap1 = new Heap;
heap1.insert(10).insert(20).insert(1).insert(15).insert(80).insert(25).insert(70).insert(5)
heap1.remove();



// removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]);
// // changes the heap to [undefined, 8, 12, 10, 17, 13, 15] and returns 3
// removeFromMinHeap([undefined, 8]);