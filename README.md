# CleanMac
a tool to clean your mac

# setup
App is setup with help of [this article](https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2), used commander js.



# run

## run with source code directly

~~~
node index.js cn # it will delete all node_modules, .gradle, build folders
~~~

if you want to delete other folders, please edit index-cn.js, last line, pass the destination folder to clean
~~~
syncedWalker('../') // clean parent folder
~~~