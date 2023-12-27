/* 
  Given the number of stairs and that either 1 or 2 stairs can be climbed at once,
  find in how many different ways the stairs can be climbed.
  Advanced Version : take number of stairs that can be climbed as input.
 */

/*
  THOUGHT PROCESS :
  1. 1 way will be simply to climb 1 stair at a time.
  2. Find if N is multiple of 2. N%2 === 0. Then second way is to climb 2 stairs at a time.
   2.1  1 1 2 2 2 2 2 ... n OR 2 1 1 2 2 2 2 ... n OR 2 2 1 1 2 ... n
        - In this I have 1 [1,1] and n/2 [2]; To find all possible combination: Total places : n/2 + 1.
        - Total combinations is equivalent to placing [1,1] at any of these places. Hence, n/2 + 1.
        - Realized that 1, 1 need not be placed together. 
   2.2  1 1 1 1 2 2 2 ... n. Total

   Thinking of it the other way around : all 1s -> 1 way.
                                       : a single 2 added => (n-1) Places were 2 can be placed; 
                                       : 2 2s added => (n-4) + 2 Places were 2 2s need to be placed.
                                       : n/2 2s added => 1 way 
.                                       Summation of mC2 ways. where m ranges from (n-1) to n/2
(n - 2 + 1) + (n - 4 + 2) + ... + (n - n + 1);
And now because of jumping steps I am lost.
How to revive from this position.
1. Don't try to find mistake in between as step 1 iteself might be wrong.
2. So 1 way is clear - > 1,1,1,1 ... n;
   way 2 is -> 1,1,1,1,1,2 ....n;
    - A new though comes up -> Break the problem,
    - What are the ways to reach the first step : Only 1.
    - What are the ways to reach the second stair : 1, 1 || 2 -> 2ways
    - What are the ways to reach the third stair : 1,1,1 || 1, 2 || 2,1 -> 3 ways => reach 2 stairs then 1
    - What are the ways to reach the fourth stair : 1,1,1,1 || 1, 2, 1 || 2,1,1 || 2,2 -> 4 ways => reach 2 stairs the 2
    - What are the ways to reach the fifth stair : 1,1,1,1,1 || 1,2,1,1 || 2,1,1,1 || 1,1,2,1 || 1,1,1,2 || 1,2,2 || 2,1,2 || 2,2,1 -> 8 ways => reach 4 stairs then 1 + reach 3 then 2 => 4 + 3 + 1(1 extra way to climb 2 stairs);
    - What are the ways to reach the sixth stair : 1,1,1,1,1,1 || 1,2,1,1,1 || 2,1,1,1,1 || 1,1,2,1,1 || 1,1,1,2,1 || 1,1,1,1,2|| 1,1,2,2 || 1,2,1,2 || 2,1,1,2 || 2,2,1,1 || 2,1,2,1 || 2,2,2 -> 8 ways => reach 4 stairs then 1 + reach 3 then 2 => 8 + 4(1 extra way to climb 2 stairs);

    ways to reach the nth stair = (n-1)th + ((n-2) + (ways to climb 2 stairs - 1)) + ((n-3) + (ways to climb 3 stairs - 1)) + ((ways to climb n -4))

 
    
  */

let waysToReach = (n) => {
  if (n == 1) return 1;
  if (n == 2) return 2;
  return waysToReach(n - 1) + waysToReach(n - 2);
};

console.log(waysToReach(5));
