name = input("What is the txt file name? ")
lines = [line.rstrip('\n') for line in open(name, encoding="UTF-8")]
print(lines)
