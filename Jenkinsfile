pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t tech2102-final-project .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f tech2102-react-app || true'
                sh 'docker run -d -p 3000:3000 --name tech2102-react-app tech2102-final-project'
            }
        }
    }
}