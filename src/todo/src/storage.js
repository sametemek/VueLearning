const TODO_KEY = "todo-items";

function generateId(){
    return `_${Math.random().toString(36).substr(2,9)}`
}

function getItems(){
    var items = localStorage.getItem(TODO_KEY);

    if(!items){
        return [];
    }
    return JSON.parse(items);
}

function saveItem(items){
    localStorage.setItem(TODO_KEY,JSON.stringify(items));
}
export default {
    getItems(){
        let items = getItems();

        items.forEach(item => {
            if(item.dueDate){
                item.dueDate = new Date(item.dueDate);
            }
        });

        return items;
    },

    addItem(title,dueDate){
        let todo = {
            id : generateId(),
            title
        };

        if(dueDate){
            // yyyy-m-d
           let parts = dueDate.split('-');
           todo.dueDate = new Date(parts[0],parts[1]-1,parts[2]);
        } 

        let items = getItems();

        items.push(todo);

        saveItem(items);
    }

}