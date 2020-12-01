# Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
# @param {Integer[]} nums
# @return {Integer}

def remove_duplicates(nums)
    nums.uniq!
    nums.length
end