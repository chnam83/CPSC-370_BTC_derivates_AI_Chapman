from flask import Blueprint

welcome_blueprint = Blueprint('welcome', __name__)

@welcome_blueprint.route('/')
def welcome():
    return "Welcome to the Flask App!"
