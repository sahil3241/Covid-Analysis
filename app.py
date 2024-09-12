from flask import Flask, render_template
import json

app = Flask(__name__)

# Load JSON data containing base64 images
with open('data.json') as f:
    image_data = json.load(f)['images']

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/statistics')
def index():
    # Extract image data from the JSON
    image1_base64 = image_data.get('image1', '')
    image2_base64 = image_data.get('image2', '')
    image3_base64 = image_data.get('image3', '')
    image4_base64 = image_data.get('image4', '')
    image5_base64 = image_data.get('image5', '')
    image6_base64 = image_data.get('image6', '')
    image7_base64 = image_data.get('image7', '')
    image8_base64 = image_data.get('image8', '')
    image9_base64 = image_data.get('image9', '')

    # Pass the image data to the template
    return render_template('index.html', 
                           image1=image1_base64, 
                           image2=image2_base64, 
                           image3=image3_base64, 
                           image4=image4_base64, 
                           image5=image5_base64, 
                           image6=image6_base64, 
                           image7=image7_base64, 
                           image8=image8_base64, 
                           image9=image9_base64)

@app.route('/deaths')
def deathRecord():
    return render_template('deathRecord.html')

@app.route('/vaccines')
def vaccine():
    return render_template('vaccine.html')

@app.route('/adminlogin')
def admin():
    return render_template('adminLogin.html')

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
