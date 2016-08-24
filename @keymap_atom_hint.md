##  atom keybindings
- 移動・選択・削除  
★最初の行に移動	Ctrl + Home	 
★最後の行に移動	Ctrl + End
★行をコメントアウト	Ctrl + /
★行を削除　 Shift + delete

★行を直下に複写	Ctrl + Shift + d
★git<add .>+<commit>+<push> ctrl-Shift-A p

単語を選択　Ctrl + D　：※入力ごとに同じ単語を選択  
単語の末尾に移動 Alt + F  
単語の先頭に移動 Alt + B  
行の末尾に移動	 End （ノートＰＣはfn + → です）  
矩形選択 Ctrl + Alt + 上矢印キー or 下矢印キー  
複数箇所選択 Ctrl + クリック  
インデントを一つ追加　Ctrl + ]　※複数行もOK  
インデントを一つ削除　Ctrl + [ ※複数行もOK  
** 行の選択	Ctrl + L **  
** 行の削除	Ctrl + Shift + K **  
行ごと移動	Ctrl + 上矢印キー or 下矢印キー  
** 行ごと下の行へコピー	Ctrl + Shift + D **  
行の下に空行を挿入	Ctrl + Enter  
行の上に空行を挿入	Ctrl + Shift + Enter  

### 画面を右に分割	  
** (Ctrl + K)+　一度指を話してから + 右矢印キー **   
画面を下に分割	(Ctrl + K)+　一度指を話してから + 下矢印キー  
分割画面（ペインという）間での移動  (Ctrl + K) + (Ctrl+矢印キー)  
プロジェクトツリーにフォーカス alt + ￥  
画面を閉じる	Ctrl + W  
タブを閉じる  ctrl-W  
タブを切り替える　ctrl+tab
設定画面 ctrl+,  
スニペット表示:alt-Shift-S :頻繁に使うコードをショートカットキーで呼び出せる  
検索パネルを開く:ctrl+f  
次を検索：F3  
 ** 指定行に移動する：ctrl+g **
 ** ツリービューの表示・非表示：ctrl + ￥ **  

#### git-plus Command
Ctrl-Shift-H git-plusのパネルを表示させる  
ctrl-Shift-A カレントファイルを git add する  
ctrl-Shift-A P	:git add, commit, push まで行う  
ctrl-Shift-C	:git commit  
ctrl-Shift-A c :git add , commit まで行う  
** ctrl-Shift-A a	:全てのファイルを git add と commit する **  

#### 編集  
現在行を上へ移動	Ctrl + ↑  
現在行を下へ移動	Ctrl + ↓  
行を削除	Shift + Del  
行をコメントアウト/解除	Ctrl + /  
カーソル位置からワードの末尾まで削除	Alt + d  
カーソル位置のワードを選択	Ctrl + d  
小文字に変換	Ctrl + k - Ctrl + l  
大文字に変換	Ctrl + k - Ctrl + u  
編集のやり直し	Ctrl + Shift + Z  
Ctrl + y  

#### マルチカーソル・選択  
行を選択	Ctrl + l  
マルチカーソルの追加 Ctrl + マウスクリック (※解除はEsc)  
マルチ選択	Ctrlを押しながらマウスで複数箇所を選択  
** 複数行にマルチカーソル	Ctrl + Alt + ↑ ,Ctrl + Alt   + ↓  **  
矩形選択	Ctrl + Alt + (↑ / ↓)  

#### ブックマーク  
選択行をブックマーク／解除	Ctrl + Alt + F2  
ブックマーク先へ移動	F2  
全ブックマークを解除	Ctrl + Shift + F2  

####  検索・置換  
任意のアイテム位置へ移動	Ctrl + r  
指定行へジャンプ	Ctrl + g  
ファイル内の検索/置換 Ctrl + F(※Esc パネルが閉じる)  
プロジェクト内の検索/置換	Ctrl + Shift + f  
カーソルで選択した内容を検索	Ctrl + Shift + F3  
次の検索結果に移動	F3  
検索結果をすべて選択	Alt + Enter,Alt + F3  
検索結果をすべて置換	Ctrl + Enter  
正規表現のOn/Off	Ctrl + Alt + /  
大文字・小文字の識別On/Off	Ctrl + Alt + c  

####  ファイル・プロジェクト関連  
新規ファイル作成	Ctrl + n  
既存ファイルを指定して開く	Ctrl + o  
最後に閉じたタブを復元	Ctrl + Shift + T  
指定したタブへの移動	Ctrl + b  
別名でファイルを保存	Ctrl + Shift + S  
プロジェクトを開く	Alt + Shift + P  
新規にAtomを開く	Ctrl + Shift + N  
ファイルを閉じる	Ctrl + w  
Atomを閉じる	Ctrl + Shift + W  

#### script・プレビュー関連  
scriptを実行	Ctrl + Shift + B  
scriptを停止	Ctrl + q  
Atomプレビューを開く／閉じる	Ctrl + Shift + M  
Markdownのプレービュー表示 control + shift + M  
コメントアウト	Ct：rl + /  

#### その他  
コマンドパレットの表示/非標示 Ctrl + Shift + P  
※パレット表示後、実行したいコマンドを入力  
全画面表示	F11  

#### プラグイン　Browser Plus  
open(開く) :ctrl-alt-o :git-controlと競合してい  るkeybind    
close(閉じる)  :ctrl+w (atomの閉じるコマンド)    
history（履歴） :ctrl-alt-h:    
openDevTool（開発ツール）:f12  
## plugin の起動
git-plus ： Ctrl-Shift-H  :git-plusのパネルを表示
Atom Beautify ：ctrl-alt-b　:　自動整形  
atom-html-preview ：ctrl-shift-H : htmlﾌｧｲﾙをプレビュー  
browser-plus : ctrl + alt + o  : ブラウザの起動
