![doggyDexLogo](https://user-images.githubusercontent.com/70170069/148694454-6e3914e5-89f7-48b2-a119-dbd04be2522e.png)

# DoggyDex

  Have you ever been out on a walk and seen a really cool dog, but haven't known what breed it is to find out more information on it? DoggyDex aims to help solve this in a fun way! The goal with DoggyDex is to allow users to take a picture of a dog, have our ML classification system recognize it, and then present the user with information on that dog breed. This dog breed then gets logged in the user's DoggyDex, and the goal is for users to fill their DoggyDex with all of the different dogs that they can find.
 
  DoggyDex is designed to be a mobile-oriented web app that allows users to easily take a picture of a dog in the moment and have it recognized.
  
# Current Features
 - Log In & Create Account systems
 - Photo Upload and Breed Classification
 - Learning Mode DoggyDex
    - This allows any user to browse a full DoggyDex containing our currently supported dog breeds
 - Personal DoggyDex
    - Any user with an account gets on of these. It starts out empty and as the user finds dogs it fills up their personal DoggyDex

# Current Bugs
 - Installing and running Tensorflow on the AWS EC2 instance the app is hosted on has been an issue, so the live website's recognition system is broken
    - It can be built and ran locally though, following the instructions in the `DoggyDex/application` folder
 - Upon finding a new Dog Breed, logged in user's dog breeds aren't automatically updated
 - User dog breed list needs to be converted to Redux state storage
 - Needs to be converted to an HTML5 secure website

# Future Features 
 - Wider selection of dog breeds
 - Dog park finder
 - Gamification and scoring system
 - Dog photo feed
 - Dog play date board
 - Lost dogs board

# Software Stack
 - ReactJS, ExpressJS, NodeJS, MongoDB
 - Hosted with AWS EC2 and Nginx

# User Interface
## Home Screen and Menu
<img src="https://user-images.githubusercontent.com/70170069/148695769-ef446c51-6d9b-4f0b-b028-5e587abc0768.png" alt="Home Screen" width="300"/> <img src="https://user-images.githubusercontent.com/70170069/148695794-c4d9e1d1-9926-4903-a309-3669451aae18.png" alt="Menu" width="300"/>
## DoggyDex Screens
<img src="https://user-images.githubusercontent.com/70170069/148695851-47ae3ed6-ae7b-4b19-99c0-0d34ccf53d5c.png" alt="Learning Mode DoggyDex" width="300"/> <img src="https://user-images.githubusercontent.com/70170069/148695862-087d0c0a-9ac4-4f01-a40f-d59b15e2590a.png" alt="Personal DoggyDex" width="300"/> <img src="https://user-images.githubusercontent.com/70170069/148695865-6eb816c0-0dc8-4d94-a36e-0e3ebfd8ff11.png" alt="DoggDex Entry" width="300"/>

## User Account Screens
<img src="https://user-images.githubusercontent.com/70170069/148695813-278f298b-1354-4b16-8113-523966f4b5fb.png" alt="Logged Out User Profile" width="300"/> <img src="https://user-images.githubusercontent.com/70170069/148695815-2c7d0d6f-7e8c-41d8-965a-056fe122c44c.png" alt="Log In Screen" width="300"/> <img src="https://user-images.githubusercontent.com/70170069/148695821-0fa55caa-ad3d-4b4a-8fd2-48dc337c91ff.png" alt="Logged In User Profile" width="300"/> <img src="https://user-images.githubusercontent.com/70170069/148695828-861d2de0-e1e4-485a-9f59-9533bf74af79.png" alt="Create Account Screen" width="300"/>

---
## Created by:

| Developer Name 			| GitHub Username |
|    :---:     			  |     :---:       |
| Orion Culbertson    | orionculbertson |
| Miguel Galvan      	| mgacoder        |
| Grayson Dew      	  |  Dewtopia       |
| Rigo Perez      		|  Rig06          |
| Kristopher Phillips | krispy1994      |

Link to project: http://doggydex.xyz/
