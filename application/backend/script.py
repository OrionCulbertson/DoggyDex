import sys

breedName = "Border Collie"
confidenceScore = "0.9"

f = open("mlReturnData.json", "w")
f.write("{\n\t\"breedName\": \"" + breedName + "\",\n\t\"confidenceScore\": " + confidenceScore + "\n}\n")
f.close()

with open("mlReturnData.json", "r") as json_data:
	for entry in json_data:
		print(entry, end="")

#Deleting data in mlReturnData.json
f = open("mlReturnData.json", "w")
f.write("")
