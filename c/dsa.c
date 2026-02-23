#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

struct Node *node(int val)
{
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node *));
    if (!newNode)
    {
        printf("Failed to allocate memory");
        exit(1);
    }
    newNode->data = val;
    newNode->next = NULL;

    return newNode;
}

void printMin(struct Node *n)
{
    int min = n->data;

    while (n != NULL)
    {
        if (min > n->data)
        {
            min = n->data;
        }
        n = n->next;
    }
    printf("%d\n", min);
}

void printNode(struct Node *n)
{

    while (n != NULL)
    {
        printf(" %d ->", n->data);
        n = n->next;
    }
    printf(" NULL\n");
}
void deleteNode(struct Node *n)
{
    if (n == NULL || n->next == NULL)
    {
        printf("Can't delete the node");
        return;
    }
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node *));
    temp = n->next;
    n->data = temp->data;
    n->next = temp->next;
    free(temp);
}
void insertNode(struct Node *n, int val, struct Node *afterNode)
{
    struct Node *newNode = node(val);
    newNode->next = afterNode->next;
    afterNode->next = newNode;
}
void searchNode(struct Node *n, int val)
{
    printf("Searching for %d\n", val);
    struct Node *newNode = n;
    while (newNode != NULL)
    {
        if (newNode->data == val)
        {
            printf("Value %d found\n", val);
            return;
        }
        newNode = newNode->next;
        
    }
    printf("Value %d not found\n", val);
}

// stack using linkedList

struct Stack {
    struct Node *head;
    int size;
};

struct Stack* createNode(){
    struct Stack* newNode = malloc (sizeof(struct Stack));
    if(!newNode){
        printf("Memory allocation failed");
        exit(1);
    }
    newNode->head = NULL;
    newNode->size = 0;
    return newNode;
}

void push(struct Stack* s, int val){
    struct Node* newNode = malloc (sizeof(struct Node));;
    newNode->data = val;
    newNode->next = s->head;
    s->size++;
    
}
int pop(struct Stack* s){
    if(s->size == 0){
        printf("Stack underflow");
        return 0;
    }
    struct Node* popped = s->head;
    s->head = s->head->next;
    int poppedValue = popped->data;
    s->size--;
    free(popped);

    return poppedValue;
 
}


int peek(struct Stack* s){
    if(s->size == 0){
        printf("Stack is empty");
        return 0;
    }
    return s->head->data;
}

int isEmpty(struct Stack* s){
    return s->size == 0;
}
int stackSize(struct Stack* s){
    return s->size; 
}

int main()
{

    struct Node *val1 = node(600);
    struct Node *val2 = node(-2000);
    struct Node *val3 = node(30);
    struct Node *val4 = node(4);
    struct Node *val5 = node(500);

    val1->next = val2;
    val2->next = val3;
    val3->next = val4;
    val4->next = val5;

    struct Node *val6 = node(15);
    // val5->next = NULL;
    // printNode(val1);
    // printMin(val1);
    // // deleteNode(val4);
    // printNode(val1);
    // insertNode(val3, 10, val4);
    // printNode(val1);
    // searchNode(val1, 100);

    free(val1);
    free(val2);
    free(val3);
    free(val4);
    free(val5);

    struct Stack* myStack = createNode();
    push(myStack, 10);
    push(myStack, 20);
    push(myStack, 30);  

    // printf("Top element is %d\n", peek(myStack));
    printf("Stack size is %d\n", stackSize(myStack));
    printf("Pop Elements: %d\n", pop(myStack));
    // printf("Top element is %d\n", peek(myStack));
    printf("Stack size is %d\n", stackSize(myStack));
    printf("Empty status: %d\n", isEmpty(myStack));
    // while(!isEmpty(myStack)){
    //     printf("%d ", pop(myStack));
    // }   

    printf("\n");



    return 0;
}