My social links page: https://mrmodest.github.io/

More readable version of code for this page: https://github.com/MrModest/contacts/tree/master

#  Installation

Clone the __**[original](https://github.com/Gjmrd/gjmrd.github.io)**__ repo and deploy. 

# Change Cards and/or localization files

To change the card information you should go to [/src/json/cards](https://github.com/Gjmrd/gjmrd.github.io/tree/master/src/json/cards) <br />
To change localization phrases you should go to [/src/json/localization](https://github.com/Gjmrd/gjmrd.github.io/tree/master/src/json/localization) <br />
You don't have to recompile project to commit the changes <br />
They will be loaded when page is refreshed. 

# Other changes

If you want to change styles/components or add/replace card logos you will have to recompile project using node.js <br />
`npm install` - for install all dependencies <br />
`npm run build` - for get static version of site working without node.js <br />
Than delete folder `static` from root path and copy all files from `build` path to root (with replace). <br />
