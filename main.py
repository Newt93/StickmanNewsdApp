from flask import Flask, render_template
from markupsafe import escape

app = Flask(__name__)


# html routing to index
@app.route('/')
def index():
  return escape(render_template('index.html'))

app.run(host='0.0.0.0', port=81)
