import java.util.*;
class linkedList{
    static LinkedList<String>[] myList = new LinkedList[10];
    
    public static void main(String[] args) {
        for(int i=0;i<myList.length;i++){
            myList[i] = new LinkedList<>();
        }

        add("Apple");
        add("Banana");
        add("Carrot");
        add("Date");
  

        for(LinkedList<String> li : myList){
            System.out.println(li);
        }
        System.out.println(isContains("Banana")); 
        System.out.println(isContains("Fig"));   
    }
    public static void add(String item){
        int index = hashFunction(item);
        LinkedList<String> bucket = myList[index];
        if(isContains(item)){
            System.out.println(item + " is already in the list.");
        } else {
            bucket.add(item);
            System.out.println(item + " added to the list.");
        }
    }
    public static int hashFunction(String item){
        int sum = 0;
        for(char c: item.toCharArray()){
            sum += (int)c;
        }
        return sum % 10;
    }
    public static boolean isContains(String item){
        return myList[hashFunction(item)].contains(item);
    }

} 