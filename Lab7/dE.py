n = int(input())
a = list(map(int, input().split()))
for i in range(1, n):
    if not((a[i]>0)^(a[i-1]>0)):
        print("YES")
        exit(0)
print("NO")