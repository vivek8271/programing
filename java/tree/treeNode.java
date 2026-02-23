import com.sun.source.tree.Tree;
import java.util.*;

class treeNode{

    public static class TreeNode{
        int val;
        treeNode left;
        treeNode right;
        public TreeNode(int val){
            this.val = val;
            this.left = null;
            this.right = null;
        }

    }
    // public static treeNode (int val){
    //     this.val = val;
    //     this.left = null;
    //     this.right = null;
    // }
    public static TreeNode createTreeNode(int val){
        return new TreeNode(val);
    }
    public static void main(String[] args) {
        TreeNode root = createTreeNode(10);
        TreeNode val1 = createTreeNode(5);
        TreeNode val2 = createTreeNode(15);
        TreeNode val3 = createTreeNode(3);
        TreeNode val4 = createTreeNode(7);

        root.left = val1;
        root.right = val2;
        val1.left = val3;
        val1.right = val4;   

        

        System.out.println("Root Value: " + root.val);
        // System.out.println("Left Child of Root: " + root.left);
        // System.out.println("Right Child of Root: " + root.right.val);
    }
}