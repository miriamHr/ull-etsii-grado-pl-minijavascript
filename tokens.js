"use strict";
// tokens.js
// 2010-02-23

// Produce an array of simple token objects from a string.
// A simple token object contains these members:
//      type: 'name', 'string', 'number', 'operator'
//      value: string or number value of the token
//      from: index of first character of the token
//      to: index of the last character + 1

// Comments are ignored.

RegExp.prototype.bexec = function(str) {
  var i = this.lastIndex;
  var m = this.exec(str);
  if (m && m.index == i) return m;
  return null;
}

String.prototype.tokens = function () {
    var from;                   // The index of the start of the token.
    var i = 0;                  // The index of the current character.
    var n;                      // The number value.
    var str;                    // The string value.
    var m;                      // Matching
    var result = [];            // An array to hold the results.

    var WHITES              = _______________________________________;
    var ID                  = _______________________________________;
    var NUM                 = _______________________________________;
    var STRING              = _______________________________________;
    var ONELINECOMMENT      = _______________________________________;
    var MULTIPLELINECOMMENT = _______________________________________;
    var TWOCHAROPERATORS    = _______________________________________;
    var ONECHAROPERATORS    = _______________________________________;

    // Make a token object.
    var make = function (type, value) {
        return {
            type: _____,
            value: ______,
            from: ______,
            to: ____
        };
    };

    // Begin tokenization. If the source string is empty, return nothing.
    if (!this) return; 

    // Loop through this text
    while (_______________) {
        WHITES.lastIndex =  ID.lastIndex = NUM.lastIndex = ______.lastIndex =
        ONELINECOMMENT.lastIndex = ___________________.lastIndex =
        ________________.lastIndex = ________________.lastIndex = _;
        from = i;
        // Ignore whitespace.
        if (m = WHITES.bexec(this)) {
            str = m[0];
            _______________
        // name.
        } else if (m = ID.bexec(this)) {
            str = m[0];
            _______________
            result.push(make('name', str));

        // number.
        } else if (m = NUM.bexec(this)) {
            str = m[0];
            _______________

            n = +str;
            if (isFinite(n)) {
                result.____(make('number', n));
            } else {
                make('number', str).error("Bad number");
            }
        // string
        } else if (m = STRING.bexec(this)) {
            str = m[0];
            _______________
            str = str.replace(/^____/,'');
            str = str.replace(/["']$/,'');
            result.____(make('string', str));
        // comment.
        } else if ((m = ONELINECOMMENT.bexec(this))  || 
                   (m = MULTIPLELINECOMMENT.bexec(this))) {
            str = m[0];
            _______________
        // two char operator
        } else if (m = TWOCHAROPERATORS.bexec(this)) {
            str = m[0];
            _______________
            result.____(make('operator', str));
        // single-character operator
        } else if (m = ONECHAROPERATORS.bexec(this)){
            result.____(make('operator', this.substr(i,1)));
            _______________
        } else {
          throw "Syntax error near '"+this.substr(i)+"'";
        }
    }
    return result;
};
