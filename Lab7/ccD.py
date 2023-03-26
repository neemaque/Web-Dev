import math

a = int(input())
c = 1
while c <= a:
    if c == a:
        print("YES")
        exit(0)
    c *= 2
print("NO")