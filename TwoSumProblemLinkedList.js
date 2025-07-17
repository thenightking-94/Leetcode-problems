
// Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let current = head;
    let bal = 0, node;
    while(l1!=null || l2!= null || bal != 0){
        const v1 = l1?.val ? l1.val : 0;
        const v2 = l2?.val? l2.val : 0;
        const digit = v1 + v2 + bal;
        bal = (Math.floor((v1+v2+bal)/10));
        current.next = new ListNode(Math.floor(digit%10))
        current = current.next;
        if(l1)
        l1 = l1.next
        if(l2)
        l2=l2.next
    }
    return head.next
};
