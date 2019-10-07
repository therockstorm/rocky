---
title: Use a Script to Call It a Day
description: Ending the day can be tough, especially when you work from home. Script it so you can make one decision instead of many.
image: unplug.jpg
date: "2019-10-07T00:00:00Z"
---

One of the cons of working from home is deciding when enough is enough. It’s all too easy to get into a problem, lose track of time, and let hours slip away.

I find that even after I decide to close my text editor, I see messages in Slack I should read. I close this window and notice unread emails in my inbox. I came up with a simple solution, create a script that closes all work-related applications,

```
pgrep com.docker.hyperkit && docker-compose down
osascript -e 'quit app "Docker"'
osascript -e 'quit app "Slack"'
osascript -e 'quit app "Google Chrome"'
osascript -e 'quit app "iTerm"'
```

I alias this in `~/.zshrc` with `alias down=~/dev/down.sh` so at the end of the day, I decide once that I'm done and run `down`. The next morning, I run `up`,

```
open -a Slack
open -a Docker
open -a "Google Chrome"
```

If you've created similar scripts, let me know what I'm missing in mine, [@therockstorm](https://twitter.com/therockstorm).
