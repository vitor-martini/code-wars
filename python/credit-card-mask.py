# https://www.codewars.com/kata/5412509bd436bd33920011bc/python

def maskify(cc):
    masked_string = ("#" * (len(cc) - 4)) + cc[-4:]
    return masked_string
    
def main():
    print(maskify("Nananananananananananananananana Batman!"))

main()
    