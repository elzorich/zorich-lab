function twoSum(nums: number[], target: number): number[] {
    const result = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        const index = result.get(complement);

        if(index !== undefined) {
            return [index, i];
        }

         result.set(nums[i], i);
         
    }
    throw new Error ("No two sum solution found");
};

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
