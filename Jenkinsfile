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
        timeout(1) {
                node {
                    sh 'npm stop'
                }
        }

        stage ('Timeout') {
            timeout(1) {
                node {
                    sh 'npm stop'
                }
            }
        }
        stage ('Stop') {
            steps {
                sh 'npm stop'
            }
        }
    }
}