// 获取座位区域节点
const seatAreaNode = document.getElementById("seat-area");
// 获取电影名节点
const movieNameNode = document.getElementById("movie-name");
// 获取电影票价节点
const moviePriceNode = document.getElementById("movie-price");
// 获取已订电影票数量节点
const count = document.getElementById("count");
// 获取已订电影票总价节点
const total = document.getElementById("total");

axios("./data.json").then((res) => {
  let { ticket } = res;
  console.log(ticket);
  movieNameNode.innerText = ticket.name;
  moviePriceNode.innerText = ticket.price;
  let tpl = ``;
  ticket.seats.map((item) => {
    tpl += `<div class="row">{{replace}}</div>`;
    let _tpl = "";
    item.map((_item) => {
      _tpl += _item
        ? `
                  <div class="seat occupied"></div>                
                  `
        : `<div class="seat"></div>`;
    });
    tpl = tpl.replace("{{replace}}", _tpl);
  });
  seatAreaNode.innerHTML = tpl;
  [...document.getElementsByClassName("seat")].map((node) => {
    if (![...node.classList].includes("occupied")) {
      node.onclick = function () {
        if ([...node.classList].includes("selected")) {
          node.classList.remove("selected");
          count.innerHTML = parseInt(count.innerHTML) - 1;
          total.innerHTML = parseInt(total.innerHTML) - 20;
        } else {
          node.classList.add("selected");
          count.innerHTML = parseInt(count.innerHTML) + 1;
          total.innerHTML = parseInt(total.innerHTML) + 20;
          total.innerHTML = parseInt();
        }
      };
    }
  });
});

const translate = (alienMessage) => {
  if (!alienMessage) {
    return "";
  }
  if (alienMessage.length % 3 != 0) {
    return "无效密语";
  }
  let codon = [];
  let word = "";
  let result = "";
  for (let index in alienMessage) {
    word += alienMessage[index];
    if (word == "XXI") break;
    if (word.length == 3) {
      codon.push(word);
      word = "";
    }
  }

  result += (codon.map((item) => codonTable[item]) + "").replaceAll(",", "");
  if (result === "undefined" || !result) {
    return "无效密语";
  }
  return result;
};

// 定义拖放事件的处理函数
function drop(event) {
  // 检查是否拖动的拼图块不是当前目标拼图块
  // draggedPiece 被拖动的拼图块元素。this 目标位置的拼图块元素。
  if (draggedPiece !== this) {
    // TODO：待补充代码
    let saveArr = [
      [draggedPiece.children[0].src, draggedPiece.children[0].dataset.id],
      [this.children[0].src, this.children[0].dataset.id],
    ];
    draggedPiece.children[0].src = saveArr[1][0];
    draggedPiece.children[0].dataset.id = saveArr[1][1];
    this.children[0].src = saveArr[0][0];
    this.children[0].dataset.id = saveArr[0][1];
    let imgDataIdList = [
      ...document
        .getElementById("puzzle-container")
        .getElementsByTagName("img"),
    ].map((item) => item.dataset.id);
    console.log(imgDataIdList);
    if (imgDataIdList == "1,2,3,4,5,6,7,8,9") {
      document.getElementById("success-message").classList.remove("hide");
      document.getElementById("success-message").classList.add("show");
    } else {
      document.getElementById("success-message").classList.remove("show");
      document.getElementById("success-message").classList.add("hide");
    }
  }

  // 重置正在拖动的拼图块
  draggedPiece = null;
}
