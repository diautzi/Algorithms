=begin
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
=end


def subsets(nums)
  results = [[]]
  nums.each do |num|
    results += results.map { |result| result + [num] }
  end
  results
end
