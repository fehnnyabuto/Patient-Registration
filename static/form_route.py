@app.route('/', methods=['GET', 'POST'])
def registration_form():
    if request.method == 'POST':
        name = request.form['name']
        # Capture other form fields similarly
        # Save the data to the database
        patient = Patient(name=name)
        db.session.add(patient)
        db.session.commit()

        # Send an email to the patient
        msg = Message('Patient Registration Successful', sender='your_email@example.com', recipients=[request.form['email']])
        msg.body = 'Thank you for registering. Your patient reference number is: ' + str(patient.id)
        mail.send(msg)

        return redirect('/success')
    return render_template('form.html')
