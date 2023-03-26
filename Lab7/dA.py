n = int(input())
a = list(map(int, input().split()))
for x in a[::2]:
    print(x, end=" ")