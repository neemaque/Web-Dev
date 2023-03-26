s = input()
s = s[-1:0:-1] + s[0]
c = 0
ans = 0
for x in s:
    if x=='1':
       ans += 2**c
    c += 1
print(ans)