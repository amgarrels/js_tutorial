(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("amgarrels-palindrome");
let string = prompt("Please enter a string for palindrome testing")
let phrase = new Phrase(string);
if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`)
} else {
  alert(`"${phrase.content}" is not a palindrome.`)
}

},{"amgarrels-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds 'reverse' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Returns true if string is blank or whitespace only
String.prototype.blank = function() {
  return (/^\s+$/).test(this) || this.length === 0;
}

// Returns last item in array
Array.prototype.last = function () {
  return this.slice(-1)[0];
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns the letters in the content.
  this.letters = function letters(){
    return Array.from(this.content).filter((c) => c.match(/[a-z]/i)).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome(){
    return this.processedContent() === this.processedContent().reverse();
  }

  this.processor = function processor(string){
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  // Makes the phrase LOUDER.
  this.louder = function louder(){
  return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation){
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
