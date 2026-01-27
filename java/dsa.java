class dsa{

    static class Node{
        int data;
        Node next;
        Node(int data){
            this.data = data;
            this.next = null;
        }
    }
    public static void printNode(Node n){
        Node curr = n;
        while(curr!=null){
            System.out.print(curr.data+ " -> ");
            curr = curr.next;
        }
        System.out.println("null");
    }
    public static void printMin(Node n){
        int min = n.data;
        while(n!=null){
            if(min>n.data){
                min = n.data;
            }
            n=n.next;
        }
        System.out.println(min);
    }
    public static void deleteNode(Node n){
        if(n==null || n.next==null){
            System.out.println("Can't delete the node");
            return;
        }
        Node temp = n.next;
        n.data = temp.data;
        n.next = temp.next;
    }
    public static void main(String[] args){
        Node val1 = new Node(10);
        Node val2 = new Node(20);
        Node val3 = new Node(30);
        Node val4 = new Node(40);
        Node val5 = new Node(-50);

        val1.next = val2;
        val2.next = val3;
        val3.next = val4;
        val4.next = val5;

        val5.next = null;
        Node curr = val1;
       

        printNode(curr);
        printMin(curr);
        deleteNode(val4);
        printNode(curr);
    }
}