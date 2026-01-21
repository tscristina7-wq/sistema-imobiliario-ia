from flask import Flask, render_template
from routes.imoveis import imoveis_bp

app = Flask(__name__)

# Blueprints
app.register_blueprint(imoveis_bp)

@app.route("/")
def dashboard():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()
