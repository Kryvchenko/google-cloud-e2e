pipeline {
  agent any
  tools {nodejs "18.10.0"}
  options([parameters([choice(choices: ['BROWSER=chrome', 'BROWSER=firefox'], description: 'Please select the browser suitable for testing', name: 'browser')])])
  stages {
    stage('preflight') {
      steps {
        script {
            if (isUnix()) {
                 sh 'node -v'
            } else {
                bat 'node -v'
            }
        }
      }
    }
    stage('build') {
      steps {
        script {
        if (isUnix()) {
                 sh 'npm install'
            } else {
                bat 'npm install'
            }
        }
      }
    }
    stage('test') {
      steps {
        script {
        if (isUnix()) {
                 sh '${params.browser} npm run hardcore'
            } else {
                bat '%params.browser% npm run hardcore'
            }
       }
      }
    }
  }
}