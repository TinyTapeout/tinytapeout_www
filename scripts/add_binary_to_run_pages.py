#!/usr/bin/env python3
import os
import re

def convert_to_9_bit_binary(number):
    binary_str = bin(int(number))[2:]
    return '0' * (9 - len(binary_str)) + binary_str

def process_file(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()
    
    with open(file_path, 'w') as file:
        for line in lines:
            match = re.search(r'##\s*(\d+)', line)
            if match:
                number = match.group(1)
                binary_number = convert_to_9_bit_binary(number)
                line = re.sub(r'##\s*\d+', f'## number : 0b{binary_number}', line)
            file.write(line)

def main(directory_path):
    for root, _, files in os.walk(directory_path):
        for file in files:
            if file.endswith('.md'):  # Change the file extension as needed
                file_path = os.path.join(root, file)
                process_file(file_path)

if __name__ == '__main__':
    directory_path = 'content/runs/tt02/'  # Replace with the path to your directory
    main(directory_path)

