# Common Algorithms & Data Structures in TypeScript

![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=101)

## Writing Readable Code

The Internet is full of algorithms implemented in efficient ways, but written horribly in terms of separation of concerns, variable naming, etc.

This repo is my attempt to write both efficient **and** readable algorithms. Please let me know your thoughts.

## Get started

```
$ yarn
```

```
$ yarn test
```

Use this to run the unit tests. It also watches for any changes in the current directory. So feel free to hack the code, save the file and you'll see right away if the tests pass. Exit with `Ctrl+C`.

## Algorithms

### [Min-Heap](https://github.com/zendka/algorithms-and-data-structures/blob/master/src/MinHeap.ts)

The Min-Heap data structure is useful for inserting values in O(log N) time and getting the minimum in O(1) time. Removing the minimum is done in O(log N) time and the space complexity is, as you expect, O(N).

The data structure uses a Binary Tree in which each node's value is less than its childrens'.  
Inserting a new value needs to be made such that it respects the above condition. Let's say we create a new leaf node with a given value. If it doesn't respect the condition (i.e. its value is greater than its parent's) then we swap it with its parent. We repeat the process until its value is greater than its parent's. At this point the Min-Heap is restored and the insertion process is completed.

For a Balanced Binary Tree insertion takes O(log N) time. But how can we insure we have a Balanced Tree?  
We can use a Complete Binary Tree, were we always insert into and remove from the last level.

A convenient way to implement a Complete Binary Tree is using an array. Although maybe not intuitive at the first sight, there's an easy to way to calculate a node's parent and children based on its position in the array. See [Complete Binary Tree in Array](https://github.com/zendka/algorithms-and-data-structures/blob/master/src/CompleteBinaryTreeInArray.ts) for more details.

### [Merge Sort](https://github.com/zendka/algorithms-and-data-structures/blob/master/src/mergeSort.ts)

### [Bitmap](https://github.com/zendka/algorithms-and-data-structures/blob/master/src/BitMap.ts)

### [Multi Set](https://github.com/zendka/algorithms-and-data-structures/blob/master/src/MultiSet.ts)

## Problems

- [Find all permutations of a given string with duplicate characters](https://github.com/zendka/algorithms-and-data-structures/blob/master/src/PermutationsWithDuplicates.ts)
