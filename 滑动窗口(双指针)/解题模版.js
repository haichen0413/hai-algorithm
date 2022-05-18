// 最长模版
// 初始化left、right、result、bestResult
while(右指针没到结尾){
    // 右指针右移，窗口扩大，加入对应result
    while(result不满足要求){
        left右移，缩少窗口，并移除left元素
    }
    更新最优bestResult
    right++
}
返回bestResult

// 最短模版
// 初始化left、right、result、bestResult
while(右指针没到结尾){
    // 右指针右移，窗口扩大，加入对应result
    while(result满足要求){
        更新最优结果bestResult
        窗口缩小，移除left对应元素，left右移
    }
    right++
}
返回bestResult