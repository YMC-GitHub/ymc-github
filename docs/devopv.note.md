## set readme 


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

# git restore docs/devopv.note.md
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
git add docs ; git commit -m "docs(core): add note"; git log --oneline -n 1
git add data ; git commit -m "chore(core): add repo status tpl"; git log --oneline -n 1


git add .gitignore ; git commit -m "chore(core): ignore node modules "; git log --oneline -n 1

git add package.json ; git commit -m "chore(core): ini test script"; git log --oneline -n 1

git add README.md ; git commit --file .git/COMMIT_EDITMSG ;git log --oneline -n 1
git add README.md ; git commit -m "feat(core): add week stats"; git log --oneline -n 1
git add README.md ; git commit -m "feat(core): delete week stats through comment"; git log --oneline -n 1

git add data/about-me.md ; git commit -m "docs(core): add aboutme"; git log --oneline -n 1
git add data/readme.tpl.md ; git commit -m "feat(core): add reame tpl"; git log --oneline -n 1
git add package.json ; git commit -m "chore(core): set as esm module"; git log --oneline -n 1
git add bin/render-readme.js ; git commit -m "chore(core): add binary update-readme"; git log --oneline -n 1
git add bin/render-readme.js ; git commit -m "chore(core): set timezone to chinese"; git log --oneline -n 1
git add bin/render-readme.js ; git commit -m "chore(core): format time now"; git log --oneline -n 1


git add .github/workflows/ymc-github.gen-readme.yaml ; git commit -m "chore(core): ini action to gen readme"; git log --oneline -n 1

git add .github/workflows/ymc-github.gen-readme.yaml ; git commit -m "chore(core): set action only on one env"; git log --oneline -n 1


git add .github/workflows/ymc-github.gen-readme.yaml ; git commit -m "chore(core): run when at beijing 0:00 per day"; git log --oneline -n 1
git add .github/workflows/ymc-github.gen-readme.yaml ; git commit --file .git/COMMIT_EDITMSG; git log --oneline -n 1
git add .github/workflows/test.yaml ; git commit --file .git/COMMIT_EDITMSG; git log --oneline -n 1
git add .github/workflows/test.yaml ;git commit -m "chore(core): rename file suffix";  git log --oneline -n 1
git mv .github/workflows/test.yml .github/workflows/test.yaml 

chore(core): run on schedule

the 2th week 1:20, 1:35, 1:50 
every 15 minutes starting from minute 20 through 59 (minutes 20, 35, and 50)
the 1th beijing hour
the 2th week


git checkout -b feat-dbg-ga --track main
git add .github/workflows/test.yaml ;git commit -m "chore(core): rename file suffix";  git log --oneline -n 1
git branch -M feat-dbg-ga debug-timezone
git add .github/workflows/debug-timezone.yaml ;git commit -m "chore(core): set lang as chinese";  git log --oneline -n 1
git add .github/workflows/debug-timezone.yaml ;git commit -m "chore(core): log cmt date %ai";  git log --oneline -n 1
git add .github/workflows/debug-timezone.yaml ;git commit -m "chore(core): set log number to 3";  git log --oneline -n 1
git add .github/workflows/debug-timezone.yaml ;git commit -m "chore(core): use github action to set timezone";  git log --oneline -n 1
git add .github/workflows/debug-timezone.yaml ;git commit -m "chore(core): set commit date with date in bash";  git log --oneline -n 1
git add .github/workflows/ymc-github.gen-readme.yaml ; git commit -m "chore(core): set commit date with date in bash"; git log --oneline -n 1

git push origin debug-timezone

git checkout -b dev --track main ; git rebase dev debug-timezone
git commit -m "chore(core): keep pnpm-lock.yaml in repo"; git log --oneline -n 1

# rebase branch debug-timezone  to  branch dev
# rebase:1:all commit to one (only the last commit result)
git checkout -b debug-timezone ; git rebase dev ; git checkout dev ; git merge debug-timezone

# rebase:2:keep all commit to each (keep commit hsitory)
# git rebase dev debug-timezone
# test ok ,then:
# git branch -D dev; git checkout -b dev --track debug-timezone; git branch -D debug-timezone; git push origin :debug-timezone
# git branch -D main; git checkout -b main --track dev;

set commit date with date in bash

# lst branch tree:
# git log --all --oneline --graph -n 5

git add bin/render-readme.js ; git commit -m "chore(core): add exec-able right"; git log --oneline -n 1
git add bin/render-readme.js ; git commit -m "chore(core): record updated time in file"; git log --oneline -n 1
git add bin/render-readme.js ; git commit -m "chore(core): use timezone shanghai"; git log --oneline -n 1
git add updated-time.md ; git commit -m "chore(core): record updated time in file"; git log --oneline -n 1
git add .github/workflows/ymc-github.gen-readme.yaml ;git commit -m "chore(core): record updated time in file"; git log --oneline -n 1

git pull origin main --rebase;git push origin main

chmod +x bin/render-readme.js
git update-index --chmod=+x bin/render-readme.js

# 2022-10-18 14:41:05 +0800
# date '+%Y-%m-%d %H:%M:%S'
# date -d '2022-10-18 14:41:05 +8hour'
# date -d '2022-10-18 14:41:05'
date -d '1 hour ago'
echo "$(date "+%Y-%m-%d %H:%M:%S" -d "+8 hour") +0800"
git commit -m "" --date "$(date "+%Y-%m-%d %H:%M:%S" -d "+8 hour") +0800"
git tag v

053455c

git log --pretty=format:"%H"
git log --pretty=format:"%h %as"

git log --pretty=format:"%as" 053455c

"053455c 2021-06-13"

```

<!-- github cron intro https://blog.csdn.net/Ximerr/article/details/123501772 -->
<!-- cron intro https://zhuanlan.zhihu.com/p/347129361 -->
<!-- https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule -->
## faqs
```bash
#Dependencies lock file is not found in D:\a\ymc-github\ymc-github. Supported file patterns: pnpm-lock.yaml
# git add pnpm-lock.yaml ; git commit -m "chore(core): fix action to setup node "; git log --oneline -n 1

# a step cannot have both the `uses` and `run` keys
# Cache folder path is retrieved for pnpm but doesn't exist on disk
# Unable to find Node version '14.x' for platform linux and architecture x86.
# Input required and not supplied: path


# https://mrseawave.github.io/blogs/articles/2021/12/17/github-actions-cache/

# https://github.com/pnpm/pnpm/issues/1174

# guodongxiaren 's python script with github action
# https://github.com/guodongxiaren/py

# intro git pull --rebase
# https://www.jianshu.com/p/14f9eb70e99e

# add workflow status to readme.md
# https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge

# skill icon
# https://learn.adafruit.com/excellent-github-profile/skill-icons-and-badges

# ./bin/render-readme.js: Permission denied on ubuntu x64 node.js@12

# failed to push some refs to 'https://github.com/YMC-GitHub/ymc-github' on window x64 node.js@14

#  Process completed with exit code 126.
# https://www.cnblogs.com/wangyang0210/p/16645095.html

# cnblogs theme
# https://github.com/wangyang0210
# https://www.cnblogs.com/wangyang0210/p/16645095.html
# https://github.com/wangyang0210/cnblogs-theme/blob/v2/src/components/mouse/bubble.js

# publish when release
# https://github.com/wangyang0210/cnblogs-theme/blob/v2/.github/workflows/npm-publish.yml
# 
```

## todos
- [ ] do some task in github action
- [ ] push to github with github action
- [x] run github action in docker
```
# do some task in github action
# clone -> commit -> push

# push to github with github action
# https://github.com/ad-m/github-push-action

# report link: a github action run in container 
# https://github.com/ad-m/report-link-action/blob/master/.github/workflows/main.yml
```