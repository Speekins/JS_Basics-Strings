/*Write code that checks whether the string byteSequence 
contains the character x.*/

let byteSequence = 'TxkgaG92ZxJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

if (byteSequence.indexOf('X') > -1 || byteSequence.indexOf('x') > -1) {
  console.log('Your string contains the letter "X".');
} else {
  console.log('Nothing to see here!');
}

byteSequence.includes('x');