# 1590. Make Sum Divisible by P

### Problem Statement
Check the full problem description on LeetCode: [Divide Players Into Teams of Equal Skill](https://leetcode.com/problems/make-sum-divisible-by-p/description/?envType=daily-question&envId=2024-10-03)

Given an array of positive integers `nums`, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by `p`. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.
 
### Example 1:
```
 Input: nums = [3,1,4,2], p = 6
 Output: 1
 Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
```

### Constraints:

- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 109`
- `1 <= p <= 109`