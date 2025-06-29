const onClickAdd = () => {
  // テキストボックスの値を取得して、入力欄を空にする処理
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // 未完了リストに追加
  createIncompleteTodo(inputText);
};

// 渡された引数を基に未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
  // liタグを生成する処理
  const li = document.createElement("li");

  // divタグを生成する処理
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグを生成する処理
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo; // 引数で渡された値を設定する

  // 完了ボタン実装
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタンを押した時に親のliタグ配下の完了、削除ボタンを削除する処理
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove(); // 削除ボタンを削除
    completeButton.remove(); // 完了ボタンを削除
    // 戻すボタンを生成してdivタグ配下に設定する
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻すボタンを押した時、未完了リストに戻す処理
    backButton.addEventListener("click", () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      // 押された戻すボタンの親のliタグを削除する処理
      backButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);
    // 完了リストに追加する処理
    document.getElementById("complete-list").appendChild(moveTarget);
  });
  // 削除ボタン実装
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // 小孫関係を構築する処理
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // id指定の時は　document.getElementById("id名")
  // id名がついた要素の子要素としてliをappendする処理
  // .appendChildはどんどん下に追加される
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
