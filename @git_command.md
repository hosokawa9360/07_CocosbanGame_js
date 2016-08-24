### popular git command  
1. HEADだけを元にもどす
`git reset --soft HEAD~`  
2. HEADとインデックスを元に戻す
`git reset HEAD~`
3.一つ前のコミットまでインデックス、ワーキングツリーを含めてもとに戻す
`git reset --hard HEAD~`

4.強制Push(駄目よダメ駄目)
'git commit -m "コミットメッセージ"'
`git push -f origin HEAD~:master`
