var mergeTwoLists = function (list1, list2) {
  let node = new ListNode();
  let start = node;
  console.log(start);
  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }
  node.next = list1 || list2;
  return start.next;
};
