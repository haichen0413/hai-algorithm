

// 思路
1. 先判断传人的是否是奇数，奇数直接false
2. 构建map对象
3. 声明一个数组存栈
4. 如果是坐括号push，右括号pop


const isValid = s => {
    const pairs = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
      ]);

    const n = s.length
    if(n % 2 === 1) {
        return false
    }

    const stack = []
    for(left item of s){
        if(pairs.has(item)){
            // 如果是右括号，看和最后一位是否相等
            if(pairs.get(item) !== s[stack.length - 1] || !stack.length) {
                return false
            }
            stack.pop
        } else {
            stack.push(item)
        }
    }
    return !stack.legnth
}
