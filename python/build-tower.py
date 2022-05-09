# https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/python

def print_tower(tower):
    for floor in tower:
        print(floor)

def tower_builder(n):
    block_count = 1
    space_count = n - 1
    tower = []
    for i in range(n):
        tower.append((' ' * space_count) + ('*' * block_count) + (' ' * space_count))
        block_count+=2
        space_count-=1

    return tower
    
def main():
    print_tower(tower_builder(3))
    print_tower(tower_builder(6))

main()