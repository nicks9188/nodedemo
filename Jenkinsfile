pipeline{
    agent {
        docker {
            image 'node:8'
            args '-p 5000:3000'
        }
    }

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
            sh 'npm start'
        }
        stage ('Stop') {
            sh 'npm stop'
        }
    }
}