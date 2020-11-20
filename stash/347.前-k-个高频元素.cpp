/*
 * @lc app=leetcode.cn id=347 lang=cpp
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int> counts;
        // 计算频次
        for(int i : nums) counts[i]++;
        // 最小堆
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> q;
        // 堆中元素为 [频次，数值] 元组，并根据频次维护小顶堆特性
        for(auto it : counts) {
            if (q.size() != k) {
                q.push(make_pair(it.second, it.first));
            } else {
                if (it.second > q.top().first) {
                    q.pop();
                    q.push(make_pair(it.second, it.first));
                }
            }
        }
        vector<int> res;
        while(q.size()) {
            res.push_back(q.top().second);
            q.pop();
        }
        return vector<int>(res.rbegin(), res.rend());
    }
};
// @lc code=end

