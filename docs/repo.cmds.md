## dev-opv

```bash
# add-tag: tag commit with author date
git tag v2021-06-13 053455c
# del-tag: 
git tag -d v2021-06-13

# log-cmt: com one line
git log --oneline

# add-branch: tag commit with author date
git branch 2021-06-13 053455c
# del-branch: 
git branch -D 2021-06-13

git log --oneline

# multi-opv-loc: pull then push to remote
git pull origin main --rebase;git push origin main
```

### draft history
```bash
# cmt and log the last with one line
git add .gitignore ; git commit -m "tool(core): ignore tmp files"; git log --oneline

git add .editorconfig ; git commit -m "tool(core): ini editor config"; git log --oneline -n 1

git add .github/FUNDING.yml ; git commit -m "chore(core): add sponsor"; git log --oneline -n 1

git add .github/workflows/ymc-readme.yml ; git commit -m "chore(core): update action"; git log --oneline -n 1
git mv .github/workflows/ymc-readme.yml .github/workflows/update-readme.yml ; git add .github/workflows/update-readme.yml ; git commit -m "chore(core): rename it to readable"; git log --oneline -n 1


git add README.md ; git commit -m "feat(core): delete week stats"; git log --oneline -n 1
git push origin main
git push origin 2021-06-13
git push origin master

# update remote branch to latest
git checkout -b master --track main
git push origin :master
git push origin master

git add package.json ; git commit -m "chore(core): ini package json"; git log --oneline -n 1

git branch -D main
git checkout -b main --track master

git mv .github/workflows/update-readme.yml .github/workflows/test.yml ;

git add .github/workflows/test.yml ; git commit -m "chore(core): rename to test"; git log --oneline -n 1

git add .github/workflows/test.yml ; git commit -m "chore(core): add frozen-lockfile"; git log --oneline -n 1

git add .github/workflows/test.yml ; git commit -m "chore(core): fix action to setup node"; git log --oneline -n 1

git add .github/workflows/test.yml ; git commit --file .git/COMMIT_EDITMSG ;git log --oneline -n 1


git add .github/workflows/test.yml ; git commit -m "chore(core): comment job"; git log --oneline -n 1
git add .github/workflows/test.yml ; git commit -m "chore(core): run on beijing time 12:00 per day"; git log --oneline -n 1


git add .gitignore ; git commit -m "chore(core): ignore node modules "; git log --oneline -n 1

git add package.json ; git commit -m "chore(core): ini test script"; git log --oneline -n 1

git add README.md ; git commit --file .git/COMMIT_EDITMSG ;git log --oneline -n 1
git add README.md ; git commit -m "feat(core): add week stats"; git log --oneline -n 1
git add README.md ; git commit -m "feat(core): delete week stats through comment"; git log --oneline -n 1

git add data/about-me.md ; git commit -m "docs(core): add aboutme"; git log --oneline -n 1
git add data/readme.tpl.md ; git commit -m "feat(core): add reame tpl"; git log --oneline -n 1
git add package.json ; git commit -m "chore(core): set as esm module"; git log --oneline -n 1
git add bin/render-readme.js ; git commit -m "chore(core): add binary update-readme"; git log --oneline -n 1
git add .github/workflows/ymc-github.gen-readme.yaml ; git commit -m "chore(core): ini action to gen readme"; git log --oneline -n 1

git add .github/workflows/ymc-github.gen-readme.yaml ; git commit -m "chore(core): set action only on one env"; git log --oneline -n 1

git commit -m "chore(core): keep pnpm-lock.yaml in repo"; git log --oneline -n 1

git add bin/render-readme.js ; git commit -m "chore(core): add exec-able right"; git log --oneline -n 1
git add bin/render-readme.js ; git commit -m "chore(core): record updated time in file"; git log --oneline -n 1
git add bin/render-readme.js ; git commit -m "chore(core): use timezone shanghai"; git log --oneline -n 1
git add updated-time.md ; git commit -m "chore(core): record updated time in file"; git log --oneline -n 1
git add .github/workflows/ymc-github.gen-readme.yaml ;git commit -m "chore(core): record updated time in file"; git log --oneline -n 1

git pull origin main --rebase;git push origin main

chmod +x bin/render-readme.js
git update-index --chmod=+x bin/render-readme.js


git tag v

053455c

git log --pretty=format:"%H"
git log --pretty=format:"%h %as"

git log --pretty=format:"%as" 053455c

"053455c 2021-06-13"

```