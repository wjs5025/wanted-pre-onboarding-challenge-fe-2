/** createTodo() : todo를 추가하는 함수
 * @param todo_list todo을 추가할 대상 todo_list
 * @param id 추가할 todo의 id
 * @param content 추가할 todo의 내용
 * @param done 추가할 todo의 완료 여부
 * @param category 추가할 todo의 카테고리
 * @param tags 추가할 todo의 태그 목록
 * @returns todo가 추가된 todo_list 반환
 */
const createTodo = (todo_list, id, content, done, category, tags) => {
  tags
    ? todo_list.push({ id, content, done, category, tags })
    : todo_list.push({ id, content, done, category });
  return todo_list;
};

/** readTodo() : todo를 조회하는 함수 (모든 todo를 조회하려면, 매개변수 id를 생략한다.)
 * @param todo_list todo을 조회할 대상 todo_list
 * @param id 조회할 특정 todo의 id
 * @returns 조회 결과로 todo 목록 반환
 */
const readTodo = (todo_list, id) => {
  if (id) {
    return todo_list.filter((el) => el.id === id);
  } else {
    return todo_list;
  }
};

/** updateTodo() : todo를 수정하는 함수
 * @param todo_list todo을 수정할 대상 Todo 목록
 * @param id 수정할 todo의 id
 * @param content 수정할 todo의 내용
 * @param done 수정할 todo의 완료 여부
 * @param category 수정할 todo의 카테고리
 * @param tags 수정할 todo의 태그 목록
 * @returns 수정 완료 된 todo 목록 반환
 */
const updateTodo = (todo_list, id, content, done, category, tags) => {
  // todo_list에서 id를 가진 todo를 update
  const todo = todo_list.find((el) => el.id === id);
  if (content) {
    todo.content = content;
  }
  if (done) {
    todo.done = done;
  }
  if (category) {
    todo.category = category;
  }
  if (tags) {
    todo.tags = tags;
  }

  return todo_list;
};

/** deleteTodo() : todo을 삭제하는 함수
 * @param todo_list todo을 삭제할 대상 Todo 목록
 * @param id 삭제할 특정 todo의 id
 * @returns 삭제 완료 된 todo 목록 반환
 */
const deleteTodo = (todo_list, id) => {
  // todo_list에서 id를 가진 todo를 delete
  return todo_list;
};
