# posh-git tool for powershell on Windows
- clone it from powershell: ``` git clone https://github.com/dahlbyk/posh-git.git```
- Install it: ```cd .\posh-git\  .\install.ps1```
- Install module: ```Install-Module posh-git .$PROFILE cd RepoFolder```
- With this all made, everytime powershell founds a git repository will reach the text from the command repository. Plus it is going ot autocomplete any git command you want to type.

- downloand git-completion bash: ```wget https://github.com/git/git/blob/master/contrib/completion/git-completion.bash --quiet --show-progress -O ~/git-completion.bash```
- To have it available in all the command terminal: ```echo -e "\nsource ~/git-completion.bash" >> ~/.bash_profile```

## zsh tool
- Another tool option is: zsh --version. By installing from: http://git.io/Installing-ZSH ```wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh --quiet -show-progress -O ~/install.sh```
- onubuntu: isntall zsh >  whereis zsh > use the zsh location whether you want to set this shell as default > sudo usermod -s /usr/bin/zsh $(whoami) > then reboot> sudo reboot
- use ZSH Powerlevel9k Theme for ubuntu 

## Shortcut commands or git Alias commands
- This commands are stores on git location, to see them: ```git config aliast.st status```
- ```cat .git/config | grep -A 1 "\[alias\]"```
- this command will be saved in the user home dr .gitconfig: ``` git config --global alias.st status```
- Other command example, this is a alias for convination command: ```git config --global alias.st "status --short --branch"```
- ```git config --global alias.cma "commit --all -m"```
- ```git config --global alias.qm '!git checkout $1;git merge @{-1}'```
