import { measureExecutionTime } from './measureExecution.js';
import { addUpTo, addUpToN } from './addUpToN.js';
import  { arrReverded, arrUnshiftLoop, splitReverseJoin, whileReverse, whileReverse1, loopReverse } from './reverseString.js';

// measureExecutionTime(addUpTo, 1000000000000000);
// measureExecutionTime(addUpToN, 1000000000000000);

// arrUnshiftLoop('cat');
// arrReverded('cat');
// splitReverseJoin('cat');
// whileReverse('cat');
// whileReverse1('cat');
// loopReverse('cat');

// measureExecutionTime(arrUnshiftLoop, 'cat');
// measureExecutionTime(arrReverded, 'cat');
// measureExecutionTime(splitReverseJoin, 'cat');
// measureExecutionTime(whileReverse, 'cat');
// measureExecutionTime(whileReverse1, 'cat');
// measureExecutionTime(loopReverse, 'cat');


import { same, sameRefactor } from './same.js';

// measureExecutionTime(same, [1,2,3], [1,4,9]);
// measureExecutionTime(sameRefactor, [1,2,3], [1,4,9]);

// create 2 arrays of 50 elements each for me and store them in varriable a and b
// let a = [1,2,10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 89, 88, 87, 86, 85, 84, 83, 82, 81, 79, 78, 77, 76, 75, 74, 73, 72, 71, 69, 68, 67, 66, 65, 64, 63, 62, 61, 59, 58, 57, 56, 55, 54, 53, 52, 51];
// let b = [1, 4, 100, 400, 900, 1600, 2500, 3600, 4900, 6400, 8100, 10000, 9801, 9604, 9409, 9216, 9025, 8836, 8649, 8464, 8281, 7921, 7744, 7569, 7396, 7225, 7056, 6889, 6724, 6561, 6241, 6084, 5929, 5776, 5625, 5476, 5329, 5184, 5041, 4761, 4624, 4489, 4356, 4225, 4096, 3969, 3844, 3721, 3481, 3364, 3249, 3136, 3025, 2916, 2809, 2704, 2601 ];

// measureExecutionTime(same, a, b);
// measureExecutionTime(sameRefactor, a, b);


import { anagram, anagramRefactor } from './anagram.js';

// measureExecutionTime(anagram, 'Supercalifragilisticexpialidocious', 'suoicodilaipxecitsiligarfilacrepus');
// measureExecutionTime(anagramRefactor, 'Supercalifragilisticexpialidocious', 'suoicodilaipxecitsiligarfilacrepus');

// console.log(anagram('anagram', 'nagaram'));

import { sumZero } from './sumZero.js';

// measureExecutionTime(sumZero, [-4,-3,-2,-1,0,1,2,5]); // should return [ -2, 2]
// measureExecutionTime(sumZero, [-4,-3,-2,-1,0,1,10,5]); // should return [ -1, 1]
// measureExecutionTime(sumZero, [-4,-3,-2,-1,0,10,5]); // should return undefined

import { countUniqueValues, countUniqueValuesRefactor } from './countUniqueValues.js';

// countUniqueValues([1,1,1,1,1,2]); // 2

// measureExecutionTime(countUniqueValues, [1,1,1,1,1,2]); // 2
// measureExecutionTime(countUniqueValuesRefactor, [1,1,1,1,1,2]); // 2

// measureExecutionTime(countUniqueValues, [1,1,1,1,1,2,5,6,7,8,9,11,12,13,14,15,19,23,29,40,506]); 
// measureExecutionTime(countUniqueValuesRefactor, [1,1,1,1,1,2,5,6,7,8,9,11,12,13,14,15,19,23,29,40,506]); 

import { maxSubArraySum } from './maxSubArraySum.js';

measureExecutionTime(maxSubArraySum, [1,2,5,2,8,1,5], 2); 