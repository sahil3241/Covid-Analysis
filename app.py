from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Read the HTML content from the converted notebook file
    with open('a4.html', 'r') as file:
        html_content = file.read()
        image_paths = ["path/to/image1.png", "path/to/image2.png"]

    # Pass the HTML content to the template for rendering
    return render_template('index.html', a4_html=html_content)

if __name__ == '__main__':
    app.run(debug=True)
