function solve(input) {

    let appRegex = /^\$app='[^'|"]+'$/
    let dataRegex = /^\$(controller|model|view)='[^'|"]+'&app='[^'|"]+'$/
    let output = {}
    let createdApps = []

    for (let i = 0; i < input.length; i++) {
        if(appRegex.test(input[i])){
            let app = input[i].split("='")[1]
            app = app.substr(0,app.length-1)
            createdApps.push(app)
            if(!(app in output)) {
                output[app] = {'controllers': [], 'models': [], 'views': []}
            }
        } else if(dataRegex.test(input[i])){
            let dataType = input[i].split('=')[0].substring(1)+'s'
            let dataValue = input[i].split("'")[1]
            let app = input[i].split("'")[3]
            if(!(app in output)) {
                if(dataType == 'controllers'){
                    output[app] = {'controllers': [dataValue], 'models': [], 'views': []}
                } else if(dataType == 'models'){
                    output[app] = {'controllers': [], 'models': [dataValue], 'views': []}
                } else{
                    output[app] = {'controllers': [], 'models': [], 'views': [dataValue]}
                }

            } else{
                if(dataType in output[app]) {
                    output[app][dataType].push(dataValue)
                } else{
                    output[app][dataType] = [dataValue]
                }
            }
        }
    }

    for (let obj in output) {

        if(!('controllers' in output[obj])){
            output[obj]['controllers'] = []
        }
        if(!('models' in output[obj])){
            output[obj]['models'] = []
        }
        if(!('views' in output[obj])){
            output[obj]['views'] = []
        }
        output[obj]['views'].sort()
        output[obj]['controllers'].sort()
        output[obj]['models'].sort()
        if(createdApps.indexOf(obj) == -1){
            delete(output[obj])
        }
    }

    let sortedOutput = {}
    let sorted = Object.keys(output).sort((a,b) => {
        if(output[a]['controllers'].length == output[b]['controllers'].length){
            return output[a].models.length - output[b].models.length
        }
        return output[b].controllers.length - output[a].controllers.length
    })
    sorted.forEach((value) => {
        sortedOutput[value] = output[value]
    })
    console.log(JSON.stringify(sortedOutput))
}