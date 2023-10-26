from flask import *
Flask = Flask(__name__,template_folder='templates')

@Flask.route("/hai/<name>")
def Hai(name):
    return render_template("index.html")


if __name__=="__main__":
    Flask.run(debug=True)


