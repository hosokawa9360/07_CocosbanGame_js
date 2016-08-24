var size;
var level = [
     [1,1,1,1,1,1,1],
     [1,1,0,0,0,0,1],
     [1,1,3,0,2,0,1],
     [1,0,0,4,0,0,1],
     [1,0,3,1,2,0,1],
     [1,0,0,1,1,1,1],
     [1,1,1,1,1,1,1]
];
var playerPosition; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var playerSprite; //プレイヤーのスプライト

var gameScene = cc.Scene.extend({
  onEnter: function() {
    this._super();

    var layer0 = new gameLayer();
    layer0.init();
    this.addChild(layer0);

  }
});

var gameLayer = cc.Layer.extend({
  init: function() {
    this._super();
    //スプライトフレームのキャッシュオブジェクトを作成する
    cache = cc.spriteFrameCache;
    //スプライトフレームのデータを読み込む
    cache.addSpriteFrames(res.spritesheet_plist);
    var backgroundSprite = cc.Sprite.create(cache.getSpriteFrame("background.png"));
    //アンチエイリアス処理を止める
    backgroundSprite.getTexture().setAliasTexParameters();

    backgroundSprite.setPosition(240, 160);
    //スプライトがとても小さいので拡大する
    backgroundSprite.setScale(5);
    this.addChild(backgroundSprite);

    var levelSprite = cc.Sprite.create(cache.getSpriteFrame("level.png"));
    levelSprite.setPosition(240, 110);
    levelSprite.setScale(5);
    this.addChild(levelSprite);

    for(i=0;i<7;i++){

           for(j=0;j<7;j++){
               switch(level[i][j]){
               case 4:
               case 6:
                   playerSprite = cc.Sprite.create(cache.getSpriteFrame("player.png"));
                   playerSprite.setPosition(165+25*j,185-25*i);
                   playerSprite.setScale(5);
                   this.addChild(playerSprite);
                   playerPosition = {x:j,y:i};

                   break;






                   break;
               default:

               }
           }
       }



    return true;
  },
});
