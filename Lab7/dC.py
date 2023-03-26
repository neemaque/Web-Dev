n = int(input())
a = list(map(int, input().split()))
ans = 0
for x in a:
    if x > 0: ans+=1
print(ans)