pipeline {
    agent any

    stages {
        stage('Git download') {
            steps {
                git 'https://github.com/Kryvchenko/google-cloud-calculator-e2e.git'
            }
        }
        stage('Install') {
            steps {
                sh encoding: 'ASCII', returnStatus: true, script: 'npm install'
            }
        }
        stage('Run e2e test suites with browser') {
            steps {
                sh encoding: 'ASCII', returnStatus: true, script: 'npm run test'
            }
        }
    }
}