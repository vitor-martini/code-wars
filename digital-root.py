# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python

def digital_root(n):
    result = 0
    for i in str(n):
        result += int(i)
    
    return digital_root(result) if len(str(result)) > 1 else result
    
def main():
    print(digital_root(942))

main()