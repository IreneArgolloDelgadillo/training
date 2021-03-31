# posh-git tool for powershell on Windows
- clone it from powershell: ``` git clone https://github.com/dahlbyk/posh-git.git```
- Install it: ```cd .\posh-git\  .\install.ps1```
- Install module: ```Install-Module posh-git .$PROFILE cd RepoFolder```
- With this all made, everytime powershell founds a git repository will reach the text from the command repository. Plus it is going ot autocomplete any git command you want to type.

- downloand git-completion bash: ```wget https://github.com/git/git/blob/master/contrib/completion/git-completion.bash --quiet --show-progress -O ~/git-completion.bash```
- To have it available in all the command terminal: ```echo -e "\nsource ~/git-completion.bash" >> ~/.bash_profile```
# tool for bash on Linu
- git-autocompletion 
- zshell > oh-my-zsh
- zsh tool:
Another tool option is: zsh --version. By installing from: http://git.io/Installing-ZSH ```wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh --quiet -show-progress -O ~/install.sh```
install zsh: >  whereis zsh > use the zsh location whether you want to set this shell as default > sudo usermod -s /usr/bin/zsh $(whoami) > then reboot> sudo reboot
You also can use ZSH Powerlevel9k Theme for ubuntu 

## Shortcut commands or git Alias commands
- This commands are stores on git location, to see them: ```git config aliast.st status```
- ```cat .git/config | grep -A 1 "\[alias\]"```
- this command will be saved in the user home dr .gitconfig: ``` git config --global alias.st status```
- Other command example, this is a alias for convination command: ```git config --global alias.st "status --short --branch"```
- ```git config --global alias.cma "commit --all -m"```
- ```git config --global alias.qm '!git checkout $1;git merge @{-1}'```

- To define an alias type: git config alias.{alias name} {command}
- To see available alias list: ```cat .git/config | grep -A 1 "\[alias\]"```

Alias can be defined, for a report, for a user or globaly:
- globaly: git config --global alias.{alias name} {command}

Alias for a convination of commands: ```git config --global alias.st "status --short --branch"```
Alias with parameters: ```git config --global alias.cma "commit --all -m"``` at the execution time, you should pass the parameter in order, like: ``` git cma "Commit message exmple" ```

- Example of quick merge alias: 
``` git config --global alias.qm '!git checkout $1;git merge @{-1}' ```

where '!' means that is following by a command 
commands change the gead referencian to the first branch

# Pretty log
Alias example: ``` git config --global alias.prettyLog "log --pretty='%Cred%h%Creset | %C(yellow)%d%Creset %s %Cgreen(%cr)%Creset %C(cyan)[%an]%Creset' --graph" ```

- We can say to how we want to se the log history, for example if we want to see it on one line (this will show the hash code commit followed by the commit message): git log --pretty=oneline
- %h = abreviate commit hash 
- %d = any reference pointed to the commit
- %s = contains the first line of the commit message or subject
- %cr = represent the date time where the commit has made relative to now
- %an = represents the name of the commit author
- Here an example of using the previous abreviations (to see more log pretty abreviations > git-scm/docs/pretty-formats): git log --pretty='%h | %d %s (%cr) [%an]'
- Giving formats and colors: ``` git log --pretty='%Cred%h%Creset | %C(yellow)%d%Creset %s %Cgreen(%cr)%Creset %C(cyan)[%an]%Creset' --graph ```

# Git diff
alias for seen the difference to show the first 10 lines of differnece: ``` git config --global alias dp 'diff --word-diff --unified=10' ```
- to see more readable: git diff --patience
# Git show
 - Example of use: git show head~2
 - git config --global alias so "show --pretty='%Cred%h%Creset | %C(yellow)%d%Creset %s %Cgreen(%cr)%Creset %C(cyan)[%an]%Creset"
 - previous alias execution example(sending multiple aprameters):  git so head --no-patch
 - git so head --stat
 - -git cat-file -p head

# Rewrite History 
git commit  --amend 
git commit --amend -D HEAD

- Temporary snapshot
- git reset --hard, destructive change
- git reset --soft keeps the changes but removes the commit
- git reset --mixed HEAD : to squash between similar commits
- git rebase -i root --autosquash

# Undo
git config --global alias.undo ' !f() {git reset --hard $(git rev-parse --abbrev-ref HEAD)@{${1-1}}; }; f'

# Recovering commits
- when we move edit the commits within the git history, git fsck --unreachable 
- To see the reachable commits quantity: git fsck --unreable | wc -l
- to see including the unreachable commits and to ignore the reference log entries: git fsck --unreachable --no-reflogs | wc -l
- the difference between the 2 previosu commands represents the unreachabel commits quantity that are not reachable from a branch or tag, but are still rechable from the reference logs
- Default time expiratino for reachable commits: 60 days from the commit day
- Default time expiration for unreachable commits: 30 days conting from the commit day
- to change the expiration date set: ```gc.reflogExpire ``` and ``` gc.reflogExpireUnreachable ```
- Recover commit from the ref log, by using reset or cherry-pick
- git log --grep=C --walk-reflogs
- to force move a branch to a commit: git branch -f master(branch name) HEAD(can be hascommit)
