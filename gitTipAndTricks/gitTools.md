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
