## set readme 


## dev-opv

```bash

GH_USER=ymc-github;
GH_REPO=ymc-github;
echo "https://github.com/${GH_USER}/${GH_REPO}";
echo "https://github.com/${GH_USER}";

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


# lst-branch: 
git branch 

git branch -D ls


# multi-opv-loc: pull then push to remote
git pull origin main --rebase;git push origin main;

# git restore docs/devopv.note.md

# bak-data:

# zero:task:s:branch design
# use branch main as main branch .
# use branch dev as develop branch .
# use branch feat-xx as devloping some feat xx branch .
# use branch date-xx as some archived branch .
# zero:task:e:branch design

git push origin main
git push origin 2021-06-13
git push origin master

# get current branch
branchnow=`git branch | grep "*" | cut -d " " -f2`;echo $branchnow;

# zero:s:task:add an archive branch with date today
today=$(date "+%Y-%m-%d");echo "$today";
git checkout -b  main > /dev/null >2&1;git branch $today;git branch;git push origin $today

# zero:e:task:add an archive branch with date today

# zero:task:s:update remote branch to latest
# del branch master and make new branch master with branch main .
# del remote branch master and push new branch master .
git checkout -b master --track main;git push origin :master;git push origin master;
git checkout -b dev --track main;git push origin :dev;git push origin dev;
# zero:task:e:update remote branch to latest

# zero:task:s:del branch main and make new branch main with branch master
git branch -D main;git checkout -b main --track master;
# zero:task:e:del branch main and make new branch main with branch master


```

### draft history
```bash
# cmt and log the last with one line
git add .gitignore ; git commit -m "tool(core): ignore tmp files"; git log --oneline -n 1
git add .gitignore ; git commit -m "build(core): ignore tool runtime files"; git log --oneline -n 1
git add .editorconfig ; git commit -m "tool(core): ini editor config"; git log --oneline -n 1


git add .github/FUNDING.yml ; git commit -m "chore(core): add sponsor"; git log --oneline -n 1

git add .github/workflows/ymc-readme.yml ; git commit -m "chore(core): update action"; git log --oneline -n 1
git mv .github/workflows/ymc-readme.yml .github/workflows/update-readme.yml ; git add .github/workflows/update-readme.yml ; git commit -m "chore(core): rename it to readable"; git log --oneline -n 1


git add README.md ; git commit -m "feat(core): delete week stats"; git log --oneline -n 1

f=package.json;
git add $f ; git commit -m "chore(core): ini package json"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): ini test script"; git log --oneline -n 1



# zero:task:s:debug github workflow test.yaml
git mv .github/workflows/update-readme.yml .github/workflows/test.yml ;
f=.github/workflows/test.yml;
git add $f ; git commit -m "chore(core): rename to test"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): add frozen-lockfile"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): fix action to setup node"; git log --oneline -n 1
git add $f ; git commit --file .git/COMMIT_EDITMSG ;git log --oneline -n 1
git add $f ; git commit -m "chore(core): comment job"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): run on beijing time 12:00 per day"; git log --oneline -n 1
git add $f ; git commit --file .git/COMMIT_EDITMSG; git log --oneline -n 1
git add $f ; git commit -m "chore(core): rename file suffix";  git log --oneline -n 1
git mv .github/workflows/test.yml .github/workflows/test.yaml 
# zero:task:e:debug github workflow test.yaml

git add docs ; git commit -m "docs(core): add note"; git log --oneline -n 1
git add data ; git commit -m "chore(core): add repo status tpl"; git log --oneline -n 1
git add .gitignore ; git commit -m "chore(core): ignore node modules "; git log --oneline -n 1

# zero:task:s:opv readme.md
f=README.md;
git add $f ; git commit --file .git/COMMIT_EDITMSG ;git log --oneline -n 1
git add $f ; git commit -m "feat(core): add week stats"; git log --oneline -n 1
git add $f ; git commit -m "feat(core): delete week stats through comment"; git log --oneline -n 1
git add $f ; git commit -m "feat(core): delete week stats through comment"; git log --oneline -n 1
git add $f ; git commit -m "build(core): change graph api because of stopped working";
# zero:task:e:opv readme.md

# zero:task:s:opv readme.md tpl
f=data/readme.tpl.md;
git add $f ; git commit -m "feat(core): add reame tpl"; git log --oneline -n 1
git add $f ; git commit -m "build(core): change graph api because of stopped working";git log --oneline -n 1;
# zero:task:e:opv readme.md tpl

git add data/about-me.md ; git commit -m "docs(core): add aboutme"; git log --oneline -n 1
git add package.json ; git commit -m "chore(core): set as esm module"; git log --oneline -n 1

# zero:task:s:opv bin/render-readme.js file
f=bin/render-readme.js;
git add $f ; git commit -m "chore(core): add binary update-readme"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): set timezone to chinese"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): format time now"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): add exec-able right"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): record updated time in file"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): use timezone shanghai"; git log --oneline -n 1

# zero:task:e:opv bin/render-readme.js file

f=.github/workflows/ymc-github.gen-readme.yaml;
git add $f ; git commit -m "chore(core): ini action to gen readme"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): set action only on one env"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): run when at beijing 0:00 per day"; git log --oneline -n 1
git add $f ; git commit --file .git/COMMIT_EDITMSG; git log --oneline -n 1
git add $f ; git commit -m "chore(core): set commit date with date in bash"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): record updated time in file"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): diable on schedule"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): enabale on schedule"; git log --oneline -n 1

# zero:task:s:debug branch debug-timezone
git checkout -b feat-dbg-ga --track main
git branch -M feat-dbg-ga debug-timezone

f=.github/workflows/debug-timezone.yaml;
git add $f ;git commit -m "chore(core): set lang as chinese";  git log --oneline -n 1
git add $f ;git commit -m "chore(core): log cmt date %ai";  git log --oneline -n 1
git add $f ;git commit -m "chore(core): set log number to 3";  git log --oneline -n 1
git add $f ;git commit -m "chore(core): use github action to set timezone";  git log --oneline -n 1
git add $f ;git commit -m "chore(core): set commit date with date in bash";  git log --oneline -n 1

git push origin debug-timezone
git checkout -b dev --track main ; git rebase dev debug-timezone

# rebase branch debug-timezone  to  branch dev
# rebase:1:all commit to one (only the last commit result)
# git checkout -b debug-timezone ; git rebase dev ; git checkout dev ; git merge debug-timezone

# rebase:2:keep all commit to each (keep commit hsitory)
# git rebase dev debug-timezone
# test ok ,then:
# git branch -D dev; git checkout -b dev --track debug-timezone; git branch -D debug-timezone; git push origin :debug-timezone
# git branch -D main; git checkout -b main --track dev;
# zero:task:e:debug branch debug-timezone


f=.github/workflows/check-action-health.yaml;
git add $f ;git commit -m "chore(core): check github action health";  git log --oneline -n 1


f=pnpm-lock.yaml;
git commit -m "chore(core): keep pnpm-lock.yaml in repo"; git log --oneline -n 1

f=.github/workflows/auto-update.yaml;
fold=.github/workflows/ymc-github.gen-readme.yaml;
git mv $fold $f ;git commit -m "chore(core): rename to auto-update"; git log --oneline -n 1
git add $f ; git commit -m "chore(core): update workflow name"; git log --oneline -n 1


# zero:task:s:set commit date with date in bash
# get time with format
# 2022-10-18 14:41:05 +0800

# date '+%Y-%m-%d %H:%M:%S'

# date -d '2022-10-18 14:41:05 +8hour'
# date -d '2022-10-18 14:41:05'

date -d '1 hour ago'
echo "$(date "+%Y-%m-%d %H:%M:%S" -d "+8 hour") +0800"
git commit -m "" --date "$(date "+%Y-%m-%d %H:%M:%S" -d "+8 hour") +0800"
# zero:task:e:set commit date with date in bash

# lst branch tree:
# git log --all --oneline --graph -n 5


git add updated-time.md ; git commit -m "chore(core): record updated time in file"; git log --oneline -n 1;
git add docs/devopv* ; git commit -m "chore(core): update devopv note"; git log --oneline -n 1
git add docs/devopv* ; git commit -m "docs(core): let note easy to read"; git log --oneline -n 1


git pull origin main --rebase;git push origin main

# zero:task:s:add x right to file
f=bin/render-readme.js;chmod +x $f;git update-index --chmod=+x $f;
# zero:task:s:add x right to file




git tag v

# get long cmt-hash
git log --pretty=format:"%H"
# get short cmt-hash and date
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