properties([parameters([choice(choices:['BROWSER=chrome', 'BROWSER=firefox'], description: 'Please select the browser suitable for testing')])])

pipeline {
  agent any
  tools {nodejs "18.10.0"}
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
                 sh '${params.BROWSER} npm run hardcore'
            } else {
                bat '${params.BROWSER} npm run hardcore'
            }
       }
      }
    }
  }
}