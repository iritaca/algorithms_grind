class ListNode{
    value: number
    next: ListNode|null
    constructor(value:number){
        this.value = value
        this.next=null
    }
}

class LinkedList{
    tail:ListNode|null
    head:ListNode|null
    length: number

    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    push(value:number):void{
        const newNode = new ListNode(value)

        // Scenario A : Empty list
        if(this.head===null){
            this.head=newNode
            this.tail=newNode
        }else{
            // Scenario B: non-empty list
            if(this.tail){
            this.tail.next=newNode
            this.tail = newNode
            }
            
        }

        this.length++
    }

    pop():number|undefined{
         if(this.length===0) return undefined

         if(this.head===this.tail){
            const removedValue = this.head?.value
            this.head = null
            this.tail=null
            this.length--
            return removedValue
         }

         let current=this.head

         
         while(current&&current.next !== this.tail){
            current=current.next
         }

         if(current!==null && current.next !== null){
            const removedValue = current.next.value
            current.next=null
            this.tail = current
            this.length--

            return removedValue
         }
         
         
    }
/**
 * 
 * Given a Linked List and a number N, write a function 
 * that returns the value at the Nth node from the end 
 * of the Linked List.
 */
    valueAtTheEnd(nth:number):number|undefined{
        if(this.length===0) return undefined

        let current = this.head

        for(let i =0;i<this.length - nth;i++){
            current=current?.next??null
        }

        return current?.value
    }

    /**
     * Delete a node
     * 
     * There is a singly-linked list head and we want to delete a node node in it.
     * You are given the node to be deleted node. 
     * You will not be given access to the first node of head.
     * All the values of the linked list are unique, and it is guaranteed that 
     * the given node node is not the last node in the linked list.
     * Delete the given node. Note that by deleting the node, 
     * we do not mean removing it from memory. We mean:
     * The value of the given node should not exist in the linked list.
     * The number of nodes in the linked list should decrease by one.
     * All the values before node should be in the same order.
     * All the values after node should be in the same order.
     */

    deleteNode(node:ListNode):void{
        if(node.next){
            node.value = node.next.value
            node.next= node.next.next
        }
    }

    reverseList(head:ListNode):ListNode|null{
        let prev:ListNode|null = null
        let current:ListNode|null = head 
        while(current !== null){
            let next:ListNode|null = current.next
            current.next=prev
            prev=current
            current=next 
        }
        return prev
    }

    /**
     * Merge 2 sorted Linked Lists
     * 
     * You are given thea heads of 2 sorted linked lists
     * l1 and l2
     * 
     * Merge the two lists into one sorted linked list and
     * return the head of the new sorted linked list.
     * 
     * The new list should be made up of nodes from l1 and l2
     * 
     * E.g.
     * Input: list1 = [1,2,4], list2 = [1,3,5]
     * Output: [1,1,2,3,4,5]
     * 
     * Or
     * Input: list1 = [], list2 = [1,2]
     * Output: [1,2]
     * 
     * Or 
     * Input: list1 = [], list2 = []
     * Output: []
     */
    twoMergedLists(list1:ListNode|null,list2:ListNode|null){
        const dummy = new ListNode(0)
        let tail = dummy
        let p1=list1, p2=list2
        while(p1!==null&&p2!==null){
            if(p1.value<p2.value){
                tail.next = p1
                p1=p1.next
                tail=tail.next
            }else{
                tail.next=p2
                p2=p2.next
                tail=tail.next
            }
        }
        if(p1===null){
            tail.next=p2
        }else{
            tail.next=p1
        }
        return dummy.next
    }
    /**
     * Linked List Cycle Detection 
     * 
     * Given the beginning of a linked list head, return true if 
     * there is a cycle in the linked list. Otherwise, return false.
     * There is a cycle in a linked list if at least one node in the list
     * can be visited again by following the next pointer.
     * 
     * Internally, index determines the index of the beginning of
     * the cycle, if it exists. The tail node of the list will set 
     * it's next pointer to the index-th node. If index = -1, then 
     * the tail node points to null and no cycle exists.
     */
    hasCycle(head:ListNode|null):boolean{
        const visited = new Set()
        let current = head

        while(current!==null){
            if(visited.has(current)){
                return true
            }
            visited.add(current)
            current=current.next
        }

        return false
    }

    /**
     * Remove Nth node from End of List
     * 
     * Given the head of a linked list and an integer n, 
     * remove the nth node from the end of the list and return its head.
     * 
     */
    removeNthFromEnd(head:ListNode|null, n:number):ListNode{
        let fast=head, slow=head
        
        // Move fast forward n times
        for(let i =0;i<n;i++){
            fast=fast?.next
        }

        // special case - removing the head itself
        if(fast===null){
            return head?.next
        }

        // move fast and slow together until fast.next is null
        while(fast.next!==null){
            fast = fast?.next
            slow= slow?.next
        }

        // Remove the target node
        slow?.next=slow?.next?.next

        // Step 5: return the orginal head
        return head
    }

    removeDuplicates(head:ListNode):ListNode{
       
        let current=head
        while(current!==null){
            if(current.value === current.next?.value){
                current.next=current.next.next
            }else{
                current=current.next
            }
            
        }
        return head
    }

    removeElements(head:ListNode,val:number):ListNode{
        const dummy = new ListNode(0)
        dummy.next=head
        let prev = dummy
        let current = head
        while(current!==null){
            if(current.value===val){
                prev.next=prev.next.next
                current=current.next
            }else{
                current=current.next
                prev=prev.next
            }
        }
        return dummy.next

    }
}