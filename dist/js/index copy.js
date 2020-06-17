var $ = function (e) { return document.getElementById(e); };
var l = function (e) { return console.log(e); };
var elem = function (e) { return document.createElement(e); };
var result = $("result");
var addBtn = $("addBtn");
var addTodo = $("addTodo");
var count = 1;
// eval("let test" + count + "=" + count + ";");
// eval("var n" + count + "=" + count + ";");
// Todo追加関連 これ無名関数ってことか。。。
addBtn.addEventListener('click', function () {
    if (addTodo.value != "") {
        l("addBtn clicked");
        var div = elem('div');
        div.id = "div" + count;
        result.appendChild(div);
        var input = elem('input');
        input.id = "todo" + count;
        input.value = String(addTodo.value);
        div.appendChild(input);
        var delBtn = elem('button');
        var editBtn = elem('button');
        delBtn.id = "delBtn" + count;
        delBtn.textContent = "削除";
        delBtn.onclick = "click()";
        editBtn.id = "editBtn" + count;
        editBtn.textContent = "更新";
        div.appendChild(delBtn);
        div.appendChild(editBtn);
        count++;
        addTodo.value = "";
    }
});
// 削除機能
result.addEventListener('click', function (event) {
    var eventElem;
    // eventElem = $(event.target.id);
    eventElem = event.target;
    console.log(eventElem);
    var parentElem = eventElem.parentNode;
    console.log(parentElem);
    parentElem.remove();
    // result.remove(eventElem);
    // eventBtn = e.target.id;
});
