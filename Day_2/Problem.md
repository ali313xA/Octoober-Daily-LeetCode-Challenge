# 1331. Rank Transform of an Array

## Problem Statement
Check the full problem description on LeetCode: [Rank Transform of an Array](https://leetcode.com/problems/rank-transform-of-an-array/description/?envType=daily-question&envId=2024-10-02)

Given an array `arr` of even length `n` and an integer `k`, determine if the arrGiven an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.
 

Example 1:

Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
Example 2:

Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.
Example 3:

Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]
 
## Approach
Sort the array and assign ranks to unique elements using a hash map.
Replace each element in the original array with its corresponding rank.

### Time Complexity: `O(n log n)`
due to sorting.

### Space Complexity: `O(n)`
The space complexity is O(n) for the hash map, sorted array, and result array.

