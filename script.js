const LinkedList = function(){

    const Node = function(val){
        return{
            value: val,
            nextNode: null
        }
    }
    const headNode = Node(null);

    function append(value){
        temp_node = this.headNode;
        if(temp_node.value == null && temp_node.nextNode == null){
            this.headNode = Node(value)
        }
        else{
            while(temp_node.nextNode != null){
                temp_node = temp_node.nextNode
            }
            temp_node.nextNode = Node(value)
        }
        
    }
    function prepend(value){
        temp_node = this.headNode;
        this.headNode = Node(value);
        this.headNode.nextNode = temp_node;
    }
    function size(){
        let sze = 0
        let temp_node = this.headNode

        if (temp_node.value != null){
            sze +=1;
        }

        while (temp_node.nextNode != null){
            temp_node = temp_node.nextNode
            sze +=1
        }
        return sze
    }
    function tail(){
        let temp_node = this.headNode;
        while(temp_node.nextNode!= null){
            temp_node = temp_node.nextNode
        }
        return temp_node
    }
    function at(index){
        let temp_node = this.headNode;
        i = 0
        while (i<index){
            temp_node = temp_node.nextNode;
            i +=1
            if(temp_node.nextNode == null){
                console.log("Last Index Reached");
                break
            }
        }
        if(index>i+1){
            return "List is not so long"
        }
        return temp_node
    }

    function pop(){
        let temp_node = this.headNode
        if(temp_node.nextNode == null){
            temp_node.value = null
        }
        else{
            while(temp_node.nextNode.nextNode != null){
                temp_node = temp_node.nextNode;
            }
            temp_node.nextNode = null;
        }
    }
    function contains(value){
        let temp_node = this.headNode;
        while(temp_node.nextNode != null){
            if(temp_node.value == value){
                return true
            }
            temp_node = temp_node.nextNode
        }
        if(temp_node.value == value){
            return true
        }
        return false
    }
    function toString(){
        let temp_node = this.headNode;
        let str = "";
        while (temp_node.nextNode != null){
            str += temp_node.value + '->'
            temp_node = temp_node.nextNode
        }
        str += temp_node.value + '-> null';
        return str
    }
    return {headNode, append, prepend,size,tail,at,pop,contains,toString}
}
const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString())
console.log(list.contains("turtle"))