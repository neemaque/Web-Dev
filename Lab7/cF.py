a = int(input())
ans = 0
c = 0
while a > 0:
    ans = ans*10 + a%10
    a = a//10
print(ans)