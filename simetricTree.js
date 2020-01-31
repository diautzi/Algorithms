//Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3
 
//But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3


let isSymmetric = function(root) {
    if(!root) return true;
    
    let isSymmetricHelper = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        
        return (isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left));
    }
    return isSymmetricHelper(root.left, root.right);
};
