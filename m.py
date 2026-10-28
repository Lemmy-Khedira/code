price = 1000000
good_credit = True
if good_credit:
    down_payment = 0.1 * price
else:
    down_payment = 0.2 * price
print(f"Down payment: ${down_payment}")
has_high_income = True
has_good_credit = False
if has_high_income and has_good_credit:
    print('Eligible for loan')
temperature = 30
if temperature > 35:
    print("it's a hot day")
else:
    print("its not a hot day")
name = "Lemmy Khedira"
if len(name) < 3:
    print("name must be atleast 3 characters")
elif len(name) > 50:
    print("name can be a maximum of 50 characters")
else:
    print("name looks good")
weight = input("weight: ")
unit = input("(L)bs or (K)g: ")
if unit.upper() == "L":
    converted = int(weight) * 0.45
    print(f"you are {converted}kilos")
else:
    converted = int(weight) / 0.45
    print(f"yuo are {converted}pounds")
