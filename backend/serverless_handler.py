# Optional AWS Lambda handler using AWS Lambda's container image or AWS Lambda + API Gateway with AWS Lambda Powertools
# If you prefer using Lambda with Flask you can use 'awsgi' to adapt WSGI to Lambda:
# pip install awsgi
#
# Example:
#
# import awsgi
# from app import app
#
# def lambda_handler(event, context):
#     return awsgi.response(app, event, context)
#
# Note: This file is a helper template - configure your Lambda env and layers accordingly.
