from flask import Flask, request, jsonify
from flask_cors import CORS
import boto3
import os
from botocore.exceptions import ClientError

app = Flask(__name__)
CORS(app)

DYNAMO_TABLE = os.environ.get('DYNAMO_TABLE', 'DataEntryTable')
AWS_REGION = os.environ.get('AWS_REGION', 'eu-north-1')

dynamodb = boto3.resource('dynamodb', region_name=AWS_REGION)
table = dynamodb.Table(DYNAMO_TABLE)

@app.route('/add', methods=['POST'])
def add_entry():
    data = request.get_json(force=True)
    if not data.get('name') or not data.get('email'):
        return jsonify({'message':'name and email required'}), 400
    item = {
        'id': data.get('id') or data['email'],
        'name': data['name'],
        'email': data['email']
    }
    try:
        table.put_item(Item=item)
    except ClientError as e:
        return jsonify({'message': str(e)}), 500
    return jsonify({'message':'saved'})

@app.route('/list', methods=['GET'])
def list_entries():
    try:
        resp = table.scan()
        items = resp.get('Items', [])
        # remove any internal keys if present
        return jsonify(items)
    except ClientError as e:
        return jsonify({'message': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
