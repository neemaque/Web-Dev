a = int(input())
for i in range(1, a):
    if a % (i+1) == 0:
        print(i+1)
        break