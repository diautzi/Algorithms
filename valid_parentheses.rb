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