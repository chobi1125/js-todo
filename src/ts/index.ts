let $ = (e:string)=> document.getElementById(e);
let l = (e:any)=> console.log(e);
let elem = (e:any) => document.createElement(e);

let result:HTMLInputElement = <HTMLInputElement>$("result");
let addBtn:HTMLInputElement = <HTMLInputElement>$("addBtn");
let addTodo:HTMLInputElement = <HTMLInputElement>$("addTodo");

// エンターキーで追加
let enter = () => {
  addTodo.onkeypress = (e) => {
    const key = e.keyCode || e.charCode || 0;
    // 13はEnterキーのキーコード
    if (key == 13) {
      addFC();
    }
  }
}
// 追加機能
let addFC = ()=> {
  if (addTodo.value != "") {
    let div = elem('div');
    div.id = `div`;
    result.appendChild(div);
    let input = elem('input');
    input.id = `todo`;
    input.value = String(addTodo.value);
    div.appendChild(input);
    let delBtn = elem('button');
    let editBtn = elem('button');
    delBtn.id = `delBtn`;
    delBtn.textContent = "削除";
    delBtn.onclick = "click()";
    editBtn.id = `editBtn`;
    editBtn.textContent = "更新";
    div.appendChild(delBtn);
    div.appendChild(editBtn);
    addTodo.value = "";
  }
}
// 更新・削除機能
result.addEventListener('click', (event:any) => {
  let eventElem:any = event.target;
  let parentElem :any = eventElem.parentNode;
  let input:any = parentElem.querySelector("#todo");
  if (eventElem.textContent === "削除"){
    parentElem.remove();
  } else {
    input.value = input.value;
  }
});


