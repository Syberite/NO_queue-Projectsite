from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Index route
@app.route('/')
def index():
    return render_template('index.html')

# Login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Handle login logic here (e.g., authenticate user)
        username = request.form['username']
        password = request.form['password']
        # Add authentication logic
        return redirect(url_for('index'))  # Redirect to index after login
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
