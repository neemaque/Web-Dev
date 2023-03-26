a = int(input())
ans = 0
while a > 0:
    ans += a%10
    a = a//10
print(ans)