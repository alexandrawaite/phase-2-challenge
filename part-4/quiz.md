* When you run a command in the terminal, where does BASH look for that command?

  * BASH looks for commands in the /bin directory.


* On a UNIX computer, how do you stop a running process?

   * `control-c`


* What packages do you have installed via homebrew?

  * icu4c and node


* On a UNIX computer, how do you find the process id of a running process?

  * `ps` command provides information about running processes, including their PIDs.


* In a terminal, what does `control-c` do?

  * `control-c` cancels the currently running process.


* In a terminal, what does `control-a` do?

  * `control-a` moves the cursor to the beginning of the line.


* In a terminal, what does `control-e` do?

  * `control-e` moves the cursor to the end of the line.


* What keyboard shortcut do you use to split the screen in your editor?

  * `cmd` + `shift` + `p` and type 'split'.


* What keyboard shortcut do you use to split the screen in your terminal?

  * `cmd` + `d` to split the screen vertically or `shift` + `cmd` + `d` to split the screen horizontally.


* When a terminal command completes, how can you tell if it was successful or not?

  * Running `echo $?` will let you know the exit status of the last command. If the output is `0`, the command was successful. If the output is non-zero, the command wasn't successful.


* What does your ~/.gitconfig have in it? (paste the whole file here)
  ```
  credential.helper=osxkeychain
  user.name=alexandrawaite
  user.email=alexandrawaite@gmail.com
  ```
* What is the difference between a relative and absolute path?

  * A relative path is relative to where you currently are in the system. An absolute path is the path beginning from the root of the file system.


* Lets say you have the following file structure and you were in the `linkedin-for-dancers` folder. What command would you use to change folders to the `pinterest-for-dogs` folder?

  ```~
  └── Projects
      ├── pinterest-for-dogs
      │   ├── README.md
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```
 `cd ../pinterest-for-dogs`

* What keyboard shortcut do you use, in your editor, when you want to open a specific file?

  *  `cmd` + `o`


* What files or folders do you want all git repositories to ignore?

  * Operating system files (.DS_Store), application files, language and framework files, credentials.


* What is the main difference between `==` and `===` in JavaScript?

  * `==` will perform a conversion to a common type when comparing two things while `===` will do the same comparison without type conversion.
