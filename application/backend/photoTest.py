import sys

print("Made it to photoTest.py")
print("Data passed to the script:\n")
print(sys.argv[1])
print("Attempting ot open the file...")
print(open(sys.argv[1]))

"""
photo = open(sys.argv[1])
print(photo)
photo.close()
"""
