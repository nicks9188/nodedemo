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
                sh './jenkins/scripts/test.sh' 
            }
        }
        stage ('Deliver') {
            sh './jenkins/scripts/deliver.sh'
            input message: 'Finished using the web site? (Click "Proceed" to continue)'
            sh './jenkins/scripts/kill.sh'
            echo "Bye bye"
        }
    }
}