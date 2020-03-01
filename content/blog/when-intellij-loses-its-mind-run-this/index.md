---
title: When IntelliJ Loses Its Mind, Run This
description: Occasionally, IntelliJ goes haywire and won't run your project or tests. Here's a script to get you back up and running.
date: "2020-03-01T00:00:00Z"
---

Occasionally, IntelliJ goes haywire and won't run your project or tests. Next time this happens, close IntelliJ, run the script below in your project directory, and then open IntelliJ and reimport the project.

The script copies your `.idea` folder to `/tmp`, runs `git clean -xdf` to remove all files not checked into `git`, and then copies the important files back into a new `.idea` folder so you don't lose things like database configurations, dictionaries, and project settings. Your old `.idea` folder remains in `/tmp` until the next time you run the script or the OS deletes it in case you need something else.

```bash
#!/bin/bash

if ! $(git diff-index --quiet HEAD); then
  echo "Uncommited files detected, commit them and try again. Exiting."
  exit 1
fi

set -e # exit immediately on error

idea="./.idea"
tmpIdea="/tmp/.idea"
dirs=($tmpIdea/dataSources $tmpIdea/dictionaries $tmpIdea/inspectionProfiles)
files=($tmpIdea/dataSources*.xml $tmpIdea/workspace.xml)

rm -rf $tmpIdea
mkdir $tmpIdea
mv $idea /tmp
git clean -xdf
mkdir $idea

for d in ${dirs[*]}; do
  [ -d $d ] && cp -r $d $idea
done

for f in ${files[*]}; do
  [ -f $f ] && cp $f $idea
done
```
