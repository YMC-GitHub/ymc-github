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

# zero:task:s:del local branch
git branch -d feature/login
# zero:task:e:del local branch


# zero:task:s:lst remote branch
git branch -r
# zero:task:e:lst remote branch

# zero:task:s:del remote branch (old)
# git push origin :dev;
# zero:task:s:del remote branch (old)

# zero:task:s:del remote branch
git push origin --delete feature/login
# git push origin -d dev;
# git push origin -d master;
# or :
# git push origin :dev;
# zero:task:s:del remote branch

# lst-branch: 
git branch 

# restore file:
git restore docs/devopv.note.md

# get current branch
branchnow=`git branch | grep "*" | cut -d " " -f2`;echo $branchnow;

# zero:task:s:del branch main and make new branch main with branch master
# if you do not like using branch main as master branch, skip.
# if you have used it as master branch, skip.
git branch -D main;git checkout -b main --track master;
# zero:task:e:del branch main and make new branch main with branch master

# zero:task:s:branch design
# use branch main as main branch .
# use branch dev as develop branch .
# use branch feat-xx as devloping some feat xx branch .
# use branch date-xx as some archived branch .
# zero:task:e:branch design

# zero:task:s:update remote branch to latest
# if you have some dirty branchs and want to make them clear from zero, continue reading.
# del branch master and make new branch master with branch main .
# del remote branch master and push new branch master .
# git branch -D master;git checkout -b master --track main;git push origin :master;git push origin master;
# git branch -D dev;git checkout -b dev --track main;git push origin :dev;git push origin dev;
BRANCH_MAIN=main;BRANCH_DEV=dev;REMOTE_NAME=origin;git branch -D $BRANCH_DEV;git checkout -b $BRANCH_DEV --track $BRANCH_MAIN;git push $REMOTE_NAME :$BRANCH_DEV;git push $REMOTE_NAME $BRANCH_DEV;
# zero:task:e:update remote branch to latest

# zero:s:task:add an archive branch with date today
# if you like archiving branch main with date today, continue reading.
today=$(date "+%Y-%m-%d");echo "$today";
git checkout -b  main > /dev/null >2&1;git branch $today;git push origin $today
# zero:e:task:add an archive branch with date today

# zero:task:s:remmber pull brefore pushing
# if you have many opv-ers for thes repos, continue reading.
git pull origin main --rebase;git push origin main;
git pull origin dev --rebase;git push origin dev;
# zero:task:s:remmber pull brefore pushing

# zero:task:s:rebase branch debug-timezone  to  branch dev
BRANCH_DEV=debug-timezone;BRANCH_MAIN=dev;
# BRANCH_DEV=dev;BRANCH_MAIN=main;

# zero:task:s:all commit to one (only the last commit result)
git checkout -b $BRANCH_DEV; git rebase $BRANCH_MAIN ; git checkout $BRANCH_MAIN ; git merge $BRANCH_DEV;
# zero:task:e:all commit to one (only the last commit result)


# zero:task:s:keep all commit to each (keep commit history)
git rebase $BRANCH_MAIN $BRANCH_DEV;
# # if rebase ok ,then:
git branch -D $BRANCH_MAIN; git checkout -b $BRANCH_MAIN --track $BRANCH_DEV; git branch -D $BRANCH_DEV; git push origin :$BRANCH_MAIN
# zero:task:e:keep all commit to each (keep commit history)
# zero:task:e:rebase branch debug-timezone  to  branch dev

# zero:task:s:make a new branch main with branch dev
git branch -D main; git checkout -b main --track dev;
# zero:task:e:make a new branch main with branch dev

# zero:task:s:del local branch master and remote branch master
git branch -D master;git pull origin :master;
# zero:task:e:del local branch master and remote branch master

# zero:task:s:del local branch dev and remote branch dev
git branch -D dev;git pull origin :dev;
# zero:task:e:del local branch dev and remote branch dev

# lst changes files in git
git diff-tree --no-commit-id --name-only -r $(git rev-parse --verify HEAD);
# git diff-tree --no-commit-id --name-only -r ${{ github.sha }}
# list changed files in a git commit](https://megamorf.gitlab.io/2021/03/19/list-changed-files-in-a-git-commit)

# git ls-files --help
# lst
# git ls-files -o

# zero:task:s:lst cached files in git
# Show all files cached in Git’s index
git ls-files -c
# git ls-files -c -i xx
# zero:task:e:lst cached files in git

# zero:task:s:lst modified files in git
git ls-files -m
# zero:task:e:lst modified files in git

# zero:task:s:lst deleted files in git
# Show files with an unstaged deletion
git ls-files -d
# zero:task:e:lst deleted files in git

# zero:task:s:lst other files in git
# git ls-files -o
# git ls-files -o -i xx
# zero:task:e:lst other files in git

# zero:task:s:lst untracked files in git
git ls-files -o
# zero:task:e:lst untracked files in git

# zero:task:s:lst unmerged files in git
git ls-files -u
# zero:task:e:lst unmerged files in git

# zero:task:s:lst killed files in git
# Show untracked files on the filesystem that need to be removed due to file/directory conflicts for tracked files to be able to be written to the filesystem.
git ls-files -k
# zero:task:e:lst killed files in git

# git checkout -- file
# git reset HEAD file
```

### use branch dev as developing branch
```bash
# zero:task:s:keep branch BRANCH_DEV to lastest
# if your branch dev is old than branch main, continue reading.
BRANCH_MAIN=main;BRANCH_DEV=dev;REMOTE_NAME=origin;git branch -D $BRANCH_DEV;git checkout -b $BRANCH_DEV --track $BRANCH_MAIN;git push $REMOTE_NAME :$BRANCH_DEV;git push $REMOTE_NAME $BRANCH_DEV;
# zero:task:e:keep branch BRANCH_DEV to lastest

# zero:task:s:rebase branch BRANCH_DEV to branch BRANCH_MAIN
BRANCH_DEV=dev;BRANCH_MAIN=main;

# zero:task:s:all commit to one (only the last commit result)
git checkout -b $BRANCH_DEV; git rebase $BRANCH_MAIN ; git checkout $BRANCH_MAIN ; git merge $BRANCH_DEV;
# zero:task:e:all commit to one (only the last commit result)


# zero:task:s:keep all commit to each (keep commit history)
git rebase $BRANCH_MAIN $BRANCH_DEV;
# # if rebase ok ,then:
git branch -D $BRANCH_MAIN; git checkout -b $BRANCH_MAIN --track $BRANCH_DEV; git branch -D $BRANCH_DEV; git push origin :$BRANCH_MAIN
# zero:task:e:keep all commit to each (keep commit history)

# zero:task:e:rebase branch BRANCH_DEV to branch BRANCH_MAIN
```

### gen github workflow
```bash
# add-sh:
f=./bin/workflow.sh;touch "$f"; chmod +x "$f";

# run-sh:
./bin/workflow.sh

```

### use github-profile-3d-contrib
```bash
# zero:s:task:move all shell files in bin dirs to tmp dir to keep 100% js language.
# tmp dir is a gitignore dir.
mv bin/*.sh tmp/
# zero:e:task:move all shell files in bin dirs to tmp dir to keep 100% js language.

# zero:s:task:use shell files in tmp
mv tmp/*.sh bin/
# zero:e:task:use shell files in tmp

./bin/github-profile-3d-contrib.sh
```
[use github-profile-3d-contrib](https://github.com/yoshi389111/github-profile-3d-contrib)



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


# zero:task:s:rebase branch debug-timezone  to  branch dev
# zero:task:s:all commit to one (only the last commit result)
# git checkout -b debug-timezone ; git rebase dev ; git checkout dev ; git merge debug-timezone;
BRANCH_DEV=debug-timezone;BRANCH_MAIN=dev;
git checkout -b $BRANCH_DEV; git rebase $BRANCH_MAIN ; git checkout $BRANCH_MAIN ; git merge $BRANCH_DEV;
# zero:task:e:all commit to one (only the last commit result)


# zero:task:s:keep all commit to each (keep commit history)
# git rebase dev debug-timezone
# # if rebase ok ,then:
# git branch -D dev; git checkout -b dev --track debug-timezone; git branch -D debug-timezone; git push origin :debug-timezone

BRANCH_DEV=debug-timezone;BRANCH_MAIN=dev;
git rebase $BRANCH_MAIN $BRANCH_DEV;
# # if rebase ok ,then:
git branch -D $BRANCH_MAIN; git checkout -b $BRANCH_MAIN --track $BRANCH_DEV; git branch -D $BRANCH_DEV; git push origin :$BRANCH_MAIN
# zero:task:e:keep all commit to each (keep commit history)

# git branch -D main; git checkout -b main --track dev;
# zero:task:e:rebase branch debug-timezone  to  branch dev


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

```bash
# do some task in github action
# clone -> commit -> push

# push to github with github action
# https://github.com/ad-m/github-push-action

# report link: a github action run in container 
# https://github.com/ad-m/report-link-action/blob/master/.github/workflows/main.yml
```