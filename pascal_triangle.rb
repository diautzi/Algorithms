# Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
# @param {Integer} num_rows
# @return {Integer[][]}

def generate(num_rows)
    
    triangle = []
    num_rows.times do |i| 
        triangle << [1] * (i + 1) 
    end
    
    (1...num_rows).each do |i|
      (1...i).each do |j|
          triangle[i][j] = triangle[i-1][j-1] + triangle [i - 1][j]
      end
    end
    triangle
end