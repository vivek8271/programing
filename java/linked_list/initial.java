
class initial {

    static class Node {

        int val;
        Node next;

        Node(int data) {
            this.val = data;
            this.next = null;
        }
    }

    static Node deleteNode(Node head, Node key) {
        if (head == key) {
            return head.next;
        }
        Node currentNode = head;
        while (currentNode != null && currentNode != key) {
            currentNode = currentNode.next;
        }
        if (currentNode == null) {
            return head;
        }
        currentNode.next = currentNode.next.next;
        return head;
    }

    static Node insertNode(Node head, Node insertKey, int position){
        if(position ==0){
            return head.next = insertKey;
        }
        Node currentNode = head;
        for(int i=0; i<position; i++){
            position--;
            currentNode = head.next;
            if(position == 0){
                head.next = insertKey;
                insertKey.next = head.next;
            }
        }
        return head;
    }

    public static void main(String[] args) {

        Node firstNode = new Node(1);
        Node secondNode = new Node(2);
        Node thirdNode = new Node(3);
        Node fourthNode = new Node(4);

        firstNode.next = secondNode;
        secondNode.next = thirdNode;
        thirdNode.next = fourthNode;
        fourthNode.next = null;

        Node currentNode = firstNode;

        while (currentNode != null) {
            System.out.print(currentNode.val + "->");
            currentNode = currentNode.next;
        }
        System.out.println("null");
        Node newNode = deleteNode(firstNode, secondNode);
        
        while (newNode != null) {
            System.out.print(newNode.val + "->");
            newNode = newNode.next;
        }

        Node fifthNode = new Node(5);
        Node insert = insertNode(currentNode, fifthNode, 4);
        while (insert != null) {
            System.out.print(insert.val + "->");
            insert = insert.next;
        }
        // Node startNode = firstNode;
        // System.out.print(startNode.val+"->");
        // Node temp = startNode.next;
        // while(startNode!=temp){
        //     System.out.print(temp.val+"->");
        //     temp= temp.next;
        // }
        System.out.println("null");
    }

}
