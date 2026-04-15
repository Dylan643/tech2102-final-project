pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --watchAll=false'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t tech2102-final-project .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker rm -f tech2102-react-app || exit 0'
                bat 'docker run -d -p 3000:3000 --name tech2102-react-app tech2102-final-project'
            }
        }
    }
}