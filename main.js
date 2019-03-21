const {Rectangle, Color, Path, Line} = require("scenegraph");

function lineToArrow(selection) {
  const path = selection.items[0].pathData;
  const lastChar = path.substr(-1, 1);
  const t = selection.items[0];
  const c = t instanceof Path || t instanceof Line;
  const d = t instanceof Path || t instanceof Line || t instanceof Rectangle;

  if(!d) {
    console.log('パスでも線でも長方形でもないよ');
    return;
    alertNoline();
    return;
  }
  if(c && lastChar === 'Z') {
    console.log('とじてるからエラー返すよー');
    return;
    alertNoline();
    return;
  } else {
    generateArrow(selection, selection.items[0]);
  }
}

function alertNoline() {
  // 線じゃないときのアラート
}

// TODO Pathの場合、座標から角度の判定
// Pathの場合、ポイントの数を最初と最後でうまいことする。
// Aが入ってたらどうする？
// forEachかなんかで処理する
// 反対側の処理
// もとの線の太さで三角形のサイズを可変に。

function generateArrow(node, items) {
  // PathでもLineでも処理できるようにする。

  let pathX = items.boundsInParent.x;
  let pathY = items.boundsInParent.y;
  let color;
  if(items instanceof Rectangle) {
    color = items.fill;
  } else {
    color = items.stroke;
  }
  const rotation = items.rotation;
  console.log(items.pathData);

  const firstTriangle = new Path();
  firstTriangle.pathData = `M0,8 L12,0 L12,16 Z`;
  firstTriangle.fill = new Color(color);
  firstTriangle.rotateAround(rotation, firstTriangle.localCenterPoint)
  node.insertionParent.addChild(firstTriangle);
  firstTriangle.moveInParentCoordinates(pathX - 6, pathY - 8);


}

module.exports = {
  commands: {
    myPluginCommand: lineToArrow
  }
};
