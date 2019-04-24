name = input("What is the txt file name? ")
#varname = input("What is the variable name?")
lines = [line.rstrip('\n') for line in open(name, encoding="UTF-8")]

print(lines)
