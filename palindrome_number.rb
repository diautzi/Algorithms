# Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
# @param {Integer} x
# @return {Boolean}

def is_palindrome(x)
    rev = x.to_s.reverse.to_i
    return rev == x
end