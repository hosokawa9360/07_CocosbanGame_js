var size;
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

    var crateSprite = cc.Sprite.create(cache.getSpriteFrame("crate.png"));
    var i = 2;//2行目
    var j = 2;//2列目
    crateSprite.setPosition(165+25*j, 185-25*i);
    crateSprite.setScale(5);
    this.addChild(crateSprite);

    crateSprite = cc.Sprite.create(cache.getSpriteFrame("crate.png"));
    var i = 4;//4行目
    var j = 2;//2列目
    crateSprite.setPosition(165+25*j, 185-25*i);
    crateSprite.setScale(5);
    this.addChild(crateSprite);

    i = 3;//3行目
    j = 3;//3列目
    var playerSprite = cc.Sprite.create(cache.getSpriteFrame("player.png"));
    playerSprite.setPosition(165+25*j, 185-25*i);
    playerSprite.setScale(5);
    this.addChild(playerSprite);

    return true;
  },
});
