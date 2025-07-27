#### [3. 无重复字符的字串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/)
给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。
```javascript
// 想象一个滑动窗口
var lengthOfLongestSubstring = function(s) {
    const dic = new Set();
    const n = s.length;
    let right = 0, ans = 0;
    for(let left = 0; left<n; left++){//left必须要遍历。1.想象滑动窗口 2.例子dvdfs
        dic.delete(s.charAt(left-1));// 不用clear而是只去掉左边界字符
        while(right<n && !dic.has(s.charAt(right))){
            dic.add(s.charAt(right));
            right++;
        }
        ans = Math.max(ans, right - left);
    }
    return ans;
};
```

#### [88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
```javascript
var merge = function(nums1, m, nums2, n) {
    let i = m-1, j = n-1;
    let p = nums1.length-1;
    // 原地修改nums1，所以从后面开始移动
    while(p>0&&j>=0&&i>=0){
        if(nums1[i] >= nums2[j]){
            nums1[p] = nums1[i]
            i--;
        }
        else{
            nums1[p] = nums2[j]
            j--;
        }
        p--;
    }
    //如果nums2还有的话，要把nums2剩下的加进去
    //nums1如果有剩下的，本来就在数组中
    while(j >= 0){
        nums1[p] = nums2[j];
        j--;
        p--;
    }
};
```
#### [165. 比较版本号](https://leetcode.cn/problems/compare-version-numbers/)
给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。修订号的值 是它 转换为整数 并忽略前导零。

比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。

返回规则如下：
如果 version1 < version2 返回 -1，
如果 version1 > version2 返回 1，
除此之外返回 0。
+ 方法一
  ```javascript
    var compareVersion = function(version1, version2) {
        const n = version1.length, m = version2.length;
        let i = 0, j = 0;
        while (i < n || j < m) {// 遍历i, j使其遍历完一个字符串
            let x = 0;
            for (; i < n && version1[i] !== '.'; ++i) {// 每个点号内的为一个计算点
                x = x * 10 + version1[i].charCodeAt() - '0'.charCodeAt();
            }
            ++i; // 跳过点号
            ///////////////
            let y = 0;
            for (; j < m && version2.charAt(j) !== '.'; ++j) {
                y = y * 10 + version2[j].charCodeAt() - '0'.charCodeAt();
            }
            ++j;
            if (x !== y) {
                return x > y ? 1 : -1;
            }
        }
        return 0;
    };
  ```
+ 方法二
```javascript
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; ++i) {
        let x = 0, y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
    }
    return 0;
};
```
#### [1. 两数之和](https://leetcode.cn/problems/two-sum/submissions/595027538/)
方法一（枚举）
```javascript
    var twoSum = function(nums, target) {
        for(let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++){
                if(nums[i]+nums[j] == target){
                    return [i, j]
                }
            }
        }
    };
```
方法二（哈希表）
```javascript
    var twoSum = function(nums, target) {
        const dic = new Map();
        for(let i=0; i<nums.length; i++){
            if(dic.has(target - nums[i])){
                return [dic.get(target - nums[i]), i];
            }
            dic.set(nums[i], i);
        }
    };
```
#### 两数之和&三数之和
两数之和
```javascript
var twoSum = function(nums, target) {
    let dic = new Map()
    for(let i=0; i<nums.length; i++){
        if(dic.has(target-nums[i])){
            return [dic.get(target-nums[i]),i]
        }
        dic.set(nums[i],i)
    }
};
```
三数之和
```javascript
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const ans =[];
    for(let i = 0; i<nums.length-2; i++){
        const x = nums[i];
        if(i>0&&x===nums[i-1])continue;
        let j = i+1, k = nums.length-1;
        while(j<k){
            const s = x + nums[j] +nums[k];
            if(s>0){
                k--;
            }
            else if(s<0){
                j++;
            }
            else{
                ans.push([x, nums[j], nums[k]]);
                j+=1
                while(j<k && nums[j] === nums[j-1]){
                    j+=1
                }
                k-=1
                while(k>j && nums[k] === nums[k+1]){
                    k-=1
                }
            }
        }
    }
    return ans;
};
```
#### 反转链表
```javascript
var reverseList = function(head) {
    let pre = null
    while(head){
        let nextTemp = head.next
        head.next = pre
        pre = head
        head = nextTemp
    }
    return pre
};
```

#### LRU缓存
```javascript
var ListNode = function(key, value){
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;  // 最大存储值
    this.curSize = 0;          // 目前长度
    this.nodeMap = {};         // 存储链表结点的map
    this.head = new ListNode(-1, -1);
    this.tail = new ListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.capacity === 0) return -1; // 如果容量为0，直接返回-1
    let node = this.nodeMap[key];
    if (node) {
        this.moveToHead(node);
        return node.value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
LRUCache.prototype.moveToHead = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;

    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.capacity === 0) return; // 如果容量为0，什么都不做
    let node = this.nodeMap[key];
    if (node) {
        node.value = value;
        this.moveToHead(node);
    } else {
        let listNode = new ListNode(key, value);
        this.nodeMap[key] = listNode;
        this.addToHead(listNode);
    }
};

/** 
 * 添加到链表头部
 */
LRUCache.prototype.addToHead = function(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;

    this.curSize++;

    if (this.curSize > this.capacity) {
        // 删除尾部的节点
        let tailNode = this.tail.prev;
        let newTailNode = this.tail.prev.prev;
        newTailNode.next = this.tail;
        this.tail.prev = newTailNode;
        // 删除哈希表中的这个节点
        delete this.nodeMap[tailNode.key];
        this.curSize--;
    }
};
```
#### 有效的括号
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2){
        return false
    }
    const dic = {'(':')', '[':']', '{':'}'};
    let res = [];
    for(const t of s){
        if(dic[t]){// 有右括号，说明它是左括号
            res.push(dic[t])// 将其对应的右括号进栈
        }else if(res.length === 0||res.pop()!==t){// 右括号不匹配，栈里右多余
            return false
        }
    }
    return res.length===0
};
```
#### 快速排序
```javascript
var sortArray = function(nums) {
    function sort(nums, start, end) {
        if (start >= end) return; // 递归终止条件
        let left = start, right = end;// 这里要记录start和end
        let pivot = nums[left];
        while (left < right) {
            while (left < right && nums[right] >= pivot){
                right--;
            }
            if (left < right){
                nums[left] = nums[right];
            }
            while (left < right && nums[left] < pivot){
                left++;
            }
            if (left < right){
                nums[right] = nums[left];
            }
        }
        nums[left] = pivot;
        sort(nums, start, left - 1);//start和end这里有用
        sort(nums, left + 1, end);
    }
    
    sort(nums, 0, nums.length - 1);
    return nums; // 返回排序后的数组
};

// 测试
console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
console.log(sortArray([3, 6, 8, 10, 1, 2, 1])); // [1, 1, 2, 3, 6, 8, 10]
console.log(sortArray([])); // []
console.log(sortArray([1])); // [1]
```
#### 二叉树的层序遍历
```javascript
var levelOrder = function(root) {
    if (root == null) return []; // 空树返回空数组
    let q = [root];  // 用队列存储当前层的所有节点
    let res = [];    // 结果数组

    while (q.length) {
        let tmp = []; // 存储当前层的值
        let size = q.length; // 当前层的节点数

        for (let i = 0; i < size; i++) {
            let cur = q.shift(); // 取出队列的第一个节点
            tmp.push(cur.val);   // 存入当前层的值

            // 将左右子节点加入队列
            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }

        res.push(tmp); // 把当前层的结果存入 res
    }

    return res;
};
```
#### 翻转二叉树
```javascript
var invertTree = function(root) {
    function traverse(root){
        if(root == null){
            return
        }
        let tmp = root.left;
        root.left = root.right;
        root.right = tmp;
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return root;
};
```
#### 根节点到叶结点数字和
```javascript
var sumNumbers = function(root) {
    let res = 0;
    let tmp = [];
    var traverse = function(root){
        if(!root){
            return null
        }
        tmp.push(root.val)
        if(!root.left&&!root.right){
            res = res+Number(tmp.join(""))
        }
        traverse(root.left)
        traverse(root.right)
        tmp.pop()
    }
    traverse(root)
    return res
};
```
#### 路径总和
```javascript
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let tmp = 0;
    let found = false;
    var traverse = function(root){// 不用加targetSum
        if(!root){
            return
        }
        tmp = tmp + root.val
        if (!root.left && !root.right && tmp === targetSum) {
            found = true
        }
        traverse(root.left)
        traverse(root.right)
        tmp = tmp - root.val
    }
    traverse(root)
    return found;
};
```
#### 字符串去重
![alt text](image-3.png)
#### 无重复字符的最长字串
```javascript
var lengthOfLongestSubstring = function(s) {
    const dic = new Set();
    const n = s.length;
    let right = 0, ans = 0;
    for(let left = 0; left<n; left++){//left必须要遍历。1.想象滑动窗口 2.例子dvdfs
        dic.delete(s.charAt(left-1));// 去掉
        //还没有出现重复的。如果还有重复的则left移动
        while(right<n && !dic.has(s.charAt(right))){
            dic.add(s.charAt(right));
            right++;
        }
        ans = Math.max(ans, right - left);
    }
    return ans;
};
```

#### 大数相加
```javascript
function sum(a, b){
    const len = Math.max(a.length, b.length);
    a = a.padStart(len, '0');
    b = b.padStart(len, '0');
    let carry = 0;
    let result = '';
    for(let i=len-1; i>=0; i--){
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        result = (sum%10) + result;
        carry = Math.floor(sum/10);
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}
```
#### 合并两个有序链表
```javascript
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let p = dummy;
    while(list1&&list2){
        if(list1.val <= list2.val){
            p.next = list1;
            list1 = list1.next;
        }
        else{
            p.next = list2;
            list2 = list2.next;
        }
        p = p.next;
    }
    p.next = list1 !== null ? list1 : list2;
    return dummy.next
};
```
#### 合并两个有序数组
```javascript
var merge = function(nums1, m, nums2, n) {
    let i = m-1, j = n-1;
    let p = nums1.length-1;
    // 原地修改nums1，所以从后面开始移动
    while(p>0&&j>=0&&i>=0){
        if(nums1[i] >= nums2[j]){
            nums1[p] = nums1[i]
            i--;
        }
        else{
            nums1[p] = nums2[j]
            j--;
        }
        p--;
    }
    //如果nums2还有的话，要把nums2剩下的加进去
    //nums1如果有剩下的，本来就在数组中
    while(j >= 0){
        nums1[p] = nums2[j];
        j--;
        p--;
    }
};
```
#### 买卖股票的最佳时机
```javascript
var maxProfit = function(prices) {
    let ans = 0;
    let minPrice = prices[0];
    for(const p of prices){
        ans = Math.max(ans, p - minPrice);
        minPrice = Math.min(minPrice, p);
    }
    return ans;
};
```
#### 比较版本号
```javascript
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; ++i) {
        let x = 0, y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
    }
    return 0;
};
```
#### 爬楼梯
```javascript
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
};
```