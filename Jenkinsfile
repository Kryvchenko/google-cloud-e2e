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
     stage('choice') {
      steps {
        script {
           properties([
                parameters([
                    choice (
                        choices: ['chrome', 'firefox'], 
                        name: 'BROWSER_SELECTION',
                        description: 'Please select the browser suitable for testing'
                          )]
                        )]
                    )
        }
      }
    }
    stage('test') {
      steps {
        script {
        if (isUnix()) {
                 sh 'BROWSER=${browser} npm run hardcore'
            } else {
                bat 'BROWSER=%browser% npm run hardcore'
            }
       }
      }
    }
  }
}


  properties([
    parameters([
      choice(
        choices: ['BROWSER=chrome', 'BROWSER=firefox'], 
        description: 'Please select the browser suitable for testing', 
        name: 'browser')]
        )]
        )