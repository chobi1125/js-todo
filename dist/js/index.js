var $ = function (e) { return document.getElementById(e); };
var l = function (e) { return console.log(e); };
var elem = function (e) { return document.createElement(e); };
var result = $("result");
var addBtn = $("addBtn");
var addTodo = $("addTodo");
// エンターキーで追加
var enter = function () {
    addTodo.onkeypress = function (e) {
        var key = e.keyCode || e.charCode || 0;
        // 13はEnterキーのキーコード
        if (key == 13) {
            addFC();
        }
    };
};
// 追加機能
var addFC = function () {
    if (addTodo.value != "") {
        var div = elem('div');
        div.id = "div";
        result.appendChild(div);
        var input = elem('input');
        input.id = "todo";
        input.value = String(addTodo.value);
        div.appendChild(input);
        var delBtn = elem('button');
        var editBtn = elem('button');
        delBtn.id = "delBtn";
        delBtn.textContent = "削除";
        delBtn.onclick = "click()";
        editBtn.id = "editBtn";
        editBtn.textContent = "更新";
        div.appendChild(delBtn);
        div.appendChild(editBtn);
        addTodo.value = "";
    }
};
// 更新・削除機能
result.addEventListener('click', function (event) {
    var eventElem = event.target;
    var parentElem = eventElem.parentNode;
    var input = parentElem.querySelector("#todo");
    if (eventElem.textContent === "削除") {
        parentElem.remove();
    }
    else {
        input.value = input.value;
    }
});
