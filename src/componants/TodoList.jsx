

const TodoList = (props) => {
   return (
      <li className="list-item">
         {props.item}
         <span className="icons">
            <i className="fa-solid fa-trash icon-delete" onClick={props.deleteTodo}></i>
         </span>
      </li>
   );
};

export default TodoList;