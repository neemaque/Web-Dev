import math

a = int(input())
ans = 0
for i in range(1, int(math.sqrt(a))+1):
    if a % i == 0:
        ans += 1
        if a // i != i: ans += 1
print(ans)