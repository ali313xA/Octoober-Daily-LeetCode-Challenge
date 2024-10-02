# 1497. Check If Array Pairs Are Divisible by k

## Problem Statement
Check the full problem description on LeetCode: [Check If Array Pairs Are Divisible by k](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/description/?envType=daily-question&envId=2024-10-01)

Given an array `arr` of even length `n` and an integer `k`, determine if the array can be divided into `n/2` pairs such that the sum of each pair is divisible by `k`.

### Example:
- Input: `arr = [1,2,3,4,5,10,6,7,8,9]`, `k = 5`
- Output: `true`
- Explanation: Pairs like `(1,9), (2,8), (3,7), (4,6), and (5,10)` are divisible by 5.

## Approach
Calculate remainders when dividing each element by k and ensure pairs of remainders can sum up to k.

### Time Complexity: `O(n)`
### Space Complexity: `O(n)`