//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

//Example:

//Input: 38
//Output: 2 
      //Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
      //Since 2 has only one digit, return it.
      
def add_digits(num)
    sum = 0
    arr = num.to_s.split("")
    arr.map do |num|
        sum += num.to_i
    end
    
    if sum.to_s.split("").length == 1
        sum.to_i
    else
        add_digits(sum)
    end
end
