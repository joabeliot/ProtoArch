### Commit History

# Commit-(C001): "Initialization" [link](https://github.com/joabeliot/ProtoArch/tree/048337b67e19818e95a905f0f14b9b02ad9677b5)
1. Created `COMMIT.md` for Commit Recording

# Commit-(C002): "Yeoman Initialization" [link]()
[reference](https://code.visualstudio.com/api/get-started/your-first-extension)
1. Run `npm install --global yo generator-code` to install yeoman
2. Run `yo code` to create a template for VSCode Extension
3. Selection for the Following options
```shell
? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? ProtoArch
? What's the identifier of your extension? protoarch
? What's the description of your extension? 
? Initialize a git repository? No       
? Which bundler to use? unbundled
? Which package manager to use? npm
```
This will be the response
```shell
Writing in D:\Projects\ProtoArch\protoarch...
   create protoarch\.vscode\extensions.json
   create protoarch\.vscode\launch.json    
   create protoarch\.vscode\settings.json
   create protoarch\.vscode\tasks.json
   create protoarch\package.json
   create protoarch\tsconfig.json
   create protoarch\.vscodeignore
   create protoarch\vsc-extension-quickstart.md
   create protoarch\README.md
   create protoarch\CHANGELOG.md
   create protoarch\src\extension.ts
   create protoarch\src\test\extension.test.ts
   create protoarch\.vscode-test.mjs
   create protoarch\.eslintrc.json

Changes to package.json were detected.
```

This will spin the template `protoarch` folder.
4. Additionally i had to install latest version of Nodejs. Version details [Ref](https://nodejs.org/en/download/package-manager/current)
5. To run this code open `src/extension.ts` and hit `f5`... Once a new window where this extension is build is opened, press `ctrl+shift+p` and type `helloWorld` as mentioned in the `extension.ts` line 16 this will show a notification as thats the command given in the code when this command is entered.