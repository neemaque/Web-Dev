import math

x = int(input())
a = 0
while a<x:
    a+=1
    if int(math.sqrt(a))**2 == a:
        print(a)