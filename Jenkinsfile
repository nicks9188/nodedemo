pipeline{
    agent any

    environment {
        CI = 'true' 
    }

    stages {
        stage ('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage ('Test') {
            steps {
                echo "No test specified" 
            }
        }
        stage ('Deliver') {
            steps {
                sh 'npm start'
            }
        }
        stage ('Stop') {
            steps {
                sh 'npm stop'
            }
        }
    }
}