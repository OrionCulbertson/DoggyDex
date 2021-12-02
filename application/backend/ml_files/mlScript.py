import numpy as np
import cv2
from keras.applications.resnet50 import ResNet50, preprocess_input
from keras.preprocessing import image
from keras.layers import GlobalAveragePooling2D, Dense
from keras.models import Sequential

import sys

inputFilePath = sys.argv[1]
returnDataFilePath = "./ml_files/mlReturnData.json"

# load list of supported dog names
with open("./ml_files/supportedDogBreeds.txt", "r") as file:
    dog_names = file.read().splitlines()

""" # For creating the list of supported dogs in separate file dogNames.txt
f = open("./ml_files/supportedDogBreeds.txt", "w")
for entry in dog_names:
    f.write(entry + "\n")
f.close()
"""

# extract pre-trained face detector
face_cascade = cv2.CascadeClassifier('./ml_files/haarcascade_frontalface_alt.xml')

# returns "True" if a human face is detected in image stored at img_path
def face_detector(img_path):
    img = cv2.imread(img_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray)
    return len(faces) > 0

# define ResNet50 model
ResNet50_model = ResNet50(weights='imagenet')

def path_to_tensor(img_path):
    # loads RGB image as PIL.Image.Image type
    img = image.load_img(img_path, target_size=(224, 224))
    # convert PIL.Image.Image type to 3D tensor with shape (224, 224, 3)
    x = image.img_to_array(img)
    # convert 3D tensor to 4D tensor with shape (1, 224, 224, 3) and return 4D tensor
    return np.expand_dims(x, axis=0)

def ResNet50_predict_labels(img_path):
    # returns prediction vector for image located at img_path
    img = preprocess_input(path_to_tensor(img_path))
    return np.argmax(ResNet50_model.predict(img))

### returns "True" if a dog is detected in the image stored at img_path
def dog_detector(img_path):
    prediction = ResNet50_predict_labels(img_path)
    return ((prediction <= 268) & (prediction >= 151))

# Obtain bottleneck features
bottleneck_features = np.load('./ml_files/DogResnet50Data.npz')
train_Resnet50 = bottleneck_features['train']

# Model architecture
Resnet50_model = Sequential()
Resnet50_model.add(GlobalAveragePooling2D(input_shape=train_Resnet50.shape[1:]))
Resnet50_model.add(Dense(133, activation='softmax'))

# Load pre-trained model
Resnet50_model.load_weights('./ml_files/weights.best.Resnet50.hdf5')

## originally from extract_bottleneck_features.py
def extract_Resnet50(tensor):
    return ResNet50(weights='imagenet', include_top=False).predict(preprocess_input(tensor))

### A function that takes a path to an image as input
### and returns the predicted_vector of dog breeds that are predicted by the model.
def Resnet50_predict_breed_dev(img_path):
    '''
    This function takes the file path of an image and returns the possibility values predicted by the Resnet-50 transfer learning CNN model
    
    Input
    img_path: (str) path of the image
    Output:
    predicted_vector: (float arr) an array of 133 possiblity values returned from the dog breed predictor
    '''

    # extract bottleneck features
    bottleneck_feature = extract_Resnet50(path_to_tensor(img_path))
    # obtain predicted vector
    predicted_vector = Resnet50_model.predict(bottleneck_feature)
    # return dog breed that is predicted by the model
    return predicted_vector

# Main classification algorithm
def human_dog_breed(img_path):
    '''
    This function first detects if there's a human or a dog in the image, then passes 
    the image on to the dog breed predictor model
    
    Input:
    img_path: (str) path of the image
    Output:
    None
    '''

    humanDetected = face_detector(img_path)
    
    # case 1: if dog is detected in the image, identify breed
    if humanDetected or dog_detector(img_path):
        pred_arr = Resnet50_predict_breed_dev(img_path)
        confidenceScore = np.clip(np.argmax(pred_arr), 40, 100)
        predictedDogBreed = dog_names[confidenceScore].replace("_", " ")

        #Creating JSON object in separate file mlReturnData.json
        f = open(returnDataFilePath, "w")
        f.write("{\n\t\"humanPresent\": ")
        if (humanDetected):
            f.write("1,\n")
        else:
            f.write("0,\n")
        f.write("\t\"breedName\": \"" + predictedDogBreed + "\",\n\t\"confidenceScore\": " + str(confidenceScore) + "\n}\n")
        f.close()

        #Printout of mlReturnData.json to use in HTTP response in Express
        with open(returnDataFilePath, "r") as json_data:
            for entry in json_data:
                print(entry, end="")
        
        #Deleting data in mlReturnData.json file
        f = open(returnDataFilePath, "w")
        f.write("")

    # case 3: if no human or dog is detected in the image, print empty JSON
    else:
        print("{\n}\n")

## Classify the input file
human_dog_breed(inputFilePath)
