from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


# Index route
@app.route('/')
def index():
    return render_template('index.html')


# Login route
@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/client_dashboard')
def client_dashboard():
    return render_template('client_dashboard.html')


@app.route('/admin')
def admin():
    return render_template('admin.html')


@app.route('/service_provider_dashboard')
def service_provider_dashboard():
    return render_template('service_provider_dashboard.html')


@app.route('/slot_booking')
def slot_booking():
    return render_template('slot_booking.html')


if __name__ == '__main__':
    app.run(debug=True)
