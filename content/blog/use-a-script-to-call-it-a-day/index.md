---
title: Use a Script to Call It a Day
description: Ending the day can be tough, especially when you work from home. Script it so you can make one decision instead of many.
image: unplug.jpg
date: "2019-10-07T00:00:00Z"
---

One of the cons of working from home is deciding when enough is enough. It’s all too easy to get sucked into a problem, lose track of time, and let hours slip away.

You bring yourself to close your text editor only to get tempted by unread Slack messages. After too long, you close Slack and find unread emails in your inbox. And on it goes.

This script is a simple solution, it closes all work-related applications at once,

```
pgrep com.docker.hyperkit && docker-compose down
osascript -e 'quit app "Docker"'
osascript -e 'quit app "Slack"'
osascript -e 'quit app "Google Chrome"'
osascript -e 'quit app "iTerm"'
```

You can alias it in `~/.zshrc` or `~/.bash_profile` with `alias down="~/dev/down.sh"` so, at the end of the day, you decide once that you're done and run `down`. The next morning, run `up` and you're ready to go,

```
open -a Docker
open -a Slack
open -a "Google Chrome"
osascript -e 'tell application "Google Chrome"
  activate
  open location "https://console.aws.amazon.com"
end tell'
```

If you've created similar scripts, let me know what else you have in yours, [@therockstorm](https://twitter.com/therockstorm).
