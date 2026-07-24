# Uncomment the imports below before you add the function code
import requests
import os
from dotenv import load_dotenv

load_dotenv()
print("🔥 restapi.py LOADED")
backend_url = os.getenv(
    'backend_url', default="http://localhost:3030")
sentiment_analyzer_url = os.getenv(
    'sentiment_analyzer_url',
    default="http://localhost:5050/")


# Add code for get requests to back end
def get_request(endpoint, **kwargs):
    
    params = ""
    if kwargs:
        for key, value in kwargs.items():
            params += key + "=" + str(value) + "&"
            
    request_url = backend_url + endpoint
    
    if params:
        request_url += "?"+params

    print("url inside get_reuest ",request_url)
    try:
        # Call get method of requests library with URL and parameters
        
        response = requests.get(request_url)
    
        return response.json()

    except requests.exceptions.RequestException:
        # If any error occurs
        print("Network exception occurred")
        return []


# Add code for retrieving sentiments
def analyze_review_sentiments(text):
    request_url = sentiment_analyzer_url+"analyze/"+text
    try:
        # Call get method of requests library with URL and parameters
        response = requests.get(request_url)
        return response.json()

    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        print("Network exception occurred")


def post_review(data_dict):
    request_url = backend_url + '/insert_review'
    try:
        response = requests.post(request_url, json=data_dict)
        print(response.json())
        return response.json()

    except requests.exceptions.RequestException:
        print("Network exception occured")
