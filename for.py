for item in range(5, 15, 3):
    print(item)
price = [10, 20, 30, 40]
sum = 0
for i in price:
    sum += i
print(f"Total: {sum}")
for x in range(3):
    for z in range(2):
        print(f'({x}, {z})')
numbers = [2, 2, 2, 2, 7]
for x_count in numbers:
    output = ''
    for count in range(x_count):
        output += 'x'
    print(output)
names = ['john', 'bob', 'lemmy', 'mine', 'merry']
names[3] = 'Lemuel'
print(names)
num = [2, 4, 7, 3, 8]
max = num[0]
for i in num:
    if i > max:
        max = i
print(max)
