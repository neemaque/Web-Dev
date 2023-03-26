a = int(input())
b = int(input())
ans = 0
while a > 0:
    if a%10 == b: ans+=1
    a = a//10
print(ans)