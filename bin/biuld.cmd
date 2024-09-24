cd ..
# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git config –global user.name "yisier"
git config –global user.email "1340976576@qq.com"
git init
git add -A
git commit -m 'deploy'


git push -f https://github.com/yisier/natnpsdoc.git master

echo 'success'