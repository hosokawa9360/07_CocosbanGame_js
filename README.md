##### 07_cocosbanGame  
[https://hosokawa9360.github.io/07_cocosbanGame_js/](https://hosokawa9360.github.io/07_cocosbanGame_js/)  


### その１ 画像素材のロード　と　スプライトシートの作成　

######　画像素材のロード

######　スプライトシートの作成
https://github.com/hosokawa9360/07_cocosbanGame_js/issues/1  

######　スプライトシート参照 resouce.js
```
var res = {
    spritesheet_plist : "res/spritesheet.plist",
    spritesheet_png : "res/spritesheet.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

```

//スプライトフレームのキャッシュオブジェクトを作成する  
```
cache = cc.spriteFrameCache;
```
//スプライトフレームのデータを読み込む  
```
cache.addSpriteFrames(res.spritesheet_plist);
```
//スプライトシートからbackground.png画像を選択する  
```
var backgroundSprite = cc.Sprite.create(cache.getSpriteFrame("background.png"));
```
```
backgroundSprite.setPosition(240,160);
backgroundSprite.setScale(5);
this.addChild(backgroundSprite);
```
//スプライトシートからlevel.png画像を選択する  
```
var levelSprite = cc.Sprite.create(cache.getSpriteFrame("level.png"));
levelSprite.setPosition(240,110);
levelSprite.setScale(5);
this.addChild(levelSprite);
```
