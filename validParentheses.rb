# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
# An input string is valid if:
# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.

# @param {String} s
# @return {Boolean}

def is_valid(s)
    brackets = { '}' => '{', ')' => '(', ']' => '['  }  
    stack = []
    s.each_char do |char|
        if stack.last && stack.last == brackets[char]
            stack.pop
        else 
            stack << char
        end
    end
    stack.empty?
end
