# DoggyDex Dev Instructions

## Front-end React Application

Open terminal and run:

```cd client-end/```
```npm install```
```npm start```

## Back-end Node.js Application

Open another terminal and run:

```cd backend/```
```npm install```
```node app.js```

## Python Setup for Dog Breed Classification

I would recommend installing Anaconda for Python environment management, and these instructions will guide you through setup assuming you are using Anaconda, though there are other ways out there to manage python environments should you want to use them.

You can find documentation on installing Anaconda here:
https://docs.anaconda.com/anaconda/install/index.html

### Setup instructions

1. Open a shell instance and navigate to the ml_files folder.
        `cd backend/ml_files/`

2. Create and activate a new environment
	- __Mac__ (to install with __GPU support__, change `requirements/dog-mac.yml` to `requirements/dog-mac-gpu.yml`):
	```
	conda env create -f requirements/dog-linux.yml
	conda activate dog-project
	```
	- __Windows__ (to install with __GPU support__, change `requirements/dog-windows.yml` to `requirements/dog-windows-gpu.yml`):  
	```
	conda env create -f requirements/dog-windows.yml
	activate dog-project
	```

	- If the above commands throw errors, try this __alternative__ method:
	```
	conda create --name dog-project python=3.5
	conda activate dog-project
	pip install -r requirements/requirements.txt
	```
3. Switch [Keras backend](https://keras.io/backend/) to TensorFlow.
	- __Linux__ or __Mac__: 
		```
		KERAS_BACKEND=tensorflow python -c "from keras import backend"
		```
	- __Windows__: 
		```
		set KERAS_BACKEND=tensorflow
		python -c "from keras import backend"
		```

4. After the installation of all dependencies is complete, you are all done! Before attempting to classify photos with DoggyDex, make sure that the conda environment 'dog-project' has been activated. If you have followed these instructions exactly, it should be. Once it is, you are ready to go!