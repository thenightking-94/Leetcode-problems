var addTwoNumbers = function(l1, l2) {
    let sum = [], i = 0, bal = 0, dig;
    const props = l1.length > l2.length ? {
        max: l1,
        min:l2
    } : {
        max: l2,
        min: l1
    };
    const {max, min} = props;
    while(i < max.length){
          dig = bal > 0 ? max[i] + min[i] + bal : max[i] + min[i];
          bal = Math.floor((max[i] + min[i] + bal)/10);
          sum.push(dig < 10 ? dig : (i===max.length-1 ? dig : Math.floor(dig%10)))
          console.log(dig, bal, sum)
        i++;
    }
    return sum
};

console.log(addTwoNumbers([1,2,2],[8,9,8]))
