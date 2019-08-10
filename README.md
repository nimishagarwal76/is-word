![Built with love](http://forthebadge.com/images/badges/built-with-love.svg)

# is-word
Checks if a word exists in a language. Currently supports 10 languages. Uses tries to get very fast results.

### Installation
```bash
$ npm install is-word
```

### Usage
```js
var isWord = require('is-word');
var englishWords = isWord('american-english');

console.log(englishWords.check('direction')); // true
console.log(englishWords.check('asddsaaaa')); // false
```
``isWord()`` returns an object having a trie of the configured language. The object has check method which returns a boolean value if a word is present in a language or not.

### Configure
To change the languages,

american-english - ``isWord('american-english');``

brazilian - ``isWord('american-english');``

british-english - ``isWord('british-english');``

french - ``isWord('french');``

italian - ``isWord('italian');``

ngerman - ``isWord('ngerman');``

ogerman - ``isWord('ogerman');``

portuguese - ``isWord('portuguese');``

spanish - ``isWord('spanish');``

swiss - ``isWord('swiss');``




### Why is-word ?
is-word is very fast compared to existing checkers which use a regex for all available words. is-word uses tries data structure which causes comparisons to be done very quickly. Trie creation takes some time but if there are a lot of words to be checked then is-word is way ahead than others.

### Features and Contributions
is-word was initially created for testing inconsistencies and mistakes in translations but can be expanded to much more. So if you have any feature suggestions feel free to open a PR.

Though I have tested the code against a lot of test cases, still if you find a bug, feel free to raise an issue.