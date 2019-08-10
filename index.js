var fs = require('fs');
var path = require('path');

function node()
{
    this.end = false;
    this.children = {};
}

function Trie()
{
    this.root = new node();
}

Trie.prototype.insert = function(word) {
    var temp = this.root;
    for(var i = 0; i < word.length; ++i)
    {
        if(temp.children[word[i]]) temp = temp.children[word[i]];
        else 
        {
            temp.children[word[i]] = new node();
            temp = temp.children[word[i]];
        }
    }
    temp.end = true;
}

Trie.prototype.check = function word(word) {
    if(this.root == null) return false;
    var temp = this.root;
    for(var i = 0; i < word.length; ++i)
    {
        if(!temp.children[word[i]]) return false;
        temp = temp.children[word[i]];
    }
    return (temp.end === true);
}



module.exports = function words(language) {
    const possibleLanguages = ['american-english', 'brazilian', 'british-english', 'french', 'italian', 'ngerman', 'ogerman', 'portuguese', 'spanish', 'swiss'];
    
    language = language || 'american-english';
    if(possibleLanguages.indexOf(language) === -1) throw new Error(language + " is not vaid language");
    
    
    var trie = new Trie();
    var filePath = path.resolve(path.join(__dirname, `./dictionary/${language}`));
    
    var text = fs.readFileSync(filePath, "utf-8");
    text = text.split('\n');
    text.forEach(word => {
        trie.insert(word);
    });
    
    return trie;
}
