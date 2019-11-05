Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }
    let less = l1.val < l2.val ? l1 : l2;
    let more = l1.val < l2.val ? l2 : l1;
	
    less.next = mergeTwoLists(less.next, more)
    return less;
};
