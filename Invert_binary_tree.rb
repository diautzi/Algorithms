=begin
Invert a binary tree.

  Example:

  Input:

       4
     /   \
    2     7
   / \   / \
  1   3 6   9
  Output:

       4
     /   \
    7     2
   / \   / \
  9   6 3   1

=end

def invert_tree(root)
  unless root.nil?
      left = root.left
      right = root.right
      root.right = invert_tree(left)
      root.left = invert_tree(right)
      root
  end
end
