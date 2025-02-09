from main import verificarURL
from flask import Flask, jsonify, Response,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/<token>/", methods=['GET'])
def hello_world(token):
    url = request.args.get('url')
    print(url)
    print("-----------------------------")
    print(token)
    resposta = verificarURL(token,url)
    print(resposta)
    return resposta
    

app.run(debug=True,port=80)