# https://www.codewars.com/kata/526571aae218b8ee490006f4/train/python

def count_bits(n):
    result = str(bin(n)).replace('0b', '').count('1')
    return result
    
def main():
    print(count_bits(1234))

main()