const TodoItem = ({ name, onDelete, statusChangerFn, status }) => {
  return (
    <li style={{ backgroundColor: status === 'DONE' ? 'green' : 'red' }}>
      <input
        type="checkbox"
        checked={status === 'DONE'}
        onChange={(e) => statusChangerFn(e.target.checked)}
      />
      <span>{name}</span>
      <button disabled={status === 'DOING'} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
