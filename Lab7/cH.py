a = int(input())
ans = 0
for i in range(a):
    if a % (i+1) == 0:
        print(i+1, end=" ")