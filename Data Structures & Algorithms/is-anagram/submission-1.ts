class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length !== t.length) return false;

        let word1 = {  };
        let word2 = {  };

        function addCharIntoMap(char: string, map: Object): void {
            if (!map[char]) {
                map[char] = 1;
            } else {
                map[char] += 1;
            }
        }

        for (let i = 0; i < s.length; i++) {
            const char1 = s[i];
            const char2 = t[i];
            
            addCharIntoMap(char1, word1);
            addCharIntoMap(char2, word2);
        }

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (word1[char] !== word2[char]) return false;
        }

        return true;
    }
}
