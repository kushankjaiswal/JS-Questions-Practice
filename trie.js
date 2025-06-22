class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search for a full word in the trie
  search(word) {
    let node = this._searchNode(word);
    return node !== null && node.isEndOfWord;
  }

  // Check if any word starts with the given prefix
  startsWith(prefix) {
    return this._searchNode(prefix) !== null;
  }

  // Helper function to traverse to the end node of a prefix/word
  _searchNode(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return null;
      }
      node = node.children[char];
    }
    return node;
  }

  // Autocomplete: Return all words that start with the given prefix
  autoComplete(prefix) {
    const results = [];
    const node = this._searchNode(prefix);
    if (!node) return results;

    this._dfs(node, prefix, results);
    return results;
  }

  // Helper DFS to collect all words from given node
  _dfs(node, path, results) {
    if (node.isEndOfWord) {
      results.push(path);
    }

    for (let char in node.children) {
      this._dfs(node.children[char], path + char, results);
    }
  }
}


const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("apex");
trie.insert("bat");
trie.insert("batman");

console.log(trie.search("app"));        // true
console.log(trie.search("appl"));       // false
console.log(trie.startsWith("ba"));     // true
console.log(trie.autoComplete("app"));  // ["apple", "app"]
console.log(trie.autoComplete("bat"));  // ["bat", "batman"]
console.log(trie.autoComplete("z"));    // []

