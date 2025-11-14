# Data Entry App (React + Flask + DynamoDB)

This project contains:
- frontend/ : React app (create-react-app)
- backend/  : Flask API that stores entries into AWS DynamoDB
- deploy_steps.txt : step-by-step AWS CLI + Amplify + ECS + Lambda instructions

Environment variables:
- For backend:
  - AWS_REGION (default us-east-1)
  - DYNAMO_TABLE (default DataEntryTable)
- For frontend:
  - REACT_APP_API_BASE (set to your API Gateway endpoint or backend URL)

