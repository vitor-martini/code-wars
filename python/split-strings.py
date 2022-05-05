# https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python

def solution(s):

    result = []
    i = 0

    if len(s) % 2 != 0:
        s+='_'
    
    while i < len(s):
        result.append(s[i] + s[i+1])
        i+=2

    return result
    
def main():
    print(solution('abc'))
    print(solution('abcdef'))

main()