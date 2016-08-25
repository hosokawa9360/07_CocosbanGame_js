##### 07_cocosbanGame  
[https://hosokawa9360.github.io/07_cocosbanGame_js/](https://hosokawa9360.github.io/07_CocosbanGame_js/)  


### その１ 画像素材のロード　と　スプライトシートの作成　

######　画像素材のロード

######　スプライトシートの作成
https://github.com/hosokawa9360/07_cocosbanGame_js/issues/1  

git checkout -b splitesheetTest 2a5a0fe297a3d29e20c06208dddfd860bb1b97d8

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

######　アンチエイリアス処理を適用しない  
このゲームは昔のファミコンゲーム風の表現をするので、アンチエイリアス処理を止めるが、一般のゲームでは不要な処理なので注意すること。  
//アンチエイリアス処理を止める  
backgroundSprite.getTexture().setAliasTexParameters();  

backgroundSpriteにsetAliasTexParametersを適用してるが、すべてのスプライトがアンチエイリアス処理が施される。これは、スプライトシートに対して適用されたためである。  

####　課題１
resフォルダに格納してある(スクリーンショット）を実装せよ  

### パズル画面を作成する
https://github.com/hosokawa9360/07_CocosbanGame_js/issues/3
crateとplayerのスプライトを配列データに従って配置する

####　課題2　木箱を配置するプログラムを実装せよ


### スワイプを検出する
https://github.com/hosokawa9360/07_CocosbanGame_js/issues/4

### プレイヤーと木箱の移動制御
https://github.com/hosokawa9360/07_CocosbanGame_js/issues/5

### 課題
 - レベルクリアのチェックがないので、すべての木箱をゴール地点に移動したらレベルクリアとするようにせよ。
 - ３面程度を追加で作成し、レベルクリアしたら新たな面でゲームができるようにせよ。
 - サウンド再生を追加せよ。
 - 現在は、プレイヤと木箱が同時に移動しているが、よりスムーズに連続的に移動するように改善せよ。
 - 移動した軌跡を記憶し、バックボタンをおすと一つ前の位置に戻るようにせよ
