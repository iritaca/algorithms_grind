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
}